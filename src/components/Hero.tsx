import { buttonVariants } from "./ui/button";
import { cn } from "../lib/utils";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-5xl flex-col items-center justify-center gap-6 px-6 py-20 text-center sm:py-28">
      <img
        src="/RagingHDIcon.jpeg"
        alt="RagingHD skull logo"
        className="h-28 w-28 rounded-xl object-cover object-center sm:h-36 sm:w-36"
      />

      <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
        Software that solves real problems.
      </h1>

      <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
        An independent software company building useful products and helping
        bring ideas to life.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <a
          href="#projects"
          className={cn(
            buttonVariants(),
            "bg-fuchsia-600 text-white hover:bg-fuchsia-700",
          )}
        >
          Explore Projects
        </a>

        <a
          href="#contact"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white",
          )}
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
