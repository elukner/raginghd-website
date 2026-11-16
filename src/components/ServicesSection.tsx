import { services } from "../data/services";
import ServiceCard from "./ServiceCard";

export default function ProjectsSection() {
  const publicServices = services.filter((services) => services.isPublic);

  return (
    <section
      id="services"
      aria-labelledby="projects-heading"
      className="mx-auto max-w-6xl px-6 py-16 sm:py-24"
    >
      <h2 id="services-heading" className="mb-5 text-lg font-semibold">
        Dev Help
      </h2>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {publicServices.map((service) => (
          <li key={service.name} className="min-w-0">
            <ServiceCard service={service} />
          </li>
        ))}
      </ul>
    </section>
  );
}
