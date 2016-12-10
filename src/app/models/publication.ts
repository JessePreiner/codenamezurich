import { IPublication } from './interfaces/ipublication';

export class Publication implements IPublication {
  title:string;
  key:string;

  constructor(title:string) {
    this.title=title;
  }
}

