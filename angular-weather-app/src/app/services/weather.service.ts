import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
	private endPoint: string = environment.WeatherConfig.EndPoint;
	private APIKey: string = environment.WeatherConfig.ClientSecret;

  constructor(private HttpClient: HttpClient)
  {

  }

  SearchWeather(city: string)
  {
	return this.HttpClient.get(`${this.endPoint}?key=${this.APIKey}&q=${city}&aqi=no&alerts=no`);
  }
}
