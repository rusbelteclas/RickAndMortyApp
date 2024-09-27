//implementar entidadd para representar los datos de la respuesta de la API

import Character from "./character";

class CharacterResult {
    count: number;
    pages: number;
    next?: string; //opcional con ?
    prev?: string //opcional

    characters: Character[];// para la lista de personaje

    constructor(
    count: number,
    pages: number,
    characters: Character[],
    next?: string, //opcional con ?
    prev?: string
    ){
    this.count= count;
    this.pages= pages;
    this.next= next; //opcional con ?
    this.prev= prev;
    this.characters = characters;
    }
}

export default CharacterResult;