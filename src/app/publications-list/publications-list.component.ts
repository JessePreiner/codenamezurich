import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import {Publication} from "../models/publication";

@Component({
  selector: 'publications-list',
  templateUrl: './publications-list.component.html',
  styleUrls: ['./publications-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicationsListComponent {

  constructor() {}

  @Input() publications: any[];
  @Output() publicationSelected:EventEmitter<Publication> = new EventEmitter<Publication>();

  addPublication() {
    
  }

  onSelect(publication:Publication) : void {
    this.publicationSelected.emit(publication);
  }

}
