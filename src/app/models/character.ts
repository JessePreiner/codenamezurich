import { ICharacter }  from "./interfaces/icharacter"

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

