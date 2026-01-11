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
    ],
    experience: [
      {
        company: "IDF Digital",
        position: "Software Engineer",
        startDate: "2024-09-01",
        endDate: "Present",
        description: [
          "Developed and maintained a security and logistics command-and-control system to manage security forces and field logistics.",
          "Designed and built responsive web and mobile interfaces, improving usability for both operators and field staff.",
          "Implemented database management and optimization for PostgreSQL using Prisma ORM.",
          "Deployed applications in Dockerized environments and integrated AWS S3 for file storage.",
          "Ensured code quality through API testing (Postman) and version control with Git.",
        ],
      },
      {
        company: "DeePlan",
        position: "Software Engineer",
        startDate: "2022-01-01",
        endDate: "2025-01-01",
        description: [
          "Developed and maintained dynamic web applications, delivering responsive and engaging user experiences.",
          "Automated manual customer processes to improve workflow efficiency and reduce operational overhead.",
          "Designed and deployed serverless solutions using Azure Functions and integrated cloud services (e.g., file storage).",
          "Built workflow automations and business applications using Power Automate, Power Apps, and Microsoft Forms.",
          "Collaborated closely with customers to gather requirements and deliver tailored, impactful solutions.",
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



