import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Pricing.module.css';

const Pricing = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const plans = [
    {
      title: 'Free',
      price: '$0',
      tagline: 'Perfect for starters',
      description: 'Start with basic tools to build your first AI-powered resume.',
      features: [
        'Basic Resume Builder',
        '1 ATS Resume Template',
        'Cover Letter Generator',
        'Limited Job Matching',
        'Cloud Resume Storage',
      ],
    },
    {
      title: 'Pro',
      price: '$12/mo',
      tagline: 'Great for job seekers',
      description: 'Unlock AI interviews and job-matching tools to land jobs faster.',
      features: [
        'All Free Features',
        '5 Professional Resume Templates',
        'Advanced Job Matching',
        'AI Mock Interviews',
        'Cover Letter Personalization',
      ],
      highlight: true,
    },
    {
      title: 'Premium',
      price: '$24/mo',
      tagline: 'Best for professionals',
      description: 'Maximize career growth with automation and personalized job tracking.',
      features: [
        'All Pro Features',
        'Unlimited Resume Templates',
        'Priority Support',
        'Full Job Board Integration',
        'Smart Career Suggestions',
      ],
    },
  ];

  return (
    <section
      className={styles.pricingSection}
      id="pricing"
      aria-label="ResumeBot Pricing Plans for Students and Professionals"
    >
      <h2 className={styles.title}>Choose Your Plan</h2>
      <p className={styles.subtitle}>
        ResumeBot offers tailored plans for every stage of your career.
      </p>

      <div className={styles.cardContainer}>
        {plans.map((plan, index) => (
          <article
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 500}
            className={`${styles.card} ${plan.highlight ? styles.highlight : ''}`}
            aria-label={`${plan.title} Plan`}
          >
            <h3 className={styles.planTitle}>{plan.title}</h3>
            <p className={styles.tagline}>{plan.tagline}</p>
            <p className={styles.price} aria-label={`Price: ${plan.price}`}>{plan.price}</p>
            <p className={styles.description}>{plan.description}</p>
            <ul className={styles.features}>
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button
              className={styles.button}
              aria-label={`Get started with the ${plan.title} plan`}
            >
              Get Started
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
