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

// TODO: настроить валидацию форм

export default function App() {
  const [currentUser, setCurrentUser] = useState({});
  const userContext = useMemo(() => ({ currentUser, setCurrentUser }), [currentUser]);

  useEffect(() => {
    mainApi.getUser()
      .then((user) => setCurrentUser(user))
      .catch((err) => err.json().then((res) => console.log(res.message)));
  }, []);

  return (
    <div className="app">
      <UserContext.Provider value={userContext}>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/movies" element={<ProtectedRoute><Movies /></ProtectedRoute>} />
          <Route path="/saved-movies" element={<ProtectedRoute><SavedMovies /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}
