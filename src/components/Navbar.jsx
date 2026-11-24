import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  Zap,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ArrowRight
} from 'lucide-react';
import { engineerProfile } from '../data/engineerData';
import { Button } from './ui/button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Expertise', path: '/expertise' },
    { name: 'Projects', path: '/projects' },
    { name: 'Technical Skills', path: '/technical-skills' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">


      {/* Main Navbar */}
      <nav className={`transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-200 ${scrolled ? 'shadow-sm py-3' : 'py-3.5'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Engineering Brand Identity */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-lg bg-[#1070B1] flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
                <Zap className="w-5 h-5 fill-white text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-black text-lg tracking-tight group-hover:text-[#1070B1] transition-colors">
                  {engineerProfile.name}
                </span>
                <span className="text-[11px]  tracking-wider uppercase text-black/70 font-semibold">
                  {engineerProfile.title}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links with real React Router NavLink */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3.5 py-2 text-xs uppercase tracking-wider font-bold transition-all rounded-md ${isActive
                      ? 'text-[#1070B1] bg-[#E8F3FA] border-b-2 border-[#1070B1]'
                      : 'text-black hover:text-[#1070B1] hover:bg-slate-100'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Right Action CTA (using Shadcn Button with RGB(16, 112, 177)) */}
            {/* <div className="flex flex-column sm:flex items-center space-x-3">
              <Button asChild size="sm" variant="" className="bg-[#1070B1] hover:bg-[#0D5B91] text-white font-bold shadow-sm">
                <Link to="/contact" className="flex items-center space-x-1.5">
                  <span>Let's Discuss Your Project</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </Button>
            </div> */}

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-black hover:bg-slate-100 border border-slate-200"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu with real React Router navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 mt-3 space-y-2 shadow-lg animate-fadeIn">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-bold rounded-md ${isActive
                      ? 'text-[#1070B1] bg-[#E8F3FA] border-l-4 border-[#1070B1]'
                      : 'text-black hover:bg-slate-100'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className=" flex justify-center items-center space-y-2">
              <Button asChild variant="default" className="w-fit h-fit bg-[#1070B1] hover:bg-[#0D5B91] text-white font-bold">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Let's Discuss Your Project
                </Link>
              </Button>
              <div className="text-center text-xs  text-black pt-1 font-bold">
                {engineerProfile.phone}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
