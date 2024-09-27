import CharacterLocation from "./location";

class Character {
    // Definir las propiedades de personaje
    id: number;
    name: string;
    status: string;
    gender: string;
    species: string; // Agregar especie
    location: CharacterLocation;
    origin: CharacterLocation; // Agregar origen
    image: string;

    // Implementar el constructor
    constructor(
        id: number,
        name: string,
        status: string,
        gender: string,
        species: string, // Agregar parámetro de especie
        location: CharacterLocation,
        origin: CharacterLocation, // Agregar parámetro de origen
        image: string,
    ) {
        // Almacenar los valores (parámetros en las propiedades)
        this.id = id;
        this.name = name;
        this.status = status;
        this.gender = gender;
        this.species = species; // Almacenar especie
        this.location = location;
        this.origin = origin; // Almacenar origen
        this.image = image;
    }
}

// Exportar la clase para que se pueda utilizar
export default Character;
