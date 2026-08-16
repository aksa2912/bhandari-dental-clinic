"use client";

import React from "react";
import { Search, Sparkles, Check } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="how section-shell" id="how-it-works">
      <div className="eyebrow">BUY WITH CONFIDENCE</div>
      <h2>Skip the tabs. Make the call.</h2>
      <p>
        Is It Worth It? turns scattered specs, prices, and opinions into one clear
        recommendation.
      </p>
      <div className="steps">
        <article>
          <span>1</span>
          <Search />
          <h3>Search any gadget</h3>
          <p>
            Tell us what you&apos;re considering, from phones to headphones.
          </p>
        </article>
        <article>
          <span>2</span>
          <Sparkles />
          <h3>Get the real picture</h3>
          <p>
            We compare live prices, performance, and what&apos;s coming next.
          </p>
        </article>
        <article>
          <span>3</span>
          <Check />
          <h3>Buy with confidence</h3>
          <p>See the best deal and the smartest alternative in seconds.</p>
        </article>
      </div>
    </section>
  );
}