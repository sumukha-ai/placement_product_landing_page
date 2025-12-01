import React from 'react';
import styles from './CTASection.module.css';

const CTASection = () => {
  return (
    <section
      className={styles.ctaSection}
      id="cta"
      aria-labelledby="cta-heading"
      aria-label="ResumeBot Call to Action Section"
    >
      <div className={styles.container}>
        <h2 id="cta-heading" className={styles.heading}>
          Unlock Your Dream Career with ResumeBot
        </h2>
        <p className={styles.subHeading}>
          Start building ATS-optimized resumes, practice AI-driven interviews, and apply to jobs—all from a single platform designed for freshers and job seekers.
        </p>
        <div className={styles.buttonContainer}>
          <a
            href="/sign-up"
            className={styles.ctaButton}
            aria-label="Click to sign up and start using ResumeBot"
          >
            Start Building My Resume →
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
