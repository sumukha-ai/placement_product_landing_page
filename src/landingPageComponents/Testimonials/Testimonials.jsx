import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from './Testimonials.module.css';

const testimonialsData = [
  {
    name: "John Doe",
    position: "Software Engineer",
    text: "ResumeBot completely transformed my job search! The resume builder and AI-powered mock interviews were game-changers for me.",
    avatar: "https://i.ibb.co/6RGgwRNP/del.jpg",
    rating: 5,
  },
  {
    name: "Jane Smith",
    position: "Product Manager",
    text: "I loved how easy it was to customize my resume. The AI tools gave me confidence that my resume was tailored to the job description.",
    avatar: "https://i.ibb.co/6RGgwRNP/del.jpg",
    rating: 4,
  },
  {
    name: "Robert Brown",
    position: "UX Designer",
    text: "The Career Dashboard is amazing. It made it so simple to keep track of my job applications and interviews. Highly recommend!",
    avatar: "https://i.ibb.co/6RGgwRNP/del.jpg",
    rating: 5,
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className={styles.testimonialsSection}
      id="testimonials"
      aria-labelledby="testimonials-heading"
      aria-label="ResumeBot User Testimonials"
    >
      <div className={styles.container}>
        <h2 id="testimonials-heading" className={styles.sectionTitle}>
          ResumeBot Success Stories & Testimonials
        </h2>
        <p className={styles.sectionSubtitle}>
          Hear what users say about our AI resume builder, job matching, and interview coaching.
        </p>
        <div className={styles.testimonialsList}>
          {testimonialsData.map((testimonial, index) => (
            <article
              key={index}
              className={styles.testimonialItem}
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
              itemScope
              itemType="https://schema.org/Review"
            >
              <div className={styles.avatarContainer}>
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.name} - ${testimonial.position}`}
                  className={styles.avatar}
                  loading="lazy"
                />
              </div>
              <div className={styles.testimonialText}>
                <p className={styles.quote} itemProp="reviewBody">
                  “{testimonial.text}”
                </p>
              </div>
              <div className={styles.userDetails}>
                <h3 className={styles.userName} itemProp="author">{testimonial.name}</h3>
                <p className={styles.userPosition} itemProp="reviewRating">
                  {testimonial.position}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
