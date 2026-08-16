"use client";

import React from "react";

export interface Store {
  name: string;
  price: string;
  status: string;
  tone: string;
  lowest: boolean;
}

export default function PriceOverview({ stores }: { stores: Store[] }) {
  const lowestStore = stores.find((store) => store.lowest);

  return (
    <div className="price-overview">
      <div className="section-title">
        <div>
          <h2>Price Overview</h2>
          <p>Prices updated on Aug 12, 2026 · Auto-healed via Scraper Studio</p>
        </div>
        <div className="lowest">
          <span>Lowest Price</span>
          <strong>{lowestStore?.price}</strong>
        </div>
      </div>
      <div className="store-grid">
        {stores.map((store) => (
          <a
            className={`store-card ${store.lowest ? "highlight-store" : ""}`}
            href="https://www.flipkart.com"
            target="_blank"
            rel="noreferrer"
            key={store.name}
          >
            {store.lowest && <span className="best-tag">Lowest</span>}
            <strong>{store.name}</strong>
            <b>{store.price}</b>
            <span className={store.tone}>{store.status}</span>
            <div className="store-action">View Deal →</div>
          </a>
        ))}
      </div>
    </div>
  );
}