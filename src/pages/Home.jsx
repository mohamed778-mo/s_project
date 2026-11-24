import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ChevronRight,
  Layers,
  Activity,
  Boxes,
  Cpu,
  Calculator,
  Network
} from 'lucide-react';
import { engineerProfile } from '../data/engineerData';
import Hero from '../components/Hero';
import StandardsBanner from '../components/StandardsBanner';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/card';
import { Button } from '../components/ui/button';

export default function Home() {
  useEffect(() => {
    document.title = "Ahmed Salama - Electrical Design & Automation Engineer | Corporate Portfolio";
  }, []);

  const featuredDisciplines = engineerProfile.disciplines.slice(0, 6);
  const featuredServices = engineerProfile.services.slice(0, 4);
  const featuredProjects = engineerProfile.projects.slice(0, 3);

  return (
    <div className="bg-white text-black">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. International Standards Ribbon */}
      <StandardsBanner />

      {/* 3. Professional Introduction & Philosophy Preview */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            <div className="lg:col-span-5 relative">
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100">
                <img
                  src="/IEC-Standards-Chart-for-Instrumentation-and-Control-1-1024x623.jpg"
                  alt="Industrial Electrical Engineering Inspection"
                  className="w-full h-[380px] object-cover object-center filter contrast-105"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 p-4 rounded-xl bg-white border border-slate-200 border-l-4 border-l-[#1070B1] shadow-lg hidden sm:block">
                <div className="text-xs  font-bold text-[#1070B1] uppercase">
                  PRACTICING CONSULTANT
                </div>
                <div className="text-sm font-bold text-black font-display">
                  IEC & IEEE Standards Driven
                </div>
              </div>
            </div>

            {/* <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-black tracking-tight leading-tight">
                Rigorous Electrical Engineering from Technical Office to Site Execution
              </h2>
              <p className="text-base text-black font-medium leading-relaxed">
                {engineerProfile.about.paragraphs[0]}
              </p>
              <p className="text-sm text-black font-medium leading-relaxed">
                {engineerProfile.about.paragraphs[1]}
              </p>

              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <Button asChild variant="default" className="bg-[#1070B1] hover:bg-[#0D5B91] text-white font-bold">
                  <Link to="/about" className="flex items-center space-x-1.5">
                    <span>Read Full Professional Background</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border border-slate-300 bg-white text-black hover:border-[#1070B1] hover:text-[#1070B1] hover:bg-[#E8F3FA]/40 font-bold">
                  <Link to="/contact">
                    Schedule Consultation
                  </Link>
                </Button>
              </div>
            </div> */}

          </div>
        </div>
      </section>

      {/* 4. Featured Engineering Expertise (Top Disciplines) */}
      <section className="py-20 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-black tracking-tight">
                Core Engineering Capabilities
              </h2>
            </div>
            <Button asChild variant="outline" className="border border-slate-300 bg-white text-black hover:border-[#1070B1] hover:text-[#1070B1] hover:bg-[#E8F3FA]/40 font-bold">
              <Link to="/expertise" className="flex items-center space-x-1">
                <span>View All 10 Disciplines</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDisciplines.map((item) => (
              <Card key={item.id} className="group bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="p-2 rounded-lg bg-[#1070B1] text-white">
                      <Zap className="w-4 h-4 text-white" />
                    </span>
                    <span className="text-[11px]  font-semibold text-black/70">
                      {item.voltage}
                    </span>
                  </div>
                  <CardTitle className="text-lg text-black font-bold group-hover:text-[#1070B1] transition-colors">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-xs text-black font-medium pt-1">
                    {item.summary}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs">
                  <span className=" text-[11px] text-black font-bold">{item.standards}</span>
                  <Link to="/expertise" className="text-[#1070B1] hover:underline font-bold inline-flex items-center">
                    <span>Explore Scope</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-0.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Featured Consulting Services */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-black tracking-tight">
                Featured Engineering Services
              </h2>
            </div>
            <Button asChild variant="outline" className="border border-slate-300 bg-white text-black hover:border-[#1070B1] hover:text-[#1070B1] hover:bg-[#E8F3FA]/40 font-bold">
              <Link to="/services" className="flex items-center space-x-1">
                <span>Explore All 8 Services</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredServices.map((service) => (
              <Card key={service.code} className="group bg-slate-50 border border-slate-200 hover:bg-white hover:border-slate-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className=" text-xs font-bold text-[#1070B1]">
                      {service.code}
                    </span>
                    <span className="text-[11px]  text-black uppercase font-bold">
                      {service.subtitle}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-black font-bold group-hover:text-[#1070B1] transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-xs text-black font-medium pt-1">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                  <div>
                    <div className="text-[10px]  uppercase text-black font-bold">DELIVERABLE</div>
                    <div className="font-bold text-black truncate max-w-[220px]">{service.deliverable}</div>
                  </div>
                  <Button asChild size="sm" variant="default" className="bg-[#1070B1] hover:bg-[#0D5B91] text-white font-bold">
                    <Link to="/contact">
                      Request Scope
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Selected Projects Preview */}
      <section className="py-20 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-black tracking-tight">
                Featured Projects & Case Studies
              </h2>
            </div>
            <Button asChild variant="outline" className="border border-slate-300 bg-white text-black hover:border-[#1070B1] hover:text-[#1070B1] hover:bg-[#E8F3FA]/40 font-bold">
              <Link to="/projects" className="flex items-center space-x-1">
                <span>View Full Portfolio</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="group overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader className="pb-3 flex-1">
                  <div className="text-[10px]  uppercase font-bold text-[#1070B1] mb-1">
                    {project.category}
                  </div>
                  <CardTitle className="text-base text-black font-bold line-clamp-2 group-hover:text-[#1070B1] transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-xs text-black font-medium pt-1 line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="pt-3 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[11px]  font-bold text-black">{project.voltage}</span>
                  <Button asChild size="sm" variant="default" className="bg-[#1070B1] hover:bg-[#0D5B91] text-white font-bold">
                    <Link to={`/projects/${project.id}`}>
                      Case Study
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Bottom High-Impact Consultation CTA */}
      <section className="py-16 bg-slate-100/80 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-black max-w-2xl mx-auto tracking-tight">
            Engineering Reliable Power Solutions for Your Next Industrial Installation
          </h2>
          <p className="text-base text-black font-medium max-w-xl mx-auto">
            Contact Eng. Ahmed Salama directly to discuss technical specifications, load calculations, ETAP studies, or automated control panel engineering.
          </p>
          <div className="pt-3 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="default" className="bg-[#1070B1] hover:bg-[#0D5B91] text-white font-bold shadow-sm">
              <Link to="/contact" className="flex items-center space-x-2">
                <span>Transmit Engineering Inquiry</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border border-slate-300 bg-white text-black hover:border-[#1070B1] hover:text-[#1070B1] hover:bg-[#E8F3FA]/40 font-bold">
              <a href={`tel:${engineerProfile.phone}`}>
                Call: {engineerProfile.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
