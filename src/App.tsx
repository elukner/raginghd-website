
import { Code2 } from "lucide-react"

function App() {
  return (
    <main className="min-h-screen bg-[#0b0b10] px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <img
          src="/raginghd-logo.svg"
          alt="RagingHD logo"
          className="h-20 w-20"
        />

        <h1 className="mt-6 text-4xl font-bold">
          RagingHD
        </h1>

        <p className="mt-3 text-slate-300">
          Independent software studio.
        </p>

        <div className="mt-8 flex items-center gap-2 text-sm text-slate-400">
          <Code2 aria-hidden="true" size={18} />
          <span>React · TypeScript · Vite</span>
        </div>
      </div>
    </main>
  )
}

export default App
