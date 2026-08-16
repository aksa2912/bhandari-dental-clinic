"use client";

import React from "react";
import { motion } from "framer-motion";
import Stars from "./Stars";
import { ArrowRight } from "lucide-react";

const alternatives = [
  {
    label: "Best Value",
    name: "Samsung Galaxy S24 (128GB)",
    price: "₹59,999",
    save: "12% less",
    rating: "4.4",
    image: "/s24.jpg",
  },
  {
    label: "Great Alternative",
    name: "OnePlus 12R (256GB)",
    price: "₹54,999",
    save: "20% less",
    rating: "4.3",
    image: "/oneplus12r.jpg",
  },
  {
    label: "Budget Friendly",
    name: "Nothing Phone (2a)",
    price: "₹23,999",
    save: "66% less",
    rating: "4.1",
    image: "/nothing2a.jpg",
  },
];

export default function Alternatives() {
  return (
    <section className="horizontal-alternatives panel">
      <div className="section-title">
        <div>
          <h2>Better Alternatives</h2>
          <p>Similar products with better value for money</p>
        </div>
        <button className="more-button-text">
          View All <ArrowRight size={15} />
        </button>
      </div>
      <div className="alt-horizontal-grid">
        {alternatives.map((item) => (
          <motion.article
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="alt-card-horizontal"
            key={item.name}
          >
            <div className="alt-img-wrap">
              <span className="alt-label">{item.label}</span>
              <img src={item.image} alt={item.name} />
            </div>
            <div className="alt-info">
              <h3>{item.name}</h3>
              <div className="alt-price-row">
                <b>{item.price}</b>
                <small className="save-tag">{item.save}</small>
              </div>
              <div className="rating">
                <strong>{item.rating}</strong>
                <Stars rating={Number(item.rating)} />
              </div>
              <button className="secondary-button full-width">View Details</button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}