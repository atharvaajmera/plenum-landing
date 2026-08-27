import { GITHUB_URL } from "../site";
import {
  Download,
  Github,
  Smartphone,
  Wifi,
  Globe,
  Zap,
  Check,
  File,
} from "./icons";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__wash" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="hero__pill">
            <span className="hero__dot" aria-hidden="true" />
            Free &amp; open source · <b>no account needed</b>
          </p>
          <h1 data-reveal>
            Device to device.
            <br />
            <em>Nothing in between.</em>
          </h1>
          <p className="hero__sub" data-reveal>
            A free, open-source app that moves files straight between your phone
            and computer — end-to-end encrypted, at full network speed. No cloud,
            no accounts, no size limits.
          </p>
          <div className="hero__cta" data-reveal>
            <a className="btn btn--primary btn--lg" href="#download" data-platform-href>
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
              View source
            </a>
          </div>
          <p className="hero__meta" data-reveal>
            <span>
              <Smartphone />
              Phone ⇄ desktop
            </span>
            <span>
              <Wifi />
              Found automatically on Wi-Fi
            </span>
            <span className="hero__meta-net">
              <Globe />
              Or paired across the internet
            </span>
          </p>
        </div>

        <div className="hero__visual" data-reveal>
          <div className="scene" aria-hidden="true">
            <div className="pw">
              <div className="pw__bar">
                <img
                  className="pw__mark"
                  src="/brand/logo-64.png"
                  alt=""
                  width={22}
                  height={22}
                />
                <span className="pw__name">Plenum</span>
                <span className="pw__status">
                  <span className="pw__status-dot" />
                  Connected
                </span>
              </div>
              <div className="pw__body">
                <p className="pw__peer">
                  <b>Pixel&nbsp;8</b> to <b>This&nbsp;Mac</b> · direct link
                </p>

                <div className="pw__file pw__file--active">
                  <span className="pw__file-icon">
                    <File />
                  </span>
                  <div className="pw__file-main">
                    <div className="pw__file-row">
                      <span className="pw__file-name">design-assets.zip</span>
                      <span className="pw__file-pct">72%</span>
                    </div>
                    <div className="pw__track">
                      <span className="pw__fill" />
                    </div>
                    <div className="pw__file-meta">
                      <span>178 of 248 MB</span>
                      <span className="pw__speed">
                        <Zap />
                        18.4 MB/s
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pw__file pw__file--done">
                  <span className="pw__file-icon pw__file-icon--done">
                    <Check />
                  </span>
                  <div className="pw__file-main">
                    <div className="pw__file-row">
                      <span className="pw__file-name">vacation-video.mp4</span>
                      <span className="pw__file-done">Sent</span>
                    </div>
                    <div className="pw__file-meta">
                      <span>1.2 GB · encrypted end to end</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ph">
              <span className="ph__notch" />
              <div className="ph__screen">
                <div className="ph__radar">
                  <span className="ph__ripple" />
                  <span className="ph__ripple ph__ripple--b" />
                  <span className="ph__core">
                    <Smartphone />
                  </span>
                </div>
                <span className="ph__label">Sending</span>
                <div className="ph__track">
                  <span className="ph__fill" />
                </div>
                <span className="ph__pct">72%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
