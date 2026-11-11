
"use client";

import { useEffect, useState } from "react";
import "./Header.css";

const links = [
  { href: "#story", label: "Story" },
  { href: "#research", label: "Research" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Detect hero section visibility for navbar transition.
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector(".hero");

      if (hero) {
        const heroBottom = hero.getBoundingClientRect().bottom;
        setScrolled(heroBottom <= 84);
      } else {
        setScrolled(window.scrollY > 20);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent background scrolling when mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close menu using Escape key.
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Close menu when switching to desktop.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Smooth section navigation.
  const navigateTo = (event, href) => {
    event.preventDefault();

    const target = document.querySelector(href);

    setOpen(false);

    if (target) {
      const headerOffset = window.innerWidth <= 600 ? 72 : 84;

      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerOffset;

      window.history.replaceState(null, "", href);

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`header ${scrolled ? "scrolled" : ""} ${
        open ? "menu-open" : ""
      }`}
    >
      {/* HEADER BAR */}

      <div className="header-inner">

        {/* BRAND */}

        <a
          className="brand"
          href="#top"
          aria-label="Aquelious Home"
          onClick={(e) => navigateTo(e, "#top")}
        >
          <img
            className="brand-logo desktop-brand"
            src={scrolled ? "/logo-dark.png" : "/logo2.png"}
            alt="Aquelious Industries"
          />

          <img
            className="brand-logo mobile-brand"
            src="/logo-dark.png"
            alt="Aquelious Industries"
          />
        </a>

        {/* DESKTOP NAVIGATION */}

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => navigateTo(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* MOBILE HAMBURGER */}

        <button
          type="button"
          className={`menu-btn ${open ? "active" : ""}`}
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          <span />
          <span />
          <span />
        </button>

      </div>

      {/* MOBILE NAVIGATION OVERLAY */}

      <div
        id="mobile-navigation"
        className={`mobile-menu ${open ? "open" : ""}`}
        aria-hidden={!open}
        inert={!open}
      >

        {/* CLOSE BUTTON */}

        <button
          type="button"
          className="mobile-close"
          onClick={closeMenu}
          aria-label="Close navigation menu"
        >
          <span />
          <span />
        </button>

        <nav className="mobile-nav" aria-label="Mobile navigation">

          <span className="mobile-nav-label">
            EXPLORE AQUELOUS
          </span>

          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => navigateTo(e, link.href)}
              tabIndex={open ? 0 : -1}
              style={{ "--nav-index": index }}
            >
              <span className="mobile-link-number">
                0{index + 1}
              </span>

              <span>{link.label}</span>

              <span className="mobile-link-arrow">↗</span>
            </a>
          ))}

          <a
            href="#contact"
            className="mobile-cta"
            onClick={(e) => navigateTo(e, "#contact")}
            tabIndex={open ? 0 : -1}
          >
            Let's build together <span>→</span>
          </a>

          <span className="mobile-nav-footer">
            AQUELOUS INDUSTRIES
          </span>

        </nav>
      </div>
    </header>
  );
}
