"use client";

import { useEffect } from "react";

type PlatformId = "windows" | "android" | "macos" | "linux";

interface DetectionResult {
  id: PlatformId;
  available: boolean;
  name: string;
}

function detect(): DetectionResult | null {
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
    return { id: "android", available: true, name: "Android" };
  }

  // 3. Desktop OS detection
  // Check macOS (coming soon)
  if (
    ua.includes("macintosh") ||
    ua.includes("mac os x") ||
    ua.includes("darwin") ||
    uaDataPlatform === "macos" ||
    (platform.includes("mac") && !platform.includes("win"))
  ) {
    return { id: "macos", available: false, name: "macOS" };
  }

  // Check Linux (coming soon)
  if (
    ua.includes("linux") ||
    ua.includes("x11") ||
    ua.includes("ubuntu") ||
    ua.includes("debian") ||
    ua.includes("fedora") ||
    uaDataPlatform === "linux"
  ) {
    return { id: "linux", available: false, name: "Linux" };
  }

  // Check Windows (available)
  if (
    ua.includes("windows") ||
    ua.includes("win64") ||
    ua.includes("win32") ||
    ua.includes("win9x") ||
    uaDataPlatform === "windows"
  ) {
    return { id: "windows", available: true, name: "Windows" };
  }

  // 4. Unknown OS: return null (generic floor, do not guess Windows)
  return null;
}

export default function PlatformHint() {
  useEffect(() => {
    function update() {
      const res = detect();

      // Clean up any stale recommended badges/classes
      document.querySelectorAll(".platform.is-recommended").forEach((el) => {
        el.classList.remove("is-recommended");
      });
      document.querySelectorAll(".platform__badge").forEach((badge) => {
        badge.remove();
      });

      const label = document.querySelector("[data-platform-label]");
      const anchors = document.querySelectorAll<HTMLAnchorElement>("[data-platform-href]");

      // If no supported platform detected or unknown/iOS
      if (!res) {
        anchors.forEach((a) => a.setAttribute("href", "#download"));
        if (label) label.textContent = "Download Plenum";
        return;
      }

      // If platform is available (Windows or Android)
      if (res.available) {
        anchors.forEach((a) => a.setAttribute("href", `#download-${res.id}`));
        if (label) label.textContent = `Download for ${res.name}`;

        const card = document.getElementById(`download-${res.id}`);
        if (card) {
          card.classList.add("is-recommended");
          const badge = document.createElement("span");
          badge.className = "platform__badge";
          badge.textContent = "Your platform";
          card.appendChild(badge);
        }
      } else {
        // macOS / Linux: Coming soon -> never say "Download for macOS/Linux"
        anchors.forEach((a) => a.setAttribute("href", `#download-${res.id}`));
        if (label) label.textContent = "Download Plenum";

        const card = document.getElementById(`download-${res.id}`);
        if (card) {
          const badge = document.createElement("span");
          badge.className = "platform__badge platform__badge--neutral";
          badge.textContent = "Your platform (Coming soon)";
          card.appendChild(badge);
        }
      }
    }

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return null;
}
