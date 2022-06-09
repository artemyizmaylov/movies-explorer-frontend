// TODO: delete test path
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AboutProject from '../AboutProject/AboutProject';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Footer from '../Footer/Footer';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<AboutProject />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />

        {/* ROUTE FOR TESTING FEATURES */}
        <Route path="/TEST" element={<Footer />} />
      </Routes>
    </div>
  );
}
