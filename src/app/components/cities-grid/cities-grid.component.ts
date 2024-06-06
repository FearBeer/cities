import { Component, Input } from '@angular/core';
import { CitiesService, City } from '../../services/cities.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-cities-grid',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './cities-grid.component.html',
  styleUrl: './cities-grid.component.scss',
})
export class CitiesGridComponent {
  @Input() cities!: City[];
  constructor(private service: CitiesService) {}

  favoriteToggle(id: number) {
    this.cities[id].favorite = !this.cities[id].favorite;
    this.service.favoriteToggle(id);
  }
}
