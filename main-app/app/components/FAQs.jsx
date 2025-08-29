"use client";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "@/app/Faqs.module.css";

const faqs = [
    {
        question: "How do I play the games?",
        answer: "Each game comes with a link to Itch.io where you can try it directly.",
    },
    {
        question: "How can I stream these games?",
        answer: "You can stream the games on TikTok Live, and if you want to learn more, you can watch the tutorials on YouTube.",
    },
    {
        question: "What requirements do I have to meet so I can stream?",
        answer: "To use TikTok Live Studio, you need to have your account in good standing without policy violations while using the latest version of TikTok and having a stable internet connection.",
    },
    {
        question: "Can I make money?",
        answer: "Yes, you can earn money through TikTok's gifting system during your live streams.",    
    },
    {
        question: "How much will I earn daily?",
        answer: "It varies based on your audience size,country or skillset. But with dedication, you can achieve significant earnings over time.",
    }
];

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // 👇 animation controls
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.2,
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
            id="faqs"
            ref={ref}
            className={styles.faqsSection}
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <h2 className={styles.faqsTitle}>FAQS</h2>
            <div className={styles.faqsContainer}>
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`${styles.faqItem} ${openIndex === index ? styles.active : ""}`}
                        onClick={() => toggleFAQ(index)}
                    >
                        <h3 className={styles.faqQuestion}>
                            {faq.question}
                            <span className={styles.icon}>
                                {openIndex === index ? "–" : "+"}
                            </span>
                        </h3>
                        <p className={styles.faqAnswer}>{faq.answer}</p>
                    </div>

                ))}
            </div>
        </motion.section>
    );
};

export default FAQs;
