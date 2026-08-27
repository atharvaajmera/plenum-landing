import { GITHUB_URL } from "../site";
import { Github, Download } from "./icons";

export default function Nav() {
  return (
    <header className="nav" data-nav data-scrolled="false">
      <div className="container nav__inner">
        <a className="brand" href="#top" aria-label="Plenum home">
          <img
            className="brand__mark"
            src="/brand/logo-64.png"
            alt=""
            width={30}
            height={30}
          />
          Plenum
        </a>
        <nav className="nav__actions" aria-label="Primary">
          <a className="nav__link nav__link--anchor" href="#how">
            How it works
          </a>
          <a className="nav__link nav__link--anchor" href="#privacy">
            Privacy
          </a>
          <a
            className="nav__link nav__link--github"
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
            <span>GitHub</span>
          </a>
          <a className="btn btn--primary" href="#download" data-platform-href>
            <Download />
            Download
          </a>
        </nav>
      </div>
    </header>
  );
}
