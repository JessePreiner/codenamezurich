import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Character } from "../models/character";

@Injectable()
export class CharactersService {

  private characterSource = new BehaviorSubject<Character[]>([]);

  characters$ = this.characterSource.asObservable();

  constructor() { }

  update(character:Character):Promise<any> {
    console.log('character service about to get jiggy');
    return Promise.resolve();
  }

  load() {
    let initialData:Character[] = [
      {id: "34iuhgrlijh4t", publications:["kljh4lkjh4hsg","3587hhkjhdfh4","3jg3j3j4g0sgf" ],name:"Jesse", notes: "Jesse was introduced in chapter 2. He is married to Jenn, " +
      "and did that really significant thing that I should remember."},
      {id: "4jkhglkjh4ghh", publications: ["3jg3j3j4g0sgf"], name:"Jenn", notes: "Jenn is Jesse's super pretty girlfriend, but only because she" +
      "hates being called fiance. She did that really important thing in chapter 3."},
      {id: "f90rg08dg098f", publications: ["3587hhkjhdfh4"], name:"Johnny", notes: "Johnny is son of Jack, who is son of Greg, from the land" +
      "near the Misty Mountains. He did that other thing in an early chapter."}
    ];
    this.characterSource.next(initialData);
  }
}

