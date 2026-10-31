import { GITHUB_URL, RELEASES_URL } from "../site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a className="brand" href="#top" aria-label="Plenum home">
              <img
                className="brand__mark"
                src="/brand/logo-128.png"
                alt=""
                width={32}
                height={32}
              />
              Plenum
            </a>
            <p>Device to device. Nothing in between.</p>
          </div>

          <div className="footer__cols">
            <div className="footer__col">
              <h3>Product</h3>
              <a href="#how">How it works</a>
              <a href="#privacy">Privacy</a>
              <a href="#app">The app</a>
              <a href={RELEASES_URL}>Download</a>
            </div>
            <div className="footer__col">
              <h3>Project</h3>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a
                href={`${GITHUB_URL}/releases`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Releases
              </a>
              <a
                href={`${GITHUB_URL}/blob/main/LICENSE`}
                target="_blank"
                rel="noopener noreferrer"
              >
                License
              </a>
            </div>
          </div>
        </div>

        <div className="footer__base">
          <span>© {new Date().getFullYear()} Plenum.</span>
        </div>
      </div>
    </footer>
  );
}
