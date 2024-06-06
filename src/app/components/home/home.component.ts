import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { AddButtonComponent } from '../add-button/add-button.component';
import { CitiesGridComponent } from '../cities-grid/cities-grid.component';
import { CitiesListComponent } from '../cities-list/cities-list.component';
import { HeaderComponent } from '../header/header.component';
import { CitiesService, City } from '../../services/cities.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    RouterModule,
    HeaderComponent,
    CitiesListComponent,
    CitiesGridComponent,
    AddButtonComponent,
  ],
  providers: [CitiesService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  cities: City[] = [];
  isFavorite!: boolean;
  constructor(private service: CitiesService) {
    this.service.getAllCities().then((cities: City[]) => {
      this.cities = cities;
    });
  }
  headerText = 'Список городов';
  isList = true;
  isGrid = false;

  setListView() {
    this.isList = true;
    this.isGrid = false;
  }

  setGridView() {
    this.isList = false;
    this.isGrid = true;
  }
}
