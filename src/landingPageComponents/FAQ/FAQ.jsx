// src/sections/FAQ.jsx
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './FAQ.module.css';
import { Plus, X } from 'lucide-react';

const faqs = [
  {
    question: 'How quickly can we get started with Placement Bot?',
    answer: 'Most colleges are up and running within 24 hours. Our onboarding team will help you import student data, set up your dashboard, and train your team—all in a single day.',
  },
  {
    question: 'Do students need to download an app?',
    answer: 'No downloads required. Students receive WhatsApp notifications and can access their profiles, resumes, and interview schedules through any web browser.',
  },
  {
    question: 'How does the AI interview preparation work?',
    answer: 'Our AI conducts realistic mock interviews based on job descriptions and company profiles. It evaluates the answers—then provides detailed feedback to help students improve.',
  },
  {
    question: 'What happens after the free trial ends?',
    answer: 'You can continue with a plan that fits your needs—no pressure. All your data remains intact, and you can upgrade, downgrade, or pause anytime without long-term commitments.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-out-cubic',
      once: false,
    });
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className={styles.faqSection}
      id="faq"
      aria-label="Frequently Asked Questions"
    >
      <div className={styles.container}>
        <div className={styles.header} data-aos="fade-up">
          <p className={styles.subtitle}>Got Questions?</p>
          <h2 className={styles.title}>Everything You Need to Know</h2>
        </div>

        <div className={styles.faqContainer}>
          {faqs.map((item, index) => {
            const isActive = activeIndex === index;
            const answerId = `faq-answer-${index}`;
            return (
              <div
                key={index}
                className={styles.faqItem}
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <button
                  className={`${styles.question} ${isActive ? styles.questionActive : ''}`}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isActive}
                  aria-controls={answerId}
                  aria-label={`Toggle answer for: ${item.question}`}
                >
                  <h3>{item.question}</h3>
                  <span className={styles.iconWrapper}>
                    {!isActive ? 
                    <Plus
                      size={22}
                      strokeWidth={2.5}
                      className={`${styles.icon} ${styles.iconPlus} ${isActive ? styles.hidden : ''}`}
                    /> :
                    <X
                      size={22}
                      strokeWidth={2.5}
                      className={`${styles.icon} ${styles.iconX} ${isActive ? styles.visible : ''}`}
                    />}
                    
                  </span>

                </button>

                <div
                  id={answerId}
                  className={`${styles.answer} ${isActive ? styles.active : ''}`}
                  role="region"
                  aria-hidden={!isActive}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
};

export default FAQ;
