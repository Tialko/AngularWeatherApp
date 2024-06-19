import { Component, inject } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherComponent } from '../weather/weather.component';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GeolocationComponent } from '../geolocation/geolocation.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [WeatherComponent, CommonModule, GeolocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
	weatherData: any;
	showLocation: boolean = false;

	constructor(private weatherService: WeatherService) {

	}

	searchWeather(event: Event, cityName: string) {
		event.preventDefault();
		console.log(cityName);
		if(cityName != "") {
			this.weatherService.SearchWeather(cityName).subscribe(x => {
				this.weatherData = x;
				console.log(x);
			});
		}
	}

	toogleLocation() {
		this.showLocation = !this.showLocation;
	}
}
