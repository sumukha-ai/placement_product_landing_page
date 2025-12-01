import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './HowItWorks.module.css';
import { FaUserEdit, FaUpload, FaMagic, FaFileAlt } from 'react-icons/fa';

const steps = [
  {
    icon: <FaUserEdit aria-hidden="true" />,
    title: 'Fill Your Details',
    description: 'Tell us about your experience, skills, and goals in minutes.',
  },
  {
    icon: <FaUpload aria-hidden="true" />,
    title: 'Upload Job Description',
    description: 'Paste or upload the JD for a role you want to apply for.',
  },
  {
    icon: <FaMagic aria-hidden="true" />,
    title: 'Get AI Match %',
    description: 'Our AI compares your resume to the JD & finds improvement areas.',
  },
  {
    icon: <FaFileAlt aria-hidden="true" />,
    title: 'Receive Optimized Resume',
    description: 'You get a professional resume tailored exactly to that job.',
  },
];

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      className={styles.howItWorksSection}
      id="how-it-works"
      aria-labelledby="how-it-works-title"
    >
      <h2 className={styles.heading} id="how-it-works-title">
        How It Works
      </h2>
      <p className={styles.subheading}>Your dream job is just 4 steps away.</p>

      <div className={styles.stepsContainer}>
        {steps.map((step, index) => (
          <article
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200}
            className={styles.stepCard}
            role="region"
            aria-label={step.title}
          >
            <div className={styles.icon}>{step.icon}</div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDesc}>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
