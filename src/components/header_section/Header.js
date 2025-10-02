// src/components/header_section/Header.jsx
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on resize > 768
  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 768) setOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const menu = [
    { label: "Home", to: "/" },
    { label: "Products", to: "/products" },
    { label: "Benefits", to: "/benefits" },
    { label: "About Us", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header
      className={`site-header ${scrolled ? "scrolled" : ""}`}
      role="banner"
    >
      <div className="container header-inner">
        <Link
          className="brand"
          to="/"
          aria-label="Go to home"
          onClick={() => setOpen(false)}
        >
          <svg
            className="brand-logo"
            viewBox="0 0 100 100"
            role="img"
            aria-hidden
          ></svg>
          <span className="brand-text">Punarva</span>
        </Link>

        {/* Navigation: NavLink provides active styling */}
        <nav
          className={`main-nav ${open ? "open" : ""}`}
          role="navigation"
          aria-label="Primary"
          id="primary-navigation"
        >
          <ul>
            {menu.map((m) => (
              <li key={m.to}>
                <NavLink
                  to={m.to}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  onClick={() => setOpen(false)}
                >
                  {m.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile toggle */}
        <button
          className={`menu-toggle ${open ? "open" : ""}`}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((s) => !s)}
        >
          <span className="sr-only">Toggle menu</span>
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
            <path
              className="line line1"
              d="M3 6h18"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              className="line line2"
              d="M3 12h18"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              className="line line3"
              d="M3 18h18"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
