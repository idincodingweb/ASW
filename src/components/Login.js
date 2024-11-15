import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useNavigate, Link } from 'react-router-dom';
import '../css/Login.css'; // Impor file CSS

function Login({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError(''); // Reset error jika login berhasil
      navigate('/');  // Arahkan ke halaman beranda setelah login sukses
    } catch (err) {
      setError('Email atau password tidak terdaftar.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            className="form-control neon-input" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            className="form-control neon-input" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="btn neon-btn">Login</button>
      </form>
      <p className="mt-2">
        <Link to="/lupa-password" className="forgot-password">Lupa password?</Link>
      </p>
    </div>
  );
}

export default Login;