import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import { engineerProfile } from '../data/engineerData';
import { Button } from './ui/button';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[82vh] flex items-center bg-slate-50 pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="w-full space-y-6">

          {/* Main Headline in Space Grotesk 700 with #000000 - Full Width */}
          <h1 className="w-full text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-black tracking-tight leading-[1.1]">
            Engineering Reliable Power Solutions for a <span className="underline decoration-[#1070B1] decoration-4 underline-offset-8">Smarter Future.</span>
          </h1>

          {/* Supporting Description in Space Grotesk with #000000 */}
          <p className="text-base sm:text-xl text-black font-medium max-w-3xl leading-relaxed">
            Electrical Power Engineer specializing in power systems, electrical infrastructure, industrial installations, and engineering solutions designed for safety, efficiency, and reliability.
          </p>

          {/* Actions using Shadcn Button with RGB(16, 112, 177) */}
          <div className="pt-2 flex flex-wrap gap-3.5 items-center">
            <Button asChild size="lg" variant="default" className="bg-[#1070B1] hover:bg-[#0D5B91] text-white font-bold shadow-sm">
              <Link to="/expertise" className="flex items-center space-x-2">
                <span>Explore My Expertise</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="border border-slate-300 bg-white text-black hover:border-[#1070B1] hover:text-[#1070B1] hover:bg-[#E8F3FA]/40 font-bold shadow-sm">
              <Link to="/contact">
                Get in Touch
              </Link>
            </Button>

            <div className="flex items-center space-x-1.5 text-xs text-black font-semibold pl-1">
              <ShieldCheck className="w-4 h-4 text-[#1070B1]" />
              <span>Zero Compromise on Code & Safety</span>
            </div>
          </div>

          {/* Technical Highlights / Accreditations Bar */}
          <div className="pt-8 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {engineerProfile.hero.stats.map((stat, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-4 rounded-lg shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300">
                <div className="text-[10px]  text-[#1070B1] font-bold uppercase tracking-wider mb-0.5">
                  {stat.label}
                </div>
                <div className="text-base font-bold text-black tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[11px] text-black/75 font-medium mt-0.5 truncate">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Down Scroll Indicator to About Page */}
      <Link
        to="/about"
        className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-black hover:text-[#1070B1] transition-colors z-10 text-[11px]  uppercase tracking-widest font-bold"
        aria-label="Navigate to About Section"
      >
        <span className="text-[10px] mb-0.5">Explore Background</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-black" />
      </Link>
    </section>
  );
}
