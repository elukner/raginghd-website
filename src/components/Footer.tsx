export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-white/15 px-6 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
      <span>RagingHD</span>

      <nav aria-label="Footer navigation">
        <ul className="flex items-center gap-4">
          <li>
            <a href="#top" className="hover:text-white">
              Back to top
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
