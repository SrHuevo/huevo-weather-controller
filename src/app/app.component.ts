import { Component } from '@angular/core';
import {WeatherService} from 'huevo-weather-model/dist/weather.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'controller';

  constructor(public weatherService: WeatherService) {
    this.setWeather();
  }

  async setWeather() {
    const granadaCurrentWeather = await this.weatherService.getCurrentWeatherByCity('Granada', 'ES')
    this.title = granadaCurrentWeather.data.main.temp.toString()
  }
}
