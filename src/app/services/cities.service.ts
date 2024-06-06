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
  url = 'http://localhost:3000/cities';

  async getAllCities(): Promise<City[]> {
    const data = await fetch(this.url);
    const cities = (await data.json()) ?? [];
    return cities;
  }
  // cities!: City[];
  // cities: City[] = [
  //   {
  //     id: 0,
  //     name: 'Москва',
  //     description: 'Столица России, город федерального значения',
  //     image: 'https://screenshots.enkod.tech/ilya_novikovG6KIVEp3v160xCMY.png',
  //     favorite: true,
  //   },
  //   {
  //     id: 1,
  //     name: 'Санкт-Петербург',
  //     description: 'Второй по численности населения город России',
  //     image: 'https://screenshots.enkod.tech/ilya_novikovW7s6gLwAGDjaJbNL.png',
  //     favorite: false,
  //   },
  //   {
  //     id: 2,
  //     name: 'Новосибирск',
  //     description: 'Третий по численности населения город России',
  //     image: 'https://screenshots.enkod.tech/ilya_novikovHyQpb3vrjFvTfzJJ.png',
  //     favorite: false,
  //   },
  //   {
  //     id: 3,
  //     name: 'Екатеринбург',
  //     description: 'Город-миллионник в России. Тоже красивый город',
  //     image: 'https://screenshots.enkod.tech/ilya_novikovvUvY8ocQ8yIQg6Gi.png',
  //     favorite: false,
  //   },
  //   {
  //     id: 4,
  //     name: 'Нижний Новгород',
  //     description: 'Город в центральной России. Красивый город.',
  //     image: 'https://screenshots.enkod.tech/ilya_novikovHWEuBOtzexaZ3VQs.png',
  //     favorite: false,
  //   },
  //   {
  //     id: 5,
  //     name: 'Челябинск',
  //     description:
  //       'Город в Российской Федерации, седьмой по количеству жителей',
  //     image: 'https://screenshots.enkod.tech/ilya_novikovvjgSDr7xZl6A2UmH.png',
  //     favorite: false,
  //   },
  //   {
  //     id: 6,
  //     name: 'Казань',
  //     description: 'Город в России, столица Республики Татарстан.',
  //     image: 'https://screenshots.enkod.tech/ilya_novikovc2dbr7KvIJ2dknlZ.png',
  //     favorite: false,
  //   },
  // ];
  constructor() {}

  async addCity(name: string, description: string, image: string) {
    const data = await fetch(this.url);
    const cities = (await data.json()) ?? [];
    const length = cities.length;
    const newID = length === 0 ? 0 : +cities[length - 1].id + 1;
    const city = {
      id: newID.toString(),
      image,
      name,
      description,
      favorite: false,
    };

    return fetch(this.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(city),
    });
  }

  async favoriteToggle(id: number) {
    const data = await fetch(`${this.url}/${id}`);
    const city = (await data.json()) ?? [];
    return fetch(`${this.url}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ favorite: !city.favorite }),
    });
  }
}
