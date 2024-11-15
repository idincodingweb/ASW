import React, { useState, useEffect } from 'react';
import '../css/Hero.css'

function HeroSection() {
  const message = "Anime Story Web.."; // Teks yang ingin ditampilkan
  const [text, setText] = useState(''); // Menyimpan teks yang ditampilkan
  const [isDeleting, setIsDeleting] = useState(false); // Status apakah teks sedang dihapus
  const [index, setIndex] = useState(0); // Index untuk karakter teks
  const [speed, setSpeed] = useState(200); // Kecepatan pengetikan

  useEffect(() => {
    const typingEffect = setTimeout(() => {
      if (!isDeleting) {
        // Menambah karakter ke teks
        setText((prev) => prev + message[index]);
        setIndex((prevIndex) => prevIndex + 1);

        // Jika sudah selesai mengetik semua karakter
        if (index === message.length - 1) {
          setIsDeleting(true); // Mulai menghapus teks
          setSpeed(100); // Atur kecepatan penghapusan
        }
      } else {
        // Menghapus karakter dari teks
        setText((prev) => prev.slice(0, -1));

        // Jika semua karakter sudah dihapus
        if (text === '') {
          setIsDeleting(false); // Kembali ke mode mengetik
          setIndex(0); // Reset index
          setSpeed(200); // Atur kecepatan mengetik ulang
        }
      }
    }, speed);

    return () => clearTimeout(typingEffect);
  }, [text, isDeleting, index, speed]);

  return (
    <section className="hero-section">
      <div className="overlay"></div>
      <div className="content">
        <h1>{text}</h1> {/* Teks yang mengetik otomatis */}
        <p>Temukan berbagai cerita menarik di sini</p>
        <a href="/" className="btn btn-neon">Mulai Membaca</a>
      </div>
    </section>
  );
}

export default HeroSection;