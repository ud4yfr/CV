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
        excerpt: "The short version."
      },
      {
        id: "skills",
        title: "Skills",
        file: "markdown/skills.md",
        icon: "i-la:tools",
        excerpt: "What I work with."
      },
      {
        id: "experience",
        title: "Experience",
        file: "markdown/experience.md",
        icon: "i-la:briefcase",
        excerpt: "Where I've been."
      },
      {
        id: "projects",
        title: "Projects",
        file: "markdown/projects.md",
        icon: "i-la:rocket",
        excerpt: "What I've built."
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
        excerpt: "How this was made."
      }
    ]
  }
];

export default bear;
