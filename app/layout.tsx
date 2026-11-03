import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import { GITHUB_URL, RELEASES_URL, SITE_URL } from "./site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Plenum - Files between your devices. No cloud storage.",
  description:
    "Free, open-source file transfer for Windows and Android. Connect directly when possible, with encrypted relay fallback when needed. No cloud file storage, no accounts.",
  keywords: [
    "file transfer",
    "peer to peer",
    "P2P",
    "private file sharing",
    "send files",
    "Android",
    "Windows",
    "open source",
    "no cloud",
    "encrypted transfer",
  ],
  authors: [{ name: "Plenum" }],
  creator: "Plenum",
  applicationName: "Plenum",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Plenum — Files between your devices. No cloud storage.",
    description:
      "Free, open-source file transfer for Windows and Android. Direct when possible, encrypted relay fallback. No cloud storage.",
    siteName: "Plenum",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Plenum — Files between your devices. No cloud storage.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plenum — Files between your devices. No cloud storage.",
    description:
      "Free, open-source file transfer for Windows and Android. Direct when possible, encrypted relay fallback. No cloud storage.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#181F2A",
  colorScheme: "light dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Plenum",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Windows, Android",
  url: SITE_URL,
  downloadUrl: RELEASES_URL,
  codeRepository: GITHUB_URL,
  description:
    "Free, open-source peer-to-peer file transfer for Windows and Android. Files move between devices without cloud storage, end-to-end encrypted.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

const themeScript = `
(function() {
  try {
    var saved = localStorage.getItem('plenum-theme');
    var theme = saved || 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable}`}
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
