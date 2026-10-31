import { PLATFORMS } from "../site";
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
            Install it on the two devices you move files between. It&apos;s free,
            open source, and takes about a minute. iPhone or iPad? Not yet —
            Plenum is built for Android, Windows, macOS, and Linux.
          </p>
        </div>

        <div className="platforms" data-reveal-stagger>
          {PLATFORMS.map((p) => {
            const Icon = ICONS[p.id];
            return (
              <a className="platform" key={p.id} id={`download-${p.id}`} href={p.href}>
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
          })}
        </div>

        <p className="download__note">
          Links point to the project&apos;s GitHub releases. Builds for each
          platform land there as they ship.
        </p>
      </div>
    </section>
  );
}
