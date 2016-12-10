import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import {Character} from "../models/character";

@Component({
  selector: 'character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterDetailComponent implements OnInit {

  @Input()
  character:Character;

  @Output()
  characterUpdated:EventEmitter<Character> = new EventEmitter<Character>();

  @Output()
  characterDeleted:EventEmitter<Character> = new EventEmitter<Character>();
  

  constructor() {}

  ngOnInit() {}

  deleteCharacter() {
    console.log('deleting');
    this.characterDeleted.emit(this.character);
  }
  updateCharacter(form) {
    if (form.dirty) {
      this.characterUpdated.emit(this.character);
      form.reset(this.character);
    }
  }
}
