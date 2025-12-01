import React from 'react';
import styles from './CoverLetter2.module.css';
import cl1 from '../../assets/cl1.avif';
import cl2 from '../../assets/cl2.avif';
import cl3 from '../../assets/cl1.avif';
import cl4 from '../../assets/cl2.avif';

const templates = [cl1, cl2, cl3, cl4];

const CoverLetter2 = () => {
  return (
    <section className={styles.container}>
      {/* Left side: Template Animation */}
      <div className={styles.left}>
        <div className={styles.blobBackground}></div>
        <div className={styles.stackContainer}>
          {templates.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Cover Letter Template ${i + 1}`}
              className={`${styles.card} ${styles[`card${i + 1}`]}`}
            />
          ))}
        </div>
      </div>

      {/* Right side: Animated UI Mockup */}

    </section>
  );
};

export default CoverLetter2;
