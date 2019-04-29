import {Component, Input, OnInit} from '@angular/core'

@Component({
  selector: 'huevo-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  @Input() icon
  @Input() temperature
  @Input() humidity
  @Input() windSpeed

  constructor() { }

  ngOnInit() {
  }

}
