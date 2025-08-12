import { UserConfig } from "./lib/types/user.types";

const users: UserConfig[] = [
  {
    id: "1",
    name: "Tsahi Pahima",
    contactInfo: {
      email: "tsahi013@gmail.com",
      phone: "0543045065",
      address: "Israel",
      city: "Kfar Saba",
      state: "IL",
      zip: "12345",
    },
    portfolioLink: "https://www.canva.com/design/DAGlp9xLA30/Ct2HFLUEeVwzgK9NybOLtQ/view?utm_content=DAGlp9xLA30&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb40f17e75a",
    socialLinks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tsahi-pahima-29a8b3209",
        icon: "linkedin",
      },
      {
        name: "GitHub",
        url: "https://github.com/TsahiP",
        icon: "github",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/tsahi.pahima",
        icon: "facebook",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/tsahi111",
        icon: "instagram",
      },
    ],
    profilePicture: "/images/profile-pic.png",
    bio: `Crafting responsive web applications with modern technologies.\nI specialize in building exceptional digital experiences with React, Next.js, and Node.js.`,
    skills: [
      {
        name: "React",
        icon: "react",
      },
      {
        name: "Next.js",
        icon: "nextjs",
      },
      {
        name: "Node.js",
        icon: "nodejs",
      },
      {
        name: "TypeScript",
        icon: "typescript",
      },
      {
        name: "Python",
        icon: "python",
      },
      {
        name: "Docker",
        icon: "docker",
      },
      {
        name: "Tailwind CSS",
        icon: "tailwindcss",
      },
      {
        name: "PostgreSQL",
        icon: "postgresql",
      },
      {
        name: "MongoDB",
        icon: "mongodb",
      },
      {
        name: "Git",
        icon: "git",
      },
      {
        name: "GCP",
        icon: "gcp",
      },
    ],
    // TODO: Edit projects
    projects: [
      {
        name: "Sharona Nails",
        description: "Sharona Nails is an AI-powered CRM for a nail salon.",
        image: "/images/project-1.png",
        url: "https://sharona-nails.vercel.app/",
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        name: "AIT-well",
        description: "AIT-well is a platform for AI-powered wellness.",
        image: "/images/project-2.png",
        url: "https://project1.com",
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      },
    ],
    experience: [
      {
        company: "IDF Digital",
        position: "Full Stack Developer",
        startDate: "2024-09-01",
        endDate: "Present",
        description: [
          "Architected and developed a comprehensive security and logistics command-and-control system using Next.js, Node.js, React, React Native, and TypeScript",
          "Built a sophisticated command-and-control platform for managing security forces and field logistics with real-time data synchronization",
          "Designed robust database architecture using Prisma ORM and PostgreSQL, ensuring data integrity and optimal performance",
          "Orchestrated containerized deployments using Docker and integrated AWS S3 for scalable file storage solutions",
          "Crafted intuitive, responsive user interfaces using Material-UI and Tailwind CSS",
          "Established comprehensive API testing framework using ViTest ,Postman and implemented robust version control with Git",
        ],
      },
      {
        company: "DeePlan",
        position: "Full-Stack Developer",
        startDate: "2021-2025",
        endDate: "Present",
        description: [
          "Developed enterprise-level management systems, enabling companies to streamline internal processes",
          "Created custom organizational employee portals, improving data accessibility and workflow automation",
          "Provided continuous technical support and optimizations, ensuring smooth system operations",
        ],
      },
    ],
    navigationLinks: [
      {
        name: "About",
        url: "about",
      },
      {
        name: "Experience",
        url: "experience",
      },
      {
        name: "Projects",
        url: "projects",
      },
      {
        name: "Contact",
        url: "contact",
      },
    ],
  },
];
// TODO: add data filtering like include.
export const userConfig = {
  findUnique: async <UserConfigKey extends keyof UserConfig>(
    id: string,
    select?: Partial<Record<keyof UserConfig, boolean>>
  ): Promise<Pick<UserConfig, UserConfigKey> | undefined> => {
    const user = users.find((user) => user.id === id);
    if (!user) return undefined;

    if (!select) return user as Pick<UserConfig, UserConfigKey>;

    return Object.entries(select).reduce((acc, [key, value]) => {
      if (value) {
        (acc as Record<UserConfigKey, UserConfig[UserConfigKey]>)[key as UserConfigKey] = user[key as UserConfigKey] as UserConfig[UserConfigKey];
      }
      return acc;
    }, {} as Pick<UserConfig, UserConfigKey>);
  }
}



