export type Service = {
  name: string;
  description: string;
  status: "in-development" | "coming-soon" | "live";
  image?: string;
  url?: string;
  isPublic: boolean;
};

export const services: Service[] = [
  {
    name: "Vibe Code Rescue",
    description:
      "A simple developer rescue service to debug vibe-coded projects made by non-software developers.",
    status: "coming-soon",
    isPublic: true,
  },
];
