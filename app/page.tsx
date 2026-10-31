import Nav from "./components/Nav";
import Hero from "./components/Hero";
import HowItMoves from "./components/HowItMoves";
import Privacy from "./components/Privacy";
import Showcase from "./components/Showcase";
import OpenSource from "./components/OpenSource";
import DownloadSection from "./components/DownloadSection";
import Footer from "./components/Footer";
import Enhancements from "./components/Enhancements";
import PlatformHint from "./components/PlatformHint";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <HowItMoves />
        <Privacy />
        <Showcase />
        <OpenSource />
        <DownloadSection />
      </main>
      <Footer />
      <PlatformHint />
      <Enhancements />
    </>
  );
}
