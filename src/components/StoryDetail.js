// StoryDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import '../css/Storydetail.css';

// Impor semua gambar
import pedanglangit from '../image/pedanglangit.jpg';
import komet from '../image/komet.jpg';
import pencaricahaya from '../image/pencaricahaya.jpg';
import persahabatan from '../image/persahabatan.jpg';
import pria from '../image/pria.jpg';
import sakura from '../image/sakura.jpg';
// Buat mapping antara nama file gambar dan impor gambar
const images = {
  "pedanglangit.jpg": pedanglangit,
  "komet.jpg": komet,
  "pencaricahaya.jpg": pencaricahaya,
  "persahabatan.jpg": persahabatan,
  "pria.jpg": pria,
  "sakura.jpg": sakura,
  // Tambahkan mapping gambar lainnya
};

function StoryDetail({ stories, addToFavorites }) {
  const { id } = useParams(); // Mendapatkan ID cerita dari URL
  const story = stories.find((story) => story.id === parseInt(id, 10));

  if (!story) {
    return <div className="error-message">Cerita tidak ditemukan!</div>; // Menampilkan pesan jika cerita tidak ditemukan
  }

  return (
    <div className="story-detail-container">
      <h2 className="story-detail-title">{story.title}</h2>
      <img src={images[story.image]} alt={story.title} className="story-detail-image" />
      <p className="story-detail-body">{story.body}</p>
      <button className="story-detail-button" onClick={() => addToFavorites(story.id)}>
        Tambah ke Favorit
      </button>
    </div>
  );
}

export default StoryDetail;
