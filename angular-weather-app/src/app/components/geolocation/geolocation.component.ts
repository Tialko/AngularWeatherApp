import { Component, Input, OnInit } from '@angular/core';
import { GeolocationService } from '../../services/geolocation.service';

@Component({
  selector: 'geolocation',
  standalone: true,
  imports: [],
  templateUrl: './geolocation.component.html',
  styleUrl: './geolocation.component.scss'
})
export class GeolocationComponent implements OnInit {
	@Input() geolocationData: any;

	constructor(private geolocationService: GeolocationService) {}

	ngOnInit(): void {
		console.log(this.geolocationData);
		this.geolocationService
		.GetGeolocation("Porto")
		.subscribe(data => {
			// this.geolocationData = data;
			console.log(data);
		})
	}
}
