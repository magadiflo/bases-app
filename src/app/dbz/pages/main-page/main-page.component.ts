import { Component } from '@angular/core';

import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

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
