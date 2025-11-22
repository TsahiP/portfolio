"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import type { Skill } from "@/lib/types/user.types";
import TrueFocus from "@/components/ui/text-focuse";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiPython,
  SiDocker,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGooglecloud,
} from "react-icons/si";

// Map skill icon names to React Icons components
const skillIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  "node.js": SiNodedotjs,
  nodejs: SiNodedotjs,
  typescript: SiTypescript,
  python: SiPython,
  docker: SiDocker,
  tailwindcss: SiTailwindcss,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  git: SiGit,
  gcp: SiGooglecloud,
};

const Skills = ({ skills }: { skills: Skill[] }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: 100,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const hoverVariants = {
    hover: {
      y: -8,
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
      },
    },
  };

  const getIcon = (iconName: string) => {
    const normalizedName = iconName.toLowerCase().replace(/\s+/g, "");
    const IconComponent = skillIconMap[normalizedName];
    return IconComponent || Code2;
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl  mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <TrueFocus
            sentence="Skills & Technologies"
            manualMode={false}
            blurAmount={5}
            borderColor="red"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            Technologies and tools I work with to build amazing digital experiences
          </p>
        </motion.div>

        {/* Skills Horizontal Line */}
        <div className="overflow-hidden">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-row items-center gap-6 justify-center flex-wrap mt-4"
          >
            {skills.map((skill, index) => {
              const IconComponent = getIcon(skill.icon);
              return (
                <motion.div
                  key={`${skill.name}-${index}`}
                  variants={itemVariants}
                  className="group flex-shrink-0"
                >
                  <motion.div
                    variants={hoverVariants}
                    whileHover="hover"
                    className="bg-card border border-border rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center gap-3 sm:gap-4 cursor-pointer relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[100px] sm:min-w-[120px]"
                  >
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    
                    {/* Icon */}
                    <div className="relative z-10">
                      <IconComponent className="w-10 h-10 sm:w-12 sm:h-12 text-foreground group-hover:text-primary transition-colors duration-300" />
                    </div>

                    {/* Skill Name */}
                    <h3 className="text-xs sm:text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300 relative z-10 text-center">
                      {skill.name}
                    </h3>

                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

