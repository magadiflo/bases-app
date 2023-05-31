import { Injectable } from '@angular/core';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    { name: 'Krillin', power: 1000 },
    { name: 'Gokú', power: 9500 },
    { name: 'Yamcha', power: 580 },
  ];

  addCharacter(character: Character): void {
    this.characters.push(character);
  }

  characterToDeleteByIndex(index: number): void {
    this.characters.splice(index, 1);
  }

}
