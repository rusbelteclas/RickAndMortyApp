//definir las reglas de un datasource para personajes

import CharacterResult from "../entities/charactersResult";

abstract class CharactersDatasource{
    //tendra una funcion para obtener los eprsonajes
    //desde la aAPI por determinada página, devolvera un Character Result

    abstract getCharacters(page:number): Promise<CharacterResult>;
    //otras reglas
}

export default CharactersDatasource;