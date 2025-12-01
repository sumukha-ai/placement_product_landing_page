import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarPreLogin from '../landingPageComponents/Navbar/NavbarPreLogin';
import Footer from '../landingPageComponents/Footer/Footer';
import { colleges } from '../config';
import styles from './LoginPage.module.css';
import { ChevronDown, LogIn, Building2 } from 'lucide-react';

const LoginPage = () => {
  const [selectedCollege, setSelectedCollege] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const navigate = useNavigate();

  const selectedCollegeData = colleges.find(c => c.id === selectedCollege);

  const handleCollegeSelect = (collegeId) => {
    setSelectedCollege(collegeId);
    setIsDropdownOpen(false);
  };

  const handleLogin = () => {
    if (!selectedCollegeData) return;
    
    setIsRedirecting(true);
    // Small delay for visual feedback
    setTimeout(() => {
      window.location.href = selectedCollegeData.redirect_url;
    }, 500);
  };

  return (
    <div className={styles.pageWrapper}>
      <NavbarPreLogin />
      
      <main className={styles.loginPage}>
        {/* Background Elements */}
        <div className={styles.backgroundBlobs}>
          <div className={`${styles.blob} ${styles.blob1}`}></div>
          <div className={`${styles.blob} ${styles.blob2}`}></div>
          <div className={`${styles.blob} ${styles.blob3}`}></div>
        </div>

        <div className={styles.loginContainer}>
          <div className={styles.loginCard}>
            {/* Header */}
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <Building2 size={32} strokeWidth={1.5} />
              </div>
              <h1 className={styles.title}>Welcome Back</h1>
              <p className={styles.subtitle}>
                Select your institution to continue to your dashboard
              </p>
            </div>

            {/* Dropdown */}
            <div className={styles.formGroup}>
              <label className={styles.label}>Select Your Institution</label>
              <div className={styles.dropdownWrapper}>
                <button
                  type="button"
                  className={`${styles.dropdown} ${isDropdownOpen ? styles.dropdownOpen : ''}`}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="listbox"
                >
                  <span className={selectedCollege ? styles.selectedText : styles.placeholderText}>
                    {selectedCollegeData ? selectedCollegeData.name : 'Choose your college...'}
                  </span>
                  <ChevronDown 
                    size={20} 
                    className={`${styles.chevron} ${isDropdownOpen ? styles.chevronRotated : ''}`}
                  />
                </button>

                {isDropdownOpen && (
                  <ul className={styles.dropdownMenu} role="listbox">
                    {colleges.map((college) => (
                      <li
                        key={college.id}
                        className={`${styles.dropdownItem} ${selectedCollege === college.id ? styles.dropdownItemSelected : ''}`}
                        onClick={() => handleCollegeSelect(college.id)}
                        role="option"
                        aria-selected={selectedCollege === college.id}
                      >
                        <span className={styles.collegeName}>{college.name}</span>
                        {selectedCollege === college.id && (
                          <span className={styles.checkmark}>✓</span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Login Button */}
            <button
              className={`${styles.loginButton} ${!selectedCollege ? styles.loginButtonDisabled : ''}`}
              onClick={handleLogin}
              disabled={!selectedCollege || isRedirecting}
            >
              {isRedirecting ? (
                <>
                  <span className={styles.spinner}></span>
                  Redirecting...
                </>
              ) : (
                <>
                  <LogIn size={20} />
                  Continue to Login
                </>
              )}
            </button>

            {/* Help Text */}
            <p className={styles.helpText}>
              Don't see your institution?{' '}
              <a href="/contact" className={styles.contactLink}>
                Contact us
              </a>
            </p>
          </div>

          {/* Additional Info */}
          <div className={styles.infoSection}>
            <div className={styles.infoCard}>
              <h3>🎓 For Students</h3>
              <p>Access your personalized resume builder, job alerts, and career resources.</p>
            </div>
            <div className={styles.infoCard}>
              <h3>🏢 For Institutions</h3>
              <p>Partner with us to provide career services to your students.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LoginPage;
