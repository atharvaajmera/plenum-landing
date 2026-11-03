import { PLATFORMS, Platform } from "../site";
import { Windows, Apple, Linux, Android, ArrowRight } from "./icons";

const ICONS = {
  windows: Windows,
  macos: Apple,
  linux: Linux,
  android: Android,
} as const;

export default function DownloadSection() {
  return (
    <section className="section" id="download">
      <div className="container">
        <div className="download__head" data-reveal>
          <h2>Get Plenum on your devices.</h2>
          <p>
            Available now for Windows and Android. macOS and Linux are coming
            soon. iPhone and iPad are not currently supported.
          </p>
        </div>

        <div className="platforms" data-reveal-stagger>
          {PLATFORMS.map((p: Platform) => {
            const Icon = ICONS[p.id];
            const isAvailable = p.status === "available";

            if (isAvailable && p.href) {
              return (
                <a
                  className="platform platform--available"
                  key={p.id}
                  id={`download-${p.id}`}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="platform__icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <span className="platform__name">{p.name}</span>
                  <span className="platform__meta">{p.meta}</span>
                  <span className="platform__cta">
                    Download
                    <ArrowRight />
                  </span>
                </a>
              );
            }

            return (
              <div
                className="platform platform--coming-soon"
                key={p.id}
                id={`download-${p.id}`}
              >
                <span className="platform__icon" aria-hidden="true">
                  <Icon />
                </span>
                <span className="platform__name">{p.name}</span>
                <span className="platform__meta">{p.meta}</span>
                <span className="platform__status-badge">Coming soon</span>
              </div>
            );
          })}
        </div>

        <p className="download__note">
          Official downloads for Windows and Android are published on GitHub Releases.
        </p>
      </div>
    </section>
  );
}
