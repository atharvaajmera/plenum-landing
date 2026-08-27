export const GITHUB_URL = "https://github.com/atharvaajmera/Plenum";

export const RELEASES_URL = `${GITHUB_URL}/releases`;

export const PLATFORMS = [
  {
    id: "windows",
    name: "Windows",
    meta: "Windows 10 & 11 · .msi",
    href: RELEASES_URL,
  },
  {
    id: "macos",
    name: "macOS",
    meta: "Apple silicon & Intel · .dmg",
    href: RELEASES_URL,
  },
  {
    id: "linux",
    name: "Linux",
    meta: "AppImage · .deb",
    href: RELEASES_URL,
  },
  {
    id: "android",
    name: "Android",
    meta: "Android 8+ · .apk",
    href: RELEASES_URL,
  },
] as const;
