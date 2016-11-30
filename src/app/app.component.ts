import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthMethods, AuthProviders } from 'angularfire2';
import {PublicationsService} from "./services/publications.service";
import {CharactersService} from "./services/characters.service";
import {Character} from "./models/character";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  characters:any[];
  publications:any[];
  selectedPublication: string;
  selectedCharacter: Character;
  subscriptions: any[];

  constructor(publicationService: PublicationsService, characterService: CharactersService) {

    this.subscriptions = [];
    publicationService.load();
    characterService.load();

    this.subscriptions.push(publicationService.publications$.subscribe((publications) => {
      this.publications = publications;
    }));

    this.subscriptions.push(characterService.characters$.subscribe((characters) => {
      this.characters = characters
    }));
  }

  characterSelected(character:Character):void {
    this.selectedCharacter = character;
  }
}
