import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  MessageSquare,
  Send,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { engineerProfile } from '../data/engineerData';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export default function Contact() {
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
    <section id="contact" className="py-20 lg:py-28 bg-white text-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <Badge variant="outline" className="mb-2 border-black text-black">
            DIRECT CHANNELS & CONSULTATION
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-black tracking-tight leading-tight">
            Initiate an Engineering Consultation
          </h2>
          <p className="mt-3 text-black text-sm sm:text-base leading-relaxed font-medium">
            Whether you require turnkey electrical design packages, ETAP short-circuit simulations, PLC automation schematics, or on-site supervision, reach out directly.
          </p>
        </div>

        {/* Contact Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 text-black">

          {/* Left Column: Direct Contact Info & WhatsApp CTA */}
          <div className="lg:col-span-5 space-y-4">

            {/* Quick Status Box */}
            <div className="p-4 rounded-xl bg-slate-50 border-2 border-slate-300">
              <div className="flex items-center space-x-2 text-xs  text-black font-bold uppercase mb-1">
                <span className="w-2 h-2 rounded-full bg-black"></span>
                <span>PRACTICE STATUS: ACTIVE</span>
              </div>
              <p className="text-xs text-black font-medium leading-relaxed">
                Available for electrical design, industrial automation engineering, and site execution projects across Cairo, Egypt, and the MENA region.
              </p>
            </div>

            {/* Direct Details Cards */}
            <div className="space-y-2.5">

              {/* Phone */}
              <a
                href={`tel:${engineerProfile.phone}`}
                className="group p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-md transition-all duration-300 flex items-start space-x-3.5"
              >
                <div className="p-2.5 rounded-lg bg-black text-white group-hover:bg-[#1070B1] transition-colors">
                  <Phone className="w-4 h-4 text-white" />
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
                <div className="p-2.5 rounded-lg bg-black text-white group-hover:bg-[#1070B1] transition-colors">
                  <Mail className="w-4 h-4 text-white" />
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
                <div className="p-2.5 rounded-lg bg-black text-white group-hover:bg-[#1070B1] transition-colors">
                  <Linkedin className="w-4 h-4 text-white" />
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
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-300 flex items-start space-x-3.5">
                <div className="p-2.5 rounded-lg bg-black text-white">
                  <MapPin className="w-4 h-4 text-white" />
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

            {/* Direct WhatsApp Call-to-Action using Shadcn Button */}
            <div className="p-5 rounded-xl bg-slate-100 border-2 border-black text-black">
              <div className="flex items-center space-x-2 text-xs  font-bold uppercase tracking-wider text-black mb-1">
                <MessageSquare className="w-4 h-4 text-black" />
                <span>INSTANT DIRECT INQUIRY</span>
              </div>
              <p className="text-xs text-black font-medium leading-relaxed mb-3">
                Need urgent tender review or technical coordination? Message directly on WhatsApp: <span className="font-bold underline">+20 15 53077712</span>.
              </p>
              <Button asChild size="lg" variant="dark" className="w-full bg-black hover:bg-neutral-800 text-white font-bold shadow-sm">
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
            <Card className="border-2 border-slate-300 shadow-sm p-6 sm:p-8 bg-slate-50 text-black">

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="pb-3 border-b border-slate-300 flex items-center justify-between text-xs ">
                    <span className="text-black font-bold uppercase tracking-wider">
                      PROJECT INQUIRY FORM
                    </span>
                    <span className="text-black font-bold">* All fields required</span>
                  </div>

                  {/* Name & Work Email */}
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

                  {/* Company & Phone */}
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

                  {/* Project Type & Voltage Level */}
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

                  {/* Message */}
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

                  {/* Submit Button using Shadcn Button */}
                  <div className="pt-2">
                    <Button type="submit" size="lg" variant="dark" className="w-full bg-black hover:bg-neutral-800 text-white font-bold">
                      <Send className="w-4 h-4 mr-2" />
                      <span>Transmit Engineering Inquiry</span>
                    </Button>
                  </div>

                  <div className="text-[11px] text-black/70 text-center  font-bold pt-1">
                    🔒 All technical briefs and project documentation are treated under strict commercial confidentiality.
                  </div>
                </form>
              ) : (
                /* Submission Confirmation State */
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
    </section>
  );
}
