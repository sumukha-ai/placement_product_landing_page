import React, { useState } from 'react';
import styles from './ResumeDisplay.module.css';

const categories = [
    { id: 'creative', label: 'Creative', img: '../src/assets/res1.jpg' },
    { id: 'professional', label: 'Professional', img: '../src/assets/res2.jpg' },
    { id: 'modern', label: 'Modern', img: '../src/assets/res3.jpg' },
    { id: 'minimal', label: 'Minimal', img: '../src/assets/res4.webp' },
    { id: 'corporate', label: 'Corporate', img: '../src/assets/res1.jpg' },
    { id: 'technical', label: 'Technical', img: '../src/assets/res1.jpg' },
    { id: 'functional', label: 'Functional', img: '../src/assets/res7.png' },
    { id: 'chronological', label: 'Chronological', img: '../src/assets/res1.jpg' },
    { id: 'academic', label: 'Academic', img: '../src/assets/res1.jpg' },
    { id: 'freelance', label: 'Freelance', img: '../src/assets/res1.jpg' },
];

const ResumeDisplay = () => {
    const [selected, setSelected] = useState(categories[0].id);

    const handleChange = (e) => {
        setSelected(e.target.value);
    };

    return (
        <>
            <section className={styles.resumeIntro}>
                <h2 className={styles.heading}>Choose Your Perfect Resume Style</h2>
                <p className={styles.tagline}>
                    Browse a curated collection of modern, professional, and creative templates built to impress.
                </p>
            </section>

            <section className={styles.resumeDisplay}>
                {/* Desktop category list */}
                <aside className={styles.categoryList}>
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            className={`${styles.categoryButton} ${selected === cat.id ? styles.active : ''}`}
                            onClick={() => setSelected(cat.id)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </aside>

                {/* Mobile dropdown */}
                <select
                    className={styles.categoryDropdown}
                    value={selected}
                    onChange={handleChange}
                    aria-label="Select Resume Category"
                >
                    {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                            {cat.label}
                        </option>
                    ))}
                </select>

                {/* Image preview */}
                <div className={styles.imagePreview}>
                    <img
                        key={selected} // this forces the image to re-render when selection changes
                        src={categories.find((cat) => cat.id === selected).img}
                        alt={`${categories.find((cat) => cat.id === selected).label} Resume`}
                        className={`${styles.resumeImage} ${styles.fadeIn}`} // apply animation
                        loading="lazy"
                    />
                </div>

            </section>
        </>
    );
};

export default ResumeDisplay;
