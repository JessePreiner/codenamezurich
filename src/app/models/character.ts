export interface ICharacter {
    $key?:string;
    name:string;
    relations?:any[];
    publications?:string[];
    notes:string;
}

export class Character implements ICharacter {
  name:string;
  notes:string;
  $key:string;
  relations:any[];
  publications:string[];

  constructor(name: string, notes: string) {
    this.name = name;
    this.notes = notes;
  }
}

