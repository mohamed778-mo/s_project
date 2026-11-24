import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { engineerProfile } from '../data/engineerData';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

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

export default function ExpertisePage() {
  useEffect(() => {
    document.title = "Areas of Expertise | Ahmed Salama - Electrical Design & Automation";
  }, []);

  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Distribution', 'Automation', 'Calculations', 'Systems', 'Infrastructure', 'Protection', 'Safety'];

  const filteredDisciplines = selectedCategory === 'All'
    ? engineerProfile.disciplines
    : engineerProfile.disciplines.filter(d => d.category === selectedCategory);

  return (
    <div className="bg-white text-black min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb & Header */}
        <div className="mb-12 border-b border-slate-300 pb-8">
          <div className="flex items-center space-x-2 text-xs  text-black font-bold uppercase mb-2">
            <Link to="/" className="hover:text-[#1070B1]">Home</Link>
            <span>/</span>
            <span className="text-[#1070B1]">Areas of Expertise</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-black tracking-tight">
            Engineering Disciplines & Expertise
          </h1>
          <p className="mt-3 text-base sm:text-lg text-black font-medium max-w-3xl leading-relaxed">
            10 specialized electrical power engineering and industrial automation disciplines governed by international codes (IEC, IEEE, NFPA) from preliminary load profiling to full energization.
          </p>
        </div>

        {/* Category Filter Pills using Shadcn Button */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-xl border-2 border-slate-200 mb-10 w-fit">
          {categories.map((cat) => (
            <Button
              key={cat}
              size="sm"
              variant={selectedCategory === cat ? 'dark' : 'ghost'}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs  font-bold rounded-lg px-4 py-1.5 ${selectedCategory === cat
                  ? 'bg-black text-white'
                  : 'text-black hover:bg-slate-200'
                }`}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* 10 Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredDisciplines.map((item) => {
            const IconComponent = iconMap[item.icon] || Zap;

            return (
              <Card
                key={item.id}
                className="group bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between shadow-sm"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#E8F3FA] text-[#1070B1] group-hover:bg-[#1070B1] group-hover:text-white flex items-center justify-center transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <Badge variant="outline" className=" text-[10px] text-black border-slate-300 font-bold">
                      {item.voltage}
                    </Badge>
                  </div>

                  <CardTitle className="text-lg sm:text-xl text-black font-bold group-hover:text-[#1070B1] transition-colors">
                    {item.title}
                  </CardTitle>

                  <CardDescription className="text-xs text-black font-medium pt-1.5 leading-relaxed">
                    {item.summary}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 text-black">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-[10px]  uppercase tracking-widest text-black font-bold mb-2 flex items-center justify-between">
                      <span>KEY DELIVERABLES</span>
                      <span className="text-[#1070B1] font-bold">{item.standards}</span>
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
                  <span className=" text-[11px] text-black font-bold">Audit-Proof Engineering</span>
                  <Button asChild size="sm" variant="default" className="bg-[#1070B1] hover:bg-[#0D5B91] text-white font-bold">
                    <Link to="/contact">
                      Inquire
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Standards Table */}
        <div className="border-t-2 border-slate-300 pt-12 mb-14">
          <div className="max-w-2xl mb-8">
            <Badge variant="outline" className="border-black text-black mb-2">
              CODE COMPLIANCE MATRIX
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-black tracking-tight">
              International Engineering Codes & Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {engineerProfile.standardsList.map((std, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-md transition-all duration-300 flex items-start space-x-3.5">
                <div className="p-2 rounded bg-[#E8F3FA] text-[#1070B1] flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className=" text-sm font-bold text-black">
                    {std.code}
                  </div>
                  <div className="text-xs text-black font-medium mt-0.5">
                    {std.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 border-t-4 border-t-[#1070B1] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-black">
              Require Technical Expertise for Your Power Facility?
            </h3>
            <p className="text-xs text-black font-medium mt-1">
              Discuss power distribution, protection coordination, or industrial automation requirements directly.
            </p>
          </div>
          <Button asChild size="lg" variant="default" className="bg-[#1070B1] hover:bg-[#0D5B91] text-white font-bold whitespace-nowrap shadow-sm">
            <Link to="/contact">
              Schedule Technical Discussion
            </Link>
          </Button>
        </div>

      </div>
    </div>
  );
}
