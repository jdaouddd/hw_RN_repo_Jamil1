import { Deck } from "../models/Deck.js"; // Import the Deck class

export class FlashcardController {
    constructor() {
        this.deck = new Deck(); // Create a Deck instance
        this.currentFlashcard = null; // Initialize current flashcard
    }

    async fetchFlashcards() {
        try {
            await this.deck.fetchRailsCards(); // Fetch the Rails commands
            this.currentFlashcard = this.deck.drawRandomCard(); // Pick a random flashcard
        } catch (error) {
            console.error("Error fetching flashcards:", error);
        }
    }

    getRandomFlashcard() {
        if(!this.currentFlashcard){
            console.warn("No flashcards available. Ensure fetchFlashcards() is called first.");
            return null;
        }

        return this.currentFlashcard;
    }
}
