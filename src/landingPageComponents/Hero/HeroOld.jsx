import React from 'react';
import styles from './HeroOld.module.css';
import { CheckCircle } from '@mui/icons-material';
import Lottie from 'lottie-react';
import animationData from '../../assets/girl_animation.json';

const HeroOld = () => {
    return (
        <section className={styles.hero} aria-label="Hero section - ResumeBot Introduction">
            <div className={styles.heroContent}>
                <div className={styles.heroText}>
                    <h1>
                        AI Resume Builder for Students & Freshers – Your Smart Career Assistant
                    </h1>
                    <p>
                        Create ATS-optimized resumes, match job descriptions, and boost your career –
                        all from your WhatsApp. ResumeBot is your intelligent companion for job search
                        success, designed especially for students, freshers, and interns.
                    </p>
                    <a
                        href="/login"
                        className={styles.ctaButton}
                        aria-label="Start building your resume with ResumeBot on WhatsApp"
                        rel="noopener noreferrer"
                    >
                        Get Started on WhatsApp →
                    </a>
                </div>
            </div>

            {/* Lottie Animation */}
            <div
                className={styles.heroAnimation}
                aria-hidden="true"
                role="presentation"
            >
                <Lottie animationData={animationData} loop={true} />
            </div>
        </section>
    );
};

export default HeroOld;
