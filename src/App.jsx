import { LanguageProvider } from './hooks/useLanguage';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MatrixBackground from './components/MatrixBackground';
import FloatingElements from './components/FloatingElements';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground relative">
        {/* Background Effects */}
        <MatrixBackground />
        <FloatingElements />
        
        {/* Main Content */}
        <div className="relative z-20">
          <Navigation />
          <main>
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;

