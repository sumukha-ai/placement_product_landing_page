// src/sections/CTABanner.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './CTABanner.module.css';
import { 
  ArrowRight,
  Shield,
  Users,
  Sparkles,
  TrendingUp,
  CheckCircle,
} from 'lucide-react';

const CTABanner = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: false,
    });
  }, []);

  const handleGetStarted = () => {
    navigate('/contact');
  };

const trustBadges = [
  {
    icon: TrendingUp,
    text: '10x Faster Process',
  },
  {
    icon: Users,
    text: 'No Student Limit',
  },
  {
    icon: Shield,
    text: 'Enterprise Security',
  },
  {
    icon: Sparkles,
    text: 'AI-Powered',
  },
];


  return (
    <section className={styles.ctaBanner}>
      {/* Floating geometric shapes */}
      <div className={styles.shape1}></div>
      <div className={styles.shape2}></div>
      <div className={styles.shape3}></div>
      <div className={styles.shape4}></div>

      {/* Grid pattern overlay */}
      <div className={styles.gridPattern}></div>

      {/* Gradient overlay for depth */}
      <div className={styles.gradientOverlay}></div>

      <div className={styles.container} data-aos="fade-up">
        <div className={styles.content}>
          <h2 className={styles.heading}>
            Transform Your Placement Process Today
          </h2>
          <p className={styles.description}>
            Stop juggling spreadsheets and missed emails. Give your students the modern placement experience they deserve.
          </p>
          <p className={styles.subtext}>
            14-day free trial · No credit card required · Setup in minutes
          </p>

          <button className={styles.primaryBtn} onClick={handleGetStarted}>
            Get Started Now
            <ArrowRight size={20} strokeWidth={2.5} className={styles.arrow} />
          </button>

          <div className={styles.trustBadges}>
            {trustBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div key={index} className={styles.badge}>
                  <Icon size={18} strokeWidth={2} />
                  <span>{badge.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
