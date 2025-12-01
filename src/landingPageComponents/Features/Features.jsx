import React from 'react';
import styles from './Features.module.css';

const featuresData = [
  {
    title: 'Smart Resume Toolkit',
    description: 'Create and customize professional resumes with ATS-ready templates. Our AI matches your resume to job descriptions and highlights missing skills.',
    icon: 'https://i.ibb.co/ZR8p0GmR/resume-toolkit.png',
    alt: 'ATS Resume Builder Toolkit Icon',
  },
  {
    title: 'AI-Powered Interview Coach',
    description: 'Practice real-world interview questions with AI. Get feedback, improve answers, and boost confidence for job interviews and campus placements.',
    icon: 'https://i.ibb.co/Q3HvDd0g/interview.png',
    alt: 'AI Interview Preparation Icon',
  },
  {
    title: 'Cover Letter & Application Suite',
    description: 'Automatically generate tailored cover letters and track job applications across platforms from one dashboard.',
    icon: 'https://i.ibb.co/F40nk13M/cl.png',
    alt: 'Cover Letter Generator and Job Application Tracker Icon',
  },
  {
    title: 'Unified Career Dashboard',
    description: 'Monitor your job applications, resumes, interviews, and feedback with our smart, cloud-based career dashboard.',
    icon: 'https://i.ibb.co/fdNztsdM/dashboard.png',
    alt: 'Career Tracker Dashboard Icon',
  }
];

const Features = () => {
  return (
    <section
      className={styles.featuresSection}
      aria-label="ResumeBot Core Features for Job Seekers and Students"
    >
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Key Features of ResumeBot</h2>
        <p className={styles.sectionSubtitle}>
          AI-powered tools to help students and freshers get hired faster
        </p>

        <div className={styles.featuresList}>
          {featuresData.map((feature, index) => (
            <article key={index} className={styles.featureItem}>
              <div className={styles.icon}>
                <img
                  src={feature.icon}
                  alt={feature.alt}
                  loading="lazy"
                  width="64"
                  height="64"
                />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
