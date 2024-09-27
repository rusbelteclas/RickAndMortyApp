// LocationsScreen.tsx
import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, View, Text } from "react-native";
import CharacterLocation from "../../app/characters/domain/entities/location"; // Asegúrate de tener esta clase

const LocationsScreen = () => {
    const [locations, setLocations] = useState<CharacterLocation[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/location/')
            .then((response) => response.json())
            .then((data) => {
                setLocations(data.results);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching locations:', error);
                setLoading(false);
            });
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
            {locations.map((location) => (
                <View key={location.name} style={styles.locationCard}>
                    <Text>{location.name}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

export default LocationsScreen;

const styles = StyleSheet.create({
    spinnerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    locationCard: {
        padding: 10,
        backgroundColor: "#f9f9f9",
        borderRadius: 5,
        marginBottom: 10,
    },
});
