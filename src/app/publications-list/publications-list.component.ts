import { Component, Input } from '@angular/core';

@Component({
  selector: 'publications-list',
  templateUrl: './publications-list.component.html',
  styleUrls: ['./publications-list.component.css']
})
export class PublicationsListComponent {
  @Input() items: any[];
  constructor() { }

}
