"use client";

import React, { useState } from "react";
import Stars from "./Stars";
import {
  Filter,
  ChevronDown,
  ChevronRight,
  Sparkles,
  Smartphone,
  Laptop,
  Tablet,
  Watch,
  Headphones,
  Camera,
  Cpu,
  LucideIcon,
} from "lucide-react";

type CategoryTuple = [name: string, count: string, icon: LucideIcon];

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

export default function Filters() {
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