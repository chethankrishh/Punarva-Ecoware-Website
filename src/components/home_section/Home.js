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

  // header height (keep in sync with your header CSS). If header height is variable
  // you could compute it dynamically: document.querySelector('.site-header').offsetHeight
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
    // When location changes, scroll to appropriate section
    const id = pathToId[location.pathname] || "home";
    // small timeout to ensure section is rendered (should be immediate here).
    // requestAnimationFrame is better than arbitrary timeout.
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (!el) return;

      const headerOffset = getHeaderOffset();
      const elementPosition =
        el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset - 8; // extra gap

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    });
  }, [location.pathname]);

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
              <button
                className={Styles.explore_btn}
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

              <button
                className={Styles.explore_btn}
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
    </>
  );
}
