import React, { useState } from 'react';
import supabase from '../config/supabaseClient';
import '../App.css';

export default function VisitBook() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [email, setEmail] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [guests, setGuests] = useState(1);
  const [petPreference, setPetPreference] = useState('No preference');
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // basic email presence + simple format check
    if (!email || !email.trim()) {
      setMessage('Please provide an email address so we can confirm your booking.');
      return;
    }
    const re = /^\S+@\S+\.\S+$/;
    if (!re.test(email)) {
      setMessage('Please provide a valid email address.');
      return;
    }

    if (!date) {
      setMessage('Please choose a preferred date for your visit.');
      return;
    }

    if (!timeSlot) {
      setMessage('Please select a time slot for your visit.');
      return;
    }

    if (!guests || Number(guests) < 1) {
      setMessage('Please specify at least one guest.');
      return;
    }

    setMessage(`Thanks ${name || 'guest'} — your booking request for ${date || 'N/A'} at ${timeSlot} for ${guests} guest(s) (pet preference: ${petPreference}) was received. We'll contact you at ${email}.`);
    setName('');
    setDate('');
    setEmail('');
    setTimeSlot('');
    setGuests(1);
    setPetPreference('No preference');
  }

  return (
    <section className="page page-visit">
      <h2>Visit & Book</h2>
      <p>Book a visit below.</p>

      <form className="booking-form" onSubmit={handleSubmit}>
        <label>
          Your name
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Full name" />
        </label>

        <label>
          Email address
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </label>

        <label>
          Preferred date
          <input type="date" value={date} onChange={e => setDate(e.target.value)} />
        </label>

        <label>
          Preferred time slot
          <select value={timeSlot} onChange={e => setTimeSlot(e.target.value)}>
            <option value="">-- choose a time --</option>
            <option>09:00</option>
            <option>10:00</option>
            <option>11:00</option>
            <option>12:00</option>
            <option>13:00</option>
            <option>14:00</option>
            <option>15:00</option>
            <option>16:00</option>
          </select>
        </label>

        <label>
          Number of guests
          <input type="number" min="1" max="10" value={guests} onChange={e => setGuests(e.target.value)} />
        </label>

        <label>
          Pet preference
          <select value={petPreference} onChange={e => setPetPreference(e.target.value)}>
            <option>No preference</option>
            <option>Cats</option>
            <option>Dogs</option>
            <option>Small pets</option>
            <option>No animals</option>
          </select>
        </label>

        <button type="submit">Request booking</button>
      </form>

      {message && <p className="booking-message">{message}</p>}
    </section>
  );
}
