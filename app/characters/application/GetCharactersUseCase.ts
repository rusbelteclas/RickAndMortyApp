import CharactersRepository from "../domain/repositories/charactersRepository";
import CharacterResult from "../domain/entities/charactersResult";

class GetCharactersUseCase {
    private repository: CharactersRepository;

    constructor(repository: CharactersRepository) {
        this.repository = repository;
    }

    // caso de uso que obtiene los personajes desde el repositorio
    async execute(page: number): Promise<CharacterResult> {
        return await this.repository.getCharacters(page);
    }
}

export default GetCharactersUseCase;
