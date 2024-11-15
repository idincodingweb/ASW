import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import '../css/LupaPassword.css'

function LupaPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Email reset password telah dikirim! Silakan cek inbox Anda.');
      setError('');
      setTimeout(() => {
        navigate('/login');  // Arahkan ke halaman login setelah sukses
      }, 3000);
    } catch (err) {
      setError('Gagal mengirim email. Pastikan email terdaftar.');
      setMessage('');
    }
  };

  return (
    <div className="container-lupapassword">
      <h2>Lupa Password</h2>
      <form onSubmit={handlePasswordReset}>
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
        {message && <p className="text-success">{message}</p>}
        {error && <p className="text-danger">{error}</p>}
        <button type="submit" className="btn btn-primary">Kirim Reset Password</button>
      </form>
    </div>
  );
}

export default LupaPassword;