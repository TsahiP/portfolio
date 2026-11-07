"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, GraduationCap } from "lucide-react";
import type { Education as EducationType } from "@/lib/types/user.types";
import TrueFocus from "@/components/ui/text-focuse";

const Education = ({ education }: { education: EducationType[] }) => {
  if (!education?.length) return null;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <TrueFocus
            sentence="Education"
            manualMode={false}
            blurAmount={5}
            borderColor="red"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
        </motion.div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {education.map((edu) => (
            <motion.div
              key={`${edu.school}-${edu.startDate}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg flex flex-col md:flex-row md:items-center md:justify-between gap-3"
            >
              <div className="flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="text-xl font-bold text-foreground">{edu.school}</h3>
                  <p className="text-muted-foreground">{edu.degree}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>
                  {edu.startDate} - {edu.endDate}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
