"use client";

import React, { useState } from "react";
import Header, { Logo } from "@/components/Header";
import Filters from "@/components/Filters";
import ProductOverview from "@/components/ProductOverview";
import Alternatives from "@/components/Alternatives";
import Highlights from "@/components/Highlights";
import ScoreAndTrend from "@/components/ScoreAndTrend";
import HowItWorks from "@/components/HowItWorks";

export const productImage = "/iphone15.jpg";

export default function Page() {
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState("Apple iPhone 15 (128GB)");

  return (
    <>
      <Header
        query={query}
        setQuery={setQuery}
        onSearch={() => setSearched(query || "Apple iPhone 15 (128GB)")}
      />
      <main>
        <section id="home"></section>
        <div className="workspace section-shell">
          <Filters />
          <div className="main-column">
            <ProductOverview query={searched} />
            <Alternatives />
            <Highlights />
          </div>
          <ScoreAndTrend />
        </div>
        <HowItWorks />
        <section className="about section-shell" id="about">
          <div>
            <div className="eyebrow">A LITTLE LESS GUESSWORK</div>
            <h2>
              Better decisions,
              <br />
              <em>less buyer&apos;s remorse.</em>
            </h2>
          </div>
          <p>
            We believe shopping for tech should feel empowering, not
            overwhelming. Our independent analysis brings the signal to the
            surface so you can spend less time researching and more time
            enjoying what you buy.
          </p>
        </section>
      </main>
      <footer>
        <div className="footer-inner">
          <Logo />
          <p>Independent buying advice for the things you use every day.</p>
          <span>© 2026 Is It Worth it?</span>
          <p>Powered by Bright Data Scraper Studio</p>
        </div>
      </footer>
    </>
  );
}