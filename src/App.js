import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Events from './pages/Events';
import VisitBook from './pages/VisitBook';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="site-header">
          <h1 className="site-title">Pet Café</h1>
          <nav className="main-nav">
            <NavLink to="/" end className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
              <span className="emoji" aria-hidden>🏠</span>
              Home
            </NavLink>
            <NavLink to="/menu" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
              <span className="emoji" aria-hidden>☕</span>
              Menu
            </NavLink>
            <NavLink to="/events" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
              <span className="emoji" aria-hidden>📅</span>
              Events
            </NavLink>
            <NavLink to="/visit" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
              <span className="emoji" aria-hidden>🐾</span>
              Visit & Book
            </NavLink>
          </nav>
        </header>

        <main className="site-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/events" element={<Events />} />
            <Route path="/visit" element={<VisitBook />} />
          </Routes>
        </main>

        <footer className="site-footer">© Pet Café — cozy pets & tasty treats</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
