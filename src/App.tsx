import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { MyWorkers } from './components/MyWorkers';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
      <Hero />
      <About />
      <Skills />
      <MyWorkers />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
