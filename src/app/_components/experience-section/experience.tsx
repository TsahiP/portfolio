"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Building2, ExternalLink } from "lucide-react";
import type { Experience } from "@/lib/types/user.types";
import TrueFocus from "@/components/ui/text-focuse";

const Experience = ({ experience ,portfolioLink}: { experience: Experience[] ,portfolioLink:string }) => {
  const formatDate = (dateString: string) => {
    if (dateString === "Present") return "Present";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <TrueFocus
            sentence="Work Experience"
            manualMode={false}
            blurAmount={5}
            borderColor="red"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey in software development and technology
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20 hidden md:block" />

          <div className="space-y-12">
            {experience.map((exp: Experience, _index: number) => (
              <motion.div
                key={`${exp.company}-${exp.startDate}`}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block z-10" />

                <div className="md:ml-16">
                  <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Building2 className="w-5 h-5 text-primary" />
                          <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {exp.company}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <span className="font-medium">{exp.position}</span>
                        </div>
                      </div>

                      {/* Date Range */}
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 md:mt-0">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {formatDate(exp.startDate)} -{" "}
                          {formatDate(exp.endDate)}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    {exp.description && (
                      <div className="space-y-3">
                        {exp.description.map(
                          (desc: string, descIndex: number) => (
                            <div key={descIndex} className="flex gap-3">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <p className="text-muted-foreground leading-relaxed">
                                {desc}
                              </p>
                            </div>
                          )
                        )}
                      </div>
                    )}

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a href={portfolioLink} target="_blank" rel="noopener noreferrer">
          <div className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors cursor-pointer group">
            <span className="font-medium">View my full resume</span>
            <ExternalLink href={portfolioLink} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
