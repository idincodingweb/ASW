// src/App.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StoryList from './components/StoryList';
import HeroSection from './components/HeroSection';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import StoryDetail from './components/StoryDetail';
import Login from './components/Login';
import Register from './components/Register';
import LupaPassword from './components/LupaPassword';
import FavoriteList from './components/FavoriteList';
import About from './components/About';
import { auth } from './firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import './App.css';

// Import file JSON cerita
import story1 from './stories/1.json';
import story2 from './stories/2.json';
import story3 from './stories/3.json';
import story4 from './stories/4.json';
import story5 from './stories/5.json';
import story6 from './stories/6.json';

const stories = [story1, story2, story3, story4, story5, story6];

function App() {
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [filteredStories, setFilteredStories] = useState(stories);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  useEffect(() => {
    const filterStories = () => {
      let filtered = stories;

      if (searchKeyword) {
        filtered = filtered.filter(story =>
          story.title.toLowerCase().includes(searchKeyword.toLowerCase())
        );
      }

      if (categoryFilter) {
        filtered = filtered.filter(story => story.category === categoryFilter);
      }

      setFilteredStories(filtered);
    };

    filterStories();
  }, [searchKeyword, categoryFilter]);

  const addToFavorites = (storyId) => {
    const story = stories.find((s) => s.id === storyId);
    if (story && !favorites.some((fav) => fav.id === storyId)) {
      setFavorites([...favorites, story]);
    }
  };

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <div className="container mt-4">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <div className="d-flex justify-content-center mt-3">
                  <SearchBar searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword} />
                  <CategoryFilter categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} />
                </div>
                <StoryList stories={filteredStories} />
              </>
            }
          />
          <Route path="/favorites" element={user ? <FavoriteList favorites={favorites} /> : <Navigate to="/login" />} />
          <Route path="/story/:id" element={user ? <StoryDetail stories={stories} addToFavorites={addToFavorites} /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route path="/lupa-password" element={<LupaPassword />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
