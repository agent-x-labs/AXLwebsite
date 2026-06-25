export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="nav-logo" href="#top" aria-label="Agent X Labs - home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/AXLLogoDarkBG.svg" alt="Agent X Labs" />
        </a>
        <nav className="footer-links" aria-label="Legal">
          <a href="/privacy-policy">Privacy</a>
          <a href="/terms-of-service">Terms</a>
        </nav>
        <div className="footer-copy">© 2026 Agent X Labs Ltd · All rights reserved</div>
      </div>
    </footer>
  );
}
