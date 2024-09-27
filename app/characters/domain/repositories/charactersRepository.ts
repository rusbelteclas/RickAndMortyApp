//definir reglas de un repositorio para characters un repositorio consume un datasource

import CharacterResult from "../entities/charactersResult";

abstract class CharactersRepository{
    //definir una funcion para leer los personajes por página, deste la fuente de datos, devolver un CharactersResult
    abstract getCharacters(page:number): Promise<CharacterResult>

}

export default CharactersRepository;