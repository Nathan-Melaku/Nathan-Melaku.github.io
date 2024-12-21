import type { Site, Metadata, Socials } from "@types";

export const site: Site = {
  name: "NateFu",
  email: "nate@natefu.xyz",
}

export const home: Metadata = {
  title: "Nate Fu",
  description: "Nathan's personal website.",
}

export const blog: Metadata = {
  title: "Nate Fu: Blogs",
  description: "Nathan's blog posts.",
}

export const projects: Metadata = {
  title: "Nate Fu: Projects",
  description: "Nathan's projects.",
}


export const experience: Metadata = {
  title: "Nate Fu: Experience",
  description: "Nathan's work experience.",
}

export const socials: Socials = [
  {
    name: "github",
    url: "https://github.com/Nathan-Melaku",
  },
  {
    name: "linkedIn",
    url: "https://www.linkedin.com/in/nathan-melaku",
  },
  {
    name: "nathan@natefu.xyz",
    url: "mailto:nathan@natefu.xyz"
  }
]
