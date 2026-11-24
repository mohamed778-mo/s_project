import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  MessageSquare,
  Send,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Clock
} from 'lucide-react';
import { engineerProfile } from '../data/engineerData';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact & Consultation | Ahmed Salama - Electrical Design & Automation";
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: 'Substation & Power Distribution Design',
    voltageClass: 'Medium & Low Voltage (Both)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ref = `ENG-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(ref);
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      projectType: 'Substation & Power Distribution Design',
      voltageClass: 'Medium & Low Voltage (Both)',
      message: ''
    });
  };

  const whatsappUrl = `https://wa.me/${engineerProfile.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    "Hello Eng. Ahmed Salama, I would like to discuss an electrical design & automation engineering project / consultation."
  )}`;

  return (
    <div className="bg-white text-black min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb & Header */}
        <div className="mb-12 border-b border-slate-300 pb-8">
          <div className="flex items-center space-x-2 text-xs  text-black font-bold uppercase mb-2">
            <Link to="/" className="hover:text-[#1070B1]">Home</Link>
            <span>/</span>
            <span className="text-[#1070B1]">Contact & Consultation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-black tracking-tight">
            Contact & Consultation
          </h1>
          <p className="mt-3 text-base sm:text-lg text-black font-medium max-w-3xl leading-relaxed">
            Direct coordination for electrical power distribution, medium voltage substation engineering, and industrial automation projects across Egypt and the MENA region.
          </p>
        </div>

        {/* Contact Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

          {/* Left Column: Direct Channels & WhatsApp */}
          <div className="lg:col-span-5 space-y-4">

            <div className="p-4 rounded-xl bg-slate-50 border-2 border-slate-300">
              <div className="flex items-center space-x-2 text-xs  text-black font-bold uppercase mb-1">
                <span className="w-2 h-2 rounded-full bg-black"></span>
                <span>PRACTICE STATUS: ACTIVE</span>
              </div>
              <p className="text-xs text-black font-medium leading-relaxed">
                Available for electrical design, industrial automation engineering, and site execution projects across Cairo, Egypt, and the MENA region.
              </p>
            </div>

            <div className="space-y-2.5">
              {/* Phone */}
              <a
                href={`tel:${engineerProfile.phone}`}
                className="group p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-md transition-all duration-300 flex items-start space-x-3.5"
              >
                <div className="p-2.5 rounded-lg bg-[#E8F3FA] text-[#1070B1] group-hover:bg-[#1070B1] group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px]  text-black font-bold uppercase tracking-wider">
                    DIRECT TELEPHONE & MOBILE
                  </div>
                  <div className="text-sm font-bold text-black group-hover:text-[#1070B1] transition-colors">
                    {engineerProfile.phone}
                  </div>
                  <div className="text-[11px] text-black/70 font-semibold mt-0.5">
                    {engineerProfile.officeHours}
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${engineerProfile.email}`}
                className="group p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-md transition-all duration-300 flex items-start space-x-3.5"
              >
                <div className="p-2.5 rounded-lg bg-[#E8F3FA] text-[#1070B1] group-hover:bg-[#1070B1] group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px]  text-black font-bold uppercase tracking-wider">
                    DIRECT ENGINEERING EMAIL
                  </div>
                  <div className="text-sm font-bold text-black group-hover:text-[#1070B1] transition-colors">
                    {engineerProfile.email}
                  </div>
                  <div className="text-[11px] text-black/70 font-semibold mt-0.5">
                    Average response: Within 24 business hours
                  </div>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={engineerProfile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-md transition-all duration-300 flex items-start space-x-3.5"
              >
                <div className="p-2.5 rounded-lg bg-[#E8F3FA] text-[#1070B1] group-hover:bg-[#1070B1] group-hover:text-white transition-colors">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="text-[10px]  text-black font-bold uppercase tracking-wider">
                    PROFESSIONAL NETWORK
                  </div>
                  <div className="text-sm font-bold text-black group-hover:text-[#1070B1] transition-colors flex items-center justify-between">
                    <span>Ahmed Salama's LinkedIn Profile</span>
                    <ExternalLink className="w-3.5 h-3.5 text-black" />
                  </div>
                  <div className="text-[11px] text-black/70 font-semibold mt-0.5">
                    Connect for technical articles & portfolio updates
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-3.5">
                <div className="p-2.5 rounded-lg bg-[#E8F3FA] text-[#1070B1]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px]  text-black font-bold uppercase tracking-wider">
                    BASE OF PRACTICE
                  </div>
                  <div className="text-sm font-bold text-black">
                    {engineerProfile.location}
                  </div>
                  <div className="text-[11px] text-black/70 font-semibold mt-0.5">
                    Available for site visits across industrial zones
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Call-to-Action using Shadcn Button with RGB(16, 112, 177) */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 border-t-4 border-t-[#1070B1] text-black shadow-sm">
              <div className="flex items-center space-x-2 text-xs  font-bold uppercase tracking-wider text-[#1070B1] mb-1">
                <MessageSquare className="w-4 h-4 text-[#1070B1]" />
                <span>INSTANT DIRECT INQUIRY</span>
              </div>
              <p className="text-xs text-black font-medium leading-relaxed mb-3">
                Need urgent tender review or technical coordination? Message directly on WhatsApp: <span className="font-bold underline">+20 15 53077712</span>.
              </p>
              <Button asChild size="lg" variant="default" className="w-full bg-[#1070B1] hover:bg-[#0D5B91] text-white font-bold shadow-sm">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat via WhatsApp (+20 15 53077712)</span>
                </a>
              </Button>
            </div>

          </div>

          {/* Right Column: Interactive Consultation Request Form */}
          <div className="lg:col-span-7">
            <Card className="border border-slate-200 shadow-sm p-6 sm:p-8 bg-slate-50 text-black hover:translate-y-0 hover:shadow-md">

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="pb-3 border-b border-slate-300 flex items-center justify-between text-xs ">
                    <span className="text-black font-bold uppercase tracking-wider">
                      PROJECT INQUIRY FORM
                    </span>
                    <span className="text-black font-bold">* All fields required</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs  text-black font-bold mb-1">
                        Full Name & Title *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Eng. Tarek Mahmoud"
                        className="w-full px-3.5 py-2.5 rounded-md bg-white border-2 border-slate-300 text-xs text-black font-medium focus:outline-none focus:border-black"
                      />
                    </div>

                    <div>
                      <label className="block text-xs  text-black font-bold mb-1">
                        Work Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. tarek@industrial-eg.com"
                        className="w-full px-3.5 py-2.5 rounded-md bg-white border-2 border-slate-300 text-xs text-black font-medium focus:outline-none focus:border-black"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs  text-black font-bold mb-1">
                        Company / Organization *
                      </label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Delta Engineering Works"
                        className="w-full px-3.5 py-2.5 rounded-md bg-white border-2 border-slate-300 text-xs text-black font-medium focus:outline-none focus:border-black"
                      />
                    </div>

                    <div>
                      <label className="block text-xs  text-black font-bold mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +20 10 000 0000"
                        className="w-full px-3.5 py-2.5 rounded-md bg-white border-2 border-slate-300 text-xs text-black font-medium focus:outline-none focus:border-black"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs  text-black font-bold mb-1">
                        Required Engineering Discipline *
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-md bg-white border-2 border-slate-300 text-xs text-black font-bold focus:outline-none focus:border-black"
                      >
                        <option value="Substation & Power Distribution Design">Substation & Power Distribution Design</option>
                        <option value="Industrial Automation & PLC Control">Industrial Automation & PLC Control</option>
                        <option value="Power System Analysis (ETAP / DIgSILENT)">Power System Analysis (ETAP / DIgSILENT)</option>
                        <option value="Electrical Site Supervision">Electrical Site Supervision</option>
                        <option value="Technical Office & BOQ Estimation">Technical Office & BOQ Estimation</option>
                        <option value="Third-Party Design Audit">Third-Party Design Audit / Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs  text-black font-bold mb-1">
                        Voltage Level Involved *
                      </label>
                      <select
                        name="voltageClass"
                        value={formData.voltageClass}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-md bg-white border-2 border-slate-300 text-xs text-black font-bold focus:outline-none focus:border-black"
                      >
                        <option value="Medium Voltage (11kV / 22kV / 33kV)">Medium Voltage (11kV / 22kV / 33kV)</option>
                        <option value="Low Voltage (400V / 230V)">Low Voltage (400V / 230V)</option>
                        <option value="Medium & Low Voltage (Both)">Medium & Low Voltage (Both)</option>
                        <option value="Industrial Control (24V DC / 400V AC)">Industrial Control (24V DC / 400V AC)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs  text-black font-bold mb-1">
                      Project Description & Technical Scope Details *
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please outline the project location, estimated capacity (kVA/MVA), required deliverables (e.g. SLD, ETAP study, PLC schematics, shop drawings), and target timeline..."
                      className="w-full px-3.5 py-2.5 rounded-md bg-white border-2 border-slate-300 text-xs text-black font-medium focus:outline-none focus:border-black"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <Button type="submit" size="lg" variant="default" className="w-full bg-[#1070B1] hover:bg-[#0D5B91] text-white font-bold">
                      <Send className="w-4 h-4 mr-2" />
                      <span>Transmit Engineering Inquiry</span>
                    </Button>
                  </div>

                  <div className="text-[11px] text-black/70 text-center  font-bold pt-1">
                    🔒 All technical briefs and project documentation are treated under strict commercial confidentiality.
                  </div>
                </form>
              ) : (
                <div className="py-10 text-center space-y-4 animate-fadeIn text-black">
                  <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs  text-black uppercase tracking-widest font-bold">
                      INQUIRY LOGGED SUCCESSFULLY
                    </span>
                    <h3 className="text-2xl font-display font-bold text-black">
                      Engineering Request Received
                    </h3>
                  </div>

                  <div className="max-w-md mx-auto p-4 rounded-xl bg-white border-2 border-black text-xs text-black space-y-2 text-left ">
                    <div className="flex justify-between border-b border-slate-200 pb-1.5">
                      <span className="text-black font-semibold">Tracking Reference:</span>
                      <span className="font-bold text-black">{ticketId}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-1.5">
                      <span className="text-black font-semibold">Originator:</span>
                      <span className="font-bold text-black">{formData.name}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-1.5">
                      <span className="text-black font-semibold">Discipline:</span>
                      <span className="font-bold text-black">{formData.projectType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-black font-semibold">Status:</span>
                      <span className="text-black font-bold">Queued for Technical Review</span>
                    </div>
                  </div>

                  <p className="text-xs text-black font-medium max-w-md mx-auto">
                    Thank you. Eng. Ahmed Salama will review your scope and contact you at <span className="font-bold text-black underline">{formData.email}</span> within 24 business hours.
                  </p>

                  <div className="pt-2">
                    <Button variant="outline" size="sm" onClick={resetForm} className="border-black text-black font-bold">
                      Submit Another Inquiry
                    </Button>
                  </div>
                </div>
              )}

            </Card>
          </div>

        </div>

      </div>
    </div>
  );
}
