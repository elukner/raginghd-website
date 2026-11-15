export type Project = {
  name: string;
  description: string;
  status: "in-development" | "coming-soon" | "live";
  image?: string;
  url?: string;
  isPublic: boolean;
};
