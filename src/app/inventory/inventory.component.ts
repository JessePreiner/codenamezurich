import { Component, OnInit } from '@angular/core';
import { Character } from "../models/character";
import { PublicationsService } from "../services/publications.service";
import { CharactersService } from "../services/characters.service";
import { Publication } from "../models/publication";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  selectedPublication: Publication;
  selectedCharacter: Character;
  subscriptions: any[];

  characters$: any;
  publications$: any;

  constructor(publicationService: PublicationsService, characterService: CharactersService) {

    this.subscriptions = [];

    this.characters$ = characterService.characters$;
    this.publications$ = publicationService.publications$;
    publicationService.load();
    characterService.load();
  }

  characterSelected(character:Character):void {
    this.selectedCharacter = character;
  }

  publicationSelected(publication:Publication):void {
    this.selectedPublication = publication;
  }

  ngOnInit() {}

}
