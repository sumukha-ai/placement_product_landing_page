import { useState } from 'react';
import styles from './DragToUnlockJobs.module.css';

const DragToUnlockJobs = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  const jobAlerts = [
    'Frontend Developer - $95k/year',
    'Backend Developer - $110k/year',
    'Product Designer - $90k/year',
    'Growth Marketer - $85k/year',
  ];

  const handleDrag = () => {
    setIsUnlocked(true);
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Unlock Jobs on WhatsApp</h2>
      <p className={styles.subtitle}>
        Drag the slider to unlock your job alerts delivered directly to your WhatsApp.
      </p>

      <div className={styles.sliderContainer}>
        <div
          className={`${styles.slider} ${isUnlocked ? styles.unlocked : ''}`}
          onDragEnd={handleDrag}
        >
          <span className={styles.sliderText}>
            {isUnlocked ? 'Unlocked! Here are your job alerts:' : 'Drag to Unlock'}
          </span>
        </div>
      </div>

      <div className={styles.jobAlerts}>
        {isUnlocked && jobAlerts.map((job, index) => (
          <div key={index} className={styles.jobCard}>
            <span className={styles.jobTitle}>{job}</span>
          </div>
        ))}
      </div>

      <button className={styles.ctaBtn}>Get Job Alerts on WhatsApp</button>
    </section>
  );
};

export default DragToUnlockJobs;
