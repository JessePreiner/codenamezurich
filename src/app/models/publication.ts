export interface IPublication {
    key?:string;
    title:string;

}

export class Publication implements IPublication {
  title:string;
  key:string;

  constructor(title:string) {
    this.title=title;
  }
}

