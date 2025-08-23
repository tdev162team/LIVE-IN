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
        question: "Can I use these games on TikTok Live?",
        answer: "Yes, they are built for interactive TikTok Live experiences!",
    },
    {
        question: "Are the games free?",
        answer: "Some are free, while others may require a small payment on Itch.io.",
    },
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
