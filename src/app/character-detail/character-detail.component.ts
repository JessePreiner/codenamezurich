import { environment } from './../../environments/environment.prod';
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ICharacter } from "../models/interfaces/icharacter";
import { IPublication } from "../models/interfaces/ipublication"

@Component({
  selector: 'character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterDetailComponent implements OnInit {

  @Input() character:ICharacter;
  @Input() publications:IPublication[];

  @Output() characterUpdated:EventEmitter<ICharacter> = new EventEmitter<ICharacter>();
  @Output() characterDeleted:EventEmitter<ICharacter> = new EventEmitter<ICharacter>();
  
  constructor() {}

  ngOnInit() {}

  deleteCharacter() {
    this.characterDeleted.emit(this.character);
  }

  addPublication(publication:string) {
    publication = publication.trim();
    if (this.validPublication(publication, this.character.publications)) {
      if (this.character.publications) {
        this.character.publications.push(publication);
      } else {
        this.character.publications = new Array<string>(publication)
      }
      this.characterUpdated.emit(this.character);
    }
  }

  private validPublication(publicationToAdd:string, existingPublications: string[]):boolean {
    return(publicationToAdd && !existingPublications) || 
                (existingPublications && !existingPublications.includes(publicationToAdd) );
  }
  
  updateCharacter(form) {
    if (form.dirty) {
      this.characterUpdated.emit(this.character);
      form.reset(this.character);
    }
  }
}
