import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Target,
  Zap
} from 'lucide-react';
import { engineerProfile } from '../data/engineerData';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Badge } from './ui/badge';

export default function About() {
  const { about } = engineerProfile;

  return (
    <section id="about" className="py-10 lg:py-14 bg-white relative border-b border-slate-300 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <Badge variant="outline" className="mb-2 border-black text-black">
            {about.eyebrow}
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-black tracking-tight leading-tight">
            {about.title}
          </h2>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Left Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="relative rounded-xl overflow-hidden shadow-sm border-2 border-black bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80"
                alt="Electrical Design and Automation Engineering Inspection"
                className="w-full h-[420px] object-cover object-center filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Overlaid Technical Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-white/95 backdrop-blur-md border border-black text-black shadow-sm">
                <div className="flex items-center space-x-2 text-black text-xs  font-bold uppercase mb-1">
                  <Zap className="w-4 h-4 text-black" />
                  <span>Technical Rigor & Field Execution</span>
                </div>
                <p className="text-xs text-black font-medium leading-relaxed font-sans">
                  Bridging technical office mathematical calculations with on-site medium & low voltage installation supervision and automated control commissioning.
                </p>
              </div>
            </div>

            {/* Technical Highlights Quick List */}
            <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-5 text-black">
              <div className="text-xs  uppercase tracking-wider text-black font-bold mb-3 flex items-center">
                <Target className="w-4 h-4 mr-1.5 text-black" />
                CORE AREAS OF SPECIALIZATION
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {about.technicalHighlights.map((item, idx) => (
                  <div key={idx} className="flex items-start text-black">
                    <CheckCircle2 className="w-3.5 h-3.5 text-black mr-2 mt-0.5 flex-shrink-0" />
                    <span className="font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Narrative & 4 Engineering Pillars */}
          <div className="lg:col-span-7 space-y-6 text-black">

            {/* Narrative text in Space Grotesk with #000000 */}
            <div className="space-y-4 text-black text-base font-medium leading-relaxed">
              {about.paragraphs.map((paragraph, idx) => (
                <p key={idx} className="text-justify sm:text-left text-black">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Engineering Pillars using Shadcn Card */}
            <div className="pt-2">
              <div className="text-xs  uppercase tracking-wider text-black font-bold mb-4 flex items-center">
                <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                CORE PRINCIPLES OF ENGINEERING PRACTICE
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {about.pillars.map((pillar, idx) => (
                  <Card key={idx} className="p-4 bg-slate-50 border border-slate-200 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300">
                    <div className="flex items-baseline space-x-2 mb-1">
                      <span className=" text-xs font-bold text-black">
                        {pillar.code}
                      </span>
                      <h4 className="font-display font-bold text-black text-sm">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-xs text-black font-medium leading-relaxed">
                      {pillar.desc}
                    </p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Philosophy Callout Quote */}
            <div className="p-5 rounded-xl bg-slate-100 text-black shadow-sm border-2 border-black">
              <div className="text-[11px]  text-black uppercase tracking-widest font-bold mb-1">
                ENGINEERING STATEMENT
              </div>
              <blockquote className="text-sm font-bold text-black italic leading-relaxed">
                "An electrical distribution network cannot rely on assumptions. It requires mathematically verified fault currents, precise protective grading, and zero tolerance for deviation from safety standards."
              </blockquote>
              <div className="mt-2 text-xs  text-black font-bold">
                — {engineerProfile.name}, {engineerProfile.title}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
