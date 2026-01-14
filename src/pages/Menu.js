import React from 'react';
import '../App.css';

const sampleMenu = [
  { id: 1, name: 'Cappuccino', price: '£3.50' },
  { id: 2, name: 'Pet-friendly Cake', price: '£2.75' },
  { id: 3, name: 'Iced Tea', price: '£2.00' },
];

export default function Menu() {
  return (
    <section className="page page-menu">
      <h2><span className="emoji" aria-hidden>☕</span> Menu</h2>
      <p>Enjoy drinks and little treats while you pet our friendly animals.</p>
      <ul className="menu-list">
        {sampleMenu.map(item => (
          <li key={item.id} className="menu-item">
            <span>
              {item.id === 1 && <span className="emoji" aria-hidden>☕</span>}
              {item.id === 2 && <span className="emoji" aria-hidden>🍰</span>}
              {item.id === 3 && <span className="emoji" aria-hidden>🧊</span>}
              {item.name}
            </span>
            <span className="price">{item.price}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
