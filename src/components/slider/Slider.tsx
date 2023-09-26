import React, { useState, useEffect } from 'react';
import styles from './Slider.module.css'; // Import your slider styles
import Review from '../review/Review';

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Define your review data as an array
  const reviews = [
    {
      name: 'Kate Abott',
      company: 'President Proton LLC',
      rating: 5,
      reviewText:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
      imageSrc: 'src/assets/testimonial1.jpg',
    },
    {
      name: 'Robert Hammer',
      company: 'Vice President Primal',
      rating: 5,
      reviewText:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
      imageSrc: 'src/assets/testimonial2.jpg',
    },
    // Add more reviews here
  ];

  useEffect(() => {
    // Automate sliding every 5 seconds
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) =>
        prevSlide === reviews.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div className={styles.slider}>
      {reviews.map((review, index) => (
        <div
          key={index}
          className={`${styles.slide} ${
            index === activeSlide ? styles.active : ''
          }`}
          // Delay each slide
        >
          <Review
            name={review.name}
            company={review.company}
            rating={review.rating}
            reviewText={review.reviewText}
            imageSrc={review.imageSrc}
            slideIn={true}
          />
        </div>
      ))}
    </div>
  );
};

export default Slider;
