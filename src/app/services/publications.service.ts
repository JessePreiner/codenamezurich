import { Injectable } from '@angular/core';
import {Publication} from "../models/publication";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class PublicationsService {

   private publicationsSource = new BehaviorSubject<Publication[]>([]);

  publications$ = this.publicationsSource.asObservable();
  
   load() {
     let initialData:Publication[] =[];
     this.publicationsSource.next(initialData);
   }
}
