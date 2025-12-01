import React from 'react';
import styles from './WhyUs.module.css';

const WhyUs = () => {
  const features = [
    {
      title: "✔ ATS Optimization",
      description: "We ensure your resume is formatted and keyworded to pass modern Applicant Tracking Systems.",
    },
    {
      title: "🧠 AI Grammar & Clarity Check",
      description: "No more typos or awkward phrasing. We use AI to polish every line of your resume.",
    },
    {
      title: "🎯 Role-Based Tailoring",
      description: "Get auto-customized resumes for each job with relevant skills, achievements, and impact-driven language.",
    },
    {
      title: "📊 Visual Feedback & Scoring",
      description: "See what's strong, what's weak, and improve every section before you apply.",
    },
  ];

  return (
    <section className={styles.whyUsSection}>
      <h2 className={styles.heading}>Why Choose ResumeBot?</h2>
      <div className={styles.cards}>
        {features.map((f, idx) => (
          <div className={styles.card} key={idx}>
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </div>
        ))}
      </div>
      <div className={styles.ctaWrapper}>
        <a href="/resume/create" className={styles.ctaBtn}>
          Try ResumeBot Now →
        </a>
      </div>
    </section>
  );
};

export default WhyUs;
