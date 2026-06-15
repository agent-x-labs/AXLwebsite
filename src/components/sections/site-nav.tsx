"use client";

import { useState } from "react";
import { SITE, NAV_LINKS } from "@/content/site";

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header id="top">
      <nav className="site-nav" aria-label="Main navigation">
        <div className="nav-inner">
          <a className="nav-logo" href="#top" aria-label="Agent X Labs — home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/logo_axl.png" alt="Agent X Labs" />
          </a>
          <div className="nav-right">
            <div className="nav-links">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
            <a className="btn btn-primary" href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">
              {SITE.bookingLabel}
            </a>
            <button
              type="button"
              className="nav-toggle"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M5 5l14 14M19 5L5 19" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
      {open && (
        <div className="mobile-menu" id="mobile-menu">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="btn btn-primary" href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">
            {SITE.bookingLabel}
          </a>
        </div>
      )}
    </header>
  );
}
