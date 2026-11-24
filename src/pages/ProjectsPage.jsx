import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  MapPin,
  Zap,
  Eye,
  ShieldCheck,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { engineerProfile } from '../data/engineerData';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

export default function ProjectsPage() {
  useEffect(() => {
    document.title = "Projects Portfolio | Ahmed Salama - Electrical Design & Automation";
  }, []);

  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Industrial & Substations', 'Industrial Automation', 'Oil & Gas & Heavy Industry', 'Critical Infrastructure', 'Commercial Infrastructure'];

  const filteredProjects = activeCategory === 'All'
    ? engineerProfile.projects
    : engineerProfile.projects.filter(p => p.category === activeCategory);

  return (
    <div className="bg-white text-black min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb & Header */}
        <div className="mb-12 border-b border-slate-300 pb-8">
          <div className="flex items-center space-x-2 text-xs  text-black font-bold uppercase mb-2">
            <Link to="/" className="hover:text-[#1070B1]">Home</Link>
            <span>/</span>
            <span className="text-[#1070B1]">Projects Portfolio</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-black tracking-tight">
            Projects Portfolio & Engineering Dossiers
          </h1>
          <p className="mt-3 text-base sm:text-lg text-black font-medium max-w-3xl leading-relaxed">
            Engineered power distribution networks, indoor medium-voltage substations, intelligent Motor Control Centers (iMCC), and mission-critical power systems.
          </p>
        </div>

        {/* Category Filter using Shadcn Button */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-xl border-2 border-slate-200 mb-12 w-fit">
          {categories.map((cat) => (
            <Button
              key={cat}
              size="sm"
              variant={activeCategory === cat ? 'dark' : 'ghost'}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs  font-bold rounded-lg px-4 py-1.5 ${activeCategory === cat
                ? 'bg-black text-white'
                : 'text-black hover:bg-slate-200'
                }`}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Selected Projects Showcase: Large Photographic Layouts */}
        <div className="space-y-12 mb-16">
          {filteredProjects.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <Card
                key={project.id}
                className="group overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-black shadow-sm"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 items-stretch ${isReversed ? 'lg:flex-row-reverse' : ''
                  }`}>

                  {/* Image Column */}
                  <div className={`lg:col-span-6 relative overflow-hidden min-h-[300px] sm:min-h-[380px] bg-slate-100 ${isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center filter contrast-105 hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:hidden" />

                    {/* Top Corner Category Tag */}
                    <div className="absolute top-4 left-4 z-10">
                      <Badge variant="outline" className="bg-white text-black font-bold border-black shadow-sm text-xs">
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

                      {/* Title */}
                      <h2 className="text-xl sm:text-2xl font-display font-bold text-black mb-2.5">
                        {project.title}
                      </h2>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-black font-medium leading-relaxed mb-5">
                        {project.description}
                      </p>

                      {/* Key Engineering Scope Bullets */}
                      <div className="space-y-1.5 mb-5">
                        <div className="text-[10px]  text-black font-bold uppercase tracking-wider">
                          ENGINEERING SCOPE HIGHLIGHTS:
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
                          EQUIPMENT & MANUFACTURERS
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

                    {/* Action Bar with Case Study Link */}
                    <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                      <div className="flex items-center space-x-1.5 text-[11px]  text-black font-bold">
                        <span>Codes:</span>
                        {project.standards.slice(0, 2).map((std, sIdx) => (
                          <span key={sIdx} className="font-bold text-black">{std}</span>
                        ))}
                      </div>

                      <Button asChild size="sm" variant="default" className="bg-[#1070B1] hover:bg-[#0D5B91] text-white font-bold">
                        <Link to={`/projects/${project.id}`} className="flex items-center space-x-1">
                          <span>Inspect Full Case Study</span>
                          <ArrowRight className="w-3.5 h-3.5 ml-1" />
                        </Link>
                      </Button>
                    </div>

                  </div>

                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 border-t-4 border-t-[#1070B1] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-black">
              Planning a Power Distribution or Substation Project?
            </h3>
            <p className="text-xs text-black font-medium mt-1">
              Engage Eng. Ahmed Salama for full electrical balance of plant, ETAP analysis, or site commissioning.
            </p>
          </div>
          <Button asChild size="lg" variant="default" className="bg-[#1070B1] hover:bg-[#0D5B91] text-white font-bold whitespace-nowrap shadow-sm">
            <Link to="/contact">
              Discuss Your Project
            </Link>
          </Button>
        </div>

      </div>
    </div>
  );
}
