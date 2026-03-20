import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:paw",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-la:dragon",
        excerpt:
          "Sophomore at Rutgers studying Economics and Data Science, building AI systems..."
      },
      {
        id: "skills",
        title: "Skills",
        file: "markdown/skills.md",
        icon: "i-la:tools",
        excerpt: "Python, FastAPI, Supabase, LLM pipelines, Docker, Proxmox..."
      },
      {
        id: "experience",
        title: "Experience",
        file: "markdown/experience.md",
        icon: "i-la:briefcase",
        excerpt: "WorkOptional.ai, LangBuddy AI, PUMA Group, Shinde Associates..."
      },
      {
        id: "projects",
        title: "Projects",
        file: "markdown/projects.md",
        icon: "i-la:rocket",
        excerpt: "Real Estate Intelligence Agent, Personalized Cold Email Agent..."
      }
    ]
  },
  {
    id: "meta",
    title: "Meta",
    icon: "i-fa-solid:terminal",
    md: [
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: "i-la:laptop-code",
        excerpt: "macOS desktop simulation built with React, Zustand, UnoCSS, and Vite..."
      }
    ]
  }
];

export default bear;
