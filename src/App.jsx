import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import DestinationCard from "./components/DestinationCard";
import Footer from "./components/Footer";
import "./App.css";

const destinations = [
  {
    name: "Bali, Indonesia",
    category: "ISLAND ESCAPE",
    description: "Lush landscapes, peaceful beaches and unforgettable sunsets.",
    price: "From ₹24,999",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Swiss Alps, Switzerland",
    category: "MOUNTAIN ADVENTURE",
    description: "Discover alpine villages and breathtaking mountain views.",
    price: "From ₹59,999",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Santorini, Greece",
    category: "COASTAL GETAWAY",
    description: "Whitewashed architecture and the magic of the Aegean Sea.",
    price: "From ₹44,999",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=900&q=85"
  }
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All destinations");
  const categories = ["All destinations", "Island escapes", "Mountain adventures", "Coastal getaways"];

  const visibleDestinations = destinations.filter((place) => {
    if (selectedCategory === "All destinations") return true;
    return place.category.toLowerCase().includes(selectedCategory.split(" ")[0].toLowerCase()) ||
      (selectedCategory === "Mountain adventures" && place.category === "MOUNTAIN ADVENTURE") ||
      (selectedCategory === "Coastal getaways" && place.category === "COASTAL GETAWAY");
  });

  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow"><span className="eyebrow-line" /> YOUR JOURNEY STARTS HERE</span>
            <h1>Find your next<br /><em>great escape.</em></h1>
            <p>Curated places. Meaningful experiences. Beautiful journeys that stay with you long after you return.</p>
            <a className="primary-button" href="#destinations">Explore destinations <span aria-hidden="true">↗</span></a>
            <div className="hero-note"><span className="avatar-stack">✦</span><span><strong>Thoughtfully planned trips</strong><br />Made for curious explorers</span></div>
          </div>
          <div className="hero-visual">
            <div className="hero-image" role="img" aria-label="Beautiful tropical coastline">
              <div className="image-caption"><span>01 / 03</span><strong>Somewhere beautiful awaits.</strong></div>
            </div>
            <div className="floating-card"><span className="sun-icon">☼</span><div><strong>Make memories</strong><small>One destination at a time</small></div></div>
          </div>
        </section>

        <section className="carousel-section section-wrap">
          <div className="section-heading">
            <div><span className="eyebrow">A LITTLE INSPIRATION</span><h2>Places worth <em>pausing for.</em></h2></div>
            <p>Swipe through a few of our favourite places<br />to start dreaming about your next trip.</p>
          </div>
          <Carousel />
        </section>

        <section className="destinations-section section-wrap" id="destinations">
          <div className="section-heading destination-heading">
            <div><span className="eyebrow">THE WORLD IS YOURS</span><h2>Explore by <em>mood.</em></h2></div>
            <label className="filter-label">Choose a travel style
              <select value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)}>
                {categories.map((category) => <option key={category}>{category}</option>)}
              </select>
            </label>
          </div>
          <div className="destination-grid">
            {visibleDestinations.length ? visibleDestinations.map((place) => <DestinationCard key={place.name} place={place} />) : <p className="empty-state">No destinations found in this category.</p>}
          </div>
        </section>

        <section className="quote-section">
          <span className="quote-mark">“</span>
          <p>Travel is not just about seeing new places.<br />It is about seeing the world a little differently.</p>
          <span className="quote-credit">THE EXPLOREWORLD PHILOSOPHY</span>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;