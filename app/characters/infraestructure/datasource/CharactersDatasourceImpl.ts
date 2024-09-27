// CharactersDatasourceImpl.ts
import CharactersDatasource from "../../domain/datasource/characterDatasource";
import CharactersResult from "../../domain/entities/charactersResult";
import Character from "../../domain/entities/character";
import CharacterLocation from "../../domain/entities/location";

class CharactersDatasourceImpl extends CharactersDatasource {
    getCharacters(page: number): Promise<CharactersResult> {
        return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((response) => {
                // Procesar la respuesta {info, results}
                const characters = response.results.map((item: any) => new Character(
                    item.id,
                    item.name,
                    item.status,
                    item.gender,
                    item.species, // Obtener especie
                    new CharacterLocation(
                        item.location.name,
                        item.location.url
                    ),
                    new CharacterLocation( // Obtener origen
                        item.origin.name,
                        item.origin.url
                    ),
                    item.image
                ));

                return new CharactersResult(
                    response.info.count,
                    response.info.pages,
                    characters,
                    response.info.next,
                    response.info.prev
                );
            })
            .catch((error) => {
                console.error('Error fetching characters:', error);
                throw error; // O manejar el error de otra forma
            });
    }
}

export default CharactersDatasourceImpl;
