"use client";
import React from 'react';
import { Project } from '../../../lib/types/user.types';
import TrueFocus from '@/components/ui/text-focuse';
import { ExternalLink } from 'lucide-react';

type ProjectsProps = {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div className="w-full h-full px-6 md:px-10">
      <TrueFocus
        sentence="Projects"
        manualMode={false}
        blurAmount={5}
        borderColor="red"
        animationDuration={2}
        pauseBetweenAnimations={1}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            onClick={() => window.open(project.url, '_blank')}
          >
            {/* Preview */}
            <div className="relative w-full h-52 overflow-hidden bg-black/20">
              <iframe
                src={project.url}
                title={project.name}
                className="absolute top-0 left-0 w-[1800px] h-[768px] scale-[0.27] origin-top-left border-0 pointer-events-none"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white text-sm font-medium">
                  <ExternalLink size={15} />
                  View Live
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5 gap-3">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg font-bold text-white leading-tight">{project.name}</h3>
                <ExternalLink
                  size={16}
                  className="shrink-0 mt-0.5 text-white/30 group-hover:text-white/70 transition-colors duration-200"
                />
              </div>

              <p className="text-sm text-white/60 leading-relaxed line-clamp-2">{project.description}</p>

              {/* Tech badges */}
              {project.technologies?.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-white/10 text-white/70 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;