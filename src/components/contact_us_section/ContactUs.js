// src/components/contact_us_section/ContactUs.jsx
import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import Styles from "./contactUs.module.css";

export default function ContactUs() {
  return (
    <section className={Styles.contact_section} id="contact">
      <div className={Styles.inner}>
        <h2 className={Styles.heading}>📩 Contact Us</h2>
        <p className={Styles.intro}>
          We’d love to hear from you! Whether you’re looking for product
          details, wholesale enquiries, or just want to know more about our
          eco-friendly tableware, our team is here to help.
        </p>

        <div className={Styles.cards}>
          <div className={`${Styles.card} ${Styles.animate}`}>
            <FaMapMarkerAlt className={Styles.icon} />
            <h3>Address</h3>
            <p>Athaje, Ujire, Karnataka, India</p>
          </div>

          <div className={`${Styles.card} ${Styles.animate}`}>
            <FaPhoneAlt className={Styles.icon} />
            <h3>Phone</h3>
            <a href="tel:+919741880210">+91 97418 80210</a>
          </div>

          <div className={`${Styles.card} ${Styles.animate}`}>
            <FaEnvelope className={Styles.icon} />
            <h3>Email</h3>
            <a href="mailto:punarvaecoware@gmail.com">
              punarvaecoware@gmail.com
            </a>
          </div>

          <div className={`${Styles.card} ${Styles.animate}`}>
            <FaWhatsapp className={`${Styles.icon} ${Styles.whatsapp}`} />
            <h3>WhatsApp</h3>
            <a
              href="https://wa.me/919741880210"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat with us
            </a>
          </div>

          <div className={`${Styles.card} ${Styles.animate}`}>
            <FaInstagram className={`${Styles.icon} ${Styles.instagram}`} />
            <h3>Instagram</h3>
            <a
              href="https://instagram.com/punarva_ecoware"
              target="_blank"
              rel="noopener noreferrer"
            >
              @punarva_ecoware
            </a>
          </div>
        </div>

        <p className={Styles.footer_text}>
          🌐 Stay Connected — Follow us on social media for updates, product
          launches, and sustainability insights.
        </p>
      </div>
    </section>
  );
}
