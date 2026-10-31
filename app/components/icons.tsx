/* Lucide-derived stroke icons, inlined to keep the bundle dependency-free
   while matching the app's Lucide icon set. 24px grid, 2px stroke, round. */

type IconProps = React.SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export const Send = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);

export const Wifi = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 20h.01" />
    <path d="M2 8.82a15 15 0 0 1 20 0" />
    <path d="M5 12.859a10 10 0 0 1 14 0" />
    <path d="M8.5 16.429a5 5 0 0 1 7 0" />
  </svg>
);

export const Shield = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const Lock = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

export const CloudOff = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m2 2 20 20" />
    <path d="M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193" />
    <path d="M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07" />
  </svg>
);

export const Globe = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

export const Zap = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
  </svg>
);

export const EyeOff = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
    <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
    <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
    <path d="m2 2 20 20" />
  </svg>
);

export const Github = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const Download = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </svg>
);

export const ArrowRight = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export const Monitor = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect width="20" height="14" x="2" y="3" rx="2" />
    <line x1="8" x2="16" y1="21" y2="21" />
    <line x1="12" x2="12" y1="17" y2="21" />
  </svg>
);

export const Smartphone = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
    <path d="M12 18h.01" />
  </svg>
);

export const File = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
  </svg>
);

export const ImagePlus = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M16 5h6" />
    <path d="M19 2v6" />
    <path d="M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5" />
    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    <circle cx="9" cy="9" r="2" />
  </svg>
);

export const Check = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const GitFork = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <circle cx="18" cy="6" r="3" />
    <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" />
    <path d="M12 12v3" />
  </svg>
);

export const Star = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.69 21.65a.53.53 0 0 1-.771-.56l.882-5.139a2.122 2.122 0 0 0-.611-1.879L2.454 10.435a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
  </svg>
);

export const Sun = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

export const Moon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

/* Platform brand glyphs (simple, monochrome, current-color) */
export const Windows = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false" {...p}>
    <path d="M3 5.1 10.4 4v7.4H3zM10.4 12.6V20L3 18.9v-6.3zM11.6 3.8 21 2.5v9H11.6zM21 12.5v9l-9.4-1.3v-7.7z" />
  </svg>
);

export const Apple = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false" {...p}>
    <path d="M17.05 12.54c-.03-2.62 2.14-3.88 2.24-3.94-1.22-1.79-3.12-2.03-3.8-2.06-1.62-.16-3.16.95-3.98.95-.82 0-2.09-.93-3.43-.9-1.77.03-3.4 1.03-4.31 2.61-1.84 3.19-.47 7.91 1.32 10.5.87 1.27 1.91 2.69 3.28 2.64 1.31-.05 1.81-.85 3.4-.85 1.58 0 2.03.85 3.42.82 1.41-.02 2.3-1.29 3.16-2.57 1-1.47 1.41-2.9 1.43-2.97-.03-.01-2.74-1.05-2.77-4.17M14.47 4.79c.72-.88 1.21-2.09 1.08-3.3-1.04.04-2.3.69-3.05 1.56-.67.77-1.25 2.01-1.09 3.19 1.16.09 2.35-.59 3.06-1.45" />
  </svg>
);

export const Linux = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false" {...p}>
    <path d="M12 2c-1.7 0-3 1.5-3 3.3 0 1 .1 1.9.1 2.8 0 .8-.6 1.5-1.2 2.4-.8 1.1-1.9 2.4-2.4 4.1-.3 1-.2 1.8.1 2.3-.3.2-.5.5-.5 1 0 .6.4.9 1 1.1.5.2 1.1.3 1.5.7.5.4.9.9 1.7.9.3 0 .6-.1.9-.2.5-.3.8-.8.9-1.3.3-.1.7-.2 1.3-.2.6 0 1 .1 1.3.2.1.5.4 1 .9 1.3.3.1.6.2.9.2.8 0 1.2-.5 1.7-.9.4-.4 1-.5 1.5-.7.6-.2 1-.5 1-1.1 0-.5-.2-.8-.5-1 .3-.5.4-1.3.1-2.3-.5-1.7-1.6-3-2.4-4.1-.6-.9-1.2-1.6-1.2-2.4 0-.9.1-1.8.1-2.8C15 3.5 13.7 2 12 2m-1.4 4.1c.4 0 .7.4.7.9s-.3.9-.7.9-.7-.4-.7-.9.3-.9.7-.9m2.8 0c.4 0 .7.4.7.9s-.3.9-.7.9-.7-.4-.7-.9.3-.9.7-.9M12 9.3c.8 0 1.9.5 1.9 1 0 .3-.4.5-.9.8-.4.2-.7.5-1 .5s-.6-.3-1-.5c-.5-.3-.9-.5-.9-.8 0-.5 1.1-1 1.9-1" />
  </svg>
);

export const Android = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false" {...p}>
    <path d="M6 9v7a1.5 1.5 0 0 0 1.5 1.5H8V21a1 1 0 0 0 2 0v-3.5h4V21a1 1 0 0 0 2 0v-3.5h.5A1.5 1.5 0 0 0 18 16V9zM4 9a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1m16 0a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1M15.3 3.4l1.1-1.7a.3.3 0 0 0-.5-.3l-1.2 1.8A5.7 5.7 0 0 0 12 2.7c-.9 0-1.8.2-2.7.5L8.1 1.4a.3.3 0 0 0-.5.3l1.1 1.7A5.4 5.4 0 0 0 6 8h12a5.4 5.4 0 0 0-2.7-4.6M9.5 6.2a.7.7 0 1 1 0-1.4.7.7 0 0 1 0 1.4m5 0a.7.7 0 1 1 0-1.4.7.7 0 0 1 0 1.4" />
  </svg>
);
