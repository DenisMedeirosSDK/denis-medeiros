export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-background-dark">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="font-display font-bold text-sm tracking-tighter flex items-center gap-2">
          <span className="w-2 h-2 bg-primary rounded-full"></span>
          <span className="text-white">DENIS MEDEIROS © {new Date().getFullYear()}</span>
        </div>
        <div className="flex gap-6">
          <a className="text-slate-500 hover:text-primary transition-colors font-mono text-xs uppercase tracking-widest" href="https://www.linkedin.com/in/denis-medeiros">LinkedIn</a>
          <a className="text-slate-500 hover:text-primary transition-colors font-mono text-xs uppercase tracking-widest" href="https://github.com/DenisMedeirosSDK">GitHub</a>
          {/* <a className="text-slate-500 hover:text-primary transition-colors font-mono text-xs uppercase tracking-widest" href="#">ArtStation</a> */}
          {/* <a className="text-slate-500 hover:text-primary transition-colors font-mono text-xs uppercase tracking-widest" href="#">X-Twitter</a> */}
        </div>
        <div className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">
          Lat: -23.470051 | Long: -47.5190455
        </div>
      </div>
    </footer>
  )
}