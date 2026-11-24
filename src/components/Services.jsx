import React from 'react';
import {
  ArrowRight,
  CheckSquare
} from 'lucide-react';
import { engineerProfile } from '../data/engineerData';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export default function Services() {
  return (
    <section id="services" className="py-10 lg:py-14 bg-white text-black relative border-b border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <Badge variant="outline" className="mb-2 border-black text-black">
            ENGINEERING CONSULTANCY & SERVICES
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-black tracking-tight leading-tight">
            Comprehensive Power & Automation Engineering Services
          </h2>
          <p className="mt-3 text-black text-sm sm:text-base leading-relaxed font-medium">
            Delivering rigorous technical office packages, on-site quality assurance, PLC automation schematics, and numerical power system studies tailored for industrial plants, infrastructure, and commercial facilities.
          </p>
        </div>

        {/* Consulting Services Grid (using Shadcn Card) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {engineerProfile.services.map((service) => (
            <Card
              key={service.code}
              className="group bg-slate-50 border border-slate-200 hover:bg-white hover:border-slate-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className=" text-xs font-bold text-black border-black">
                    {service.code}
                  </Badge>
                  <span className="text-[11px]  text-black uppercase tracking-wider font-bold">
                    {service.subtitle}
                  </span>
                </div>

                <CardTitle className="text-xl text-black font-bold">
                  {service.title}
                </CardTitle>

                <CardDescription className="text-xs text-black font-medium pt-1 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-3 pt-0 text-black">
                <div className="space-y-2">
                  <div className="text-[10px]  text-black font-bold uppercase tracking-wider">
                    SCOPE OF WORK INCLUDES:
                  </div>
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start text-xs text-black font-medium">
                      <CheckSquare className="w-3.5 h-3.5 text-black mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <div className="text-[10px]  uppercase tracking-wider text-black font-bold">
                    PRIMARY DELIVERABLE
                  </div>
                  <div className="text-xs font-bold text-black mt-0.5">
                    {service.deliverable}
                  </div>
                </div>

                <Button asChild size="sm" variant="dark" className="bg-black hover:bg-neutral-800 text-white font-bold">
                  <a href="#contact" className="inline-flex items-center space-x-1">
                    <span>Request Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Consulting Engagement Banner */}
        <div className="mt-12 p-6 rounded-xl bg-slate-100 text-black flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm border-2 border-black">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xs  text-black uppercase tracking-wider font-bold">
              TAILORED ENGINEERING ENGAGEMENTS
            </div>
            <div className="text-base font-bold text-black font-display">
              Need a bespoke technical audit, ETAP study, or automated control panel engineering?
            </div>
            <p className="text-xs text-black font-medium">
              Engagements can be structured on a turnkey design package basis, hourly consultation, or on-site supervision milestone.
            </p>
          </div>

          <Button asChild variant="dark" className="bg-black hover:bg-neutral-800 text-white font-bold whitespace-nowrap shadow-sm">
            <a href="#contact">
              Initiate Project Discussion
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
}
