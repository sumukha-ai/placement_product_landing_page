// src/sections/Footer.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Footer.module.css';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
} from 'lucide-react';
import { LanguageOutlined } from '@mui/icons-material';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleHashNavigation = (hash) => {
    navigate('/');
    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const footerLinks = {
    product: [
      { name: 'Features', hash: '#features' },
      { name: 'Pricing', hash: '#pricing' },
      { name: 'Demo', path: '/contact' },
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Contact', path: '/contact' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: LanguageOutlined, url: 'https://sumukha.ai', label: 'Website' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top Section */}
        <div className={styles.topSection}>
          <div className={styles.brandSection}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>PB</div>
              <span className={styles.logoText}>Placement Bot</span>
            </div>
            <p className={styles.tagline}>
              Empowering colleges with AI-powered placement management.
              Streamline processes, engage students, and achieve 10x better results.
            </p>
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label={social.label}
                  >
                    <Icon size={20} strokeWidth={2} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className={styles.linksSection}>
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Product</h4>
              <ul className={styles.linkList}>
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    {link.hash ? (
                      <button
                        onClick={() => handleHashNavigation(link.hash)}
                        className={styles.link}
                      >
                        {link.name}
                      </button>
                    ) : (
                      <Link to={link.path} className={styles.link}>
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Company</h4>
              <ul className={styles.linkList}>
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className={styles.link}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            © {currentYear} Placement Bot by Sumukha AI. All rights reserved.
          </p>

          <div className={styles.contactSection}>
            <div className={styles.contactItem}>
              <Mail size={16} strokeWidth={2} />
              <a href="mailto:hello@placementbot.com" className={styles.contactLink}>
                hello@placementbot.com
              </a>
            </div>
            <div className={styles.contactItem}>
              <Phone size={16} strokeWidth={2} />
              <a href="tel:+911234567890" className={styles.contactLink}>
                +91 123 456 7890
              </a>
            </div>
            <div className={styles.contactItem}>
              <MapPin size={16} strokeWidth={2} />
              <span className={styles.contactText}>Bangalore, India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
