import { IPublication } from './../models/interfaces/ipublication';
import { Component, OnInit } from '@angular/core';
import { ICharacter } from "../models/interfaces/icharacter";
import { PublicationsService } from "../services/publications.service";
import { CharactersService } from "../services/characters.service";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  characterService:CharactersService;
  selectedPublication: IPublication;
  selectedCharacter: ICharacter;

  characters$: any;
  publications$: any;

  constructor(publicationService: PublicationsService, characterService: CharactersService) {
    this.characterService = characterService;

    this.characters$ = characterService.charsFire$;
    this.publications$ = publicationService.pubsFire$;
  }

  characterSelected(character:ICharacter):void {
    this.selectedCharacter = character;
  }

  publicationSelected(publication:IPublication):void {
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