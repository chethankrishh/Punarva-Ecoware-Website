// src/components/benefits_section/Benefits.jsx
import React from "react";
import Styles from "./benefits.module.css";

const benefitsData = [
  {
    title: "Sustainable & Eco-Friendly",
    desc: "Crafted from renewable sugarcane bagasse, reducing reliance on single-use plastics.",
    icon: "🌱",
  },
  {
    title: "100% Compostable",
    desc: "Naturally decomposes within weeks, leaving no toxic residue behind.",
    icon: "♻️",
  },
  {
    title: "Food Grade & Non-Toxic",
    desc: "Safe for all types of food, free from chemicals or harmful coatings.",
    icon: "🍴",
  },
  {
    title: "Microwave & Freezer Safe",
    desc: "Withstands both hot and cold foods without losing shape or strength.",
    icon: "🔥❄️",
  },
  {
    title: "Durable & Versatile",
    desc: "Strong enough for daily use, lightweight for convenience.",
    icon: "💪",
  },
  {
    title: "Export Quality",
    desc: "Manufactured with international standards for global markets.",
    icon: "🌍",
  },
  {
    title: "Low Carbon Footprint",
    desc: "Made from agricultural waste, reducing greenhouse gas emissions.",
    icon: "🌾",
  },
  {
    title: "Enhanced Brand Image",
    desc: "Show your customers you care about sustainability and eco-conscious choices.",
    icon: "⭐",
  },
];

export default function Benefits() {
  return (
    <section className={Styles.benefits_section} id="benefits">
      <div className={Styles.inner}>
        <h2 className={Styles.heading}>
          Why Choose <span>Punarva</span> Eco-Friendly Tableware?
        </h2>
        <p className={Styles.intro}>
          Made from 100% sugarcane bagasse, our products combine sustainability,
          strength, and style—giving you a smarter alternative to plastic and
          foam.
        </p>

        <div className={Styles.benefits_grid}>
          {benefitsData.map((b, i) => (
            <div key={i} className={Styles.card}>
              <div className={Styles.icon}>{b.icon}</div>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
