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

  delete(characterKey:string):Promise<any> {
    if (characterKey) {
      this.charsFire$.remove(characterKey);
      return Promise.resolve();
    } else {
      return Promise.reject('Nothing to do');
    }
  }

  update(character:ICharacter):Promise<any> {
    if (character.$key) {
      this.charsFire$.update(character.$key, {name: character.name, notes: character.notes, publications: character.publications});
      return Promise.resolve(character);
    } else {
      const ref = this.charsFire$.push(character);
      character.$key = ref.key;
      return Promise.resolve(character);
    }
  }
}

