import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CitiesService } from '../../services/cities.service';
import { AddButtonComponent } from '../add-button/add-button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-city-form',
  standalone: true,
  imports: [AddButtonComponent, RouterLink, ReactiveFormsModule],
  templateUrl: './create-city-form.component.html',
  styleUrl: './create-city-form.component.scss',
})
export class CreateCityFormComponent {
  headerText = 'Создание города';
  createCityForm = new FormGroup({
    name: new FormControl('Рязань'),
    description: new FormControl('В песочне часто воняет и грибы с глазами'),
    imageLink: new FormControl(
      'https://media.istockphoto.com/id/1508052781/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B2%D0%BE%D1%81%D1%85%D0%BE%D0%B4-%D1%81%D0%BE%D0%BB%D0%BD%D1%86%D0%B0-%D0%BD%D0%B0%D0%B4-%D0%BA%D0%BE%D0%BB%D0%BE%D0%BA%D0%BE%D0%BB%D1%8C%D0%BD%D0%B5%D0%B9-%D1%80%D1%8F%D0%B7%D0%B0%D0%BD%D1%81%D0%BA%D0%BE%D0%B3%D0%BE-%D0%BA%D1%80%D0%B5%D0%BC%D0%BB%D1%8F-%D1%83%D1%81%D0%BF%D0%B5%D0%BD%D1%81%D0%BA%D0%BE%D0%B3%D0%BE-%D1%81%D0%BE%D0%B1%D0%BE%D1%80%D0%B0.jpg?s=612x612&w=0&k=20&c=KyUbzOZUFfDuEcfSvqR9hq7DXqNOwFLkygDzGVl06AQ='
    ),
  });

  constructor(public service: CitiesService) {}

  createCity() {
    this.service.addCity(
      this.createCityForm.value.name ?? '',
      this.createCityForm.value.description ?? '',
      this.createCityForm.value.imageLink ?? ''
    );
  }
}
