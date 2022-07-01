import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";

function App() {
  return (
    <div className="bg-white dark:bg-gray-600 text-zinc-900 dark:text-gray-100">
      <Header />
      <div className="px-6 max-w-screen-lg mx-auto">
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
