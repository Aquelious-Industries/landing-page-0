"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["/about", "About Us"],
    ["/technology", "Technology"],
    ["/industries", "Industries"],
    ["/solutions", "Solutions"],
    ["/research", "Research"],
    ["/contact", "Contact"],
  ];

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav">
        <Link className="brand" href="/" aria-label="Aquelious home">
          <img width={240} height={50} src="/l2.png" alt="Aquelious Industries" />
        </Link>

        <nav className="navlinks">
          {links.map(([href, label]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>

        <Link className="nav-cta" href="/contact">
          Pilot with us
        </Link>

        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          <i />
          <i />
          <i />
        </button>
      </div>

      <div className={`mobile ${open ? "open" : ""}`}>
        <div className="container">
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}

          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}