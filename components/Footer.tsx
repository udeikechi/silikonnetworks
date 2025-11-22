import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="sn-footer">
      <div className="sn-footer-inner">
        <div className="sn-footer-main">
          <div>
            <div className="sn-logo" aria-label="Silikon Networks">
              <Image
                src="/sn-logo-white.png"
                alt="Silikon Networks"
                width={150}
                height={40}
                className="sn-logo-img"
              />
            </div>
            <p className="sn-footer-tagline">
              Technology that moves, powers, and connects the world.
            </p>
          </div>

          <div>
            <p className="sn-footer-section-title">Quick links</p>
            <div className="sn-footer-links">
              <Link href="/services">Services</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/about">About</Link>
              <Link href="/careers">Careers</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms</Link>
            </div>
          </div>

          <div>
            <p className="sn-footer-section-title">Contact</p>
            <div className="sn-footer-contact">
              <p>Email: silikonnetworks@gmail.com</p>
              <p>Phone: +234 708 556 8440</p>
              <p>Head office: 19 Item Street, Umuahia, Abia State, Nigeria</p>
            </div>
            <p className="sn-footer-section-title" style={{ marginTop: 10 }}>
              Social
            </p>
            <div className="sn-footer-social">
              <a href="#" aria-label="LinkedIn">
                LinkedIn
              </a>
              <a href="#" aria-label="Twitter / X">
                X
              </a>
              <a href="#" aria-label="Medium">
                Medium
              </a>
            </div>
          </div>
        </div>

        <div className="sn-footer-bottom">
          <span>© Silikon Networks {year}. All rights reserved.</span>
          <span>Built for mobility, energy, trade and software teams.</span>
        </div>
      </div>
    </footer>
  );
}


