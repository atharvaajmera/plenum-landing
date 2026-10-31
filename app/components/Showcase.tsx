import { Monitor } from "./icons";
import Shot from "./Shot";

export default function Showcase() {
  return (
    <section className="section" id="app">
      <div className="container">
        <div className="showcase__head" data-reveal>
          <span className="eyebrow">
            <Monitor />
            The app
          </span>
          <h2>The same calm, focused app on every device.</h2>
          <p className="section-lead">
            One screen to send, one to receive. No dashboards, no clutter — just
            the transfer in front of you, on desktop and on Android.
          </p>
        </div>

        <div className="showcase__stage" data-reveal>
          <figure className="frame-desktop">
            <div className="frame-desktop__bar" aria-hidden="true">
              <span className="frame-desktop__dot" />
              <span className="frame-desktop__dot" />
              <span className="frame-desktop__dot" />
              <span className="frame-desktop__title">Plenum - Desktop</span>
            </div>
            <div className="frame-desktop__shot">
              <Shot
                darkSrc="/screenshots/desktop-dark.png"
                lightSrc="/screenshots/desktop-light.png"
                alt="Plenum desktop app showing the send and receive home screen"
                label="Plenum on Desktop"
              />
            </div>
            <figcaption className="sr-only">Plenum on desktop</figcaption>
          </figure>

          <figure className="frame-phone">
            <span className="frame-phone__speaker" aria-hidden="true" />
            <span className="frame-phone__camera" aria-hidden="true" />
            <div className="frame-phone__shot">
              <span className="frame-phone__glare" aria-hidden="true" />
              <Shot
                darkSrc="/screenshots/mobile-dark.png"
                lightSrc="/screenshots/mobile-light.png"
                alt="Plenum Android app showing the transfer radar"
                label="Plenum on Android"
              />
            </div>
            <figcaption className="sr-only">Plenum on Android</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
