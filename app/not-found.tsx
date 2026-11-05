import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <div style={{ maxWidth: "480px" }}>
        <Link
          href="/"
          className="brand"
          style={{ justifyContent: "center", marginBottom: "1.5rem" }}
          aria-label="Plenum home"
        >
          <img
            className="brand__mark"
            src="/brand/logo-128.png"
            alt="Plenum Logo"
            width={40}
            height={40}
          />
          <span style={{ fontSize: "1.5rem" }}>Plenum</span>
        </Link>
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            marginBottom: "1rem",
            color: "var(--text-primary)",
          }}
        >
          Page not found
        </h1>
        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "1.0625rem",
            lineHeight: 1.6,
            marginBottom: "2rem",
          }}
        >
          The page you are looking for doesn&apos;t exist, has been moved, or the
          link is broken.
        </p>
        <Link href="/" className="btn btn--primary" style={{ display: "inline-flex" }}>
          Back to Plenum
        </Link>
      </div>
    </div>
  );
}

