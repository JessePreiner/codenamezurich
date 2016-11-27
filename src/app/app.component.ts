import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthMethods, AuthProviders } from 'angularfire2';
import {Character} from "./models/character";
import {Publication} from "./models/publication";
import {PublicationsService} from "./services/publications.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  characters:Character[];
  publications:any;
  selectedPublication: string;
  selectedCharacter: string;

  constructor(publicationService: PublicationsService) {
    publicationService.load();
    publicationService.publications$.subscribe((publications) => {
      this.publications = publications;
    });
    this.characters =
         [
       {id: "34iuhgrlijh4t", publications:["kljh4lkjh4hsg","3587hhkjhdfh4","3jg3j3j4g0sgf" ],name:"Jesse", notes: "Jesse was introduced in chapter 2. He is married to Jenn, " +
       "and did that really significant thing that I should remember."},
       {id: "4jkhglkjh4ghh", publications: ["3jg3j3j4g0sgf"], name:"Jenn", notes: "Jenn is Jesse's super pretty girlfriend, but only because she" +
       "hates being called fiance. She did that really important thing in chapter 3."},
       {id: "f90rg08dg098f", publications: ["3587hhkjhdfh4"], name:"Johnny", notes: "Johnny is son of Jack, who is son of Greg, from the land" +
       "near the Misty Mountains. He did that other thing in an early chapter."}
     ];
  }
}
