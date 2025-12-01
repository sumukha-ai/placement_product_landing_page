// src/sections/HowItWorks.jsx
import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './HowItWorks.module.css';
import { Description, Event, WhatsApp, Psychology, Dashboard } from '@mui/icons-material';

const HowItWorks = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [hoveredStep, setHoveredStep] = useState(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true,
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleSections((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: '1',
      title: 'AI-Powered Resume Builder',
      description: 'Students create professional, ATS-optimized resumes using AI assistance. Choose from multiple templates, get smart content suggestions, and export in various formats.',
      icon: <Description />,
      color: '#EC4899',
      bgColor: '#FCE7F3',
    },
    {
      number: '2',
      title: 'Schedule & Manage Drives',
      description: 'Create job postings, schedule campus drives, send automated invitations, and track applications. Manage the entire recruitment cycle from one dashboard.',
      icon: <Event />,
      color: '#10B981',
      bgColor: '#D1FAE5',
    },
    {
      number: '3',
      title: 'WhatsApp Notifications',
      description: 'Reach students instantly via WhatsApp. Send job alerts, interview schedules, and updates with 98% open rates. Students can respond and confirm directly.',
      icon: <WhatsApp />,
      color: '#25D366',
      bgColor: '#D1F7E5',
    },
    {
      number: '4',
      title: 'AI Mock Interviews',
      description: 'Students practice with AI-powered interview simulations. Get instant feedback on communication, content quality, and confidence levels before the real interview.',
      icon: <Psychology />,
      color: '#A855F7',
      bgColor: '#F3E8FF',
    },
    {
      number: '5',
      title: 'Track Everything',
      description: 'Real-time analytics dashboard showing placement statistics, student progress, company engagement, and success metrics. Make data-driven decisions to improve outcomes.',
      icon: <Dashboard />,
      color: '#F59E0B',
      bgColor: '#FEF3C7',
    },
  ];

  return (
    <section className={styles.howItWorks}>
      {/* Animated Gradient Background */}
      <div className={styles.gradientBg}></div>

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header} data-aos="fade-up" data-aos-delay="0">
          <p className={styles.subtitle}>How it works</p>
          <h2 className={styles.heading}>
            The Complete Placement
            <span className={styles.gradient}> Management Solution</span>
          </h2>
          <p className={styles.description}>
            From resume building to final placements — manage everything in one powerful platform.
          </p>

          {/* Decorative Line */}
          <div className={styles.decorativeLine}></div>
        </div>

        {/* Steps */}
        <div className={styles.steps}>
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)}
              data-index={index}
              className={`${styles.step} ${index % 2 === 1 ? styles.reverse : ''} ${
                visibleSections.includes(index) ? styles.visible : ''
              }`}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              data-aos-delay={`${index * 100}`}
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              {/* Content */}
              <div className={styles.stepContent}>
                <div className={styles.stepHeader}>
                  <div
                    className={styles.stepNumber}
                    style={{
                      background: step.color,
                      boxShadow: `0 8px 24px ${step.color}33`,
                    }}
                  >
                    <span className={styles.numberText}>{step.number}</span>
                  </div>
                  <div
                    className={styles.stepIcon}
                    style={{ color: step.color }}
                  >
                    {step.icon}
                  </div>
                </div>

                <div className={styles.stepTextContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div
                    className={styles.connectorLine}
                    style={{
                      background: step.color,
                    }}
                  ></div>
                )}
              </div>

              {/* Visual */}
              <div className={styles.stepVisual}>
                <div
                  className={`${styles.visualBox} ${
                    hoveredStep === index ? styles.hovered : ''
                  }`}
                  style={{
                    borderColor: step.color,
                  }}
                >
                  <div
                    className={styles.placeholderContent}
                    style={{
                      background: `linear-gradient(135deg, ${step.bgColor} 0%, ${step.color}10 100%)`,
                    }}
                  >
                    <div className={styles.iconWrapper} style={{ color: step.color }}>
                      <div className={styles.placeholderIcon}>
                        {step.icon}
                      </div>
                      <div className={styles.pulseRing}></div>
                    </div>

                    <p className={styles.placeholderText}>
                      {step.title}
                    </p>
                    <p className={styles.placeholderDims}>
                      Add your image/video here
                    </p>
                  </div>
                </div>

                {/* Floating Elements */}
                <div
                  className={styles.floatingElement}
                  style={{ background: step.color }}
                ></div>
                <div
                  className={styles.floatingElement2}
                  style={{ borderColor: step.color }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className={styles.bgBlur1}></div>
      <div className={styles.bgBlur2}></div>
      <div className={styles.bgBlur3}></div>
    </section>
  );
};

export default HowItWorks;
