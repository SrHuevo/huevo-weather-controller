import { Component } from '@angular/core'
import {WeatherService} from 'huevo-weather-model/dist/weather.service'
import {CurrentWeather} from 'huevo-weather-model/dist/dto/current-weather.dto'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  icon: string;
  temperature: string;
  humidity: string;
  windSpeed: string;

  constructor(public weatherService: WeatherService) {
    this.setWeather();
  }

  async setWeather() {
    const granadaCurrentWeather: CurrentWeather = (await this.weatherService.getCurrentWeatherByCity('Granada', 'ES')).data

    this.icon = granadaCurrentWeather.weather[0].icon
    this.temperature = granadaCurrentWeather.main.temp.toString()
    this.humidity = granadaCurrentWeather.main.humidity.toString()
    this.windSpeed = granadaCurrentWeather.wind.speed.toString()
  }
}
