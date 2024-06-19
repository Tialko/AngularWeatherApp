import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'weather',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent {
	@Input() weatherData: any;
	showCelcius: boolean = true;

	toogleUnits() {
		this.showCelcius = !this.showCelcius;
	}

	getTemperature(): number {
		return this.showCelcius ? this.weatherData?.current?.temp_c : this.weatherData?.current?.temp_f;
	}
}
