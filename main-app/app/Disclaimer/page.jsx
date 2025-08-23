"use client";
import styles from "@/app/disclaimer.module.css";

const Disclaimer = () => {
  return (
    <section className={styles.disclaimerSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>Disclaimer</h1>
        <p className={styles.paragraph}>
          This website and its content are provided for general informational and
          entertainment purposes only. While every effort is made to ensure that the
          information presented is accurate and up to date, we make no guarantees of
          completeness, reliability, or suitability for any particular purpose. Any
          reliance you place on such information is strictly at your own risk.
        </p>
        <p className={styles.paragraph}>
          We are not liable for any loss or damage, including but not limited to
          indirect or consequential loss or damage, arising from the use of this website
          or the products and services featured here. External links may be provided for
          convenience, but we do not control or endorse the content, products, or
          services offered on third-party sites and are not responsible for their
          accuracy or practices.
        </p>
        <p className={styles.paragraph}>
          All games, tools, and content featured on this site are intended for personal
          use only. We make no claims regarding their performance, compatibility, or
          fitness for a particular purpose, including streaming, commercial use, or
          promotional activities. Users are responsible for ensuring they comply with
          the terms and conditions of any platforms or services they choose to integrate
          with.
        </p>
        <p className={styles.paragraph}>
          By using this site, you acknowledge and agree to this disclaimer. If you do not
          agree, we kindly ask that you refrain from using the site and its related
          services. We reserve the right to update or modify this disclaimer at any time
          without prior notice, and continued use of the site signifies acceptance of any
          such changes.
        </p>
      </div>
    </section>
  );
};

export default Disclaimer;

