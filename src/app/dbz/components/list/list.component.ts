import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input({ alias: 'characters', required: true }) characters!: Character[];
  @Output() emitCharacterToDeleteEvent: EventEmitter<number> = new EventEmitter();

  emitCharacterToDelete(index: number): void {
    this.emitCharacterToDeleteEvent.emit(index);
  }

}
