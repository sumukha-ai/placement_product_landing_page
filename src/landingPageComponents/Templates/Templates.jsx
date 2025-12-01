import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Templates.module.css';
import { Link } from 'react-router-dom';

import templateImg1 from '../../assets/templates/image.png';
import templateImg2 from '../../assets/templates/image2.png';

const Templates = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const templates = [
    { img: templateImg1, title: 'Modern Professional Resume Template' },
    { img: templateImg2, title: 'Creative Resume Design Template' },
    { img: templateImg1, title: 'Simple Elegant Resume Template' },
    { img: templateImg2, title: 'Tech Resume Template' },
  ];

  return (
    <section
      className={styles.Templates}
      id="template"
      aria-labelledby="templates-heading"
      aria-label="Resume Template Selection"
    >
      <h2 id="templates-heading" className={styles.title}>
        Explore Resume Templates
      </h2>
      <p className={styles.subtitle}>
        Polished, professional, and ATS-friendly designs for every career stage.
      </p>

      <div className={styles.grid}>
        {templates.map((template, index) => (
          <div
            key={index}
            className={styles.card}
            data-aos="fade-up"
            data-aos-delay={index * 200}
            aria-label={`Resume Template: ${template.title}`}
          >
            <img
              src={template.img}
              alt={template.title}
              className={styles.image}
              loading="lazy"
            />
            <p className={styles.label}>{template.title}</p>
          </div>
        ))}
      </div>

      <Link
        to="/resume-templates"
        className={styles.viewMore}
        aria-label="View more resume templates"
      >
        View More Templates →
      </Link>
    </section>
  );
};

export default Templates;
