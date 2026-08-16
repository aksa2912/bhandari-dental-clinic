"use client";

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const trend = [
  { day: "Jul 13", price: 73500 },
  { day: "", price: 72000 },
  { day: "", price: 72600 },
  { day: "", price: 71400 },
  { day: "", price: 72100 },
  { day: "", price: 71600 },
  { day: "", price: 72400 },
  { day: "", price: 71000 },
  { day: "", price: 70400 },
  { day: "", price: 69500 },
  { day: "Jul 28", price: 70200 },
  { day: "", price: 68600 },
  { day: "", price: 69200 },
  { day: "", price: 67800 },
  { day: "", price: 68200 },
  { day: "", price: 67100 },
  { day: "", price: 67900 },
  { day: "", price: 66500 },
  { day: "", price: 67200 },
  { day: "Aug 12", price: 68999 },
];

export default function ScoreAndTrend() {
  const score = 78;

  return (
    <aside className="right-sidebar panel">
      <div className="score-block">
        <h1>Is It Worth It?</h1>
        <div
          className="score-ring"
          style={{ "--score": `${score * 3.6}deg` } as React.CSSProperties}
        >
          <div>
            <strong>7.8</strong>
            <span>/10</span>
          </div>
        </div>
        <b className="deal">
          <span />
          Good Deal
        </b>
      </div>

      <div className="analysis-block">
        <h3>AI Analysis</h3>
        <ul>
          <li>
            <span className="negative">↓</span>
            <div>
              Current price is <b>8% lower</b> than market average
            </div>
          </li>
          <li>
            <span className="neutral">＋</span>
            <div>Newer model expected in 3-4 months</div>
          </li>
          <li>
            <span className="positive">＋</span>
            <div>Good time to buy if needed now</div>
          </li>
          <li>
            <span className="positive">＋</span>
            <div>128GB variant offers great value</div>
          </li>
        </ul>
      </div>

      <div className="trend-block">
        <div className="trend-heading">
          <h3>30-Day Price Trend</h3>
          <b>₹ 68,999</b>
        </div>
        <div className="chart">
          <ResponsiveContainer width="100%" height={120}>
            <AreaChart data={trend}>
              <defs>
                <linearGradient id="priceFill" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="0%"
                    stopColor="var(--brand)"
                    stopOpacity={0.25}
                  />
                  <stop
                    offset="100%"
                    stopColor="var(--brand)"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <YAxis domain={[60000, 80000]} hide />
              <XAxis
                dataKey="day"
                tick={{ fill: "var(--muted-foreground)", fontSize: 10 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                }}
                formatter={(value) => [
                  `₹${Number(value).toLocaleString("en-IN")}`,
                  "Price",
                ]}
              />
              <Area
                type="monotone"
                dataKey="price"
                stroke="var(--brand)"
                strokeWidth={2}
                fill="url(#priceFill)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </aside>
  );
}