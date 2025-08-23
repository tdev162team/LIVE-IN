"use client"
import React, { useState } from "react";
import Link from "next/link";
import Styles from "@/app/head.module.css";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={Styles.header}>
      <nav className={Styles.nav}>
        {/* Logo */}
        <div className={Styles.logoContainer}>
          <a
            href="https://itch.io/profile/iliaskot"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/logo.png"
              alt="Site Logo"
              width={70}
              height={70}
              className={Styles.logoImg}
              priority
            />
          </a>
        </div>

        {/* Pill (tablet & up) */}
        <div className={Styles.logoDropdown}>
          <span className={Styles.logo}>
            Live In <ChevronDownIcon className={Styles.chevron} />
          </span>
          <ul className={Styles.dropdownContent}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="#games">Games</Link></li>
            <li><Link href="#faqs">FAQS</Link></li>
            <li><Link href="https://youtube.com/@iliaskot" target="_blank">YouTube</Link></li>
            <li><Link href="" target="_blank">Discord</Link></li>
            <li><Link href="https://www.tiktok.com/@live_in_official" target="_blank">TikTok</Link></li>
          </ul>
        </div>

        {/* Hamburger (mobile only) */}
        <button
          className={Styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <XMarkIcon className={Styles.hamburgerIcon}/> : <Bars3Icon className={Styles.hamburgerIcon}/>}
        </button>

        {/* Mobile dropdown panel */}
        {menuOpen && (
          <div className={Styles.mobileMenu}>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="#games">Games</Link></li>
              <li><Link href="#faqs">FAQS</Link></li>
              <li><Link href="https://youtube.com/@iliaskot" target="_blank">YouTube</Link></li>
              <li><Link href="" target="_blank">Discord</Link></li>
              <li><Link href="https://www.tiktok.com/@live_in_official" target="_blank">TikTok</Link></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
