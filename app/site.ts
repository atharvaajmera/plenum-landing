export const SITE_URL = "https://plenumonline.me";

export const GITHUB_URL = "https://github.com/atharvaajmera/Plenum";

export const RELEASES_URL = `${GITHUB_URL}/releases`;

export interface Platform {
  id: "windows" | "android" | "macos" | "linux";
  name: string;
  meta: string;
  status: "available" | "coming_soon";
  href?: string;
}

export const PLATFORMS: readonly Platform[] = [
  {
    id: "windows",
    name: "Windows",
    meta: "Windows 10 & 11 · .msi installer",
    status: "available",
    href: RELEASES_URL,
  },
  {
    id: "android",
    name: "Android",
    meta: "Android 8+ · .apk package",
    status: "available",
    href: RELEASES_URL,
  },
  {
    id: "macos",
    name: "macOS",
    meta: "Coming soon",
    status: "coming_soon",
  },
  {
    id: "linux",
    name: "Linux",
    meta: "Coming soon",
    status: "coming_soon",
  },
];
