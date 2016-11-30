import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from "../models/character";

@Component({
  selector: 'character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent {
  @Input()
  items: any[];

  @Output()
  itemSelected:EventEmitter<Character> = new EventEmitter<Character>();

  constructor() {
  }

  onSelect(item:any) {
    this.itemSelected.emit(item);
  }
}
