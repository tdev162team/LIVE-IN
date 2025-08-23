"use client";
import styles from "@/app/Card.module.css";

const Card = ({ image, title, description, link }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.cardImage} />
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.cardButton}>
        Play Now
      </a>
    </div>
  );
};

export default Card;
