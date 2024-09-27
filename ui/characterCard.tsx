// CharacterCard.tsx
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Character from "../app/characters/domain/entities/character";

interface Props {
    character: Character;
}

export default function CharacterCard({ character }: Props) {
    return (
        <View style={styles.card}>
            <Image source={{ uri: character.image }} style={styles.image} />
            <View>
                <Text style={styles.text}>{`Nombre: ${character.name}`}</Text>
                <Text style={styles.text}>{`Género: ${character.gender}`}</Text>
                <Text style={styles.text}>{`Statuie: ${character.species}`}</Text> {/* Agregar especie */}
                <Text style={styles.text}>{`Ubicación: ${character.location.name}`}</Text> {/* Agregar ubicación */}
                <Text style={styles.text}>{`Oris: ${character.status}`}</Text>
                <Text style={styles.text}>{`Especgen: ${character.origin.name}`}</Text> {/* Agregar origen */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        marginBottom: 15,
        padding: 10,
        backgroundColor: "#f6ddcc",
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 3,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ddd", // Añadido borde
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 15, // Espacio entre imagen y texto
    },
    text: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#4A4A4A", // Color del texto del nombre
    },
});
