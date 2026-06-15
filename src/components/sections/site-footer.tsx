export function SiteFooter() {
  return (
    <footer className="site-footer band-paper">
      <div className="container footer-inner">
        <a className="nav-logo" href="#top">
          Agent <span className="x">X</span> Labs
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
