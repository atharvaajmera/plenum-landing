import {
  Wifi,
  Smartphone,
  Monitor,
  File,
  Globe,
  Lock,
  ArrowRight,
  Shield,
  QrCode,
} from "./icons";

const STEPS = [
  {
    num: "1",
    title: "Get ready to receive.",
    text: "Start receiving to display the QR code and room code.",
    icon: QrCode,
  },
  {
    num: "2",
    title: "Choose files and connect.",
    text: "Scan the receiver's QR code on Android, paste a Plenum link, or enter the room code.",
    icon: File,
  },
  {
    num: "3",
    title: "Approve and transfer.",
    text: "Confirm on the receiving device when prompted and follow the transfer's progress.",
    icon: Shield,
  },
];

export default function HowItMoves() {
  return (
    <section className="section" id="how">
      <div className="container">
        <div className="flow__head" data-reveal>
          <span className="eyebrow">
            <Wifi />
            How it works
          </span>
          <h2>One transfer flow. Plenum picks the path.</h2>
          <p className="section-lead">
            Start receiving on one device, then choose your files on the other.
            Connect using a QR code, Plenum link, or room code. Plenum handles
            the connection automatically; approve the transfer when prompted.
          </p>
        </div>

        {/* Visual overview illustration */}
        <div className="stage" data-reveal aria-label="Transfer overview">
          <div className="stage__devices">
            <div className="node node--phone">
              <span className="node__screen">
                <Smartphone />
              </span>
              Sender
            </div>

            <div className="wire" aria-hidden="true">
              <span className="wire__packet">
                <File />
              </span>
            </div>

            <div className="node node--laptop">
              <span className="node__screen">
                <Monitor />
              </span>
              <span className="node__base" aria-hidden="true" />
              Receiver
            </div>
          </div>
        </div>

        {/* Ordered sequence — Primary explanation */}
        <div className="flow-steps" data-reveal-stagger>
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div className="flow-step" key={step.num}>
                <div className="flow-step__badge" aria-hidden="true">
                  <span className="flow-step__num">{step.num}</span>
                  <Icon className="flow-step__icon" />
                </div>
                <h3 className="flow-step__title">{step.title}</h3>
                <p className="flow-step__text">{step.text}</p>
              </div>
            );
          })}
        </div>

        {/* Subordinate routing explanation */}
        <div className="flow-routing" data-reveal>
          <div className="flow-routing__main">
            <p className="flow-routing__copy">
              Plenum can use a direct local connection, a direct internet
              connection, or an encrypted relay when needed. You don&apos;t have
              to select a network mode.
            </p>
            <div
              className="flow-routing__routes"
              aria-label="Available connection routes"
            >
              <span className="route-pill">
                <Wifi />
                Local
              </span>
              <span className="route-pill">
                <Globe />
                Direct internet
              </span>
              <span className="route-pill">
                <Lock />
                Encrypted relay
              </span>
            </div>
          </div>
          <div className="flow-routing__link">
            <a href="#faq">
              Have questions about how network paths, relays, or QR payloads work?
              <span>
                Read the FAQ
                <ArrowRight />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
