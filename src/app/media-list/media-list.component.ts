import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from "../models/character";

@Component({
  selector: 'media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.css']
})
export class MediaListComponent {
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
