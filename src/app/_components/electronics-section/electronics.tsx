"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cpu, Plane, Printer, Wrench, Sprout, Briefcase } from "lucide-react";
import type { ElectronicsProfile } from "@/lib/types/user.types";
import TrueFocus from "@/components/ui/text-focuse";

const icons = [Plane, Cpu, Sprout, Printer, Wrench];

const Electronics = ({ electronics }: { electronics: ElectronicsProfile }) => {
  if (!electronics) return null;

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
            sentence={electronics.title}
            manualMode={false}
            blurAmount={5}
            borderColor="red"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            {electronics.summary}
          </p>
          <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full border border-primary/40 bg-primary/10 text-primary text-sm font-medium">
            <Briefcase className="w-4 h-4" />
            {electronics.lookingFor}
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {electronics.highlights.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                {item.image && (
                  <div className="relative w-full h-56">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {electronics.skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-xl bg-card border border-border text-sm font-medium text-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Electronics;
