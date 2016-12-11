import { ICharacter } from './../models/interfaces/icharacter';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from "../models/character";

@Component({
  selector: 'character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent {
  @Input() characters: any[];

  @Output() characterSelected:EventEmitter<ICharacter> = new EventEmitter<ICharacter>();

  constructor() {
    console.log('char list ctor');
  }

  onSelect(character:ICharacter) {
    this.characterSelected.emit(character || new Character("",""));
  }
}
