// src/components/home_section/Home.jsx
import React, { useEffect, useRef, useState } from "react";

// library imports
import { useLocation, useNavigate } from "react-router-dom";
import { isMobile, isTablet } from "react-device-detect";

// CSS import
import Styles from "./home.module.css";

// components
import AboutUs from "../about_us_section/AboutUs";
import Benefits from "../benefits_section/Benefits";
import ContactUs from "../contact_us_section/ContactUs";

// assets
import HeroBanner from "../../assets/home_banner/banner.png";
import HeroBannerMobile from "../../assets/home_banner/bannerMobile.png";

import ProductDetails from "../product_details_section/ProductDetails";

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  const homeRef = useRef(null);
  const productsRef = useRef(null);
  const aboutRef = useRef(null);
  const benefitsRef = useRef(null);
  const contactRef = useRef(null);

  const [blink, setBlink] = useState(true);

  // NEW: show/enable the 'Go to Home' button after user scrolls past home section
  const [homeButtonEnabled, setHomeButtonEnabled] = useState(false);

  const getHeaderOffset = () => {
    const el = document.querySelector(".site-header");
    return el ? el.offsetHeight : 72; // fallback
  };

  // map pathname to an element ID or ref
  const pathToId = {
    "/": "home",
    "/products": "products",
    "/about": "about",
    "/benefits": "benefits",
    "/contact": "contact",
  };

  useEffect(() => {
    const id = pathToId[location.pathname] || "home";
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (!el) return;

      const headerOffset = getHeaderOffset();
      const elementPosition =
        el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset - 8;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  useEffect(() => {
    const timer = setTimeout(() => setBlink(false), 20000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    function onScroll() {
      const homeEl = homeRef.current || document.getElementById("home");
      if (!homeEl) return;

      const homeBottom = homeEl.getBoundingClientRect().bottom;
      const headerOffset = getHeaderOffset();
      const threshold = 40;

      // show button only when scrolled past home section
      const scrolledPastHome = homeBottom <= headerOffset + threshold;
      setHomeButtonEnabled(scrolledPastHome);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Scroll to top/home handler (smooth + account for header)
  const scrollToHome = () => {
    const el = document.getElementById("home");
    if (!el) return;
    const headerOffset = getHeaderOffset();
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset - 8;
    navigate("/");

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  function capitalizeWords(str) {
    return str.toUpperCase();
  }

  return (
    <>
      {/* Home Section */}
      <section id="home" ref={homeRef} className={Styles.home_section}>
        {isMobile || isTablet ? (
          <div className={` ${Styles.hero_container}`}>
            <img
              src={HeroBannerMobile}
              alt="Hero"
              className={Styles.hero_image}
            />
            <div className={Styles.hero_txt_wrp}>
              <div className={Styles.hero_main_txt}>
                <p className={Styles.hero_txt_highlight}>
                  {capitalizeWords("from sugarcane ")}
                </p>

                <p className={Styles.hero_txt_highlight}>
                  {capitalizeWords(" to fine dining")}
                </p>
                <p className={Styles.hero_txt_naturally}>
                  {" "}
                  {capitalizeWords("naturally")}
                </p>
              </div>
              <p className={Styles.hero_sub_txt}>
                Eco-friendly, compostable, biodegradable tableware
              </p>
              <div className={Styles.btn_wrp}>
                <button
                  className={`${Styles.explore_btn} ${blink ? Styles.blink : ""}`}
                  onClick={() => {
                    // Always navigate to /products
                    if (location.pathname !== "/products") {
                      navigate("/products");
                    }

                    // Smooth scroll to section
                    setTimeout(() => {
                      const el = document.getElementById("products");
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                      }
                    }, 100);
                  }}
                >
                  Explore Products
                </button>

                <button
                  className={`${Styles.explore_btn} ${blink ? Styles.blink : ""}`}
                  onClick={() => {
                    window.location.href =
                      "https://www.amazon.in/stores/page/53AAAB46-69AA-4625-871D-113CA4344FB4?ingress=2&lp_context_asin=B0G5HMKZDC&lp_context_query=punarnava%20bagasse%20plates&visitId=79a52208-905d-43a6-8fb4-1c8af8743d54&ref_=ast_bln";
                  }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className={` ${Styles.hero_container}`}>
            <img src={HeroBanner} alt="Hero" className={Styles.hero_image} />
            <div className={Styles.hero_txt_wrp}>
              <div className={Styles.hero_main_txt}>
                <p className={Styles.hero_txt_highlight}>
                  {capitalizeWords("from sugarcane ")}
                </p>

                <p className={Styles.hero_txt_highlight}>
                  {capitalizeWords(" to fine dining")}
                </p>
                <p className={Styles.hero_txt_naturally}>
                  {" "}
                  {capitalizeWords("naturally")}
                </p>
              </div>
              <p className={Styles.hero_sub_txt}>
                Eco-friendly, compostable, biodegradable tableware
              </p>

              <div className={Styles.btn_wrp}>
                <button
                  className={`${Styles.explore_btn} ${blink ? Styles.blink : ""}`}
                  onClick={() => {
                    // Always navigate to /products
                    if (location.pathname !== "/products") {
                      navigate("/products");
                    }

                    // Smooth scroll to section
                    setTimeout(() => {
                      const el = document.getElementById("products");
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                      }
                    }, 100);
                  }}
                >
                  Explore Products
                </button>

                <button
                  className={`${Styles.explore_btn} ${blink ? Styles.blink : ""}`}
                  onClick={() => {
                    window.location.href =
                      "https://www.amazon.in/stores/page/53AAAB46-69AA-4625-871D-113CA4344FB4?ingress=2&lp_context_asin=B0G5HMKZDC&lp_context_query=punarnava%20bagasse%20plates&visitId=79a52208-905d-43a6-8fb4-1c8af8743d54&ref_=ast_bln";
                  }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Product Details */}
      <section
        id="products"
        ref={productsRef}
        className="section"
        style={{ padding: "10px 0" }}
      >
        <ProductDetails />
      </section>

      {/* Benefits */}
      <section id="benefits" ref={benefitsRef} className="section">
        <Benefits />
      </section>

      {/* About Us */}
      <section id="about" ref={aboutRef} className="section">
        <AboutUs />
      </section>

      {/* Contact Us */}
      <section id="contact" ref={contactRef} className="section">
        <ContactUs />
      </section>

      {/* FLOATING Go to Home BUTTON */}
      <button
        className={`${Styles.homeJumpBtn} ${
          homeButtonEnabled
            ? Styles.homeJumpBtnActive
            : Styles.homeJumpBtnDisabled
        }`}
        onClick={() => {
          if (homeButtonEnabled) scrollToHome();
        }}
        aria-disabled={!homeButtonEnabled}
        aria-label="Go to Home section"
        title={homeButtonEnabled ? "Go to Home" : "Scroll to enable"}
      >
        {/* simple icon + label (kept minimal) */}
        <span className={Styles.homeJumpIcon} aria-hidden>
          ⤒
        </span>
        <span className={Styles.homeJumpLabel}>Home</span>
      </button>
    </>
  );
}
