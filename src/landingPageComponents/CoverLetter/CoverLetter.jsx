import React from 'react';
import styles from './CoverLetter.module.css';
import cl1 from '../../assets/cl1.avif';
import cl2 from '../../assets/cl2.avif';
import cl3 from '../../assets/cl1.avif';
import cl4 from '../../assets/cl2.avif';

const templates = [cl1, cl2, cl3, cl4];

const CoverLetterSection = () => (
    <section className={styles.coverLetterSection}>
        <h2 className={styles.heading}>
            Don’t Just Apply — <span>Stand Out</span> With a Tailored Cover Letter
        </h2>

        <div className={styles.content}>
            <div className={styles.visual}>
                <div className={styles.blobBackground}></div>
                <div className={styles.stackContainer}>
                    {templates.map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt={`Cover Letter ${i + 1}`}
                            className={`${styles.card} ${styles[`card${i + 1}`]}`}
                        />
                    ))}
                </div>
            </div>

            <div className={styles.right}>

                <div className={styles.uiSteps}>
                    <div className={styles.step}>
                        <div className={styles.stepIcon}>📎</div>
                        <div className={styles.stepBox}>
                            <h4>Select a Resume</h4>
                            <p>Pick from the resumes you've already created.</p>
                        </div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepIcon}>🎨</div>
                        <div className={styles.stepBox}>
                            <h4>Choose a Style</h4>
                            <p>Modern, professional, or creative — your choice.</p>
                        </div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepIcon}>✅</div>
                        <div className={styles.stepBox}>
                            <h4>Preview & Download</h4>
                            <p>Get a polished, ready-to-use resume in seconds.</p>
                        </div>
                    </div>
                </div>

                <button className={styles.ctaButton}>Start Building</button>
            </div>
        </div>
    </section>
);

export default CoverLetterSection;
