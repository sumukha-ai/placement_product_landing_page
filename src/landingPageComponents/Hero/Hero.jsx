import React, { useEffect, useState } from 'react';
import styles from './Hero.module.css';
import img1 from '../../assets/res_temp_1.webp';
import img2 from '../../assets/res_temp_2.webp';
import img3 from '../../assets/res_temp_3.webp';
import img4 from '../../assets/res_temp_4.webp';


const images = [img1, img2, img3, img4];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setTransitioning(false);
      }, 500); // duration of animation
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.textBlock}>
          <h1>
            AI Resume Builder <span className={styles.highlight}>for Freshers & Students</span>
          </h1>
          <p>
            Build clean, job-winning resumes in minutes with ResumeBot — optimized for ATS and powered entirely via WhatsApp.
          </p>
          <div className={styles.buttonGroup}>
            <a href="/login" className={styles.primaryButton}>Build Resume →</a>
            <a href="#how-it-works" className={styles.secondaryButton}>How It Works</a>
          </div>
        </div>

   <div className={styles.imageBlock}>
  <div className={`${styles.imageSlider} ${transitioning ? styles.transition : ''}`}>
    <img src={images[index]} alt={`Resume ${index + 1}`} className={styles.resumeImg} />
  </div>
  <div className={styles.blobBackground}>
    <div className={`${styles.blob} ${styles.blob1}`}></div>
    <div className={`${styles.blob} ${styles.blob2}`}></div>
    <div className={`${styles.blob} ${styles.blob3}`}></div>
  </div>

</div>

      </div>
    </section>
  );
};

export default Hero;
