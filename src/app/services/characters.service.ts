import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { ICharacter } from "../models/character";
import { AngularFire } from "angularfire2/angularfire2";
import { FirebaseListObservable } from "angularfire2/index";

@Injectable()
export class CharactersService  {

  private characterSource = new BehaviorSubject<ICharacter[]>([]);

  characters$ = this.characterSource.asObservable();
  charsFire$:FirebaseListObservable<ICharacter[]>;

  constructor(private db:AngularFire) {
    this.charsFire$ = this.db.database.list(`/jesse/characters`);
  }

  update(character:ICharacter):Promise<any> {
    if (character.$key) {
      const key:string = character.$key;
      this.charsFire$.update(key, {name: character.name, notes: character.notes, publications: character.publications});
      return Promise.resolve();

    } else {
      this.charsFire$.push(character)
      return Promise.resolve();

    }
  }
}

