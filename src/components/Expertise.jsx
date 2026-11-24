import React, { useState } from 'react';
import {
  Network,
  Activity,
  Cpu,
  Zap,
  ShieldAlert,
  Calculator,
  Boxes,
  ShieldCheck,
  FileSpreadsheet,
  Layers,
  ChevronRight
} from 'lucide-react';
import { engineerProfile } from '../data/engineerData';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const iconMap = {
  Network,
  Activity,
  Cpu,
  Zap,
  ShieldAlert,
  Calculator,
  Boxes,
  ShieldCheck,
  FileSpreadsheet,
  Layers
};

export default function Expertise() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Distribution', 'Automation', 'Calculations', 'Systems', 'Infrastructure', 'Protection', 'Safety'];

  const filteredDisciplines = selectedCategory === 'All'
    ? engineerProfile.disciplines
    : engineerProfile.disciplines.filter(d => d.category === selectedCategory);

  return (
    <section id="expertise" className="py-10 lg:py-14 bg-slate-50 text-black relative border-b border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <Badge variant="outline" className="mb-2 border-black text-black">
              TECHNICAL DISCIPLINES
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold tracking-tight text-black">
              Engineering Expertise & Core Disciplines
            </h2>
            <p className="mt-3 text-black text-sm sm:text-base leading-relaxed font-medium">
              Comprehensive electrical engineering capabilities covering the entire lifecycle of power systems — from mathematical simulation and substation layouts to PLC automation, protection grading, and site compliance.
            </p>
          </div>

          {/* Filter Pills using Shadcn Button */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-white rounded-lg border border-slate-300 shadow-sm self-start lg:self-auto">
            {categories.map((cat) => (
              <Button
                key={cat}
                size="sm"
                variant={selectedCategory === cat ? 'dark' : 'ghost'}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs  rounded px-3 py-1 font-bold ${selectedCategory === cat ? 'bg-black text-white' : 'text-black hover:bg-slate-100'
                  }`}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Disciplines Grid using Shadcn Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDisciplines.map((item) => {
            const IconComponent = iconMap[item.icon] || Zap;

            return (
              <Card
                key={item.id}
                className="group bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <Badge variant="outline" className=" text-[10px] text-black border-slate-300">
                      {item.voltage}
                    </Badge>
                  </div>

                  <CardTitle className="text-lg text-black font-bold">
                    {item.title}
                  </CardTitle>

                  <CardDescription className="text-xs text-black font-medium pt-1 leading-relaxed">
                    {item.summary}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 text-black">
                  <div className="pt-3 border-t border-slate-200">
                    <div className="text-[10px]  uppercase tracking-widest text-black font-bold mb-2 flex items-center justify-between">
                      <span>KEY DELIVERABLES</span>
                      <span className="text-black font-bold">{item.standards}</span>
                    </div>

                    <ul className="space-y-1.5 text-xs text-black font-medium">
                      {item.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-black rounded-full mr-2 flex-shrink-0"></span>
                          <span className="truncate">{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                  <span className=" text-[11px] text-black font-bold">IEC/IEEE Standards</span>
                  <Button asChild size="sm" variant="ghost" className="text-black hover:bg-slate-100 font-bold p-0 h-auto">
                    <a href="#contact" className="inline-flex items-center">
                      <span>Inquire Discipline</span>
                      <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Bottom Standards Note */}
        <div className="mt-12 p-4 rounded-lg bg-white border border-slate-300 shadow-sm flex flex-col sm:flex-row items-center justify-between text-xs text-black gap-4">
          <div className="flex items-center space-x-2 font-medium">
            <span className="w-2 h-2 rounded-full bg-black"></span>
            <span>All calculations strictly follow IEC 60909 / IEEE 141-1993 / NFPA 70 guidelines.</span>
          </div>
          <a href="#services" className="text-black hover:underline  text-[11px] uppercase tracking-wider font-bold">
            View Consulting Services Architecture &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
