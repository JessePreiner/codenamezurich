import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Publication} from "../models/publication";

@Component({
  selector: 'publications-list',
  templateUrl: './publications-list.component.html',
  styleUrls: ['./publications-list.component.css']
})
export class PublicationsListComponent {

  constructor() { }

  @Input()
  items: any[];

  @Output()
  publicationSelected:EventEmitter<Publication> = new EventEmitter<Publication>();

  onSelect(publication:Publication) : void {
    this.publicationSelected.emit(publication);
  }

}
