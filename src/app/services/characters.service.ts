import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { ICharacter } from "../models/interfaces/icharacter";
import { AngularFire, FirebaseListObservable } from "angularfire2/angularfire2";
import 'rxjs/add/operator/take'

@Injectable()
export class CharactersService {
  private userPath:string;

  charsFire$:FirebaseListObservable<ICharacter[]>;

  constructor(private db:AngularFire) {
    console.log('char service ctor');
    this.db.auth.take(1).subscribe(auth => {
      this.userPath = `/${auth.uid}/characters`;
    });
  }

  delete(characterKey:string):Promise<any> {
    console.log('char service delete');
    
    if (characterKey) {
      this.charsFire$.remove(characterKey);
      return Promise.resolve();
    } else {
      return Promise.reject('Nothing to do');
    }
  }

  update(character:ICharacter):Promise<any> {
    console.log('char service update');
    
    if (character.$key) {
	const updates = {
        name: character.name || "", 
        notes: character.notes || "", 
        publications: character.publications || new Array<string>()};

      this.db.database
        .object(`${this.userPath}/${character.$key}`)
        .set(updates);
        
      return Promise.resolve(character);
    } else {
      const ref = this.charsFire$.push(character);
      character.$key = ref.key;
      return Promise.resolve(character);
    }
  }
}

