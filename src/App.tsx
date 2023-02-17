import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";

function App() {
  return (
    <div className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
      <Header />
      <div className="px-6 max-w-screen-lg mx-auto">
        <Hero />
        <div className="mt-20">

          <About />
        </div>
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
