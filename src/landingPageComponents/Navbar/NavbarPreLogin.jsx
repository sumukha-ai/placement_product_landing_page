import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavbarPreLogin.module.css';
import { Menu, X } from 'lucide-react';
import logoImage from '../../assets/logo/lsh.png'; // Update the path as necessary
const NavbarPreLogin = () => {
    const [isOpen, setIsOpen] = useState(false);
    // const [logoImage] = useState(null); // Set to null or import image path if available

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className={`${styles.navbar} ${isOpen ? styles.open : ''}`} role="navigation" aria-label="Main navigation">
            <div className={styles.navContainer}>
                {/* Logo Section - Conditional */}
                <div className={styles.logoSection}>
                    <NavLink
                        to="/"
                        className={styles.logo}
                        aria-label="Hire Camp Homepage"
                    >
                        {logoImage && (
                            <img
                                src={logoImage}
                                alt="Hire Camp Logo"
                                className={styles.logoImage}
                            />
                        )}
                        {/* <span className={styles.logoText}>Hire Camp</span> */}
                    </NavLink>
                </div>

                {/* Desktop Navigation */}
                <div className={styles.desktopNav}>
                    {/* Login Button */}
                    <NavLink
                        to="/login"
                        className={styles.loginBtn}
                    >
                        Login
                    </NavLink>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={styles.hamburger}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                >
                    {isOpen ? (
                        <X size={28} strokeWidth={2} />
                    ) : (
                        <Menu size={28} strokeWidth={2} />
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className={styles.mobileNav} id="mobile-menu">
                    <NavLink
                        to="/login"
                        className={styles.mobileLoginBtn}
                        onClick={closeMenu}
                    >
                        Login
                    </NavLink>
                </div>
            )}
        </nav>
    );
};

export default NavbarPreLogin;
