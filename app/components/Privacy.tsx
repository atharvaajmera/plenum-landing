import { CloudOff, Lock, EyeOff } from "./icons";

const CLAIMS = [
  {
    icon: CloudOff,
    title: "Nothing is ever stored on a server",
    body: "No upload step, no storage bucket — your file is never parked on a server waiting to be pulled down. On your own network it goes straight, device to device. Across the internet a short code pairs you and the transfer stays direct when it can; if a firewall forces a relay, what passes through is encrypted and can't be read.",
  },
  {
    icon: Lock,
    title: "Encrypted end to end",
    body: "The connection between your devices is encrypted, so a file in transit is unreadable to anyone on the network in between.",
  },
  {
    icon: EyeOff,
    title: "No account. No email. No tracking",
    body: "Plenum doesn't ask who you are. There's nothing to sign up for and no analytics profile tied to your transfers.",
  },
];

export default function Privacy() {
  return (
    <section className="section privacy" id="privacy">
      <div className="container privacy__grid">
        <div className="privacy__head" data-reveal>
          <h2>Privacy here isn&apos;t a setting. It&apos;s the architecture.</h2>
          <p className="section-lead">
            Nothing to switch on, nothing to trust us about. Because files move
            directly between your devices, there&apos;s simply no middle where
            they could be read or kept.
          </p>
        </div>

        <div className="claims" data-reveal-stagger>
          {CLAIMS.map((c) => {
            const Icon = c.icon;
            return (
              <div className="claim" key={c.title}>
                <span className="claim__icon" aria-hidden="true">
                  <Icon />
                </span>
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
