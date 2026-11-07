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
    bio: `Software developer focused on React, Next.js, and PostgreSQL.\nI build responsive web apps and reliable backends—currently shipping features for telecom customers at Cellcom, after four years across defense tech and cloud automation.`,
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
      {
        name: "C#",
        icon: "csharp",
      },
      {
        name: "Java",
        icon: "java",
      },
      {
        name: "Cursor AI",
        icon: "cursor",
      },
      {
        name: "Arduino",
        icon: "arduino",
      },
      {
        name: "Betaflight",
        icon: "betaflight",
      },
    ],
    // TODO: Edit projects
    projects: [
    ],
    experience: [
      {
        company: "Cellcom",
        position: "Software Engineer",
        startDate: "2026-05-01",
        endDate: "Present",
        location: "Center District, Israel",
        description: [
          "Build and maintain customer-facing software in the telecom domain, from API integrations to polished UI.",
          "Ship features in a full-stack TypeScript stack with focus on performance and maintainability.",
          "Collaborate with product and QA in an agile delivery environment.",
        ],
      },
      {
        company: "Lotem — IDF Digital & Data unit",
        position: "Software Engineer",
        startDate: "2024-10-01",
        endDate: "2026-05-01",
        location: "Ramat Gan, Tel Aviv District, Israel",
        description: [
          "Developed and maintained a security and logistics command-and-control system to manage security forces and field logistics.",
          "Designed and built responsive web and mobile interfaces, improving usability for operators and field staff.",
          "Implemented PostgreSQL data access and optimization with Prisma ORM.",
          "Deployed applications in Dockerized environments and integrated AWS S3 for file storage.",
          "Ensured quality through API testing (Postman) and disciplined use of Git.",
        ],
      },
      {
        company: "DeePlan",
        position: "Software Engineer",
        startDate: "2022-01-01",
        endDate: "2025-08-01",
        location: "Rosh HaAyin, Center District, Israel",
        description: [
          "Developed and maintained dynamic web applications, delivering responsive and engaging user experiences.",
          "Automated manual customer processes to improve workflow efficiency and reduce operational overhead.",
          "Designed and deployed serverless solutions using Azure Functions and integrated cloud services (e.g., file storage).",
          "Built workflow automations and business applications using Power Automate, Power Apps, and Microsoft Forms.",
          "Collaborated closely with customers to gather requirements and deliver tailored, impactful solutions.",
        ],
      },
    ],
    education: [
      {
        school: "Handesaeim TLV",
        degree: "Practical Engineer, Computer Programming",
        startDate: "2017",
        endDate: "2020",
      },
    ],
    electronics: {
      title: "Drones & Electronics",
      summary:
        "Outside of software, I build and tune FPV drones and program microcontrollers. It started as a hobby and I want to turn it into a career.",
      lookingFor: "Open to junior electronics / drone technician roles",
      highlights: [
        {
          title: "Custom analog FPV drone",
          description:
            "Built a custom analog FPV drone: soldered the flight controller, ESC and radio link, then configured and tuned it in Betaflight.",
          tags: ["Soldering", "Betaflight", "ELRS", "Analog FPV", "FC + 4-in-1 ESC"],
        },
        {
          title: "Arduino projects",
          description:
            "Wrote and debugged Arduino firmware, from reading sensors to driving outputs, and tracked down hardware and code faults.",
          tags: ["Arduino", "C/C++", "Debugging"],
        },
        {
          title: "Automatic plant growth box",
          description:
            "Mini project: a self-running grow box for a single plant. It uses light and humidity sensing, water monitoring, and servos, with a motor-driven water pump that I designed and 3D printed myself. Runs on an Arduino Uno, controlled from a Java front-end I wrote.",
          tags: ["Arduino Uno", "Java", "Sensors", "Servos", "DC motor", "3D-printed pump"],
        },
        {
          title: "3D printer upgrades (Ender 3 V1 & Tevo Tarantula)",
          description:
            "Heavily modified my first printer: customized and flashed Marlin firmware, upgraded to a direct-drive extruder and linear motion on X/Y/Z, swapped the mainboard and stepper drivers for silent operation, and added a BLTouch for auto bed leveling. Later applied the same upgrades to a Tevo Tarantula.",
          tags: ["Marlin", "Firmware", "Stepper drivers", "BLTouch", "Direct drive", "Linear motion"],
        },
        {
          title: "3D printer repair service (2018–2019)",
          description:
            "Offered a repair and troubleshooting service to friends and private customers whose 3D printers were broken or stuck, diagnosing hardware, electronics and firmware problems across many different printers.",
          tags: ["Troubleshooting", "Repair", "Customer support", "Diagnostics"],
        },
      ],
      skills: [
        "Soldering",
        "Betaflight",
        "ExpressLRS (TX/RX)",
        "Analog FPV",
        "Arduino",
        "C/C++",
        "Debugging",
        "Marlin firmware",
        "Sensors & servos",
        "3D printing",
        "Repair & troubleshooting",
      ],
    },
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



