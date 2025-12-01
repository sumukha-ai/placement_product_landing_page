import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.css';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Background Blobs */}
        <div className={styles.backgroundBlobs}>
          <div className={`${styles.blob} ${styles.blob1}`}></div>
          <div className={`${styles.blob} ${styles.blob2}`}></div>
          <div className={`${styles.blob} ${styles.blob3}`}></div>
        </div>

        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <span className={styles.errorCode}>404</span>
          </div>

          <h1 className={styles.title}>Page Not Found</h1>
          <p className={styles.description}>
            Looks like you've followed a broken link or entered a URL that doesn't exist on this site.
          </p>

          <div className={styles.buttonGroup}>
            <button
              className={styles.primaryButton}
              onClick={() => navigate('/')}
            >
              <Home size={20} />
              Back to Home
            </button>
            <button
              className={styles.secondaryButton}
              onClick={() => navigate(-1)}
            >
              <ArrowLeft size={20} />
              Go Back
            </button>
          </div>

          <div className={styles.suggestions}>
            <h3>Quick Links:</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
