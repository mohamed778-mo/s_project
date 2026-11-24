import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Cpu,
  Calculator,
  Sliders,
  Zap,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { engineerProfile } from '../data/engineerData';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

export default function TechnicalSkillsPage() {
  useEffect(() => {
    document.title = "Technical Skills & Software | Ahmed Salama - Electrical Design & Automation";
  }, []);

  const [activeTab, setActiveTab] = useState('software');

  // Calculator State
  const [activeTool, setActiveTool] = useState('cable');
  const [powerKw, setPowerKw] = useState(75);
  const [voltage, setVoltage] = useState(400);
  const [powerFactor, setPowerFactor] = useState(0.85);
  const [lengthMeters, setLengthMeters] = useState(120);
  const [conductor, setConductor] = useState('copper');
  const maxVdPercent = 4.0;

  const [trafoKva, setTrafoKva] = useState(1600);
  const trafoSecondaryV = 400;
  const [impedanceUk, setImpedanceUk] = useState(6.0);

  // Calculations
  const standardSizes = [2.5, 4, 6, 10, 16, 25, 35, 50, 70, 95, 120, 150, 185, 240, 300, 400, 500];
  const currentA = (powerKw * 1000) / (Math.sqrt(3) * voltage * powerFactor);
  const resistivity = conductor === 'copper' ? 0.0175 : 0.028;
  const allowedVdVolts = (voltage * maxVdPercent) / 100;
  const theoreticalSize = (Math.sqrt(3) * currentA * lengthMeters * resistivity * powerFactor) / allowedVdVolts;
  const selectedSize = standardSizes.find(s => s >= theoreticalSize) || standardSizes[standardSizes.length - 1];
  const actualVdVolts = (Math.sqrt(3) * currentA * lengthMeters * resistivity * powerFactor) / selectedSize;
  const actualVdPercent = (actualVdVolts / voltage) * 100;
  const isVdCompliant = actualVdPercent <= maxVdPercent;

  const trafoRatedCurrentA = (trafoKva * 1000) / (Math.sqrt(3) * trafoSecondaryV);
  const faultCurrentKa = (trafoRatedCurrentA / (impedanceUk / 100)) / 1000;
  const recommendedIcuKa = faultCurrentKa <= 36 ? 50 : faultCurrentKa <= 50 ? 65 : faultCurrentKa <= 75 ? 85 : 100;

  return (
    <div className="bg-white text-black min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb & Header */}
        <div className="mb-12 border-b border-slate-300 pb-8">
          <div className="flex items-center space-x-2 text-xs  text-black font-bold uppercase mb-2">
            <Link to="/" className="hover:text-[#1070B1]">Home</Link>
            <span>/</span>
            <span className="text-[#1070B1]">Technical Skills & Software</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-black tracking-tight">
            Technical Software & Computational Tools
          </h1>
          <p className="mt-3 text-base sm:text-lg text-black font-medium max-w-3xl leading-relaxed">
            Industrial numerical simulation suites, PLC automation platforms, and drafting CAD tools calibrated against equipment manufacturer datasheets and international audit standards.
          </p>
        </div>

        {/* Tab Switcher using Shadcn Button */}
        <div className="flex p-1.5 bg-slate-100 rounded-xl border-2 border-slate-200 mb-10 w-fit space-x-1">
          <Button
            size="sm"
            variant={activeTab === 'software' ? 'dark' : 'ghost'}
            onClick={() => setActiveTab('software')}
            className={`text-xs  font-bold rounded-lg px-4 py-1.5 ${activeTab === 'software' ? 'bg-black text-white' : 'text-black hover:bg-slate-200'
              }`}
          >
            Simulation & CAD Platforms
          </Button>
          <Button
            size="sm"
            variant={activeTab === 'standards' ? 'dark' : 'ghost'}
            onClick={() => setActiveTab('standards')}
            className={`text-xs  font-bold rounded-lg px-4 py-1.5 ${activeTab === 'standards' ? 'bg-black text-white' : 'text-black hover:bg-slate-200'
              }`}
          >
            International Standards Library
          </Button>
        </div>

        {/* Tab 1: Engineering Software Grid */}
        {activeTab === 'software' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {engineerProfile.softwareTools.map((tool) => (
              <Card
                key={tool.name}
                className="group bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between shadow-sm"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="blue" className=" text-xs font-bold">
                      {tool.category}
                    </Badge>
                    <span className="text-[11px]  text-black font-bold">
                      {tool.level}
                    </span>
                  </div>

                  <CardTitle className="text-xl text-black font-bold group-hover:text-[#1070B1] transition-colors">
                    {tool.name}
                  </CardTitle>

                  <CardDescription className="text-xs text-black font-medium pt-1 leading-relaxed">
                    {tool.useCase}
                  </CardDescription>
                </CardHeader>

                <CardFooter className="pt-3 border-t border-slate-200 flex-col items-stretch space-y-1.5">
                  <div className="flex items-center justify-between text-[11px]  font-bold text-black">
                    <span>PRACTICE PROFICIENCY</span>
                    <span>{tool.proficiency}%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden border border-slate-300">
                    <div
                      className="bg-black h-full rounded-full transition-all duration-700"
                      style={{ width: `${tool.proficiency}%` }}
                    />
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        {/* Tab 2: Governing Standards Matrix */}
        {activeTab === 'standards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            {engineerProfile.standardsList.map((std, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-md transition-all duration-300 flex items-start space-x-4"
              >
                <div className="p-2.5 rounded-lg bg-[#E8F3FA] text-[#1070B1] flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm  font-bold text-black">
                    {std.code}
                  </div>
                  <p className="text-xs text-black font-medium mt-1 leading-relaxed">
                    {std.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Interactive Electrical Sizing Calculators */}
        <div className="border-t-2 border-slate-300 pt-14 mb-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <Badge variant="outline" className="border-black text-black mb-2">
                LIVE INTERACTIVE TOOLS
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-black tracking-tight">
                Preliminary Electrical Sizing Calculators
              </h2>
            </div>

            <div className="flex p-1 bg-slate-100 rounded-lg border border-slate-300 space-x-1">
              <Button
                size="sm"
                variant={activeTool === 'cable' ? 'dark' : 'ghost'}
                onClick={() => setActiveTool('cable')}
                className={`text-xs  font-bold ${activeTool === 'cable' ? 'bg-black text-white' : 'text-black'
                  }`}
              >
                Cable Sizing & Voltage Drop
              </Button>
              <Button
                size="sm"
                variant={activeTool === 'trafo' ? 'dark' : 'ghost'}
                onClick={() => setActiveTool('trafo')}
                className={`text-xs  font-bold ${activeTool === 'trafo' ? 'bg-black text-white' : 'text-black'
                  }`}
              >
                Transformer Fault Level
              </Button>
            </div>
          </div>

          {activeTool === 'cable' && (
            <Card className="border-2 border-slate-300 p-6 sm:p-8 bg-slate-50">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex justify-between border-b border-slate-300 pb-2 text-xs  font-bold text-black">
                    <span>SYSTEM PARAMETERS</span>
                    <span>IEC 60364-5-52</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs  font-bold text-black mb-1">
                        Active Power: <span className="underline">{powerKw} kW</span>
                      </label>
                      <input
                        type="range"
                        min="5"
                        max="500"
                        step="5"
                        value={powerKw}
                        onChange={(e) => setPowerKw(Number(e.target.value))}
                        className="w-full accent-black cursor-pointer"
                      />
                    </div>
                    <div>
                      <label className="block text-xs  font-bold text-black mb-1">
                        Run Length: <span className="underline">{lengthMeters} m</span>
                      </label>
                      <input
                        type="range"
                        min="10"
                        max="500"
                        step="10"
                        value={lengthMeters}
                        onChange={(e) => setLengthMeters(Number(e.target.value))}
                        className="w-full accent-black cursor-pointer"
                      />
                    </div>
                    <div>
                      <label className="block text-xs  font-bold text-black mb-1">
                        Power Factor: <span className="underline">{powerFactor}</span>
                      </label>
                      <select
                        value={powerFactor}
                        onChange={(e) => setPowerFactor(Number(e.target.value))}
                        className="w-full bg-white border-2 border-slate-300 rounded px-2.5 py-1.5 text-xs  font-bold text-black"
                      >
                        <option value="0.80">0.80 (Inductive Motors)</option>
                        <option value="0.85">0.85 (Standard Industrial)</option>
                        <option value="0.90">0.90 (Commercial)</option>
                        <option value="0.95">0.95 (P.F. Corrected)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs  font-bold text-black mb-1">
                        Conductor Material:
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <Button
                          size="sm"
                          variant={conductor === 'copper' ? 'dark' : 'outline'}
                          onClick={() => setConductor('copper')}
                          className="text-xs  font-bold"
                        >
                          Copper (Cu)
                        </Button>
                        <Button
                          size="sm"
                          variant={conductor === 'aluminum' ? 'dark' : 'outline'}
                          onClick={() => setConductor('aluminum')}
                          className="text-xs  font-bold"
                        >
                          Aluminum (Al)
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white border-2 border-slate-300 rounded-xl p-5 space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                    <span className="text-xs  font-bold text-black">CALCULATED METRICS</span>
                    <Badge variant={isVdCompliant ? 'default' : 'destructive'} className="font-bold">
                      {isVdCompliant ? 'COMPLIANT' : 'EXCEEDS 4%'}
                    </Badge>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="text-[10px]  uppercase font-bold text-black">RECOMMENDED SIZE</div>
                    <div className="text-2xl font-display font-bold text-black mt-0.5">
                      {selectedSize} <span className="text-sm ">mm²</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs  font-bold">
                    <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                      <div className="text-[10px] text-black/70">CURRENT (Ib)</div>
                      <div className="text-base text-black">{currentA.toFixed(1)} A</div>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                      <div className="text-[10px] text-black/70">VOLTAGE DROP</div>
                      <div className="text-base text-black">{actualVdPercent.toFixed(2)}%</div>
                    </div>
                  </div>

                  <Button asChild size="sm" variant="default" className="w-full bg-[#1070B1] hover:bg-[#0D5B91] text-white font-bold">
                    <Link to="/contact">
                      Request Full Sizing Schedule
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          )}

          {activeTool === 'trafo' && (
            <Card className="border-2 border-slate-300 p-6 sm:p-8 bg-slate-50">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex justify-between border-b border-slate-300 pb-2 text-xs  font-bold text-black">
                    <span>TRANSFORMER NAMEPLATE</span>
                    <span>IEC 60076 / IEC 60909</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs  font-bold text-black mb-1">
                        Rated Power (S):
                      </label>
                      <select
                        value={trafoKva}
                        onChange={(e) => setTrafoKva(Number(e.target.value))}
                        className="w-full bg-white border-2 border-slate-300 rounded px-2.5 py-1.5 text-xs  font-bold text-black"
                      >
                        <option value="500">500 kVA (0.5 MVA)</option>
                        <option value="1000">1000 kVA (1.0 MVA)</option>
                        <option value="1250">1250 kVA (1.25 MVA)</option>
                        <option value="1600">1600 kVA (1.6 MVA)</option>
                        <option value="2000">2000 kVA (2.0 MVA)</option>
                        <option value="2500">2500 kVA (2.5 MVA)</option>
                        <option value="3150">3150 kVA (3.15 MVA)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs  font-bold text-black mb-1">
                        Impedance Voltage (Uk%):
                      </label>
                      <select
                        value={impedanceUk}
                        onChange={(e) => setImpedanceUk(Number(e.target.value))}
                        className="w-full bg-white border-2 border-slate-300 rounded px-2.5 py-1.5 text-xs  font-bold text-black"
                      >
                        <option value="4.0">4.0% (&lt;630kVA)</option>
                        <option value="5.0">5.0% (Medium)</option>
                        <option value="6.0">6.0% (Standard 1-2.5 MVA)</option>
                        <option value="7.0">7.0% (High)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white border-2 border-slate-300 rounded-xl p-5 space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                    <span className="text-xs  font-bold text-black">FAULT CALCULATION</span>
                    <Badge variant="outline" className="border-black font-bold">IEC 60909</Badge>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="text-[10px]  uppercase font-bold text-black">SHORT CIRCUIT CURRENT (Isc)</div>
                    <div className="text-2xl font-display font-bold text-black mt-0.5">
                      {faultCurrentKa.toFixed(1)} <span className="text-sm ">kA</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs  font-bold">
                    <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                      <div className="text-[10px] text-black/70">RATED CURRENT</div>
                      <div className="text-base text-black">{trafoRatedCurrentA.toFixed(0)} A</div>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                      <div className="text-[10px] text-black/70">MIN ACB (Icu)</div>
                      <div className="text-base text-black">≥ {recommendedIcuKa} kA</div>
                    </div>
                  </div>

                  <Button asChild size="sm" variant="default" className="w-full bg-[#1070B1] hover:bg-[#0D5B91] text-white font-bold">
                    <Link to="/contact">
                      Commission ETAP Study
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </div>

        {/* CTA Banner */}
        <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 border-t-4 border-t-[#1070B1] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-black">
              Need ETAP Simulation or Automation Engineering?
            </h3>
            <p className="text-xs text-black font-medium mt-1">
              Engage Eng. Ahmed Salama for power system studies, short circuit analysis, and PLC schematics.
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
