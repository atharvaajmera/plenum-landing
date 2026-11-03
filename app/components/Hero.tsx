import { GITHUB_URL } from "../site";
import {
  Download,
  Github,
  Smartphone,
  Wifi,
  Globe,
} from "./icons";
import Shot from "./Shot";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__wash" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__copy">
          <h1 data-reveal>
            Files between your devices.
            <br />
            <em>No cloud storage.</em>
          </h1>
          <p className="hero__sub" data-reveal>
            Free, open-source file transfer for Windows and Android. Scan a QR
            code, paste a Plenum link, or enter a room code. Connect directly
            when possible, with encrypted relay fallback when needed.
          </p>
          <div className="hero__cta" data-reveal>
            <a
              className="btn btn--primary btn--lg"
              href="#download"
              data-platform-href
            >
              <Download />
              <span data-platform-label>Download Plenum</span>
            </a>
            <a
              className="btn btn--ghost btn--lg"
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
              View source code
            </a>
          </div>
          <p className="hero__meta" data-reveal>
            <span>
              <Smartphone />
              Phone ⇄ desktop
            </span>
            <span>
              <Wifi />
              Direct on local network
            </span>
            <span className="hero__meta-net">
              <Globe />
              Encrypted relay fallback
            </span>
          </p>
        </div>

        <div className="hero__visual" data-reveal>
          <div className="hero-scene" aria-hidden="true">
            <figure className="frame-desktop frame-desktop--hero">
              <div className="frame-desktop__bar">
                <span className="frame-desktop__dot" />
                <span className="frame-desktop__dot" />
                <span className="frame-desktop__dot" />
                <span className="frame-desktop__title">Plenum - Desktop</span>
              </div>
              <div className="frame-desktop__shot">
                <Shot
                  priority
                  darkSrc="/screenshots/desktop-dark.png"
                  lightSrc="/screenshots/desktop-light.png"
                  alt="Plenum desktop app home screen"
                  label="Plenum on Desktop"
                />
              </div>
            </figure>

            <figure className="frame-phone frame-phone--hero">
              <span className="frame-phone__speaker" />
              <span className="frame-phone__camera" />
              <div className="frame-phone__shot">
                <span className="frame-phone__glare" />
                <Shot
                  priority
                  darkSrc="/screenshots/mobile-dark-send.png"
                  lightSrc="/screenshots/mobile-light-send.png"
                  alt="Plenum Android app showing file selection to send"
                  label="Plenum on Android"
                />
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
