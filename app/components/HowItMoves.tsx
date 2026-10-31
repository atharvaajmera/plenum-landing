import { Wifi, Smartphone, Monitor, File, Globe, Lock } from "./icons";

export default function HowItMoves() {
  return (
    <section className="section" id="how">
      <div className="container">
        <div className="flow__head">
          <span className="eyebrow">
            <Wifi />
            How it works
          </span>
          <h2>A file leaves one device and arrives at the other. That&apos;s the whole trip.</h2>
          <p className="section-lead">
            Two devices running Plenum connect straight to each other — on your
            own network, or across the internet with a short code. No account,
            no upload step, and nothing of yours is ever stored on a server.
          </p>
        </div>

        <div className="stage" data-reveal>
          <div className="stage__devices">
            <div className="node node--phone">
              <span className="node__screen">
                <Smartphone />
              </span>
              Your phone
            </div>

            <div className="wire">
              <span className="wire__packet">
                <File />
              </span>
            </div>

            <div className="node node--laptop">
              <span className="node__screen">
                <Monitor />
              </span>
              <span className="node__base" aria-hidden="true" />
              Your laptop
            </div>
          </div>
        </div>

        <p className="modes__title">Two ways to connect</p>
        <div className="modes" data-reveal>
          <div className="mode-panel mode-panel--lan">
            <span className="mode-panel__icon" aria-hidden="true">
              <Wifi />
            </span>
            <h3>On the same network</h3>
            <p>
              Your devices announce themselves and pair automatically — no
              account, no setup. The file moves directly between them, and no
              server is ever in the path.
            </p>
            <ul className="mode-panel__meta">
              <li>Auto-discovery</li>
              <li>Direct connection</li>
              <li>Full network speed</li>
            </ul>
          </div>

          <div className="mode-panel mode-panel--net">
            <span className="mode-panel__icon" aria-hidden="true">
              <Globe />
            </span>
            <h3>Across the internet</h3>
            <p>
              One device shows a short code; the other types it in. A relay
              introduces the two, then gets out of the way — the connection is
              direct whenever the network allows. If a strict firewall blocks
              it, traffic falls back to an encrypted relay that still can&apos;t
              read your files.
            </p>
            <ul className="mode-panel__meta">
              <li>Short room code</li>
              <li>Direct when possible</li>
              <li>Encrypted relay fallback</li>
            </ul>
          </div>
        </div>

        <p className="modes__note" data-reveal>
          <Lock />
          Either way, every transfer gets a fresh encryption key and travels
          end to end encrypted — with an optional PIN to lock down pairing.
        </p>
      </div>
    </section>
  );
}
