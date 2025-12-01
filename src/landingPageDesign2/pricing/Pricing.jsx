// src/sections/Pricing.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Pricing.module.css';
import { 
  Users,
  Sparkles,
  Headphones,
  Plug,
  Calendar,
  Check,
  Phone,
  ArrowRight,
  Clock,
  Shield,
  Zap,
  DollarSign,
  TrendingUp,
} from 'lucide-react';

const Pricing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: false,
      offset: 80,
    });
  }, []);

  const handleScheduleCall = () => {
    navigate('/contact');
  };

  const pricingFactors = [
    {
      icon: Users,
      title: 'Number of Students',
      description: 'Scale pricing based on your placement cycle size',
      color: '#6366F1',
    },
    {
      icon: Headphones,
      title: 'Support Level',
      description: 'Dedicated success manager & training included',
      color: '#10B981',
    },
    {
      icon: Plug,
      title: 'Integrations',
      description: 'Connect with your existing systems seamlessly',
      color: '#F59E0B',
    },
    {
      icon: Calendar,
      title: 'Contract Duration',
      description: 'Flexible semester or annual commitments',
      color: '#8B5CF6',
    },
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'No Overpaying',
      description: "Pay only for features you'll actually use",
    },
    {
      icon: TrendingUp,
      title: 'Scalable Growth',
      description: 'Pricing adapts as your program expands',
    },
    {
      icon: Shield,
      title: 'Transparent Pricing',
      description: 'No hidden fees or surprise charges',
    },
    {
      icon: Zap,
      title: 'Flexible Payments',
      description: 'Annual, semester, or custom payment plans',
    },
  ];

  const guarantees = [
    {
      icon: Clock,
      value: '24 Hours',
      label: 'Quote Delivery Time',
    },
    {
      icon: Calendar,
      value: '14 Days',
      label: 'Free Trial Period',
    },
    {
      icon: Shield,
      value: 'Zero',
      label: 'Hidden Fees',
    },
    {
      icon: Check,
      value: '100%',
      label: 'Transparent Process',
    },
  ];

  return (
    <section className={styles.pricing} id='pricing'>
      <div className={styles.bgGradient}></div>

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header} data-aos="fade-up">
          <p className={styles.subtitle}>
            <Sparkles size={14} className={styles.sparkle} />
            Custom Pricing
          </p>
          <h2 className={styles.heading}>
            Pricing That Fits
            <span className={styles.gradient}> Your Institution</span>
          </h2>
          <p className={styles.description}>
            Every college is unique. Your pricing should be too. We'll build a plan that matches your exact needs and budget.
          </p>
        </div>

        {/* Pricing Factors */}
        <div className={styles.factorsSection}>
          <h3 className={styles.sectionTitle} data-aos="fade-up">
            What Influences Your Custom Pricing?
          </h3>
          
          <div className={styles.factorsGrid}>
            {pricingFactors.map((factor, index) => {
              const Icon = factor.icon;
              return (
                <div
                  key={index}
                  className={styles.factorCard}
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                >
                  <div className={styles.factorIcon} style={{ color: factor.color }}>
                    <Icon size={32} strokeWidth={1.8} />
                  </div>
                  <h4 className={styles.factorTitle}>{factor.title}</h4>
                  <p className={styles.factorDescription}>{factor.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits Section */}
        <div className={styles.benefitsSection}>
          <h3 className={styles.sectionTitle} data-aos="fade-up">
            Why Custom Pricing Works Better
          </h3>

          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className={styles.benefitCard}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className={styles.benefitIconWrapper}>
                    <Icon size={24} strokeWidth={2} className={styles.benefitIcon} />
                  </div>
                  <div className={styles.benefitContent}>
                    <h4 className={styles.benefitTitle}>{benefit.title}</h4>
                    <p className={styles.benefitDescription}>{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced CTA Section */}

      </div>
    </section>
  );
};

export default Pricing;
