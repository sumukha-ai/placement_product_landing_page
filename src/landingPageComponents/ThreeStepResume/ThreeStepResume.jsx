import React from 'react';
import styles from './ThreeStepResume.module.css';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const steps = [
  {
    icon: <ArticleOutlinedIcon fontSize="inherit" />,
    title: 'Choose a Template',
    desc: 'Pick from professionally designed resume templates.',
  },
  {
    icon: <EditNoteOutlinedIcon fontSize="inherit" />,
    title: 'Add Your Details',
    desc: 'Fill in work experience, skills, and education.',
  },
  {
    icon: <FileDownloadOutlinedIcon fontSize="inherit" />,
    title: 'Download or Share',
    desc: 'Export as PDF or send instantly to recruiters.',
  },
];

const ThreeStepResume = () => {
  return (
    <section className={styles.stepsSection}>
      <h2 className={styles.heading}>Build a Job-Winning Resume in 3 Easy Steps</h2>
      <p className={styles.subheading}>
        Create a polished resume in minutes — tailored for hiring success.
      </p>

      <div className={styles.stepsContainer}>
        {steps.map((step, index) => (
          <div className={styles.stepCard} key={index}>
            <div className={styles.icon}>{step.icon}</div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDesc}>{step.desc}</p>
          </div>
        ))}
      </div>

      <button className={styles.startButton}>Start Building</button>
    </section>
  );
};

export default ThreeStepResume;
