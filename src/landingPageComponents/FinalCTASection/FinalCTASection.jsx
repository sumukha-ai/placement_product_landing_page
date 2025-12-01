import React from 'react';
import styles from './FinalCTASection.module.css';
import DescriptionIcon from '@mui/icons-material/Description';
import EditNoteIcon from '@mui/icons-material/EditNote';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SearchIcon from '@mui/icons-material/Search';

const FinalCTASection = () => {
  return (
    <section className={styles.ctaSection}>
      {/* Background Icons */}
      <div className={styles.iconBg}>
        <DescriptionIcon sx={{fontSize:"80px"}} className={`${styles.icon} ${styles.icon1}`} />
        <EditNoteIcon sx={{fontSize:"80px"}} className={`${styles.icon} ${styles.icon2}`} />
        <WorkOutlineIcon sx={{fontSize:"80px"}} className={`${styles.icon} ${styles.icon3}`} />
        <MailOutlineIcon sx={{fontSize:"80px"}} className={`${styles.icon} ${styles.icon4}`} />
        <SearchIcon sx={{fontSize:"80px"}} className={`${styles.icon} ${styles.icon5}`} />
      </div>

      {/* CTA Content */}
      <div className={styles.content}>
        <h2 className={styles.heading}>What’s Stopping You Now?</h2>
        <p className={styles.subheading}>
          Build your resume, write your cover letter, and get hired — all in one place.
        </p>
        <button className={styles.ctaButton}>Get Started for Free</button>
      </div>
    </section>
  );
};

export default FinalCTASection;
