import React from 'react';
import styles from './Job.module.css';
import { FaSearch, FaWhatsapp } from 'react-icons/fa';

const Job = () => {
  const options = [
    {
      title: 'Search Jobs & Align Resume',
      description:
        'Browse curated jobs, match them instantly to your resume, and apply directly from your dashboard. Stay in full control of your job hunt.',
      icon: <FaSearch size={30} aria-hidden="true" />,
    },
    {
      title: 'Get WhatsApp Alerts for Jobs',
      description:
        'Subscribe to job alerts via WhatsApp. Receive instant updates tailored to your resume, skills, and preferences.',
      icon: <FaWhatsapp size={30} aria-hidden="true" />,
    },
  ];

  return (
    <section
      className={styles.jobSection}
      id="job-tools"
      aria-labelledby="job-section-title"
      aria-label="Job Search Tools"
    >
      <h2 className={styles.title} id="job-section-title">
        Job Search, Simplified
      </h2>
      <p className={styles.description}>
        Discover jobs the way you prefer: actively search or get AI-curated alerts directly on WhatsApp.
      </p>
      <div className={styles.cardContainer}>
        {options.map((option, index) => (
          <div
            key={index}
            className={styles.card}
            role="region"
            aria-label={option.title}
          >
            <div className={styles.iconContainer}>{option.icon}</div>
            <h3 className={styles.cardTitle}>{option.title}</h3>
            <p className={styles.cardDescription}>{option.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Job;
