import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
	private endPoint: string = environment.GeolocationConfig.EndPoint;
	private APIKey: string = environment.GeolocationConfig.ClientSecret;
	private headers: HttpHeaders;
	Location: any;

  constructor(private HttpClient: HttpClient) {
	this.headers = new HttpHeaders({ 
		'x-rapidapi-key': this.APIKey,
		'x-rapidapi-host': this.endPoint })
  }

  GetGeolocation(cityName: string): Observable<any>
  {
	return this.HttpClient
	.get<any>(`${this.endPoint}/v1/geo/cities?namePrefix=${cityName}`, {headers: this.headers});
  }
}
