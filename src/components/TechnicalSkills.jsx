import React, { useState } from 'react';
import {
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { engineerProfile } from '../data/engineerData';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export default function TechnicalSkills() {
  const [activeTab, setActiveTab] = useState('software');

  return (
    <section id="skills" className="py-20 lg:py-28 bg-white text-black relative border-b border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <Badge variant="outline" className="mb-2 border-black text-black">
              TECHNICAL COMPETENCIES & SOFTWARE
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold tracking-tight text-black">
              Engineering Software & Applied Standards
            </h2>
            <p className="mt-3 text-black text-sm sm:text-base leading-relaxed font-medium">
              Industrial-grade numerical simulation suites, PLC automation platforms, and schematic CAD tools utilized for accurate system modeling and zero-error documentation.
            </p>
          </div>

          {/* Tab Switcher using Shadcn Button */}
          <div className="flex p-1 bg-slate-100 rounded-lg border border-slate-300 self-start lg:self-auto space-x-1">
            <Button
              size="sm"
              variant={activeTab === 'software' ? 'dark' : 'ghost'}
              onClick={() => setActiveTab('software')}
              className={`text-xs  font-bold rounded ${activeTab === 'software'
                  ? 'bg-black text-white'
                  : 'text-black hover:bg-slate-200'
                }`}
            >
              Simulation & CAD Software
            </Button>
            <Button
              size="sm"
              variant={activeTab === 'standards' ? 'dark' : 'ghost'}
              onClick={() => setActiveTab('standards')}
              className={`text-xs  font-bold rounded ${activeTab === 'standards'
                  ? 'bg-black text-white'
                  : 'text-black hover:bg-slate-200'
                }`}
            >
              International Standards Library
            </Button>
          </div>
        </div>

        {/* Tab 1: Engineering Software Grid (Shadcn Card) */}
        {activeTab === 'software' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {engineerProfile.softwareTools.map((tool) => (
              <Card
                key={tool.name}
                className="group bg-slate-50 border border-slate-200 hover:bg-white hover:border-slate-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-black"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className=" text-xs text-black border-black font-bold">
                      {tool.category}
                    </Badge>
                    <span className="text-[11px]  text-black font-bold">
                      {tool.level}
                    </span>
                  </div>

                  <CardTitle className="text-xl text-black font-bold">
                    {tool.name}
                  </CardTitle>

                  <CardDescription className="text-xs text-black font-medium pt-1 leading-relaxed">
                    {tool.useCase}
                  </CardDescription>
                </CardHeader>

                {/* Proficiency Gauge */}
                <CardFooter className="pt-3 border-t border-slate-200 flex-col items-stretch space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] ">
                    <span className="text-black font-bold">PRACTICE PROFICIENCY</span>
                    <span className="text-black font-bold">{tool.proficiency}%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden border border-slate-300">
                    <div
                      className="bg-black h-full rounded-full transition-all duration-700"
                      style={{ width: `${tool.proficiency}%` }}
                    />
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        {/* Tab 2: Governing Standards Matrix */}
        {activeTab === 'standards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {engineerProfile.standardsList.map((std, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-md transition-all duration-300 flex items-start space-x-4 shadow-sm text-black"
              >
                <div className="p-2.5 rounded-lg bg-black text-white flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm  font-bold text-black">
                    {std.code}
                  </div>
                  <p className="text-xs text-black font-medium mt-1 leading-relaxed">
                    {std.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Verification Note */}
        <div className="mt-12 p-4 rounded-lg bg-slate-50 border border-slate-300 text-xs  text-black flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center space-x-2 font-bold">
            <span className="w-2 h-2 rounded-full bg-black"></span>
            <span>All simulations are calibrated against equipment manufacturer datasheets & test certificates.</span>
          </div>
          <span className="text-black font-bold">IEEE 1584 / NFPA 70E Arc Flash Certified Workflows</span>
        </div>

      </div>
    </section>
  );
}
