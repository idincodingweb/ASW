import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import '../css/Register.css'

function Register({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Password dan konfirmasi password tidak cocok!');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess('Pendaftaran berhasil! Silakan login.');
      setTimeout(() => {
        navigate('/login');  // Setelah sukses, arahkan ke halaman login
      }, 2000);
    } catch (err) {
      setError('Gagal mendaftar. Pastikan email belum terdaftar.');
    }
  };

  return (
    <div className="register-container">
      <h2>Daftar Akun</h2>
      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <label>Email</label>
          <input 
            type="email" 
            className="form-control" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input 
            type="password" 
            className="form-control" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label>Konfirmasi Password</label>
          <input 
            type="password" 
            className="form-control" 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
        </div>
        {error && <p className="text-danger">{error}</p>}
        {success && <p className="text-success">{success}</p>}
        <button type="submit" className="btn btn-primary">Daftar</button>
      </form>
    </div>
  );
}

export default Register;