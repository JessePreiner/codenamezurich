export interface ICharacter {
    $key?:string;
    name:string;
    relations?:any[];
    publications?:string[];
    notes:string;
}