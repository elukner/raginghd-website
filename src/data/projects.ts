export type Project = {
  name: string;
  description: string;
  status: "in-development" | "coming-soon" | "live";
  image?: string;
  url?: string;
  isPublic: boolean;
};

export const projects: Project[] = [
  {
    name: "JobSync AI",
    description:
      "JobSync AI is a secure full-stack applicant tracking web application designed to help developers manage their job hunt.",
    status: "live",
    image: "/projects/jobsyncai-logo.png",
    url: "https://jobsyncai.dev",
    isPublic: true,
  },
  {
    name: "TrailTrace",
    description:
      "Lean Source Data Verification (SDV) engine comparing unstructured clinical documents (PDF) against EDC master spreadsheets (CSV) with deterministic diffs and verbatim source provenance.",
    status: "in-development",
    isPublic: true,
  },
  {
    name: "Vibe Code Rescue",
    description:
      "A simple developer rescue service to debug vibe-coded projects made by non-software developers.",
    status: "coming-soon",
    isPublic: true,
  },
];
