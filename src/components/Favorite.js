import React, { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { doc, getDoc } from 'firebase/firestore';

function Favorite({ user }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const userFavRef = doc(db, 'users', user.uid);
      const userFavDoc = await getDoc(userFavRef);

      if (userFavDoc.exists()) {
        setFavorites(userFavDoc.data().favorites || []);
      }
    };

    if (user) {
      fetchFavorites();
    }
  }, [user]);

  return (
    <div>
      <h2>Cerita Favorit Anda</h2>
      {favorites.length === 0 ? (
        <p>Tidak ada cerita favorit.</p>
      ) : (
        <ul>
          {favorites.map((favorite, index) => (
            <li key={index}>
              <h4>{favorite.title}</h4>
              <p>{favorite.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favorite;