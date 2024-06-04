import { Component, Input } from '@angular/core';
import { CitiesService, City } from '../../services/cities.service';
import { NgFor } from '@angular/common';
import { CityComponent } from '../city/city.component';

@Component({
  selector: 'app-cities-grid',
  standalone: true,
  imports: [NgFor, CityComponent],
  templateUrl: './cities-grid.component.html',
  styleUrl: './cities-grid.component.scss',
})
export class CitiesGridComponent {
  @Input() cities!: City[];
  constructor(private service: CitiesService) {}

  favoriteToggle(id: number) {
    this.service.favoriteToggle(id);
    console.log(this.cities[id]);
  }
}
