import React, { useEffect } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, View } from "react-native";
import {
    CharactersProvider,
    useCharactersState,
} from "../../providers/charactersProvider";
import CharacterCard from "../../ui/characterCard";

const CharactersView = () => {
    const { loading, characters, getCharacters } = useCharactersState();

    useEffect(() => {
        getCharacters(1);
    }, []);

    if (loading) {
        return (
            <View style={styles.spinnerContainer}>
                <ActivityIndicator size="large" color="darkblue" />
            </View>
        );
    }

    return (
        <ScrollView>
            {characters.map((character) => (
                <CharacterCard key={character.id} character={character} />
            ))}
        </ScrollView>
    );
};

const CharactersScreen = () => (
    <CharactersProvider>
        <CharactersView />
    </CharactersProvider>
);

export default CharactersScreen;

const styles = StyleSheet.create({
    spinnerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
