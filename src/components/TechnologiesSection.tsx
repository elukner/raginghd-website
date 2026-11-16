const technologies = ["TypeScript", "React", "Python", "C#", "Supabase"];

export default function TechnologiesSection() {
  return (
    <section
      id="technologies"
      aria-labelledby="technologies-heading"
      className="mx-auto max-w-6xl px-6 pt-6 pb-16 sm:pt-8 sm:pb-24"
    >
      <h2 id="technologies-heading" className="mb-5 text-lg font-semibold">
        Tools & Technologies
      </h2>

      <ul className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-400">
        {technologies.map((technology, index) => (
          <li key={technology} className="flex items-center gap-2">
            {index > 0 && (
              <span aria-hidden="true" className="text-slate-500">
                ·
              </span>
            )}
            {technology}
          </li>
        ))}
      </ul>
    </section>
  );
}
