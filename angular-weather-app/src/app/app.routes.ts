import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GeolocationComponent } from './components/geolocation/geolocation.component';

export const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		title: 'Home'
	},
	{
		path: 'home',
		component: HomeComponent,
		title: 'Home'
	}
];

export default routes;