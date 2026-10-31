"use client";

import { useEffect } from "react";

/* Progressive enhancement: detects the visitor's platform once, then upgrades
   the download CTAs — anchor hrefs point at the matching card in #download,
   the hero button names the platform, and that card gets a "Your platform"
   badge. Without JS nothing breaks: one generic Download button, four equal
   cards, releases link still in the footer. iOS is unsupported today, so an
   iPhone/iPad keeps the generic floor. */

const NAMES = {
  windows: "Windows",
  macos: "macOS",
  linux: "Linux",
  android: "Android",
} as const;

type PlatformId = keyof typeof NAMES;

function detect(): PlatformId | null {
  if (typeof window === "undefined" || typeof navigator === "undefined") return null;

  const ua = (navigator.userAgent || "").toLowerCase();
  const platform = (navigator.platform || "").toLowerCase();
  const uaData = (
    navigator as unknown as {
      userAgentData?: {
        platform?: string;
        mobile?: boolean;
      };
    }
  ).userAgentData;
  const uaDataPlatform = (uaData?.platform || "").toLowerCase();

  // 1. iOS / iPadOS (unsupported floor -> keep generic download)
  if (
    /iphone|ipad|ipod/.test(ua) ||
    (platform.includes("mac") && navigator.maxTouchPoints > 1 && !ua.includes("macintosh"))
  ) {
    return null;
  }

  // 2. Real Android device or mobile UA
  if (
    ua.includes("android") ||
    uaDataPlatform === "android" ||
    (uaData?.mobile && !ua.includes("windows") && !ua.includes("macintosh"))
  ) {
    return "android";
  }

  // 3. Mobile screen / DevTools mobile emulation mode
  // When viewed on mobile screen width (<= 768px), recommend Android mobile app
  const isMobileScreen =
    window.innerWidth <= 768 ||
    (window.matchMedia && window.matchMedia("(max-width: 768px)").matches);

  if (isMobileScreen) {
    return "android";
  }

  // 4. Desktop OS detection (macOS, Windows, Linux)
  if (
    ua.includes("macintosh") ||
    ua.includes("mac os x") ||
    ua.includes("darwin") ||
    uaDataPlatform === "macos" ||
    platform.includes("mac")
  ) {
    return "macos";
  }

  if (
    ua.includes("windows") ||
    ua.includes("win64") ||
    ua.includes("win32") ||
    ua.includes("win9x") ||
    uaDataPlatform === "windows" ||
    platform.startsWith("win")
  ) {
    return "windows";
  }

  if (
    ua.includes("linux") ||
    ua.includes("x11") ||
    ua.includes("ubuntu") ||
    ua.includes("debian") ||
    ua.includes("fedora") ||
    uaDataPlatform === "linux"
  ) {
    return "linux";
  }

  return "windows";
}

export default function PlatformHint() {
  useEffect(() => {
    function update() {
      const id = detect();

      // Clean up any stale recommended badges/classes
      document.querySelectorAll(".platform.is-recommended").forEach((el) => {
        el.classList.remove("is-recommended");
      });
      document.querySelectorAll(".platform__badge").forEach((badge) => {
        badge.remove();
      });

      if (!id) {
        document
          .querySelectorAll<HTMLAnchorElement>("[data-platform-href]")
          .forEach((a) => {
            a.setAttribute("href", "#download");
          });
        const label = document.querySelector("[data-platform-label]");
        if (label) label.textContent = "Download Plenum";
        return;
      }

      // Update hero CTAs
      document
        .querySelectorAll<HTMLAnchorElement>("[data-platform-href]")
        .forEach((a) => {
          a.setAttribute("href", `#download-${id}`);
        });

      const label = document.querySelector("[data-platform-label]");
      if (label) label.textContent = `Download for ${NAMES[id]}`;

      // Mark the detected card as recommended
      const card = document.getElementById(`download-${id}`);
      if (card) {
        card.classList.add("is-recommended");
        const badge = document.createElement("span");
        badge.className = "platform__badge";
        badge.textContent = "Your platform";
        card.appendChild(badge);
      }
    }

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return null;
}
