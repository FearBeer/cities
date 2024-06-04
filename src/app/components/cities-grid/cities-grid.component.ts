import { Component, Input } from '@angular/core';
import { CitiesService, City } from '../../services/cities.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-cities-grid',
  standalone: true,
  imports: [NgFor],
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
