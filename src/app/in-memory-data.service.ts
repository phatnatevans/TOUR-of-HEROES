import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Wonder Woman' },
      { id: 2, name: 'Aquaman' },
      { id: 3, name: 'Supergirl' },
      { id: 4, name: 'The Flash' }, 
      { id: 5, name: 'Green Arrow' },
      { id: 6, name: 'Catwoman' },
      { id: 7, name: 'Black Panther' },
      { id: 8, name: 'Thor' },
      { id: 9, name: 'Killer Frost' },
      { id: 10, name: 'Captain America' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}