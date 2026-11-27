import React, { useState, useEffect } from "react";

const slides = [
  {
    title: "The art of slowing down",
    place: "Amalfi Coast, Italy",
    text: "Follow the coastline, find a quiet café and let the afternoon unfold.",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=90"
  },
  {
    title: "Chase the wild blue",
    place: "Maldives",
    text: "Clear water, soft sand and days with nowhere else you need to be.",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1600&q=90"
  },
  {
    title: "Find your mountain moment",
    place: "Dolomites, Italy",
    text: "Fresh mountain air and trails that reward every step.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=90"
  }
];

function Carousel() {
  const [current, setCurrent] = useState(0);

  const previous = () => setCurrent((index) => (index - 1 + slides.length) % slides.length);
  const next = () => setCurrent((index) => (index + 1) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <div className="carousel" aria-label="Featured destination carousel">
      <div className="carousel-image" style={{ backgroundImage: `url(${slide.image})` }} role="img" aria-label={slide.place}>
        <div className="carousel-shade" />
        <div className="carousel-content">
          <span className="carousel-location">✦ &nbsp;{slide.place}</span>
          <h3>{slide.title}</h3>
          <p>{slide.text}</p>
          <a href="#destinations" className="carousel-link">Discover the feeling <span>↗</span></a>
        </div>
        <div className="carousel-controls">
          <span className="slide-count">0{current + 1} <i>/</i> 0{slides.length}</span>
          <div className="arrow-controls">
            <button onClick={previous} aria-label="Previous slide">←</button>
            <button onClick={next} aria-label="Next slide">→</button>
          </div>
        </div>
      </div>
      <div className="carousel-dots" aria-label="Choose slide">
        {slides.map((item, index) => (
          <button key={item.place} className={index === current ? "dot active-dot" : "dot"} onClick={() => setCurrent(index)} aria-label={`Go to slide ${index + 1}`} aria-current={index === current ? "true" : undefined} />
        ))}
      </div>
    </div>
  );
}

export default Carousel;