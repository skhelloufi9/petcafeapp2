import React from 'react';
import '../App.css';

export default function Home() {
  return (
    <section className="page page-home">
      <div className="hero">
        <div className="hero-content">
          <h2>Welcome to Pet Café <span className="emoji-inline" aria-hidden>🐾</span></h2>
          <p className="lead">A cozy spot to enjoy a drink, relax, and make furry friends.</p>
          <p>
            We combine a warm café with a friendly space where you can meet adoptable pets,
            attend community events, or just relax with a cup of coffee.
          </p>
        </div>
        <div className="hero-meta">
          <div className="meta-card">
            <h3>Hours</h3>
            <p>Mon–Fri: 10:00 — 19:00<br/>Sat–Sun: 09:00 — 20:00</p>
          </div>
          <div className="meta-card">
            <h3>Contact</h3>
            <p>hello@petcafe.example<br/>+44 20 7946 0958</p>
          </div>
        </div>
      </div>

      <article className="about">
        <h3>About us</h3>
        <p>
          Pet Café was founded to create a welcoming place for people and animals. Our staff are trained
          in animal care and we partner with local shelters to support adoption events.
        </p>
        <p>
          Whether you're popping in for a quick treat or booking a visit for a group, we aim to make every
          visit relaxing and memorable.
        </p>
      </article>
    </section>
  );
}
