"use client";
import { useState, useEffect } from "react";
import styles from "@/app/LandingPage.module.css";
import Image from "next/image";

export default function LandingPage() {
  const fullText = "Best Interactive Games for TikTok Live";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 80); // typing speed (ms per letter)

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        {/* Left: Lightning Image */}
        <div className={styles.heroImage}>
          <Image
            src="/Lightning.png" // place your image in public/
            alt="Lightning Icon"
            width={350}
            height={350}
            priority
          />
        </div>

        {/* Right: Text and Button */}
        <div className={styles.heroText}>
          <h1 className={styles.title}>{displayedText}</h1>
          <p className={styles.motto}>Earn money fast with TikTok Live</p>
          <button className={styles.cta} onClick={() =>
           document.getElementById("games").scrollIntoView({ behavior: "smooth" })
          }>Learn More</button>
        </div>
      </div>
    </section>
  );
}
