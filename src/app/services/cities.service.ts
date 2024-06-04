import { Injectable } from '@angular/core';

export interface City {
  id: number;
  image: string;
  name: string;
  description: string;
  favorite: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  private cities: City[] = [
    {
      id: 0,
      name: 'Москва',
      description: 'Столица России, город федерального значения',
      image: 'https://screenshots.enkod.tech/ilya_novikovG6KIVEp3v160xCMY.png',
      favorite: true,
    },
    {
      id: 1,
      name: 'Санкт-Петербург',
      description: 'Второй по численности населения город России',
      image: 'https://screenshots.enkod.tech/ilya_novikovW7s6gLwAGDjaJbNL.png',
      favorite: false,
    },
    {
      id: 2,
      name: 'Новосибирск',
      description: 'Третий по численности населения город России',
      image: 'https://screenshots.enkod.tech/ilya_novikovHyQpb3vrjFvTfzJJ.png',
      favorite: false,
    },
    {
      id: 3,
      name: 'Екатеринбург',
      description: 'Город-миллионник в России. Тоже красивый город',
      image: 'https://screenshots.enkod.tech/ilya_novikovvUvY8ocQ8yIQg6Gi.png',
      favorite: false,
    },
    {
      id: 4,
      name: 'Нижний Новгород',
      description: 'Город в центральной России. Красивый город.',
      image: 'https://screenshots.enkod.tech/ilya_novikovHWEuBOtzexaZ3VQs.png',
      favorite: false,
    },
    {
      id: 5,
      name: 'Челябинск',
      description:
        'Город в Российской Федерации, седьмой по количеству жителей',
      image: 'https://screenshots.enkod.tech/ilya_novikovvjgSDr7xZl6A2UmH.png',
      favorite: false,
    },
    {
      id: 6,
      name: 'Казань',
      description: 'Город в России, столица Республики Татарстан.',
      image: 'https://screenshots.enkod.tech/ilya_novikovc2dbr7KvIJ2dknlZ.png',
      favorite: false,
    },
  ];
  constructor() {}
  getCities() {
    return this.cities;
  }
  addCity(name: string, description: string, image: string) {
    const length = this.cities.length;
    if (length === 0) {
      this.cities.push({
        id: 0,
        image,
        name,
        description,
        favorite: false,
      });
    } else {
      console.log(this.cities);
      const newID = this.cities[length - 1].id + 1;
      this.cities.push({
        id: newID,
        image,
        name,
        description,
        favorite: false,
      });
    }
  }

  favoriteToggle(id: number) {
    this.cities[id].favorite = !this.cities[id].favorite;
  }
}
