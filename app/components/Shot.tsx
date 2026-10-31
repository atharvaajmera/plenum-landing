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
}

function SingleShot({ src, alt, label, theme }: SingleShotProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setLoaded(false);
    setFailed(false);
    if (imgRef.current?.complete) {
      setFailed(imgRef.current.naturalWidth === 0);
      setLoaded(imgRef.current.naturalWidth > 0);
    }
  }, [src]);

  return (
    <div className={`shot-view shot-view--${theme}`}>
      {!failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          style={{ opacity: loaded ? 1 : 0, transition: "opacity .3s ease" }}
        />
      )}
      {(!loaded || failed) && (
        <div className="shot-placeholder" aria-hidden={!failed}>
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
}: {
  src?: string;
  darkSrc?: string;
  lightSrc?: string;
  alt: string;
  label: string;
  darkAlt?: string;
  lightAlt?: string;
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
      />
      <SingleShot
        src={effectiveLight}
        alt={lightAlt || `${alt} (Light mode)`}
        label={`${label} (Light)`}
        theme="light"
      />
    </div>
  );
}
