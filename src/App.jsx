import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureHighlights from './components/FeatureHighlights';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 antialiased">
      <Navbar />
      <main>
        <HeroSection />
        <FeatureHighlights />
      </main>
      <Footer />
    </div>
  );
}

export default App;
