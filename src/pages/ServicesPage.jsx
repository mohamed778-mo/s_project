import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckSquare,
  ArrowRight,
  ShieldCheck,
  FileCheck2,
  Building2,
  Clock,
  Briefcase
} from 'lucide-react';
import { engineerProfile } from '../data/engineerData';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

export default function ServicesPage() {
  useEffect(() => {
    document.title = "Engineering Services | Ahmed Salama - Electrical Design & Automation";
  }, []);

  return (
    <div className="bg-white text-black min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb & Header */}
        <div className="mb-12 border-b border-slate-300 pb-8">
          <div className="flex items-center space-x-2 text-xs  text-black font-bold uppercase mb-2">
            <Link to="/" className="hover:text-[#1070B1]">Home</Link>
            <span>/</span>
            <span className="text-[#1070B1]">Engineering Services</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-black tracking-tight">
            Consulting & Engineering Services
          </h1>
          <p className="mt-3 text-base sm:text-lg text-black font-medium max-w-3xl leading-relaxed">
            Delivering rigorous technical office packages, on-site quality assurance, PLC automation schematics, and numerical power system studies tailored for industrial plants, infrastructure, and commercial facilities.
          </p>
        </div>

        {/* 8 Services Grid (Deep Consulting Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {engineerProfile.services.map((service) => (
            <Card
              key={service.code}
              className="group bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between shadow-sm"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="blue" className=" text-xs font-bold">
                    {service.code}
                  </Badge>
                  <span className="text-[11px]  text-black uppercase font-bold">
                    {service.subtitle}
                  </span>
                </div>

                <CardTitle className="text-xl sm:text-2xl text-black font-bold group-hover:text-[#1070B1] transition-colors">
                  {service.title}
                </CardTitle>

                <CardDescription className="text-xs sm:text-sm text-black font-medium pt-2 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4 pt-0 text-black">
                <div className="p-4 rounded-xl bg-white border border-slate-300 space-y-2">
                  <div className="text-[10px]  text-black font-bold uppercase tracking-wider mb-1">
                    SCOPE OF WORK & DETAILED INCLUSIONS:
                  </div>
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start text-xs text-black font-medium">
                      <CheckSquare className="w-3.5 h-3.5 text-black mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <div className="text-[10px]  uppercase tracking-wider text-black font-bold">
                    PRIMARY DELIVERABLE PACKAGE
                  </div>
                  <div className="text-xs font-bold text-black mt-0.5">
                    {service.deliverable}
                  </div>
                </div>

                <Button asChild size="sm" variant="default" className="bg-[#1070B1] hover:bg-[#0D5B91] text-white font-bold whitespace-nowrap">
                  <Link to="/contact">
                    <span>Request Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Commercial Engagement Framework */}
        <div className="mb-16 border-t border-slate-200 pt-12">
          <div className="max-w-2xl mb-8">
            <Badge variant="blue" className="mb-2">
              ENGAGEMENT STRUCTURE
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-black tracking-tight">
              Flexible Engineering Delivery Models
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="group p-6 bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="p-2.5 rounded-lg bg-[#E8F3FA] text-[#1070B1] w-fit mb-3 group-hover:bg-[#1070B1] group-hover:text-white transition-colors">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display font-bold text-black mb-1">
                Turnkey Design Packages
              </h3>
              <p className="text-xs text-black font-medium leading-relaxed">
                Complete engineering from preliminary Single-Line Diagrams (SLD) and load sizing to Issued for Construction (IFC) shop drawings, BOQ, and MAS submittals.
              </p>
            </Card>

            <Card className="group p-6 bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="p-2.5 rounded-lg bg-[#E8F3FA] text-[#1070B1] w-fit mb-3 group-hover:bg-[#1070B1] group-hover:text-white transition-colors">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display font-bold text-black mb-1">
                Specialized Power Studies
              </h3>
              <p className="text-xs text-black font-medium leading-relaxed">
                Dedicated ETAP or DIgSILENT simulation studies for short-circuit currents (IEC 60909), arc flash hazards (IEEE 1584), motor acceleration, and relay grading curves.
              </p>
            </Card>

            <Card className="group p-6 bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="p-2.5 rounded-lg bg-[#E8F3FA] text-[#1070B1] w-fit mb-3 group-hover:bg-[#1070B1] group-hover:text-white transition-colors">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display font-bold text-black mb-1">
                Site Supervision & Testing
              </h3>
              <p className="text-xs text-black font-medium leading-relaxed">
                On-site engineering representation for equipment erection quality assurance, FAT/SAT witness, relay injection calibration, and energization signoffs.
              </p>
            </Card>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 border-t-4 border-t-[#1070B1] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-xs  text-black font-bold uppercase">
              CONSULTATION SCHEDULING
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-black">
              Need a Customized Engineering Scope or Tender Review?
            </h3>
            <p className="text-xs text-black font-medium">
              Submit your project drawings, single-line drafts, or technical inquiries for immediate review.
            </p>
          </div>
          <Button asChild size="lg" variant="default" className="bg-[#1070B1] hover:bg-[#0D5B91] text-white font-bold whitespace-nowrap shadow-sm">
            <Link to="/contact">
              Initiate Project Discussion
            </Link>
          </Button>
        </div>

      </div>
    </div>
  );
}
