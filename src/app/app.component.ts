import {Component, OnInit} from '@angular/core'
import {WeatherService} from 'huevo-weather-model/dist/weather.service'
import {CurrentWeather} from 'huevo-weather-model/dist/dto/current-weather.dto'

interface City {
  name: string;
  icon: string;
  temperature: string;
  humidity: string;
  windSpeed: string;
}

declare var ol: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  city: City
  latitude: number = 40.420300;
  longitude: number = -3.693162;
  map: any;

  constructor(public weatherService: WeatherService) {
  }

  ngOnInit() {
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([this.longitude, this.latitude]),
        zoom: 8
      })
    });

    this.map.on('click', (args) => {
      var [lon, lat] = ol.proj.transform(args.coordinate, 'EPSG:3857', 'EPSG:4326');

      this.setCityWeather(lon, lat)
    });
  }

  async setCityWeather(lon, lat) {
    const currentWeather: CurrentWeather = (await this.weatherService.getCurrentWeatherByCoords(lat, lon)).data.list[0]
    this.city = {
      name: currentWeather.name,
      icon: currentWeather.weather[0].icon,
      temperature: currentWeather.main.temp.toString(),
      humidity: currentWeather.main.humidity.toString(),
      windSpeed: currentWeather.wind.speed.toString(),
    }

  }

}
