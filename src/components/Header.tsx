export default function Header() {
  return (
    <header className="flex items-center justify-between gap-4 px-6 py-4 border-b border-white/15">
      <a href="#top" className="flex items-center gap-3">
        <img src="/raginghd-logo.svg" alt="" className="h-12 w-12" />
        <span className="text-xl font-semibold">RagingHD</span>
      </a>

      <nav aria-label="Main navigation">
        <ul className="flex items-center gap-2 text-sm text-slate-400">
          <li>
            <a href="#projects">Projects</a>
            <span aria-hidden="true" className="ml-2 text-slate-500">
              ·
            </span>
          </li>
          <li>
            <a href="#about">About</a>
            <span aria-hidden="true" className="ml-2 text-slate-500">
              ·
            </span>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
