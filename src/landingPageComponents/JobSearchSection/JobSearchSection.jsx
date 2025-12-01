import React, { useState, useEffect } from 'react';
import styles from './JobSearchSection.module.css';
import SearchIcon from '@mui/icons-material/Search';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import JobAlert from '../JobAlert/JobAlert';

const jobAlerts = [
  "New job alert: Web Developer",
  "New job alert: Product Designer",
  "New job alert: Marketing Specialist",
  "New job alert: Data Analyst",
  "New job alert: UX Researcher"
];

const JobSearchSection = () => {
  const [visibleAlerts, setVisibleAlerts] = useState(jobAlerts.slice(0, 4));
  const [index, setIndex] = useState(4);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleAlerts((prev) => {
        const next = jobAlerts[index % jobAlerts.length];
        setIndex((i) => i + 1);
        return [...prev.slice(1), next];
      });
    }, 100); // every 3 seconds
    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className={styles.jobSearchSection}>
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>
          Don’t Let Your Resume Sit Idle — Find Your Next Job!
        </h2>
        <p className={styles.subheading}>
          Edit it, Search smart, and Get real-time alerts on WhatsApp.
        </p>
      </div>

      <div className={styles.jobSearch}>
        {/* Search Card */}
        <div className={`${styles.cardBase} ${styles.searchContainer}`}>
          <div className={styles.iconCircle}>
            <SearchIcon style={{ color: 'white', fontSize: 32 }} />
          </div>
          <div className={styles.jobListings}>
            <div className={styles.jobListing}>
              <p className={styles.jobTitle}>
                <WorkOutlineIcon style={{ fontSize: 18 }} /> Web Developer
              </p>
              <p className={styles.companyName}>ABC Tech Co.</p>
            </div>
            <div className={styles.jobListing}>
              <p className={styles.jobTitle}>
                <WorkOutlineIcon style={{ fontSize: 18 }} /> Product Designer
              </p>
              <p className={styles.companyName}>XYZ Studios</p>
            </div>
            <div className={styles.jobListing}>
              <p className={styles.jobTitle}>
                <WorkOutlineIcon style={{ fontSize: 18 }} /> Marketing Specialist
              </p>
              <p className={styles.companyName}>Global Media</p>
            </div>
          </div>
          <button className={`${styles.cardButton} ${styles.searchButton}`}>
            Start Searching
          </button>
        </div>

        {/* WhatsApp Card */}
        <div className={`${styles.cardBase} ${styles.whatsappCard}`}>
          <div className={`${styles.iconCircle} ${styles.whatsappIconCircle}`}>
            <WhatsAppIcon style={{ color: 'white', fontSize: 32 }} />
          </div>
         <JobAlert/>
          <button className={`${styles.cardButton} ${styles.whatsappButton}`}>
            Get Alerts on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobSearchSection;
