import { GITHUB_URL } from "../site";
import { Github } from "./icons";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  return (
    <header className="nav" data-nav data-scrolled="false">
      <div className="container nav__inner">
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
            aria-label="View Plenum on GitHub"
          >
            <Github />
            <span>GitHub</span>
          </a>
          <ThemeToggle />
          <a className="btn btn--primary" href="#download" data-platform-href>
            Download
          </a>
        </nav>
      </div>
    </header>
  );
}
