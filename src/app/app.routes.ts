import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateCityFormComponent } from './components/create-city-form/create-city-form.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Города' },
  {
    path: 'create-city',
    component: CreateCityFormComponent,
    title: 'Создание города',
  },
];
