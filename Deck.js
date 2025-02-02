import { RailsCard } from "./RailsCard";

export class Deck {
  constructor() {
    this.railsCards = [];
    this.urlString = "https://jsonapis.onrender.com/api/commands";
  }


  async fetchRailsCards() {
    try {
      const response = await fetch(this.urlString);
      if (!response.ok) {
        throw new Error('Failed to fetch data from the API');
      }

      const data = await response.json();

      // Convert API object into RailsCard instances
      this.railsCards = Object.entries(data).map(
        ([command, definition]) => new RailsCard(command, definition)
      );

      console.log(`Successfully fetched ${this.railsCards.length} rails commands.`);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  drawRandomCard() {
    // if (this.railsCards.length === 0) return null; 
    const randomIndex = Math.floor(Math.random() * this.railsCards.length);
    return this.railsCards[randomIndex];
}

}
