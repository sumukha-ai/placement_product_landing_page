import React, { useEffect, useState } from 'react';
import styles from './ResumeDisplayDark.module.css';
import res1 from '../../assets/res1.jpg';
import resTemp1 from '../../assets/res_temp_1.webp';
import res3 from '../../assets/res3.jpg';
import resTemp2 from '../../assets/res_temp_2.webp';
import resTemp3 from '../../assets/res_temp_3.webp';
import resTemp4 from '../../assets/res_temp_4.webp';
import res7 from '../../assets/res7.png';
const categories = [
    { id: 'creative', label: 'Creative', img: res1 },
    { id: 'professional', label: 'Professional', img: resTemp1 },
    { id: 'minimal', label: 'Minimal', img: resTemp2 },
    { id: 'corporate', label: 'Corporate', img: resTemp3 },
    { id: 'technical', label: 'Technical', img: resTemp4 },
    { id: 'functional', label: 'Functional', img: res7 },
    { id: 'chronological', label: 'Chronological', img: res1 },
    { id: 'academic', label: 'Academic', img: res1 },
    { id: 'freelance', label: 'Freelance', img: res1 },
];


const ResumeDisplayDark = () => {
    const [selected, setSelected] = useState(categories[0].id);
    const [intervalId, setIntervalId] = useState(null);

    const handleChange = (e) => {
        setSelected(e.target.value);
    };

    useEffect(() => {
        // Function to reset the timer
        const resetTimer = () => {
            if (intervalId) {
                clearInterval(intervalId); // Clear the previous interval
            }
            const newIntervalId = setInterval(() => {
                setSelected((prevSelected) => {
                    const currentIndex = categories.findIndex((cat) => cat.id === prevSelected);
                    const nextIndex = (currentIndex + 1) % categories.length;
                    return categories[nextIndex].id;
                });
            }, 3000);
            setIntervalId(newIntervalId); // Store the new interval ID
        };

        resetTimer(); // Initialize the first interval

        // Cleanup function to clear interval on component unmount
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [selected]);


    return (
        <div className={styles.container}>
            <div className={styles.blob1}></div>
            <div className={styles.blob2}></div>
            <div className={styles.blob3}></div>
            <div className={styles.blob4}></div>
            <div className={styles.blob5}></div>
            <section className={styles.resumeIntro}>
                <h2 className={styles.heading}>
                    Explore the World’s Best Resume Templates
                </h2>
                <p className={styles.tagline}>
                    Handpicked designs that are professional, modern, and built to help you stand out.
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
        </div>
    );
};

export default ResumeDisplayDark;
