import React from 'react';
import {
  X,
  MapPin,
  Zap,
  CheckCircle2,
  ShieldCheck,
  Activity,
  Cpu
} from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/60 backdrop-blur-sm animate-fadeIn text-black">
      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl border-2 border-black overflow-hidden flex flex-col">

        {/* Modal Header */}
        <div className="px-6 py-4 bg-black text-white flex items-center justify-between border-b border-black">
          <div className="flex items-center space-x-3">
            <div className="p-1.5 rounded-lg bg-neutral-800 text-white">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="text-[10px]  uppercase tracking-widest text-slate-300 block font-bold">
                ENGINEERING DOSSIER • {project.category}
              </span>
              <h3 className="text-base sm:text-lg font-display font-bold text-white tracking-tight line-clamp-1">
                {project.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-neutral-800 transition-colors"
            aria-label="Close Project Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-black">

          {/* Main Hero Photograph with Engineering Specs Ribbon */}
          <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden bg-slate-100 border border-slate-300">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center filter contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            {/* Overlaid Technical Badge Bar */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 text-xs ">
              <span className="px-3 py-1 rounded-md bg-white text-black font-bold border border-black shadow-sm">
                {project.capacity}
              </span>
              <span className="px-3 py-1 rounded-md bg-white text-black font-bold border border-black shadow-sm">
                📐 {project.voltage}
              </span>
              <span className="px-3 py-1 rounded-md bg-white text-black font-bold border border-black shadow-sm flex items-center">
                <MapPin className="w-3.5 h-3.5 mr-1 text-black" />
                {project.location}
              </span>
            </div>
          </div>

          {/* Project Description */}
          <div>
            <div className="text-[11px]  uppercase tracking-wider text-black font-bold mb-1.5">
              PROJECT OVERVIEW & SECTOR
            </div>
            <p className="text-sm text-black font-medium leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Engineering Scope Breakdown */}
          <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-5">
            <div className="text-xs  uppercase tracking-wider text-black font-bold mb-3 flex items-center">
              <Activity className="w-4 h-4 text-black mr-2" />
              DETAILED ENGINEERING SCOPE
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              {project.scope.map((item, idx) => (
                <div key={idx} className="flex items-start text-black">
                  <CheckCircle2 className="w-4 h-4 text-black mr-2 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Equipment Specifications */}
          <div>
            <div className="text-[11px]  uppercase tracking-wider text-black font-bold mb-2 flex items-center">
              <Cpu className="w-4 h-4 text-black mr-1.5" />
              PRIMARY EQUIPMENT & MANUFACTURER SPECIFICATION
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {project.equipment.map((eq, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-100 border border-slate-300 text-black  text-[11px] font-bold">
                  {eq}
                </div>
              ))}
            </div>
          </div>

          {/* Applied Standards */}
          <div className="pt-2">
            <div className="text-[11px]  uppercase tracking-wider text-black font-bold mb-2 flex items-center">
              <ShieldCheck className="w-4 h-4 text-black mr-1.5" />
              GOVERNING CODES & AUDIT COMPLIANCE
            </div>
            <div className="flex flex-wrap gap-2  text-xs">
              {project.standards.map((std, idx) => (
                <Badge key={idx} variant="outline" className="font-bold text-black border-black">
                  {std}
                </Badge>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-300 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="text-black  text-[11px] font-bold">
            * Representative Engineering Benchmark Reference
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" onClick={onClose} className="border-black text-black font-bold">
              Close
            </Button>
            <Button asChild size="sm" variant="dark" className="bg-black hover:bg-neutral-800 text-white font-bold">
              <a href="#contact" onClick={onClose}>
                Discuss Similar Project
              </a>
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
