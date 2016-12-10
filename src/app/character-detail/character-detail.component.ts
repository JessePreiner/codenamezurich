import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ICharacter } from "../models/interfaces/icharacter";
import { IPublication } from "../models/publication"

@Component({
  selector: 'character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterDetailComponent implements OnInit {

  @Input()
  character:ICharacter;

  @Input()
  publications:IPublication[];

  @Output()
  characterUpdated:EventEmitter<ICharacter> = new EventEmitter<ICharacter>();

  @Output()
  characterDeleted:EventEmitter<ICharacter> = new EventEmitter<ICharacter>();
  
  constructor() {}

  ngOnInit() {}

  deleteCharacter() {
    this.characterDeleted.emit(this.character);
  }
  updateCharacter(form) {
    if (form.dirty) {
      this.characterUpdated.emit(this.character);
      form.reset(this.character);
    }
  }
}
