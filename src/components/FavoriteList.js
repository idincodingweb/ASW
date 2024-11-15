// FavoriteList.js
import React from 'react';

// Impor semua gambar
import pedanglangit from '../image/pedanglangit.jpg';
import komet from '../image/komet.jpg';
import pencaricahaya from '../image/pencaricahaya.jpg';
import persahabatan from '../image/persahabatan.jpg';
import pria from '../image/pria.jpg';
import sakura from '../image/sakura.jpg';
// Tambahkan impor gambar lainnya sesuai kebutuhan

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

function FavoriteList({ favorites }) {
  if (favorites.length === 0) {
    return <div>Belum ada cerita favorit!</div>;
  }

  return (
    <div>
      <h2>Cerita Favorit</h2>
      <div className="row">
        {favorites.map((story) => (
          <div className="col-md-4" key={story.id}>
            <div className="card mb-4">
              <img src={images[story.image]} className="card-img-top" alt={story.title} />
              <div className="card-body">
                <h5 className="card-title">{story.title}</h5>
                <p className="card-text">{story.body.slice(0, 100)}...</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoriteList;
