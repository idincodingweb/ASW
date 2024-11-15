import React, { useState, useEffect } from 'react';
import StoryList from './StoryList';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import story1 from '../stories/1.json';
import story2 from '../stories/2.json';
import story3 from '../stories/3.json';
import story4 from '../stories/4.json';
import story5 from '../stories/5.json';
import story6 from '../stories/6.json';

const stories = [story1, story2, story3, story4, story5, story6];

function Home() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [filteredStories, setFilteredStories] = useState(stories);

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

  return (
    <div className="home">
      <h1 className="text-center mb-4">Daftar Cerita</h1>
      <div className="d-flex justify-content-center mb-4">
        <SearchBar searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword} />
        <CategoryFilter categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} />
      </div>
      <StoryList stories={filteredStories} />
    </div>
  );
}

export default Home;
