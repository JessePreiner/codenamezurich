import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { ICharacter } from "../models/interfaces/icharacter";
import { AngularFire, FirebaseListObservable } from "angularfire2/angularfire2";

@Injectable()
export class CharactersService  {

  charsFire$:FirebaseListObservable<ICharacter[]>;

  constructor(private db:AngularFire) {
    //TODO: use firebase auth to get /<user> segment
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
      const dbChar = this.db.database.object(`/jesse/characters/${character.$key}`);
      const updates = {name: character.name || "", notes: character.notes || "", publications: character.publications || new Array<string>()};
      dbChar.set(updates)
      // this.charsFire$.update(character.$key, updates );
      return Promise.resolve(character);
    } else {
      const ref = this.charsFire$.push(character);
      character.$key = ref.key;
      return Promise.resolve(character);
    }
  }
}

