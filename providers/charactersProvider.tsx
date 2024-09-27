import React, { createContext, useContext, useState, useEffect } from "react";
import GetCharactersUseCase from "../app/characters/application/GetCharactersUseCase";
import CharactersRepositoryImpl from "../app/characters/infraestructure/repositories/charactersRepositoryImpl";
import CharactersDatasourceImpl from "../app/characters/infraestructure/datasource/CharactersDatasourceImpl";
import Character from "../app/characters/domain/entities/character";

interface CharactersContextData {
    loading: boolean;
    characters: Character[];
    getCharacters: (page: number) => void;
}

const CharactersContext = createContext<CharactersContextData | undefined>(undefined);

export const CharactersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [characters, setCharacters] = useState<Character[]>([]);

    const repository = new CharactersRepositoryImpl(new CharactersDatasourceImpl());
    const useCase = new GetCharactersUseCase(repository);

    const getCharacters = async (page: number) => {
        setLoading(true);
        try {
            const result = await useCase.execute(page);
            setCharacters(result.characters);
        } catch (error) {
            console.error("Error fetching characters", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getCharacters(1); // Cargar los personajes de la primera página al montar el componente
    }, []);

    return (
        <CharactersContext.Provider value={{ loading, characters, getCharacters }}>
            {children}
        </CharactersContext.Provider>
    );
};

export const useCharactersState = () => {
    const context = useContext(CharactersContext);
    if (context === undefined) {
        throw new Error("useCharactersState debe ser usado dentro de un CharactersProvider");
    }
    return context;
};
