 "use client";

import { useEffect, useState } from "react";

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
    ["#problem", "Platform"],
    ["#workflow", "Technology"],
    ["#features", "AquaNode"],
    ["#dashboard", "NeerGrid"],
    ["#validation", "Research"],
    ["#roadmap", "Roadmap"],
  ];

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav">
        <a className="brand" href="#top" aria-label="Aquelious home">
          
          <img width={240} height={50} src="/l2.png" alt="" />
        </a>

        <nav className="navlinks">
          {links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        </nav>

        <a className="nav-cta" href="#contact">Pilot with us</a>

        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Open menu">
          <i /><i /><i />
        </button>
      </div>

      <div className={`mobile ${open ? "open" : ""}`}>
        <div className="container">
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      </div>
    </header>
  );
}
