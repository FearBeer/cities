import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CitiesListComponent } from './components/cities-list/cities-list.component';
import { CitiesGridComponent } from './components/cities-grid/cities-grid.component';
import { NgClass, NgIf } from '@angular/common';
import { CitiesService, City } from './services/cities.service';
import { AddButtonComponent } from './add-button/add-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    RouterOutlet,
    HeaderComponent,
    CitiesListComponent,
    CitiesGridComponent,
    AddButtonComponent,
  ],
  providers: [CitiesService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  cities: City[] = [];
  constructor(private service: CitiesService) {}
  title = 'cities';
  text = 'Список городов';
  isList = true;
  isGrid = false;

  ngOnInit() {
    this.cities = this.service.getCities();
  }

  setListView() {
    this.isList = true;
    this.isGrid = false;
  }

  setGridView() {
    this.isList = false;
    this.isGrid = true;
  }

  getCities() {
    this.cities = this.service.getCities();
  }

  addCity() {
    this.service.addCity('name', 'descr', 'image');
  }
}
