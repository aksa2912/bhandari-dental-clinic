"use client";

import React, { useState } from "react";
import { useTheme } from "next-themes";
import { Zap, Search, Sun, Moon, X, Menu } from "lucide-react";

interface HeaderProps {
  query: string;
  setQuery: (value: string) => void;
  onSearch: () => void;
}

export function Logo() {
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

export default function Header({ query, setQuery, onSearch }: HeaderProps) {
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