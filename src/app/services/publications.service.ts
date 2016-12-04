import { Injectable } from '@angular/core';
import {Publication} from "../models/publication";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class PublicationsService {

  private publicationsSource = new BehaviorSubject<Publication[]>([]);

  publications$ = this.publicationsSource.asObservable();

  load() {
    let initialData:Publication[] = [
      {id:"kljh4lkjh4hsg", title:"Lord of the Rings: Fellowship of the ring"},
      {id:"3587hhkjhdfh4", title:"Jesse and Jenn's Fantastic Adventure"},
      {id:"3jg3j3j4g0sgf", title:"A Land Before Time"}
    ];
    this.publicationsSource.next(initialData);
  }
}
