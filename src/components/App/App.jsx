import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import UserContext from '../../context/UserContext';
import mainApi from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

export default function App() {
  const loggedIn = JSON.parse(localStorage.getItem('loggedIn')) || false;
  const [currentUser, setCurrentUser] = useState({});
  const userContext = useMemo(() => ({ currentUser, setCurrentUser }), [currentUser]);

  useEffect(() => {
    if (loggedIn) {
      mainApi.getUser()
        .then((user) => {
          localStorage.setItem('userId', user._id);
          setCurrentUser(user);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div className="app">
      <UserContext.Provider value={userContext}>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route
            path="/movies"
            element={<ProtectedRoute allowed={loggedIn}><Movies /></ProtectedRoute>}
          />
          <Route
            path="/saved-movies"
            element={<ProtectedRoute allowed={loggedIn}><SavedMovies /></ProtectedRoute>}
          />
          <Route
            path="/profile"
            element={<ProtectedRoute allowed={loggedIn}><Profile /></ProtectedRoute>}
          />
          <Route
            path="/signup"
            element={<ProtectedRoute allowed={!loggedIn}><Register /></ProtectedRoute>}
          />
          <Route
            path="/signin"
            element={<ProtectedRoute allowed={!loggedIn}><Login /></ProtectedRoute>}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}
