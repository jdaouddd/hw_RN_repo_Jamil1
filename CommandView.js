import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import {FlashcardController} from "../controllers/FlashcardContoller.js";
import { useFocusEffect } from "@react-navigation/native";
import { useState, useEffect, useCallback } from "react";

export default function CommandView({ navigation }) {
  const controller = new FlashcardController();
  const [flashcard, setFlashcard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Show loading indicator
      await controller.fetchFlashcards(); // Wait until cards are fetched
      setFlashcard(controller.getRandomFlashcard()); // Set the random flashcard after fetching
      setLoading(false);
    };
    fetchData();
  }, []);

  useFocusEffect(
    useCallback(() => {
      setFlashcard(controller.getRandomFlashcard());
    }, [navigation])
  );

  const showDefinition = () => {
    if (!flashcard) return;
    navigation.navigate("DefinitionView", {
      definition: flashcard.definition,
      command: flashcard.command,
    });
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="dodgerblue" />
      ) : flashcard ? (
        <TouchableOpacity onPress={showDefinition} style={styles.commandButton}>
          <Text style={styles.commandText}>{flashcard.command}</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.errorText}>No flashcards available</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9F9F9", // Light gray background
  },
  commandButton: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Shadow for Android
  },
  commandText: {
    fontSize: 18,
    color: "dodgerblue",
    fontWeight: "500",
    textAlign: "center",
  },
  errorText: {
    fontSize: 16,
    color: "red",
    marginTop: 10,
  },
});
