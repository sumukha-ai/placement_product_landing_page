// src/sections/Hero.jsx
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Hero.module.css';
import { ArrowForward, PlayArrow, Close } from '@mui/icons-material';
import heroVideo from '../assets/hero/2.mp4';
import demoVideo from '../assets/hero/demo.mp4'; // Your full demo video



const Hero = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const modalVideoRef = useRef(null);



  useEffect(() => {
    setIsVisible(true);
  }, []);



  // Intersection Observer for video play-on-view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (videoRef.current) {
            videoRef.current.play();
          }
        } else {
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      },
      {
        threshold: 0.3,
      }
    );


    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current);
    }


    return () => {
      if (videoContainerRef.current) {
        observer.unobserve(videoContainerRef.current);
      }
    };
  }, []);



  // Handle modal open
  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };



  // Handle modal close
  const handleCloseModal = () => {
    setIsModalOpen(false);
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
      modalVideoRef.current.currentTime = 0;
    }
    document.body.style.overflow = 'unset';
  };



  // Close modal when Escape is pressed
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        handleCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);



  return (
    <section className={styles.hero}>
      {/* Gradient Background */}
      <div className={styles.gradientBg}></div>


      <div className={styles.container}>
        {/* Content Section */}
        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          <h1 className={styles.heading}>
            Streamline Your Campus
            <span className={styles.gradient}> Placement Process</span>
          </h1>
          
          <p className={styles.subheading}>
            The all-in-one platform for colleges to manage placements, build resumes, 
            schedule interviews, and track analytics — powered by AI.
          </p>


          <div className={styles.ctaGroup}>
            <button 
              className={styles.primaryBtn}
              onClick={() => navigate('/register')}
            >
              Get Started Free
              <ArrowForward className={styles.btnIcon} />
            </button>
            <button 
              className={styles.secondaryBtn}
              onClick={() => navigate('/contact')}
            >
              Book a Demo
            </button>
          </div>


          <p className={styles.trustText}>
            Trusted by leading institutions • No credit card required
          </p>
        </div>


        {/* Video Section */}
        <div 
          ref={videoContainerRef}
          className={`${styles.heroVisual} ${isVisible ? styles.visible : ''}`}
        >
          <div className={styles.mockupContainer}>
            <div 
              className={styles.mockup}
              onClick={handleOpenModal}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleOpenModal()}
            >
              <div className={styles.mockupHeader}>
                <div className={styles.dots}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className={styles.mockupContent}>
                <video
                  ref={videoRef}
                  className={styles.videoContent}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src={heroVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Watch Demo Overlay */}
                <div className={styles.watchOverlay}>
                  <div className={styles.playIcon}>
                    <PlayArrow />
                  </div>
                  <span className={styles.watchText}>WATCH full demo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Floating Shapes */}
      <div className={styles.floatingShape1}></div>
      <div className={styles.floatingShape2}></div>
      <div className={styles.floatingShape3}></div>


      {/* Demo Modal */}
      {isModalOpen && (
        <div 
          className={styles.modalBackdrop}
          onClick={handleCloseModal}
        >
          <div 
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className={styles.closeBtn}
              onClick={handleCloseModal}
              aria-label="Close modal"
            >
              <Close />
            </button>
            
            <video
              ref={modalVideoRef}
              className={styles.modalVideo}
              controls
              autoPlay
              playsInline
            >
              <source src={demoVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};



export default Hero;
