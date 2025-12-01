import React, { useEffect, useRef, useState } from 'react';
import styles from './ResumeData.module.css';

const resumeData = [
  ["Reason", "Impact (%)"],
  ["False or Misleading Info", "57%"],
  ["Typos / Grammar Errors", "80%"],
  ["Poor Formatting", "68%"],
  ["Lack of Job Keywords", "50%"],
  ["Not Tailored to Role", "61%"],
  ["Too Long / Too Generic", "50%"],
  ["ATS Rejection", "75%"]
];

const getBarWidth = (impact) => {
  const match = impact.match(/\d+/);
  return match ? Math.min(parseInt(match[0]), 100) : 0;
};

const ResumeData = () => {
  const sectionRef = useRef();
  const [animateBars, setAnimateBars] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setAnimateBars(true);
      }
    }, { threshold: 0.3 });

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <section ref={sectionRef} className={styles.resumeDataSection}>
      <h2 className={styles.h2}>Why Resumes Get Rejected</h2>
      <div className={styles.table}>
        <div className={`${styles.row} ${styles.header}`}>
          {resumeData[0].map((col, i) => (
            <div key={i} className={styles.cell}>{col}</div>
          ))}
        </div>

        {resumeData.slice(1).map((row, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            <div className={styles.cell}>{row[0]}</div>
            <div className={styles.cell}>
              <div className={styles.barWrapper}>
                <div
                  className={`${styles.barFill} ${animateBars ? styles.animate : ''}`}
                  style={{ width: animateBars ? `${getBarWidth(row[1])}%` : '0%' }}
                >
                  <span className={styles.barLabel}>{row[1]}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResumeData;
