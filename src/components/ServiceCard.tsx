import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { buttonVariants } from "./ui/button";
import { cn } from "../lib/utils";
import type { Service } from "../data/services";

type ServiceCardProps = {
  service: Service;
};

const statusLabels: Record<Service["status"], string> = {
  "in-development": "In development",
  "coming-soon": "Coming soon",
  live: "Live",
};

const availabilityLabels: Record<
  NonNullable<Service["availability"]>,
  string
> = {
  "accepting-clients": "Accepting clients",
  waitlist: "Waitlist",
  "fully-booked": "Fully booked",
};

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="flex h-full flex-col gap-4 border border-white/25 bg-[#12121a] py-4 text-white">
      <CardHeader className="px-4">
        <CardTitle className="text-base font-semibold text-white">
          {service.name}
        </CardTitle>

        <CardDescription className="text-sm leading-relaxed text-slate-400">
          {service.description}
        </CardDescription>
      </CardHeader>

      {service.image && (
        <CardContent className="px-4">
          <div className="flex h-32 items-center justify-center">
            <img
              src={service.image}
              alt={`${service.name} service image`}
              loading="lazy"
              className="max-h-28 max-w-full rounded-md object-contain"
            />
          </div>
        </CardContent>
      )}

      <CardFooter className="mt-auto flex flex-wrap items-center justify-between gap-3 px-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-slate-300">
            {statusLabels[service.status]}
          </span>

          {service.availability && (
            <span className="text-xs text-slate-300">
              {availabilityLabels[service.availability]}
            </span>
          )}

          {service.pricing && (
            <span className="text-xs text-slate-300">
              Pricing: {service.pricing}
            </span>
          )}
        </div>

        {service.url && (
          <a
            href={service.url}
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white",
            )}
          >
            {service.status === "live" ? "View service" : "View preview"}
          </a>
        )}
      </CardFooter>
    </Card>
  );
}
