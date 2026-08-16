"use client";

import React, { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  ArrowRight,
  BatteryCharging,
  Camera,
  Check,
  ChevronDown,
  ChevronRight,
  CircleDollarSign,
  Cpu,
  Filter,
  Headphones,
  Laptop,
  Menu,
  Moon,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Sun,
  Tablet,
  Watch,
  X,
  Zap,
  LucideIcon,
} from "lucide-react";
import { useTheme } from "next-themes";

/* ==========================================================================
   1. TYPES & INTERFACES
   ========================================================================== */

export interface Store {
  name: string;
  price: string;
  status: string;
  tone: "good" | "warn" | "bad" | string;
  lowest: boolean;
}

export interface AlternativeItem {
  label: string;
  name: string;
  price: string;
  save: string;
  rating: string;
  image: string;
}

export interface TrendDataPoint {
  day: string;
  price: number;
}

export type CategoryTuple = [
  name: string,
  count: string,
  icon: LucideIcon
];

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

/* ==========================================================================
   2. STATIC MOCK DATA
   ========================================================================== */

const productImage = "/iphone15.jpg";

const stores: Store[] = [
  { name: "Amazon", price: "₹69,900", status: "In Stock", tone: "good", lowest: false },
  { name: "Flipkart", price: "₹68,999", status: "In Stock", tone: "good", lowest: true },
  { name: "Croma", price: "₹69,999", status: "In Stock", tone: "good", lowest: false },
  {
    name: "Reliance Digital",
    price: "₹69,900",
    status: "Limited Stock",
    tone: "warn",
    lowest: false,
  },
  { name: "Vijay Sales", price: "₹69,999", status: "In Stock", tone: "good", lowest: false },
];

const alternatives: AlternativeItem[] = [
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

const trend: TrendDataPoint[] = [
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

const categories: CategoryTuple[] = [
  ["All Categories", "372", Sparkles],
  ["Smartphones", "98", Smartphone],
  ["Laptops", "74", Laptop],
  ["Tablets", "32", Tablet],
  ["Smartwatches", "26", Watch],
  ["Headphones", "48", Headphones],
  ["Cameras", "31", Camera],
  ["Accessories", "27", Cpu],
];

/* ==========================================================================
   3. SMALL UI HELPER COMPONENTS
   ========================================================================== */

/** Renders a 5-star rating display based on numeric rating */
function Stars({ rating = 4.6 }: { rating?: number }) {
  return (
    <span className="stars" aria-label={`${rating} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((star) => (
        <Star
          key={star}
          size={14}
          fill={star < Math.round(rating) ? "currentColor" : "none"}
        />
      ))}
    </span>
  );
}

/** Renders brand logo and app title */
function Logo() {
  return (
    <a href="#home" className="logo" aria-label="Is It Worth It home">
      <span className="logo-mark">
        <Zap size={25} strokeWidth={3} />
      </span>
      <span>
        <strong>Is It Worth It?</strong>
        <small>AI Buying Advisor</small>
      </span>
    </a>
  );
}

/* ==========================================================================
   4. NAVIGATION & HEADER
   ========================================================================== */

interface HeaderProps {
  query: string;
  setQuery: (value: string) => void;
  onSearch: () => void;
}

function Header({ query, setQuery, onSearch }: HeaderProps) {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header" id="top">
      <div className="header-inner">
        <Logo />
        <form
          className="searchbar"
          onSubmit={(event) => {
            event.preventDefault();
            onSearch();
          }}
        >
          <Search size={19} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search any gadget... (e.g., iPhone 15, Samsung S24, Sony WH-1000XM5)"
            aria-label="Search gadgets"
          />
          <button type="submit">Search</button>
        </form>
        <nav className={menuOpen ? "nav open" : "nav"}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <button
            className="theme-toggle"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

/* ==========================================================================
   5. FILTERS SIDEBAR
   ========================================================================== */

function Filters() {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState("All Categories");
  const [brand, setBrand] = useState("All Brands");

  return (
    <aside className="filters panel">
      <div className="filter-heading">
        <Filter size={17} />
        <h2>Filters</h2>
      </div>
      <button
        className="mobile-filter-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Filters</span>
        {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
      </button>
      <div className={isOpen ? "filters-content open" : "filters-content"}>
        <div className="filter-group">
          <h3>Categories</h3>
          <div className="category-list">
            {categories.map(([name, count, Icon]) => (
              <button
                key={name}
                className={category === name ? "category active" : "category"}
                onClick={() => setCategory(name)}
              >
                <Icon size={15} />
                <span>{name}</span>
                <b>{count}</b>
              </button>
            ))}
          </div>
        </div>
        <div className="filter-group">
          <h3>Price Range</h3>
          <div className="range">
            <div className="range-track">
              <i />
              <i />
            </div>
            <div>
              <span>₹ 0</span>
              <span>₹ 2,00,000+</span>
            </div>
          </div>
        </div>
        <div className="filter-group">
          <h3>Brand</h3>
          <button
            className="select-button"
            onClick={() =>
              setBrand(brand === "All Brands" ? "Apple" : "All Brands")
            }
          >
            {brand}
            <ChevronDown size={15} />
          </button>
        </div>
        <div className="filter-group rating-filter">
          <h3>Ratings</h3>
          {[5, 4, 3, 2, 1].map((rating) => (
            <label key={rating}>
              <input type="checkbox" />
              <Stars rating={rating} />
              <span>& Up</span>
            </label>
          ))}
        </div>
        <button className="primary-button">Apply Filters</button>
        <button className="secondary-button">Clear Filters</button>
      </div>
    </aside>
  );
}

/* ==========================================================================
   6. PRODUCT OVERVIEW & PRICE COMPARISON
   ========================================================================== */

function PriceOverview({ stores }: { stores: Store[] }) {
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

function ProductOverview({ query }: { query: string }) {
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

/* ==========================================================================
   7. ALTERNATIVES & HIGHLIGHTS
   ========================================================================== */

function HorizontalAlternatives() {
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

function Highlights() {
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

/* ==========================================================================
   8. AI ANALYSIS & PRICE TREND SIDEBAR
   ========================================================================== */

function SidebarAnalysis() {
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

/* ==========================================================================
   9. INFORMATION & MARKETING SECTIONS
   ========================================================================== */

function HowItWorks() {
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

/* ==========================================================================
   10. MAIN ENTRY PAGE COMPONENT
   ========================================================================== */

export default function Page() {
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState("Apple iPhone 15 (128GB)");
  const reducedMotion = useReducedMotion();

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
            <HorizontalAlternatives />
            <Highlights />
          </div>
          <SidebarAnalysis />
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

export { productImage };