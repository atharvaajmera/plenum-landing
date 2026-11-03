import { CloudOff, Lock, EyeOff } from "./icons";

const CLAIMS = [
  {
    icon: CloudOff,
    title: "No cloud file storage",
    body: "Your files are never uploaded to a cloud storage bucket or parked on a server waiting for download. File data moves directly between devices during the active transfer.",
  },
  {
    icon: Lock,
    title: "Encrypted in transit",
    body: "All transfers use encryption, protecting file contents and filenames from network observers, even when traffic passes through an encrypted relay.",
  },
  {
    icon: EyeOff,
    title: "No account or tracking",
    body: "Plenum doesn't ask who you are. There are no accounts, no email signups, and no analytics profile tied to your transfers.",
  },
];

export default function Privacy() {
  return (
    <section className="section privacy" id="privacy">
      <div className="container privacy__grid">
        <div className="privacy__head" data-reveal>
          <h2>Privacy focused architecture.</h2>
          <p className="section-lead">
            Files aren&apos;t uploaded to cloud storage. Transfers are encrypted,
            including when a relay forwards the traffic. Internet setup uses
            connection metadata, and relay services may keep operational logs.
            Plenum does not require an account or create an analytics profile for
            your transfers.
          </p>
          <div className="privacy__sublink">
            <a href="#faq" className="btn btn--ghost btn--sm">
              Read the Privacy &amp; Connection FAQ ↓
            </a>
          </div>
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
