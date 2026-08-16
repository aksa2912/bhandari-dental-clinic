"use client";

import React from "react";
import { Camera, Zap, BatteryCharging, CircleDollarSign, ShieldCheck } from "lucide-react";

export default function Highlights() {
  const items = [
    ["Best For", "Photography", Camera],
    ["Performance", "Excellent", Zap],
    ["Battery Life", "Good", BatteryCharging],
    ["Value for Money", "Good", CircleDollarSign],
    ["Build Quality", "Excellent", ShieldCheck],
  ] as const;

  return (
    <section className="highlights">
      <h2>Key Highlights</h2>
      <div>
        {items.map(([title, value, Icon]) => (
          <article className="highlight panel" key={title}>
            <span>
              <Icon size={19} />
            </span>
            <p>
              {title}
              <b>{value}</b>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}