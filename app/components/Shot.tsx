"use client";

import { useEffect, useRef, useState } from "react";
import { ImagePlus } from "./icons";

/* Renders theme-specific screenshots with graceful fallback placeholders.
   When both darkSrc and lightSrc are provided, renders both with CSS-based
   theme switching: zero hydration flash and instant responsive updates. */
interface SingleShotProps {
  src: string;
  alt: string;
  label: string;
  theme: "dark" | "light";
  priority?: boolean;
}

function SingleShot({ src, alt, label, theme, priority }: SingleShotProps) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setFailed(false);
    if (imgRef.current?.complete && imgRef.current.naturalWidth === 0) {
      setFailed(true);
    }
  }, [src]);

  return (
    <div className={`shot-view shot-view--${theme}`}>
      {!failed && src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="shot-placeholder" role="img" aria-label={label}>
          <ImagePlus />
          <b>{label}</b>
        </div>
      )}
    </div>
  );
}

export default function Shot({
  src,
  darkSrc,
  lightSrc,
  alt,
  label,
  darkAlt,
  lightAlt,
  priority,
}: {
  src?: string;
  darkSrc?: string;
  lightSrc?: string;
  alt: string;
  label: string;
  darkAlt?: string;
  lightAlt?: string;
  priority?: boolean;
}) {
  const effectiveDark = darkSrc || src || "";
  const effectiveLight = lightSrc || src || "";

  if (effectiveDark === effectiveLight) {
    return (
      <SingleShot
        src={effectiveDark}
        alt={alt}
        label={label}
        theme="dark"
        priority={priority}
      />
    );
  }

  return (
    <div className="shot-container">
      <SingleShot
        src={effectiveDark}
        alt={darkAlt || `${alt} (Dark mode)`}
        label={`${label} (Dark)`}
        theme="dark"
        priority={priority}
      />
      <SingleShot
        src={effectiveLight}
        alt={lightAlt || `${alt} (Light mode)`}
        label={`${label} (Light)`}
        theme="light"
        priority={priority}
      />
    </div>
  );
}
