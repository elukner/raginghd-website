export default function ContactSection() {
  const businessEmail = "hello@raginghd.com";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto max-w-6xl px-6 py-6 sm:py-8"
    >
      <h2 id="contact-heading" className="mb-5 text-lg font-semibold">
        Contact
      </h2>

      <p className="mb-4 text-sm text-slate-400">
        Have a project in mind or interested in collaborating? Get in touch.
      </p>

      <a
        href={`mailto:${businessEmail}`}
        className="text-sm text-slate-300 underline underline-offset-4 hover:text-white"
      >
        {businessEmail}
      </a>
    </section>
  );
}
