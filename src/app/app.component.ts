import { Component } from '@angular/core'
import {WeatherService} from 'huevo-weather-model/dist/weather.service'
import {CurrentWeather} from 'huevo-weather-model/dist/dto/current-weather.dto'

interface City {
  icon: string;
  temperature: string;
  humidity: string;
  windSpeed: string;
}

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


}
