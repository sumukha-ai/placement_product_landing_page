// src/sections/Features.jsx
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Features.module.css';
import {
    Brain,
    MessageCircle,
    BarChart3,
    FileText,
    Calendar,
    BarChart2,
    Zap,
    CreditCard,
    ShieldCheck,
    Sparkles,
} from 'lucide-react';


// Import your images here
import aiInterviewImage from '../../assets/feature/ai_int.png';
import whatsappGif from '../../assets/feature/wa.png';
import dashboardImage from '../../assets/feature/dash.png';

const Features = () => {
    const [imageErrors, setImageErrors] = useState({
        aiInterview: false,
        whatsapp: false,
        dashboard: false,
    });

    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: 'ease-out-cubic',
            once: false,
            offset: 80,
        });
    }, []);

    const handleImageError = (imageName) => {
        setImageErrors(prev => ({ ...prev, [imageName]: true }));
    };

    const featuredFeatures = [
        {
            id: 1,
            title: 'AI Mock Interviews That Feel Real',
            description: 'Practice makes perfect, but smart practice makes champions. Our AI interviewer adapts to your responses, asks follow-up questions, and gives you instant, actionable feedback. Walk into your next interview feeling confident and prepared.',
            image: aiInterviewImage,
            imageAlt: 'AI Mock Interview Interface',
            fallbackText: 'AI Interview',
            icon: Brain,
            color: '#A855F7',
            lightColor: '#f3e8ff69', // Light purple
            gradient: 'linear-gradient(135deg, #A855F7 0%, #D946EF 100%)',
            animation: 'fade-right',
        },
        {
            id: 2,
            title: 'WhatsApp Notifications Students Actually Read',
            description: "Forget email black holes and missed announcements. Reach students where they already are—on WhatsApp. Send job alerts, schedule changes, and important updates with a 98% open rate. Plus, they can respond instantly. It's that simple.",
            image: whatsappGif,
            imageAlt: 'WhatsApp Notification System',
            fallbackText: 'WhatsApp',
            icon: MessageCircle,
            color: '#25D366',
            lightColor: '#e2f9edff', // Light green
            gradient: 'linear-gradient(135deg, #25D366 0%, #34D399 100%)',
            animation: 'fade-left',
        },
        {
            id: 3,
            title: 'Analytics Dashboard That Tells The Story',
            description: 'Numbers mean nothing without context. Our real-time dashboard transforms raw data into compelling insights. Track placement rates, monitor student progress, and spot trends before they become problems. Make smarter decisions, faster.',
            image: dashboardImage,
            imageAlt: 'Analytics Dashboard',
            fallbackText: 'Dashboard',
            icon: BarChart3,
            color: '#F59E0B',
            lightColor: '#fff9ddff', // Light amber
            gradient: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
            animation: 'fade-right',
        },
    ];

    const additionalFeatures = [
        {
            title: 'Resume Builder',
            description: 'ATS-ready templates with JSON-to-LaTeX (Overleaf) export for pixel-perfect PDFs',
            icon: FileText,
            color: '#EC4899',
            stat: '3+ Templates',
        },
        {
            title: 'Drive Orchestration',
            description: 'Plan multi-round drives, auto-schedule slots, track attendance, and bulk shortlist in one view',
            icon: Calendar,
            color: '#10B981',
            stat: 'Unlimited Drives',
        },
        {
            "title": "Bulk actions",
            "description": "Shortlist, move stages, and notify hundreds of candidates in a single flow",
            "icon": BarChart2,
            "color": "#0EA5E9",
            "stat": "10x faster ops"
        },
        {
            "title": "License payments",
            "description": "Pay for licenses seamlessly with Razorpay—instant confirmations and GST-ready receipts",
            "icon": CreditCard,
            "color": "#22C55E",
            "stat": "Razorpay • UPI/Card/NetBanking"
        },
        {
            title: 'WhatsApp & Email Alerts',
            description: 'Template-based WhatsApp and email notifications with two-way replies and auto-reminders',
            icon: Zap,
            color: '#F97316',
            stat: '<3s Delivery',
        },
        {
            title: 'Proctored AI Interviews',
            description: 'Auto-generated questions, tab-switch detection, instant scoring, and reports',
            icon: ShieldCheck,
            color: '#8B5CF6',
            stat: 'Auto-scored',
        },
    ];


    return (
        <section className={styles.features} id='features'>
            <div className={styles.bgGradient}></div>

            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header} data-aos="fade-up">
                    <p className={styles.subtitle}>
                        <Sparkles size={14} className={styles.sparkle} />
                        Powerful Features
                    </p>
                    <h2 className={styles.heading}>
                        Everything You Need to
                        <span className={styles.gradient}> Dominate Placements</span>
                    </h2>
                    <p className={styles.description}>
                        Built by placement officers, for placement officers. Every feature solves a real problem you face every day.
                    </p>
                </div>

                {/* Main Features */}
                <div className={styles.mainFeatures}>
                    {featuredFeatures.map((feature, index) => {
                        const isReversed = index % 2 !== 0;
                        const FeatureIcon = feature.icon;

                        return (
                            <div
                                key={feature.id}
                                className={`${styles.featureCard} ${isReversed ? styles.reversed : ''}`}
                                data-aos={feature.animation}
                                data-aos-delay={index * 100}
                            >
                                <div className={styles.featureContent}>
                                    <div className={styles.iconBadge} style={{ background: feature.gradient }}>
                                        <FeatureIcon size={28} strokeWidth={2} className={styles.featureIcon} />
                                    </div>

                                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                                    <p className={styles.featureDescription}>{feature.description}</p>
                                </div>

                                <div
                                    className={styles.featureImage}
                                    style={{
                                        background: !imageErrors[Object.keys(imageErrors)[index]] && feature.image
                                            ? feature.lightColor
                                            : feature.lightColor
                                    }}
                                >
                                    {!imageErrors[Object.keys(imageErrors)[index]] && feature.image ? (
                                        <img
                                            src={feature.image}
                                            alt={feature.imageAlt}
                                            onError={() => handleImageError(Object.keys(imageErrors)[index])}
                                            className={styles.image}
                                        />
                                    ) : (
                                        <div className={styles.imagePlaceholder}>
                                            <FeatureIcon
                                                size={80}
                                                strokeWidth={1.5}
                                                className={styles.placeholderIcon}
                                                style={{ color: feature.color }}
                                            />
                                            <span
                                                className={styles.placeholderText}
                                                style={{ color: feature.color }}
                                            >
                                                {feature.fallbackText}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Additional Features */}
                <div className={styles.additionalSection}>
                    <h3 className={styles.additionalHeading} data-aos="fade-up">
                        And There's So Much More
                    </h3>
                    <p className={styles.additionalSubtext} data-aos="fade-up" data-aos-delay="100">
                        We've packed in everything you need to run a world-class placement cell
                    </p>

                    <div className={styles.additionalGrid}>
                        {additionalFeatures.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className={styles.additionalCard}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 60}
                                >
                                    <div className={styles.cardIcon} style={{ color: feature.color }}>
                                        <Icon size={28} strokeWidth={1.8} className={styles.additionalIcon} />
                                    </div>

                                    <div className={styles.cardBody}>
                                        <h4 className={styles.cardTitle}>{feature.title}</h4>
                                        <p className={styles.cardDescription}>{feature.description}</p>
                                    </div>

                                    <div className={styles.cardStat} style={{ color: feature.color }}>
                                        {feature.stat}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
