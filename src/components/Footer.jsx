import React from 'react';
import { Link } from 'react-router-dom';
import {
  Zap,
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { engineerProfile } from '../data/engineerData';
import { Button } from './ui/button';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About the Engineer', path: '/about' },
    { name: 'Engineering Services', path: '/services' },
    { name: 'Areas of Expertise', path: '/expertise' },
    { name: 'Projects Portfolio', path: '/projects' },
    { name: 'Technical Skills & Software', path: '/technical-skills' },
    { name: 'Direct Contact & Consultation', path: '/contact' },
  ];

  return (
    <footer className="bg-slate-50 text-black border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-300">

          {/* Col 1: Identity & Engineering Philosophy (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="flex items-center space-x-3 group inline-block">
              <div className="w-10 h-10 rounded-lg bg-[#1070B1] flex items-center justify-center text-white shadow-sm">
                <Zap className="w-5 h-5 fill-white text-white" />
              </div>
              <div>
                <span className="font-display font-bold text-black text-xl tracking-tight block group-hover:text-[#1070B1] transition-colors">
                  {engineerProfile.name}
                </span>
                <span className="text-xs  text-black font-bold tracking-wider uppercase block">
                  {engineerProfile.title}
                </span>
              </div>
            </Link>

            <p className="text-xs text-black font-medium leading-relaxed max-w-sm">
              Dedicated to designing robust, fault-tolerant medium & low-voltage electrical infrastructure and industrial automation systems. Integrating numerical power simulation with rigorous compliance to IEC and IEEE standards.
            </p>

            {/* Standards Compliance Badges */}
            <div className="flex flex-wrap gap-1.5 pt-1 text-[11px] ">
              <span className="px-2.5 py-0.5 rounded bg-white text-black font-bold border border-slate-300">
                IEC 60364
              </span>
              <span className="px-2.5 py-0.5 rounded bg-white text-black font-bold border border-slate-300">
                IEC 60909
              </span>
              <span className="px-2.5 py-0.5 rounded bg-white text-black font-bold border border-slate-300">
                IEC 61131
              </span>
              <span className="px-2.5 py-0.5 rounded bg-white text-black font-bold border border-slate-300">
                IEEE 1584
              </span>
              <span className="px-2.5 py-0.5 rounded bg-white text-black font-bold border border-slate-300">
                NFPA 70E
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Sitemap with React Router Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs  uppercase tracking-widest text-[#1070B1] font-bold">
              WEBSITE DIRECTORY
            </div>
            <ul className="space-y-1.5 text-xs text-black font-bold">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-[#1070B1] hover:underline transition-colors inline-flex items-center py-0.5"
                  >
                    <ChevronRight className="w-3 h-3 mr-1 text-[#1070B1]" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Engineering Channels (4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs  uppercase tracking-widest text-[#1070B1] font-bold">
              DIRECT COORDINATION
            </div>

            <div className="space-y-2.5 text-xs text-black font-medium">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-black mt-0.5 flex-shrink-0" />
                <span className="font-bold">{engineerProfile.location}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-black flex-shrink-0" />
                <a href={`tel:${engineerProfile.phone}`} className="hover:text-[#1070B1] transition-colors  font-bold text-black">
                  {engineerProfile.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-black flex-shrink-0" />
                <a href={`mailto:${engineerProfile.email}`} className="hover:text-[#1070B1] transition-colors  font-bold text-black">
                  {engineerProfile.email}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Linkedin className="w-4 h-4 text-black flex-shrink-0" />
                <a
                  href={engineerProfile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1070B1] transition-colors  font-bold text-black"
                >
                  Ahmed Salama - LinkedIn Profile
                </a>
              </div>
            </div>

            <div className="pt-2 text-[11px]  text-black font-bold">
              Consulting Hours: {engineerProfile.officeHours}
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-black">
          <div className="text-center md:text-left text-[11px]  leading-relaxed max-w-2xl font-medium">
            Disclaimer: All engineering calculations, studies, and designs strictly adhere to international codes (IEC, IEEE, NFPA). Final execution packages are tailored to specific statutory authority requirements and local utility interconnection regulations.
          </div>

          <div className="flex items-center space-x-4 flex-shrink-0">
            <span className="text-[11px]  font-bold">
              &copy; {new Date().getFullYear()} {engineerProfile.name}. All rights reserved.
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="border border-slate-300 text-black hover:bg-[#1070B1] hover:text-white hover:border-[#1070B1] transition-colors"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>

      </div>
    </footer>
  );
}
