"use client";

import React from "react";
import PriceOverview, { Store } from "./PriceOverview";
import Stars from "./Stars";
import { Smartphone, Cpu, Camera, BatteryCharging } from "lucide-react";

export interface ProductDetails {
  name: string;
  image: string;
  rating: string;
  reviews: string;
  description: string;
  display: string;
  chip: string;
  camera: string;
  battery: string;
  stores: Store[];
}

export default function ProductOverview({ query }: { query: string }) {
  const normalizedQuery = query.toLowerCase();

  const product: ProductDetails = normalizedQuery.includes("samsung")
    ? {
        name: "Samsung Galaxy S24 (128GB)",
        image: "/s24.jpg",
        rating: "4.4",
        reviews: "(8,542 reviews)",
        description:
          "The Galaxy S24 features a 6.2-inch Dynamic AMOLED display, Snapdragon processor, and Galaxy AI features.",
        display: '6.2" AMOLED',
        chip: "Snapdragon 8 Gen 3",
        camera: "50MP Triple",
        battery: "4000mAh",
        stores: [
          { name: "Amazon", price: "₹59,999", status: "In Stock", tone: "good", lowest: false },
          { name: "Flipkart", price: "₹58,499", status: "In Stock", tone: "good", lowest: true },
          { name: "Croma", price: "₹59,499", status: "In Stock", tone: "good", lowest: false },
        ],
      }
    : normalizedQuery.includes("oneplus")
    ? {
        name: "OnePlus 12R (256GB)",
        image: "/oneplus12r.jpg",
        rating: "4.3",
        reviews: "(5,321 reviews)",
        description:
          "The OnePlus 12R features a 120Hz AMOLED display, Snapdragon processor, and fast charging.",
        display: '6.78" AMOLED',
        chip: "Snapdragon 8 Gen 2",
        camera: "50MP Triple",
        battery: "5500mAh",
        stores: [
          { name: "Amazon", price: "₹54,999", status: "In Stock", tone: "good", lowest: false },
          { name: "Flipkart", price: "₹53,499", status: "In Stock", tone: "good", lowest: true },
          { name: "Croma", price: "₹54,499", status: "In Stock", tone: "good", lowest: false },
        ],
      }
    : {
        name: "Apple iPhone 15 (128GB)",
        image: "/iphone15.jpg",
        rating: "4.6",
        reviews: "(12,543 reviews)",
        description:
          "The iPhone 15 features a 6.1-inch Super Retina XDR display, A16 Bionic chip, and advanced dual-camera system.",
        display: '6.1" OLED',
        chip: "A16 Bionic",
        camera: "12MP Dual",
        battery: "3279mAh",
        stores: [
          { name: "Amazon", price: "₹69,900", status: "In Stock", tone: "good", lowest: false },
          { name: "Flipkart", price: "₹68,999", status: "In Stock", tone: "good", lowest: true },
          { name: "Croma", price: "₹69,999", status: "In Stock", tone: "good", lowest: false },
        ],
      };

  return (
    <section className="product panel">
      <div className="product-top">
        <div className="product-visual">
          <span className="popular-badge">Most Popular</span>
          <img src={product.image} alt={product.name} />
          <button className="secondary-button">View Full Details</button>
        </div>
        <div className="product-copy">
          <div className="brand-logo" aria-label="Apple">
            ●
          </div>
          <h1>{query || "Apple iPhone 15 (128GB)"}</h1>
          <div className="rating">
            <strong>{product.rating}</strong>
            <Stars />
            <span>{product.reviews}</span>
          </div>
          <p>{product.description}</p>
          <div className="specs">
            <span>
              <Smartphone size={15} />
              {product.display}
            </span>
            <span>
              <Cpu size={15} />
              {product.chip}
            </span>
            <span>
              <Camera size={15} />
              {product.camera}
            </span>
            <span>
              <BatteryCharging size={15} />
              {product.battery}
            </span>
          </div>
        </div>
      </div>
      <PriceOverview stores={product.stores} />
    </section>
  );
}