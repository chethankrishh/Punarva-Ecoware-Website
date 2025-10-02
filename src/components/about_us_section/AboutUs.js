// src/components/about_us_section/AboutUs.jsx
import React from "react";
import Styles from "./aboutUs.module.css";

export default function AboutUs() {
  return (
    <section className={Styles.about_section} id="about">
      <div className={Styles.inner}>
        <h2 className={Styles.heading}>
          <span>🌍</span> About Us <span>🌱</span>
        </h2>

        <p className={Styles.text}>
          At <strong>Punarva</strong>, we are committed to reshaping the way
          dining and sustainability come together.{" "}
          <span className={Styles.highlight}>💡 Our mission</span> is simple: to
          protect the planet from single-use plastic and foam while providing
          eco-friendly, high-quality tableware that doesn’t compromise on style
          or function.
        </p>

        <p className={Styles.text}>
          We craft our products using{" "}
          <span className={Styles.highlight}>🌾 sugarcane bagasse</span> — a
          renewable byproduct of sugarcane processing. Instead of going to
          waste, this natural fiber is transformed into durable plates, bowls,
          and trays.{" "}
          <span className={Styles.highlight}>♻️ Unlike plastics</span> that take
          hundreds of years to decompose, bagasse naturally breaks down within
          weeks, leaving no toxic residue behind.
        </p>

        <p className={Styles.text}>
          In today’s world,{" "}
          <span className={Styles.highlight}>🌟 every choice matters</span>. By
          choosing Punarva, you’re not just selecting tableware — you’re
          supporting a greener, cleaner future. Each plate, bowl, and tray is a
          step towards reducing plastic waste, lowering carbon impact, and
          promoting conscious living.
        </p>

        <p className={Styles.text}>
          We believe that{" "}
          <span className={Styles.highlight}>
            🍽 sustainability starts small
          </span>{" "}
          — one meal, one plate, one choice at a time. Together, we can create a
          dining culture that’s healthier for both people and the planet.
        </p>

        <p className={Styles.signature}>
          🌿 <strong>Punarva — Pure Dining. Green Living.</strong>
        </p>
      </div>
    </section>
  );
}
