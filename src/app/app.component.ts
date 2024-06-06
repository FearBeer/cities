import { Component, inject } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CitiesService } from './services/cities.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  headerText!: string;
  router: Router = inject(Router);
  citiesService: CitiesService = inject(CitiesService);

  constructor() {
    this.router.events.subscribe(() => {
      if (this.router.url === '/create-city') {
        this.headerText = 'Создание города';
      } else {
        this.headerText = 'Список городов';
      }
    });
  }
}
