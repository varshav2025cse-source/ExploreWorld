import React from "react";
function DestinationCard({ place }) {
  return (
    <article className="destination-card">
      <div className="card-image-wrap">
        <img src={place.image} alt={place.name} loading="lazy" />
        <span className="card-tag">{place.category}</span>
      </div>
      <div className="card-details">
        <div><h3>{place.name}</h3><p>{place.description}</p></div>
        <div className="card-bottom"><strong>{place.price}</strong><a href="mailto:hello@exploreworld.example" aria-label={`Ask about ${place.name}`}>↗</a></div>
      </div>
    </article>
  );
}

export default DestinationCard;