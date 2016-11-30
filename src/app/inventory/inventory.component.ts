import { Component, OnInit } from '@angular/core';
import {Character} from "../models/character";
import {PublicationsService} from "../services/publications.service";
import {CharactersService} from "../services/characters.service";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

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
  
  ngOnInit() {
  }

}
