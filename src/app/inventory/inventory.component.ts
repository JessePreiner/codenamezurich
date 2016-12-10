import { Component, OnInit } from '@angular/core';
import { ICharacter } from "../models/character";
import { PublicationsService } from "../services/publications.service";
import { CharactersService } from "../services/characters.service";
import { Publication } from "../models/publication";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  characterService:CharactersService;
  selectedPublication: Publication;
  selectedCharacter: ICharacter;
  subscriptions: any[];

  characters$: any;
  publications$: any;

  constructor(publicationService: PublicationsService, characterService: CharactersService) {
    this.characterService = characterService;
    this.subscriptions = [];

    this.characters$ = characterService.charsFire$;
    this.publications$ = publicationService.publications$;
    publicationService.load();
  }

  characterSelected(character:ICharacter):void {
    this.selectedCharacter = character;
  }

  publicationSelected(publication:Publication):void {
    this.selectedPublication = publication;
  }

  characterDeleted(character:ICharacter):void {
    this.characterService.delete(character.$key);
  }

  characterUpdated(character:ICharacter):void {
    this.characterService.update(character)
      .then((char:ICharacter) => {this.selectedCharacter = char});

  }

  ngOnInit() {}

}