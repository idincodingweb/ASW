import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';
import '../css/Navbar.css'

function Navbar({ user, setUser }) {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);  // Set user ke null setelah logout
      })
      .catch((error) => {
        alert('Error during logout: ' + error.message);
      });
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">ASW</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Link ke halaman Favorit, hanya ditampilkan jika pengguna login */}
            {user && (
              <li className="nav-item">
                <Link to="/favorites" className="nav-link">Favorit</Link>
              </li>
            )}
            
            {/* Link ke halaman About */}
            <li className="nav-item">
              <Link to="/about" className="nav-link">Tentang</Link>
            </li>

            {/* Tombol login/logout */}
            {user ? (
              <li className="nav-item">
                <button className="btn btn-neon ms-2" onClick={handleLogout}>Logout</button>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/login" className="btn btn-neon ms-2">Login</Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="btn btn-neon ms-2">Daftar</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;