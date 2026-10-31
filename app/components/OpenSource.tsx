import { GITHUB_URL } from "../site";
import { Github, Check, Star, GitFork } from "./icons";

export default function OpenSource() {
  return (
    <section className="section oss" id="open-source">
      <div className="container">
        <div className="oss__panel" data-reveal>
          <div>
            <h2>Don&apos;t take our word for it. Read the code.</h2>
            <p>
              Every line of Plenum is public. You can audit exactly how a file
              moves, confirm nothing is sent anywhere it shouldn&apos;t be, or
              build it yourself from source.
            </p>
            <div className="oss__facts">
              <span className="oss__fact">
                <Check />
                Fully auditable
              </span>
              <span className="oss__fact">
                <Check />
                Rust transfer core
              </span>
              <span className="oss__fact">
                <Check />
                No telemetry
              </span>
            </div>
            <div style={{ marginTop: "var(--space-lg)" }}>
              <a
                className="btn btn--ghost"
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
                Browse the repository
              </a>
            </div>
          </div>

          <div className="repo">
            <div className="repo__top">
              <Github />
              <span className="repo__owner">atharvaajmera&#8202;/</span>&#8202;Plenum
            </div>
            <div className="repo__body">
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9375rem" }}>
                Secure, high-performance peer-to-peer file transfer for Android
                and desktop.
              </p>
              <div className="repo__langs" aria-hidden="true">
                <i style={{ width: "58%", background: "#dea584" }} />
                <i style={{ width: "27%", background: "var(--accent-primary)" }} />
                <i style={{ width: "15%", background: "#3178c6" }} />
              </div>
              <div className="repo__legend" aria-hidden="true">
                <span>
                  <i style={{ background: "#dea584" }} />
                  Rust
                </span>
                <span>
                  <i style={{ background: "var(--accent-primary)" }} />
                  Dart
                </span>
                <span>
                  <i style={{ background: "#3178c6" }} />
                  TypeScript
                </span>
              </div>
              <div className="repo__stats">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Star
                    style={{
                      width: 15,
                      height: 15,
                      display: "inline",
                      verticalAlign: "-2px",
                      marginRight: 5,
                      color: "var(--accent-primary)",
                    }}
                  />
                  Star the repo
                </a>
                <a
                  href={`${GITHUB_URL}/fork`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitFork
                    style={{
                      width: 15,
                      height: 15,
                      display: "inline",
                      verticalAlign: "-2px",
                      marginRight: 5,
                      color: "var(--text-secondary)",
                    }}
                  />
                  Fork &amp; build it
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
