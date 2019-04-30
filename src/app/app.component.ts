import { Component } from '@angular/core'
import {WeatherService} from 'huevo-weather-model/dist/weather.service'
import {CurrentWeather} from 'huevo-weather-model/dist/dto/current-weather.dto'

interface City {
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
export class AppComponent {
  almeria: City
  granada: City
  malaga: City
  jaen: City
  cordoba: City
  sevilla: City
  huelva: City
  cadiz: City
  city: City

  constructor(public weatherService: WeatherService) {
    this.setWeathers();
  }

  async setWeathers() {
    this.almeria = await this.setWeather('almeria')
    this.granada = await this.setWeather('granada')
    this.malaga = await this.setWeather('malaga')
    this.jaen = await this.setWeather('jaen')
    this.cordoba = await this.setWeather('cordoba')
    this.sevilla = await this.setWeather('sevilla')
    this.huelva = await this.setWeather('huelva')
    this.cadiz = await this.setWeather('cadiz')
  }

  async setWeather(city) {
    const currentWeather: CurrentWeather = (await this.weatherService.getCurrentWeatherByCity(city, 'ES')).data
    return {
      icon: currentWeather.weather[0].icon,
      temperature: currentWeather.main.temp.toString(),
      humidity: currentWeather.main.humidity.toString(),
      windSpeed: currentWeather.wind.speed.toString(),
    } as City
  }

  getMean() {
    const cities = [this.almeria, this.granada, this.malaga, this.jaen, this.cordoba, this.sevilla, this.huelva, this.cadiz]

    return cities.reduce((mean, city) => {
      return mean + Number(city.temperature) / cities.length
    }, 0)
  }


  latitude: number = 40.420300;
  longitude: number = -3.693162;

  map: any;

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

    this.map.on('click', function (args) {
      var [lon, lat] = ol.proj.transform(args.coordinate, 'EPSG:3857', 'EPSG:4326');

      this.setCityWeather(lon, lat)
    });
  }

  async setCityWeather(lon, lat) {
    const currentWeather: CurrentWeather = (await this.weatherService.getCurrentWeatherByCoords(lat, lon)).data
    this.city = {
      icon: currentWeather.weather[0].icon,
      temperature: currentWeather.main.temp.toString(),
      humidity: currentWeather.main.humidity.toString(),
      windSpeed: currentWeather.wind.speed.toString(),
    }

  }

}
