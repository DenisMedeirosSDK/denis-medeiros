export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-white/10">
      <div className="max-w-screen-xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-display font-bold text-lg tracking-tighter flex items-center gap-2">
          <span className="w-3 h-3 bg-primary rounded-full animate-pulse"></span>
          <span className="dark:text-white">DM.SYS</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest uppercase">
          <a className="hover:text-primary transition-colors" href="#profile">// profile</a>
          <a className="hover:text-primary transition-colors" href="#skills">// skills</a>
          <a className="hover:text-primary transition-colors" href="#terminal">// console</a>
          <a className="px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-black transition-all" target="_blank" href="https://wa.me/5515996166103">CONNECT</a>
        </nav>
        <button className="md:hidden text-primary">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>

  )
}