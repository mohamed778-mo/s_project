import React, { useState } from 'react';
import {
  ArrowRight,
  MapPin,
  Zap,
  Eye
} from 'lucide-react';
import { engineerProfile } from '../data/engineerData';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Industrial & Substations', 'Industrial Automation', 'Oil & Gas & Heavy Industry', 'Critical Infrastructure', 'Commercial Infrastructure'];

  const filteredProjects = activeCategory === 'All'
    ? engineerProfile.projects
    : engineerProfile.projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-slate-50 text-black relative border-b border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <Badge variant="outline" className="mb-2 border-black text-black">
              ENGINEERING SHOWCASE
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-black tracking-tight leading-tight">
              Selected Power Systems & Automation Projects
            </h2>
            <p className="mt-3 text-black text-sm sm:text-base leading-relaxed font-medium">
              Showcasing high-voltage distribution designs, ETAP power studies, and turnkey industrial automation infrastructure delivered with strict adherence to international safety codes.
            </p>
          </div>

          {/* Category Filter using Shadcn Button */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-white rounded-lg border border-slate-300 shadow-sm self-start lg:self-auto">
            {categories.map((cat) => (
              <Button
                key={cat}
                size="sm"
                variant={activeCategory === cat ? 'dark' : 'ghost'}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs  rounded px-3 py-1 font-bold ${activeCategory === cat
                  ? 'bg-black text-white'
                  : 'text-black hover:bg-slate-100'
                  }`}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Selected Projects Showcase: Large Photographic Layouts using Shadcn Cards */}
        <div className="space-y-10">
          {filteredProjects.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <Card
                key={project.id}
                className="group overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-black"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 items-stretch ${isReversed ? 'lg:flex-row-reverse' : ''
                  }`}>

                  {/* Image Column */}
                  <div className={`lg:col-span-6 relative overflow-hidden min-h-[280px] sm:min-h-[360px] bg-slate-100 ${isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center filter contrast-105 hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:hidden" />

                    {/* Top Corner Category Tag */}
                    <div className="absolute top-4 left-4 z-10">
                      <Badge variant="outline" className="bg-white text-black font-bold border-black shadow-sm">
                        {project.category}
                      </Badge>
                    </div>

                    {/* Bottom Specs Ribbon */}
                    <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-wrap gap-2 text-xs ">
                      <span className="px-2.5 py-1 rounded bg-white text-black font-bold border border-black shadow-sm">
                        {project.capacity}
                      </span>
                      <span className="px-2.5 py-1 rounded bg-white text-black font-bold border border-black shadow-sm">
                        {project.voltage}
                      </span>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between text-black ${isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}>
                    <div>
                      {/* Location & Sector */}
                      <div className="flex items-center space-x-2 text-xs  text-black font-semibold mb-2">
                        <MapPin className="w-3.5 h-3.5 text-black" />
                        <span>{project.location}</span>
                        <span>•</span>
                        <span className="text-black font-bold">{project.sector}</span>
                      </div>

                      {/* Title in Space Grotesk 700 with #000000 */}
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-black mb-2.5">
                        {project.title}
                      </h3>

                      {/* Description in #000000 */}
                      <p className="text-xs sm:text-sm text-black font-medium leading-relaxed mb-5">
                        {project.description}
                      </p>

                      {/* Key Engineering Scope Bullets */}
                      <div className="space-y-1.5 mb-5">
                        <div className="text-[10px]  text-black font-bold uppercase tracking-wider">
                          ENGINEERING SCOPE:
                        </div>
                        {project.scope.slice(0, 3).map((item, idx) => (
                          <div key={idx} className="flex items-start text-xs text-black font-medium">
                            <span className="w-1.5 h-1.5 bg-black rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Equipment Tags */}
                      <div className="mb-5">
                        <div className="text-[10px]  text-black uppercase tracking-widest font-bold mb-1.5">
                          TECHNOLOGY & EQUIPMENT SPECIFIED
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {project.equipment.map((eq, eIdx) => (
                            <span
                              key={eIdx}
                              className="text-[10px]  px-2 py-0.5 rounded bg-slate-100 text-black font-bold border border-slate-300"
                            >
                              {eq.split('(')[0].trim()}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                      <div className="flex items-center space-x-1.5 text-[11px]  text-black font-bold">
                        <span>Codes:</span>
                        {project.standards.slice(0, 2).map((std, sIdx) => (
                          <span key={sIdx} className="font-bold text-black">{std}</span>
                        ))}
                      </div>

                      <Button
                        variant="dark"
                        size="sm"
                        onClick={() => setSelectedProject(project)}
                        className="bg-black hover:bg-neutral-800 text-white font-bold"
                      >
                        <Eye className="w-3.5 h-3.5 mr-1" />
                        <span>Inspect Dossier</span>
                      </Button>
                    </div>

                  </div>

                </div>
              </Card>
            );
          })}
        </div>

        {/* Project Modal Lightbox */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
