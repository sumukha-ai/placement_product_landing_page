import React, { useEffect, useState } from 'react';
import styles from './JobAlert.module.css';

const alertMessages = [
  'New job alert: Web Developer',
  'New job alert: Product Designer',
  'New job alert: Marketing Specialist',
  'New job alert: Data Analyst',
  'New job alert: UX Researcher',
];

const JobAlert = () => {
  const [visibleAlerts, setVisibleAlerts] = useState(alertMessages.slice(0, 4));
  const [currentIndex, setCurrentIndex] = useState(4);
  const [fadeOutTop, setFadeOutTop] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Slide out the top alert
      setFadeOutTop(true);

      setTimeout(() => {
        const nextAlert = alertMessages[currentIndex % alertMessages.length];
        setVisibleAlerts((prev) => {
          const [, ...rest] = prev;
          return [...rest, nextAlert];
        });
        setCurrentIndex((i) => i + 1);
        setFadeOutTop(false);
      }, 400); // matches .slideOutLeft animation duration
    }, 2000); // total cycle time

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className={styles.jobAlertWrapper}>
      {visibleAlerts.map((msg, i) => (
        <div
          key={i}
          className={`${styles.jobAlert} ${
            fadeOutTop && i === 0
              ? styles.slideOutLeft
              : i === visibleAlerts.length - 1
              ? styles.fadeInNew
              : ''
          }`}
        >
          {msg}
        </div>
      ))}
    </div>
  );
};

export default JobAlert;
