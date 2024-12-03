import React from 'react';
import profileImage from '../image/FB_IMG_1733158331408.jpg';
import '../css/About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h2>Tentang ASW</h2>
      </div>
      <div className="about-description">
        <p>
          Anime Story Web (ASW) adalah platform yang didedikasikan untuk menyediakan berbagai cerita menarik dan inspiratif. Kami menawarkan beragam kategori cerita, mulai dari motivasi, petualangan, hingga romantis, yang dapat dinikmati oleh semua kalangan pembaca.
        </p>
        <p>
          Platform ini dibangun dengan penuh dedikasi oleh <strong>Idin Iskandar</strong>, seorang pengembang yang memiliki kecintaan mendalam terhadap dunia pemrograman dan pengembangan web.
        </p>
      </div>
      <div className="about-image">
        <img src={profileImage} alt="Idin Iskandar" className="img-fluid" />
      </div>
      <div className="about-footer">
        <p>Dibuat dengan penuh semangat oleh <strong>Idin Iskandar</strong></p>
        <p>
          <a href="https://www.linkedin.com/in/idin-iskandar/" target="_blank" rel="noopener noreferrer">Kunjungi LinkedIn Saya</a>
        </p>
      </div>
    </div>
  );
}

export default About;
