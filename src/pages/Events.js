import React from 'react';
import '../App.css';

const upcoming = [
  { id: 1, title: 'Puppy Playdate', date: '02/01/2026' },
  { id: 2, title: 'Cat Cuddle Hour', date: '17/01/2026' },
];

export default function Events() {
  return (
    <section className="page page-events">
      <h2><span className="emoji" aria-hidden>📅</span> Events</h2>
      <p>Check out our upcoming community events and sign up on the Visit & Book page.</p>
      <ul className="events-list">
        {upcoming.map(ev => {
          const isCat = /cat/i.test(ev.title);
          return (
            <li key={ev.id} className="event-item">
              <strong>
                <span className="emoji" aria-hidden>{isCat ? '🐱' : '🐶'}</span>
                {ev.title}
              </strong>
              <span className="event-date">{ev.date}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
