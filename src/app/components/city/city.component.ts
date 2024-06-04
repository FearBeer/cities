import { Component, Input, OnInit } from '@angular/core';
import { CitiesService, City } from '../../services/cities.service';

@Component({
  selector: 'app-city',
  standalone: true,
  providers: [],
  templateUrl: './city.component.html',
  styleUrl: './city.component.scss',
})
export class CityComponent {
  @Input() city!: City;

  constructor(private service: CitiesService) {}

  favoriteToggle(id: number) {
    this.service.favoriteToggle(id);
  }
}
