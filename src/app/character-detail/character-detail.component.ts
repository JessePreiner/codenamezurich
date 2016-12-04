import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import {Character} from "../models/character";
import {log} from "util";

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

  updateCharacter(propHasChanged:boolean) {
    if (propHasChanged) {
      console.log('should update: ', event);
      this.characterUpdated.emit(this.character);
    } else {
      console.log('no changes done');
    }
  }
}
