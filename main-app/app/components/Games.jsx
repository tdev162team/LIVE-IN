"use client";
import { useEffect } from "react";
import styles from "@/app/games.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Card from "./Card";

const Games = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.2, // trigger when 20% of section is visible
        triggerOnce: false,
    });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        } else {
            controls.start({ opacity: 0, y: 30 });
        }
    }, [controls, inView]);

    return (
        <motion.section
            id="games"
            ref={ref}
            className={styles.gamesSection} // full-width background
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className={styles.gamesContainer}>
                <h1 className={styles.gamesTitle}>Our Games</h1>
                <div className={styles.cardsGrid}>
                    <Card
                        image="/SquidGame.png"
                        title="Red Green Light"
                        description="Turn your TikTok Live into an intense, interactive Squid Game-inspired challenge with Red Green Light."
                        link="https://iliaskot.itch.io/tiktok-live-games" />
                    <Card
                        image="/football.png"
                        title="Score Goal"
                        description="This is an interactive football game designed for TikTok Live, where viewers can actively participate to support their favorite country."
                        link="https://iliaskot.itch.io/tiktok-live-game-score-goal" />
                        <Card
                        image="/Space.png"
                        title="Spacecrafts race"
                        description="A TikTok live interactive game for a very good price. The spacecrafts are moving by the gift users sent, but you can move them by yourself."
                        link="https://iliaskot.itch.io/tiktok-live-interactive-game-spacecrafts-race" />
                        <Card
                        image="/Ping Pong.png"
                        title="Red vs Blue"
                        description="A classic Ping Pong game designed for TikTok Live, where viewers can play against each other in real-time."
                        link="https://iliaskot.itch.io/tiktok-live-game" />

                </div>
            </div>
        </motion.section>
    );
};

export default Games;
