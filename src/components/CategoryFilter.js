import React from 'react';
import '../css/Category.css';

function CategoryFilter({ categoryFilter, setCategoryFilter }) {
  return (
    <select
      onChange={(e) => setCategoryFilter(e.target.value)}
      className="category-select ms-2"
      value={categoryFilter}
    >
      <option value="">Semua Kategori</option>
      <option value="Inspirational">Inspirational</option>
      <option value="Petualangan">Petualangan</option>
      <option value="Romantis">Romantis</option>
    </select>
  );
}

export default CategoryFilter;
