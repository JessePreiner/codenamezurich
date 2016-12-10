import { Publication } from './../models/publication';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { AngularFire, FirebaseListObservable } from "angularfire2/index";
import { IPublication } from './../models/interfaces/ipublication';

@Injectable()
export class PublicationsService {
    pubsFire$:FirebaseListObservable<IPublication[]>;

    constructor(private db:AngularFire) {
    this.pubsFire$ = this.db.database.list(`/publications`);

    this.pubsFire$.push(new Publication("Lord of the rings"));
    this.pubsFire$.push(new Publication("The Martian"));
    this.pubsFire$.push(new Publication("Carrie"));
    this.pubsFire$.push(new Publication("Ready Player One"));
  }
  
}
