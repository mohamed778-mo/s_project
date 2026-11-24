import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  Target,
  FileText,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Linkedin
} from 'lucide-react';
import { engineerProfile } from '../data/engineerData';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

export default function AboutPage() {
  useEffect(() => {
    document.title = "About the Engineer | Ahmed Salama - Electrical Design & Automation";
  }, []);

  const { about } = engineerProfile;

  return (
    <div className="bg-white text-black min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb & Header */}
        <div className="mb-12 border-b border-slate-300 pb-8">
          <div className="flex items-center space-x-2 text-xs  text-black font-bold uppercase mb-2">
            <Link to="/" className="hover:text-[#1070B1]">Home</Link>
            <span>/</span>
            <span className="text-[#1070B1]">About the Engineer</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-black tracking-tight">
            About Eng. Ahmed Salama
          </h1>
          <p className="mt-3 text-base sm:text-lg text-black font-medium max-w-3xl leading-relaxed">
            Electrical Design & Automation Engineer specializing in medium/low-voltage power distribution, substation design, ETAP numerical simulation, and PLC/SCADA industrial automation.
          </p>
        </div>

        {/* Executive Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">

          {/* Portrait & Contact Quick Card */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="border border-slate-200 border-t-4 border-t-[#1070B1] shadow-md overflow-hidden bg-white hover:translate-y-0">
              <div className="h-80 bg-slate-100 overflow-hidden">
                <img
                  src={engineerProfile.photo}
                  alt={engineerProfile.name}
                  className="w-full h-full object-cover object-top filter contrast-105"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h2 className="text-2xl font-display font-bold text-black">
                    {engineerProfile.name}
                  </h2>
                  <p className="text-xs font-bold text-black/80 mt-0.5">
                    {engineerProfile.title}
                  </p>
                  <p className="text-xs font-bold text-black mt-1 flex items-center">
                    <MapPin className="w-3.5 h-3.5 text-black mr-1" />
                    {engineerProfile.location}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 space-y-2 text-xs  font-bold">
                  <div className="flex justify-between items-center">
                    <span className="text-black/70">Phone:</span>
                    <a href={`tel:${engineerProfile.phone}`} className="text-black hover:text-[#1070B1]">{engineerProfile.phone}</a>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-black/70">Email:</span>
                    <a href={`mailto:${engineerProfile.email}`} className="text-black hover:text-[#1070B1]">{engineerProfile.email}</a>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-black/70">LinkedIn:</span>
                    <a href={engineerProfile.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#1070B1] hover:underline">View Profile</a>
                  </div>
                </div>

                <Button asChild variant="default" className="w-full bg-[#1070B1] hover:bg-[#0D5B91] text-white font-bold">
                  <Link to="/contact">
                    Direct Consultation
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Specialization Checklist */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-black shadow-sm">
              <div className="text-xs  uppercase tracking-wider text-[#1070B1] font-bold mb-3 flex items-center">
                <Target className="w-4 h-4 mr-1.5 text-[#1070B1]" />
                VERIFIED TECHNICAL SPECIALIZATIONS
              </div>
              <div className="space-y-2 text-xs font-bold">
                {about.technicalHighlights.map((item, idx) => (
                  <div key={idx} className="flex items-start text-black">
                    <CheckCircle2 className="w-4 h-4 text-[#1070B1] mr-2 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Narrative & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-base font-medium text-black leading-relaxed">
              {about.paragraphs.map((p, idx) => (
                <p key={idx} className="text-justify sm:text-left">
                  {p}
                </p>
              ))}
            </div>

            {/* Engineering Statement Banner */}
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 border-l-4 border-l-[#1070B1] text-black space-y-2 shadow-sm">
              <div className="text-[10px]  text-[#1070B1] uppercase tracking-widest font-bold">
                ENGINEERING PHILOSOPHY
              </div>
              <blockquote className="text-sm sm:text-base font-bold italic text-black leading-relaxed">
                "An electrical distribution network cannot rely on assumptions. It requires mathematically verified fault currents, precise protective grading, and zero tolerance for deviation from safety standards."
              </blockquote>
              <div className="text-xs  font-bold text-black/80 pt-1">
                — {engineerProfile.name}, {engineerProfile.title}
              </div>
            </div>

            {/* Education & Academic Foundation */}
            <div className="pt-4">
              <div className="text-xs  uppercase tracking-wider text-black font-bold mb-4 flex items-center">
                <GraduationCap className="w-4 h-4 mr-2 text-[#1070B1]" />
                EDUCATION & ACADEMIC CREDENTIALS
              </div>
              <div className="space-y-3">
                {about.education.map((edu, idx) => (
                  <Card key={idx} className="p-5 bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <h3 className="font-display font-bold text-black text-base">
                        {edu.degree}
                      </h3>
                      <Badge variant="outline" className="border-slate-300 text-black font-bold self-start sm:self-auto">
                        {edu.institution}
                      </Badge>
                    </div>
                    <p className="text-xs font-bold text-black/80 mt-1">
                      {edu.period}
                    </p>
                    <p className="text-xs text-black font-medium mt-1">
                      {edu.focus}
                    </p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Professional Experience Highlights */}
            <div className="pt-4">
              <div className="text-xs  uppercase tracking-wider text-black font-bold mb-4 flex items-center">
                <Briefcase className="w-4 h-4 mr-2 text-[#1070B1]" />
                PROFESSIONAL PRACTICE HIGHLIGHTS
              </div>
              <div className="space-y-3">
                {about.experienceHighlights.map((exp, idx) => (
                  <Card key={idx} className="p-5 bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <h3 className="font-display font-bold text-black text-base">
                        {exp.role}
                      </h3>
                      <Badge variant="blue" className="font-bold self-start sm:self-auto">
                        {exp.focus}
                      </Badge>
                    </div>
                    <p className="text-xs text-black font-medium mt-1 leading-relaxed">
                      {exp.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* 4 Core Principles Grid */}
        <div className="border-t border-slate-200 pt-14 mb-14">
          <div className="max-w-2xl mb-8">
            <Badge variant="blue" className="mb-2">
              METHODOLOGY
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-black tracking-tight">
              Four Pillars of Engineering Practice
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {about.pillars.map((pillar) => (
              <Card key={pillar.code} className="group p-5 bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className=" text-xs font-bold text-[#1070B1] mb-1">
                  PILLAR {pillar.code}
                </div>
                <h3 className="font-display font-bold text-black text-base mb-2 group-hover:text-[#1070B1] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-black font-medium leading-relaxed">
                  {pillar.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom Navigation CTA */}
        <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 border-t-4 border-t-[#1070B1] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-display font-bold text-black">
              Explore Ahmed's Engineering Services & Portfolio
            </h3>
            <p className="text-xs text-black font-medium mt-1">
              Review turnkey consulting deliverables, software modeling suites, and completed industrial projects.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="default" className="bg-[#1070B1] hover:bg-[#0D5B91] text-white font-bold">
              <Link to="/services">
                Explore Services
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white font-bold">
              <Link to="/projects">
                View Projects
              </Link>
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
