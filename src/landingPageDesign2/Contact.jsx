// src/pages/Contact.jsx
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Contact.module.css';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle,
  Clock,
  Calendar,
  Sparkles,
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    role: '',
    students: '',
    message: '',
    preferredContact: 'email',
    preferredTime: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-out-cubic',
      once: false,
    });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setStatus({
        type: 'success',
        message: 'Thank you! We\'ll get back to you within 24 hours.'
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        institution: '',
        role: '',
        students: '',
        message: '',
        preferredContact: 'email',
        preferredTime: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 5000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email Us',
      value: 'hello@placementbot.com',
      href: 'mailto:hello@placementbot.com',
      color: '#6366F1'
    },
    {
      icon: Phone,
      label: 'Call Us',
      value: '+91 98765 43210',
      href: 'tel:+919876543210',
      color: '#10B981'
    },
    {
      icon: MapPin,
      label: 'Visit Us',
      value: 'Bangalore, Karnataka',
      color: '#F59E0B'
    }
  ];

  const benefits = [
    'Personalized 30-minute demo',
    'Custom pricing for your institution',
    'Free 14-day trial access',
    'Dedicated onboarding support'
  ];

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header} data-aos="fade-up">
          <p className={styles.subtitle}>
            <Sparkles size={14} className={styles.sparkle} />
            Get in Touch
          </p>
          <h1 className={styles.heading}>
            Ready to Transform Your
            <span className={styles.gradient}> Placement Process?</span>
          </h1>
          <p className={styles.description}>
            Schedule a personalized demo and discover how Placement Bot can revolutionize your institution's placement management.
          </p>
        </div>

        <div className={styles.content}>
          {/* Contact Info Card */}
          <div className={styles.infoSection} data-aos="fade-right">
            <div className={styles.infoCard}>
              <h2 className={styles.infoTitle}>Let's Connect</h2>
              <p className={styles.infoText}>
                Fill out the form and our team will reach out to schedule a demo tailored to your institution's needs.
              </p>

              <div className={styles.contactMethods}>
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <div key={index} className={styles.contactMethod}>
                      <div 
                        className={styles.methodIcon}
                        style={{ 
                          background: `${method.color}15`,
                          color: method.color 
                        }}
                      >
                        <Icon size={20} strokeWidth={2} />
                      </div>
                      <div className={styles.methodContent}>
                        <p className={styles.methodLabel}>{method.label}</p>
                        {method.href ? (
                          <a href={method.href} className={styles.methodValue}>
                            {method.value}
                          </a>
                        ) : (
                          <p className={styles.methodValue}>{method.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className={styles.benefits}>
                <p className={styles.benefitsTitle}>
                  <CheckCircle size={18} strokeWidth={2.5} />
                  What to Expect
                </p>
                <ul className={styles.benefitsList}>
                  {benefits.map((benefit, index) => (
                    <li key={index}>
                      <CheckCircle size={16} strokeWidth={2.5} />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.formSection} data-aos="fade-left">
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Full Name <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="Dr. John Doe"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email Address <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="john.doe@university.edu"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>
                    Phone Number <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="institution" className={styles.label}>
                    Institution Name <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    id="institution"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="XYZ University"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="role" className={styles.label}>
                    Your Role <span className={styles.required}>*</span>
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className={styles.select}
                  >
                    <option value="">Select your role</option>
                    <option value="placement-director">Placement Director</option>
                    <option value="tpo">Training & Placement Officer</option>
                    <option value="coordinator">Placement Coordinator</option>
                    <option value="hod">HOD</option>
                    <option value="principal">Principal/Dean</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="students" className={styles.label}>
                    Number of Students <span className={styles.required}>*</span>
                  </label>
                  <select
                    id="students"
                    name="students"
                    value={formData.students}
                    onChange={handleChange}
                    required
                    className={styles.select}
                  >
                    <option value="">Select range</option>
                    <option value="0-500">0 - 500</option>
                    <option value="500-1000">500 - 1,000</option>
                    <option value="1000-2000">1,000 - 2,000</option>
                    <option value="2000-5000">2,000 - 5,000</option>
                    <option value="5000+">5,000+</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="preferredContact" className={styles.label}>
                    Preferred Contact Method <span className={styles.required}>*</span>
                  </label>
                  <select
                    id="preferredContact"
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleChange}
                    required
                    className={styles.select}
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone Call</option>
                    <option value="whatsapp">WhatsApp</option>
                    <option value="video">Video Call</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="preferredTime" className={styles.label}>
                    Preferred Time
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className={styles.select}
                  >
                    <option value="">Select time slot</option>
                    <option value="morning">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 3 PM)</option>
                    <option value="evening">Evening (3 PM - 6 PM)</option>
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Additional Requirements
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className={styles.textarea}
                  placeholder="Tell us about your specific requirements or questions..."
                ></textarea>
              </div>

              {status.message && (
                <div className={`${styles.status} ${styles[status.type]}`}>
                  <CheckCircle size={20} strokeWidth={2.5} />
                  <span>{status.message}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitBtn}
              >
                {isSubmitting ? (
                  <>
                    <span className={styles.spinner}></span>
                    Sending Request...
                  </>
                ) : (
                  <>
                    Schedule Demo
                    <Send size={20} strokeWidth={2} className={styles.btnIcon} />
                  </>
                )}
              </button>

              <p className={styles.formNote}>
                <Clock size={14} strokeWidth={2} />
                We typically respond within 2-4 hours during business hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
