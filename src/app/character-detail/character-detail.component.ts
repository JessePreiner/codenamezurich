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

  constructor() {}

  ngOnInit() {}

  updateCharacter(form) {
    if (form.dirty) {
      this.characterUpdated.emit(this.character);
      form.reset(this.character);
    }
  }
}
