'use client'

import { useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import {
  ArrowRight,
  BatteryCharging,
  Camera,
  Check,
  ChevronDown,
  ChevronRight,
  CircleDollarSign,
  Cpu,
  ExternalLink,
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
  TrendingDown,
  Watch,
  X,
  Zap,
} from 'lucide-react'
import { useTheme } from 'next-themes'

const productImage = 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=620&q=85'

const stores = [
  { name: 'amazon', price: '₹69,900', status: 'In Stock', tone: 'good' },
  { name: 'Flipkart', price: '₹68,999', status: 'In Stock', tone: 'good' },
  { name: 'croma', price: '₹69,999', status: 'In Stock', tone: 'good' },
  { name: 'Reliance Digital', price: '₹69,900', status: 'Limited Stock', tone: 'warn' },
  { name: 'Vijay Sales', price: '₹69,999', status: 'In Stock', tone: 'good' },
]

const alternatives = [
  { label: 'Best Value', name: 'Samsung Galaxy S24 (128GB)', price: '₹59,999', save: '12% less', rating: '4.4', image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=320&q=80' },
  { label: 'Great Alternative', name: 'OnePlus 12R (256GB)', price: '₹54,999', save: '20% less', rating: '4.3', image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=320&q=80' },
  { label: 'Budget Friendly', name: 'Nothing Phone (2a) (128GB)', price: '₹23,999', save: '66% less', rating: '4.1', image: 'https://images.unsplash.com/photo-1596558450255-7c0b7be9d56a?auto=format&fit=crop&w=320&q=80' },
]

const trend = [
  { day: 'Jul 13', price: 73500 }, { day: '', price: 72000 }, { day: '', price: 72600 }, { day: '', price: 71400 }, { day: '', price: 72100 }, { day: '', price: 71600 }, { day: '', price: 72400 }, { day: '', price: 71000 }, { day: '', price: 70400 }, { day: '', price: 69500 }, { day: 'Jul 28', price: 70200 }, { day: '', price: 68600 }, { day: '', price: 69200 }, { day: '', price: 67800 }, { day: '', price: 68200 }, { day: '', price: 67100 }, { day: '', price: 67900 }, { day: '', price: 66500 }, { day: '', price: 67200 }, { day: 'Aug 12', price: 68999 },
]

const categories = [
  ['All Categories', '372', Sparkles], ['Smartphones', '98', Smartphone], ['Laptops', '74', Laptop], ['Tablets', '32', Tablet], ['Smartwatches', '26', Watch], ['Headphones', '48', Headphones], ['Cameras', '31', Camera], ['Accessories', '27', Cpu],
]

function Stars({ rating = 4.6 }: { rating?: number }) {
  return <span className="stars" aria-label={`${rating} out of 5 stars`}>{[0, 1, 2, 3, 4].map((star) => <Star key={star} size={15} fill={star < Math.round(rating) ? 'currentColor' : 'none'} />)}</span>
}

function Logo() {
  return <a href="#top" className="logo" aria-label="Is It Worth It home"><span className="logo-mark"><Check size={25} strokeWidth={3} /></span><span><strong>IsIt<span>Worthit?</span></strong><small>Smart buys. Better choices.</small></span></a>
}

function Header({ query, setQuery, onSearch }: { query: string; setQuery: (value: string) => void; onSearch: () => void }) {
  const { theme, setTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  return <header className="site-header" id="top"><div className="header-inner"><Logo /><form className="searchbar" onSubmit={(event) => { event.preventDefault(); onSearch() }}><Search size={19} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search any gadget... (e.g., iPhone 15, Samsung S24, Sony WH-1000XM5)" aria-label="Search gadgets" /><button type="submit">Search</button></form><nav className={menuOpen ? 'nav open' : 'nav'}><a href="#analysis">Analysis</a><a href="#how-it-works">How it works</a><button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme">{theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}</button></nav><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">{menuOpen ? <X /> : <Menu />}</button></div></header>
}

function Filters() {
  const [category, setCategory] = useState('All Categories')
  const [brand, setBrand] = useState('All Brands')
  return <aside className="filters panel"><div className="filter-heading"><Filter size={17} /><h2>Filters</h2></div><div className="filter-group"><h3>Categories</h3><div className="category-list">{categories.map(([name, count, Icon]) => <button key={name as string} className={category === name ? 'category active' : 'category'} onClick={() => setCategory(name as string)}><Icon size={15} /><span>{name as string}</span><b>{count as string}</b></button>)}</div></div><div className="filter-group"><h3>Price Range</h3><div className="range"><div className="range-track"><i /><i /></div><div><span>₹ 0</span><span>₹ 2,00,000+</span></div></div></div><div className="filter-group"><h3>Brand</h3><button className="select-button" onClick={() => setBrand(brand === 'All Brands' ? 'Apple' : 'All Brands')}>{brand}<ChevronDown size={15} /></button></div><div className="filter-group rating-filter"><h3>Ratings</h3>{[5, 4, 3, 2, 1].map((rating) => <label key={rating}><input type="checkbox" /><Stars rating={rating} /><span>& Up</span></label>)}</div><button className="primary-button">Apply Filters</button><button className="secondary-button">Clear Filters</button></aside>
}

function ProductOverview({ query }: { query: string }) {
  return <section className="product panel"><div className="product-top"><div className="product-visual"><span className="popular-badge">Most Popular</span><img src={productImage} alt="Apple iPhone 15 product" /><button className="secondary-button">View Full Details</button></div><div className="product-copy"><div className="brand-logo" aria-label="Apple">●</div><h1>{query || 'Apple iPhone 15 (128GB)'}</h1><div className="rating"><strong>4.6</strong><Stars /><span>(12,543 reviews)</span></div><p>The iPhone 15 features a 6.1-inch Super Retina XDR display, A16 Bionic chip, and advanced dual-camera system.</p><div className="specs"><span><Smartphone size={15} />6.1&quot; OLED Display</span><span><Cpu size={15} />A16 Bionic Chip</span><span><Camera size={15} />12MP Dual Camera</span><span><BatteryCharging size={15} />3279mAh Battery</span></div></div></div><PriceOverview /></section>
}

function PriceOverview() {
  return <div className="price-overview"><div className="section-title"><div><h2>Price Overview</h2><p>Prices updated on Aug 12, 2026</p></div><div className="lowest"><span>Lowest Price</span><strong>₹ 68,999</strong></div></div><div className="store-grid">{stores.map((store) => <a className="store-card" href="https://www.flipkart.com" target="_blank" rel="noreferrer" key={store.name}><strong>{store.name}</strong><b>{store.price}</b><span className={store.tone}>{store.status}</span><ExternalLink size={12} /></a>)}</div></div>
}

function ScoreAndTrend() {
  const score = 78
  return <section className="insights panel" id="analysis"><div className="score-block"><h2>Is It Worth It?</h2><div className="score-ring" style={{ '--score': `${score * 3.6}deg` } as React.CSSProperties}><div><strong>7.8</strong><span>/10</span></div></div><b className="deal"><span />Good Deal</b></div><div className="analysis-block"><h2>AI Analysis</h2><ul><li><span className="negative">↓</span>Current price is <b>8% lower</b> than the average market price</li><li><span className="neutral">＋</span>Newer model expected in 3-4 months</li><li><span className="positive">＋</span>Good time to buy if you need it now</li><li><span className="positive">＋</span>128GB variant offers good value for money</li></ul></div><div className="trend-block"><div className="trend-heading"><h2>Price Trend (30 Days)</h2><b>₹ 68,999</b></div><div className="chart"><ResponsiveContainer width="100%" height="100%"><AreaChart data={trend}><defs><linearGradient id="priceFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="var(--brand)" stopOpacity={0.18} /><stop offset="100%" stopColor="var(--brand)" stopOpacity={0} /></linearGradient></defs><YAxis domain={[60000, 80000]} hide /><XAxis dataKey="day" tick={{ fill: 'var(--muted-foreground)', fontSize: 10 }} axisLine={false} tickLine={false} /><Tooltip contentStyle={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 10 }} formatter={(value) => [`₹${Number(value).toLocaleString('en-IN')}`, 'Price']} /><Area type="monotone" dataKey="price" stroke="var(--brand)" strokeWidth={2.5} fill="url(#priceFill)" /></AreaChart></ResponsiveContainer></div></div></section>
}

function Alternatives() {
  return <aside className="alternatives"><div className="rail-heading"><div><h2>Better Alternatives</h2><p>Similar products with better value</p></div></div>{alternatives.map((item) => <motion.article whileHover={{ y: -3 }} transition={{ duration: 0.2 }} className="alternative panel" key={item.name}><div className="alt-image"><img src={item.image} alt="" /></div><div className="alt-copy"><span className="alt-label">{item.label}</span><h3>{item.name}</h3><div><b>{item.price}</b><small>{item.save}</small></div><div className="rating"><strong>{item.rating}</strong><Stars rating={Number(item.rating)} /></div><button className="secondary-button">View Details</button></div></motion.article>)}<button className="more-button">View More Alternatives <ArrowRight size={17} /></button></aside>
}

function Highlights() {
  const items = [['Best For', 'Photography', Camera], ['Performance', 'Excellent', Zap], ['Battery Life', 'Good', BatteryCharging], ['Value for Money', 'Good', CircleDollarSign], ['Build Quality', 'Excellent', ShieldCheck]] as const
  return <section className="highlights"><h2>Key Highlights</h2><div>{items.map(([title, value, Icon]) => <article className="highlight panel" key={title}><span><Icon size={19} /></span><p>{title}<b>{value}</b></p></article>)}</div></section>
}

function HowItWorks() {
  return <section className="how section-shell" id="how-it-works"><div className="eyebrow">BUY WITH CONFIDENCE</div><h2>Skip the tabs. Make the call.</h2><p>IsItWorthit? turns scattered specs, prices, and opinions into one clear recommendation.</p><div className="steps"><article><span>1</span><Search /><h3>Search any gadget</h3><p>Tell us what you&apos;re considering, from phones to headphones.</p></article><article><span>2</span><Sparkles /><h3>Get the real picture</h3><p>We compare live prices, performance, and what&apos;s coming next.</p></article><article><span>3</span><Check /><h3>Buy with confidence</h3><p>See the best deal and the smartest alternative in seconds.</p></article></div></section>
}

export default function Page() {
  const [query, setQuery] = useState('')
  const [searched, setSearched] = useState('Apple iPhone 15 (128GB)')
  const reducedMotion = useReducedMotion()
  const intro = useMemo(() => ({ initial: reducedMotion ? false : { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.45 } }), [reducedMotion])
  return <><Header query={query} setQuery={setQuery} onSearch={() => setSearched(query || 'Apple iPhone 15 (128GB)')} /><main><section className="hero section-shell"><motion.div {...intro}><div className="eyebrow"><Sparkles size={14} /> THE SMART BUYING ADVISOR</div><h2>Is it actually <em>worth it?</em></h2><p>Cut through the noise. Compare prices, understand value, and find the right gadget for you.</p></motion.div></section><div className="workspace section-shell"><Filters /><div className="main-column"><ProductOverview query={searched} /><ScoreAndTrend /><Highlights /></div><Alternatives /></div><HowItWorks /><section className="about section-shell"><div><div className="eyebrow">A LITTLE LESS GUESSWORK</div><h2>Better decisions,<br /><em>less buyer&apos;s remorse.</em></h2></div><p>We believe shopping for tech should feel empowering, not overwhelming. Our independent analysis brings the signal to the surface so you can spend less time researching and more time enjoying what you buy.</p></section></main><footer><div className="footer-inner"><Logo /><p>Independent buying advice for the things you use every day.</p><span>© 2026 IsItWorthit?</span></div></footer></>
}

export { productImage }
