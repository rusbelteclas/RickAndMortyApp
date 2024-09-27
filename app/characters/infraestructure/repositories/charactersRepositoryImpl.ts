// Implementar la clase abstracta CharactersRepository

import CharactersDatasource from "../../domain/datasource/characterDatasource";
import CharacterResult from "../../domain/entities/charactersResult";
import CharactersRepository from "../../domain/repositories/charactersRepository";

class CharactersRepositoryImpl extends CharactersRepository {
    datasource: CharactersDatasource;

    // Un repositorio necesita una instancia de datasource
    constructor(datasource: CharactersDatasource) {
        super();
        this.datasource = datasource;
    }

    // Invocar al data source para extraer los datos
    getCharacters(page: number): Promise<CharacterResult> {
        return this.datasource.getCharacters(page);
    }
}

export default CharactersRepositoryImpl;
