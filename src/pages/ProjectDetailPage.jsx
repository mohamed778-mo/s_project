import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  MapPin,
  Zap,
  CheckCircle2,
  ShieldCheck,
  Activity,
  Cpu,
  Layers,
  FileText,
  Building2,
  ArrowRight
} from 'lucide-react';
import { engineerProfile } from '../data/engineerData';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = engineerProfile.projects.find((p) => p.id === id);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Case Study - Ahmed Salama`;
    }
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-white text-black pt-32 pb-20 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-display font-bold">Project Case Study Not Found</h1>
          <p className="text-sm font-medium text-black">The requested project dossier could not be located.</p>
          <Button asChild variant="default" className="bg-[#1070B1] hover:bg-[#0D5B91] text-white font-bold">
            <Link to="/projects">Return to Projects Portfolio</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white text-black min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back Link & Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/projects"
            className="inline-flex items-center text-xs  font-bold text-black hover:text-[#1070B1] uppercase transition-colors mb-3"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
            <span>&larr; Back to Projects Portfolio</span>
          </Link>
          <div className="flex items-center space-x-2 text-xs  text-black font-bold uppercase">
            <Link to="/" className="hover:text-[#1070B1]">Home</Link>
            <span>/</span>
            <Link to="/projects" className="hover:text-[#1070B1]">Projects</Link>
            <span>/</span>
            <span className="text-[#1070B1] truncate max-w-xs">{project.title}</span>
          </div>
        </div>

        {/* Project Hero Header */}
        <div className="mb-10 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline" className="border-black text-black font-bold">
              {project.category}
            </Badge>
            <Badge variant="blue" className="font-bold">
              {project.capacity}
            </Badge>
            <Badge variant="secondary" className="font-bold">
              📐 {project.voltage}
            </Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-black tracking-tight leading-tight">
            {project.title}
          </h1>
          <p className="text-sm sm:text-base  font-bold text-black flex items-center">
            <MapPin className="w-4 h-4 mr-1.5 text-black" />
            <span>{project.location} • Sector: {project.sector}</span>
          </p>
        </div>

        {/* Large Hero Project Photograph */}
        <div className="relative h-72 sm:h-96 lg:h-[480px] rounded-2xl overflow-hidden border border-slate-200 shadow-lg mb-12 bg-slate-100">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center filter contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3 text-xs  text-white">
            <span className="px-3 py-1.5 rounded-lg bg-black/85 backdrop-blur-sm text-white font-bold border border-white/20">
              Capacity: {project.capacity}
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-black/85 backdrop-blur-sm text-white font-bold border border-white/20">
              Voltage: {project.voltage}
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-black/85 backdrop-blur-sm text-white font-bold border border-white/20">
              {project.location}
            </span>
          </div>
        </div>

        {/* Case Study Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">

          {/* Main Narrative (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">

            {/* Overview */}
            <div>
              <h2 className="text-xs  uppercase tracking-wider text-black font-bold mb-2 flex items-center">
                <Building2 className="w-4 h-4 mr-1.5 text-black" />
                PROJECT OVERVIEW & OPERATIONAL BACKGROUND
              </h2>
              <p className="text-base text-black font-medium leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Technical Challenge */}
            <Card className="p-6 bg-slate-50 border border-slate-200 hover:translate-y-0 hover:shadow-md">
              <h3 className="text-xs  uppercase tracking-wider text-[#1070B1] font-bold mb-2 flex items-center">
                <Activity className="w-4 h-4 mr-1.5 text-[#1070B1]" />
                ENGINEERING CHALLENGE & CRITICAL CONSTRAINTS
              </h3>
              <p className="text-sm text-black font-medium leading-relaxed">
                {project.challenge}
              </p>
            </Card>

            {/* Calculated Solution & Topology */}
            <Card className="p-6 bg-slate-50 border border-slate-200 hover:translate-y-0 hover:shadow-md">
              <h3 className="text-xs  uppercase tracking-wider text-[#1070B1] font-bold mb-2 flex items-center">
                <Zap className="w-4 h-4 mr-1.5 text-[#1070B1]" />
                ENGINEERED SOLUTION & TOPOLOGY
              </h3>
              <p className="text-sm text-black font-medium leading-relaxed">
                {project.solution}
              </p>
            </Card>

            {/* Achieved Results */}
            <Card className="p-6 bg-slate-50 border border-slate-200 border-l-4 border-l-[#1070B1] hover:translate-y-0 hover:shadow-md">
              <h3 className="text-xs  uppercase tracking-wider text-[#1070B1] font-bold mb-2 flex items-center">
                <ShieldCheck className="w-4 h-4 mr-1.5 text-[#1070B1]" />
                VERIFIED PERFORMANCE & COMMISSIONING RESULTS
              </h3>
              <p className="text-sm text-black font-bold leading-relaxed">
                {project.results}
              </p>
            </Card>

            {/* Scope of Work Checklist */}
            <div>
              <h3 className="text-xs  uppercase tracking-wider text-black font-bold mb-3 flex items-center">
                <CheckCircle2 className="w-4 h-4 mr-1.5 text-[#1070B1]" />
                DETAILED SCOPE OF WORK EXECUTED
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.scope.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start text-xs font-bold text-black">
                    <span className="w-2 h-2 rounded-full bg-[#1070B1] mr-2.5 mt-1 flex-shrink-0"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Specs & BOM (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">

            {/* Equipment Bill of Materials */}
            <Card className="p-6 bg-white border border-slate-200 shadow-sm hover:translate-y-0 hover:shadow-md">
              <h3 className="text-xs  uppercase tracking-wider text-[#1070B1] font-bold mb-3 flex items-center">
                <Cpu className="w-4 h-4 mr-1.5 text-[#1070B1]" />
                PRIMARY EQUIPMENT & VENDORS
              </h3>
              <div className="space-y-2">
                {project.equipment.map((eq, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs  font-bold text-black">
                    {eq}
                  </div>
                ))}
              </div>
            </Card>

            {/* Applied Standards */}
            <Card className="p-6 bg-white border border-slate-200 shadow-sm hover:translate-y-0 hover:shadow-md">
              <h3 className="text-xs  uppercase tracking-wider text-[#1070B1] font-bold mb-3 flex items-center">
                <ShieldCheck className="w-4 h-4 mr-1.5 text-[#1070B1]" />
                GOVERNING CODES & AUDIT COMPLIANCE
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.standards.map((std, idx) => (
                  <Badge key={idx} variant="outline" className="border-slate-300 text-black font-bold">
                    {std}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Direct Project Inquiry Action */}
            <Card className="p-6 bg-slate-50 border border-slate-200 border-t-4 border-t-[#1070B1] space-y-3 hover:translate-y-0 hover:shadow-md">
              <div className="text-xs  font-bold text-black uppercase">
                COMMISSIONING SIMILAR WORK?
              </div>
              <h4 className="text-base font-display font-bold text-black">
                Discuss Similar Power or Automation Scope
              </h4>
              <p className="text-xs text-black font-medium leading-relaxed">
                Contact Eng. Ahmed Salama for single-line diagram reviews, ETAP studies, or turnkey substation packages.
              </p>
              <Button asChild size="lg" variant="default" className="w-full bg-[#1070B1] hover:bg-[#0D5B91] text-white font-bold shadow-sm">
                <Link to="/contact">
                  Initiate Discussion
                </Link>
              </Button>
            </Card>

          </div>

        </div>

      </div>
    </div>
  );
}
