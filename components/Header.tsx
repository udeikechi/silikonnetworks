"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type HeaderProps = {
  onOpenQuote?: () => void;
};

type ScrollDirection = "up" | "down";

export function Header({ onOpenQuote }: HeaderProps) {
  const [isSolid, setIsSolid] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [scrollDir, setScrollDir] = useState<ScrollDirection>("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    let ticking = false;
    let lastScrollPosition = 0;

    const handleScroll = () => {
      const currentY = window.scrollY || window.pageYOffset;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const direction: ScrollDirection = currentY > lastScrollPosition ? "down" : "up";
          setScrollDir(direction);
          setIsSolid(currentY > 40);
          
          // Hide when scrolling down (after initial scroll), show immediately when scrolling up
          if (currentY > 100) {
            setIsHidden(direction === "down");
          } else {
            setIsHidden(false);
          }
          
          lastScrollPosition = currentY;
          setLastScrollY(currentY);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine header style based on page and scroll position
  // Home page: always transparent when not solid
  // Other pages: black background on hero sections when not solid
  const getHeaderStyle = () => {
    if (isSolid) {
      return "sn-header--solid";
    }
    if (isHomePage) {
      return "sn-header--transparent";
    }
    // Other pages with hero sections get black background
    return "sn-header--transparent-black";
  };

  const headerClassNames = [
    "sn-header",
    getHeaderStyle(),
    isHidden ? "sn-header--hidden" : "",
  ]
    .filter(Boolean)
    .join(" ");

  // Determine which logo to use based on header background
  // White logo for: transparent (over dark hero) or black background
  // Black logo for: solid white background
  const useWhiteLogo = !isSolid;

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <div className="sn-header-shell" aria-hidden={false}>
        <header className={headerClassNames}>
          <Link href="/" className="sn-logo" aria-label="Silikon Networks home">
            <Image
              src={useWhiteLogo ? "/sn-logo-white.png" : "/sn-logo-black.png"}
              alt="Silikon Networks"
              width={150}
              height={40}
              className="sn-logo-img"
              priority
            />
          </Link>

          <nav className="sn-nav" aria-label="Primary navigation">
            <div className="sn-nav-main">
              <Link href="/" className="sn-nav-link">
                Home
              </Link>
              <Link href="/services" className="sn-nav-link">
                Services
              </Link>
              <Link href="/projects" className="sn-nav-link">
                Projects
              </Link>
              <Link href="/about" className="sn-nav-link">
                About
              </Link>
              <Link href="/careers" className="sn-nav-link">
                Careers
              </Link>
              <Link href="/contact" className="sn-nav-link">
                Contact
              </Link>
            </div>

            <div className="sn-nav-cta">
              <button
                type="button"
                className="sn-header-quote-btn sn-header-quote-btn--solid"
                onClick={onOpenQuote}
              >
                Get a Quote
              </button>
            </div>

            <button
              type="button"
              className="sn-header-mobile-toggle"
              aria-label="Toggle navigation"
              onClick={() => setMobileOpen((open) => !open)}
            >
              <span>{mobileOpen ? "Close" : "Menu"}</span>
            </button>
          </nav>
        </header>
      </div>

      {mobileOpen && (
        <div className="sn-mobile-nav" role="dialog" aria-modal="true">
          <div className="sn-mobile-nav-inner">
            <div className="sn-mobile-nav-group">
              <p className="sn-mobile-nav-group-title">Main</p>
              <Link href="/" className="sn-mobile-nav-link" onClick={closeMobile}>
                Home
              </Link>
              <Link href="/services" className="sn-mobile-nav-link" onClick={closeMobile}>
                Services overview
              </Link>
            </div>

            <div className="sn-mobile-nav-group">
              <p className="sn-mobile-nav-group-title">Services</p>
              <div className="sn-mobile-nav-sub">
                <Link
                  href="/services/energy"
                  className="sn-mobile-nav-link"
                  onClick={closeMobile}
                >
                  Energy &amp; Power
                </Link>
                <Link
                  href="/services/trade"
                  className="sn-mobile-nav-link"
                  onClick={closeMobile}
                >
                  Global Trade
                </Link>
                <Link
                  href="/services/software"
                  className="sn-mobile-nav-link"
                  onClick={closeMobile}
                >
                  Software Development
                </Link>
              </div>
            </div>

            <div className="sn-mobile-nav-group">
              <p className="sn-mobile-nav-group-title">Company</p>
              <Link href="/projects" className="sn-mobile-nav-link" onClick={closeMobile}>
                Projects / Case Studies
              </Link>
              <Link href="/about" className="sn-mobile-nav-link" onClick={closeMobile}>
                About
              </Link>
              <Link href="/careers" className="sn-mobile-nav-link" onClick={closeMobile}>
                Careers
              </Link>
              <Link href="/contact" className="sn-mobile-nav-link" onClick={closeMobile}>
                Contact
              </Link>
            </div>

            <div className="sn-mobile-nav-group">
              <div className="sn-mobile-nav-cta-row">
                <button
                  type="button"
                  className="sn-btn sn-btn--outline"
                  onClick={() => {
                    closeMobile();
                    onOpenQuote?.();
                  }}
                >
                  Get a Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


