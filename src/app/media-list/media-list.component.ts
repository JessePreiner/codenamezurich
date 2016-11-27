import { Component, Input } from '@angular/core';

@Component({
  selector: 'media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.css']
})
export class MediaListComponent {
  @Input() items: any[];
  constructor() { }

}
