import  { useState, useEffect } from 'react';
import styles from './review.module.css';

interface Props {
  name: string;
  company: string;
  rating: number;
  reviewText: string;
  imageSrc: string;
  slideIn?: boolean;
}

const Review = ({ name, company, rating, reviewText, imageSrc, slideIn }: Props) => {
    console.log('Review component props:', name, company, rating, reviewText, imageSrc, slideIn);

  const [slideInEffect, setSlideInEffect] = useState(false);

  useEffect(() => {
    if (slideIn) {
      const timeout = setTimeout(() => {
        setSlideInEffect(true);
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [slideIn]);

  return (
    <div className={`${styles.main} ${slideInEffect ? styles['slide-in'] : ''}`}>
      <div className={styles.imgTestimonials}>
        <img src={imageSrc} alt="" />
      </div>
      <div className={styles.paraTestimonials}>
        <p>{reviewText}</p>
      </div>
      <div className={styles.nameMain}>
        <p>{`-${name}`}</p>
        <p>{company}</p>
      </div>
      <div className={styles.starMain}>
        {Array.from({ length: rating }, (_, index) => (
          <span key={index} className="material-symbols-outlined">
            star
          </span>
        ))}
      </div>
    </div>
  );
};

export default Review;
