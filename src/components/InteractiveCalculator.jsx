import React, { useState } from 'react';
import {
  Calculator,
  Zap,
  Sliders
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export default function InteractiveCalculator() {
  const [activeTool, setActiveTool] = useState('cable');

  // Tool 1: Cable Sizing & Voltage Drop State
  const [powerKw, setPowerKw] = useState(75);
  const [voltage, setVoltage] = useState(400); // 400V 3-phase
  const [powerFactor, setPowerFactor] = useState(0.85);
  const [lengthMeters, setLengthMeters] = useState(120);
  const [conductor, setConductor] = useState('copper'); // 'copper' or 'aluminum'
  const [maxVdPercent, setMaxVdPercent] = useState(4.0); // IEC 60364 recommendation: 4%

  // Tool 2: Transformer Sizing State
  const [trafoKva, setTrafoKva] = useState(1600); // 1600 kVA
  const [trafoSecondaryV, setTrafoSecondaryV] = useState(400); // 400V
  const [impedanceUk, setImpedanceUk] = useState(6.0); // 6%

  // Standard IEC Cable Cross Sections (mm2)
  const standardSizes = [2.5, 4, 6, 10, 16, 25, 35, 50, 70, 95, 120, 150, 185, 240, 300, 400, 500];

  // Cable Calculations:
  const currentA = (powerKw * 1000) / (Math.sqrt(3) * voltage * powerFactor);
  const resistivity = conductor === 'copper' ? 0.0175 : 0.028; // Ohm*mm2/m at 20C
  const allowedVdVolts = (voltage * maxVdPercent) / 100;
  const theoreticalSize = (Math.sqrt(3) * currentA * lengthMeters * resistivity * powerFactor) / allowedVdVolts;
  const selectedSize = standardSizes.find(s => s >= theoreticalSize) || standardSizes[standardSizes.length - 1];
  const actualVdVolts = (Math.sqrt(3) * currentA * lengthMeters * resistivity * powerFactor) / selectedSize;
  const actualVdPercent = (actualVdVolts / voltage) * 100;
  const isVdCompliant = actualVdPercent <= maxVdPercent;

  // Transformer Calculations:
  const trafoRatedCurrentA = (trafoKva * 1000) / (Math.sqrt(3) * trafoSecondaryV);
  const faultCurrentKa = (trafoRatedCurrentA / (impedanceUk / 100)) / 1000;
  const recommendedIcuKa = faultCurrentKa <= 36 ? 50 : faultCurrentKa <= 50 ? 65 : faultCurrentKa <= 75 ? 85 : 100;

  return (
    <section id="calculator" className="py-20 lg:py-28 bg-white text-black relative border-b border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <Badge variant="outline" className="mb-2 border-black text-black">
              ENGINEERING UTILITY
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold tracking-tight text-black">
              Preliminary Electrical Sizing Tools
            </h2>
            <p className="mt-3 text-black text-sm sm:text-base leading-relaxed font-medium">
              Explore interactive preliminary sizing calculators governed by IEC 60364-5-52 and IEC 60909 principles. Used for initial feasibility and technical estimates.
            </p>
          </div>

          {/* Calculator Tool Switcher using Shadcn Button */}
          <div className="flex p-1 bg-slate-100 rounded-lg border border-slate-300 self-start lg:self-auto space-x-1">
            <Button
              size="sm"
              variant={activeTool === 'cable' ? 'dark' : 'ghost'}
              onClick={() => setActiveTool('cable')}
              className={`text-xs  font-bold rounded ${activeTool === 'cable'
                  ? 'bg-black text-white'
                  : 'text-black hover:bg-slate-200'
                }`}
            >
              Cable Sizing & Voltage Drop
            </Button>
            <Button
              size="sm"
              variant={activeTool === 'trafo' ? 'dark' : 'ghost'}
              onClick={() => setActiveTool('trafo')}
              className={`text-xs  font-bold rounded ${activeTool === 'trafo'
                  ? 'bg-black text-white'
                  : 'text-black hover:bg-slate-200'
                }`}
            >
              Transformer Fault Current
            </Button>
          </div>
        </div>

        {/* TOOL 1: CABLE SIZING CALCULATOR */}
        {activeTool === 'cable' && (
          <Card className="border-2 border-slate-300 shadow-sm p-6 sm:p-8 bg-slate-50 text-black">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

              {/* Inputs Column */}
              <div className="lg:col-span-7 space-y-5 text-black">
                <div className="flex items-center justify-between pb-3 border-b border-slate-300 text-xs  text-black">
                  <span className="flex items-center text-black font-bold">
                    <Sliders className="w-3.5 h-3.5 mr-1.5" />
                    SYSTEM INPUT PARAMETERS
                  </span>
                  <span className="font-bold">IEC 60364-5-52 BASIS</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Power Input */}
                  <div>
                    <label className="block text-xs  text-black font-bold mb-1">
                      Active Load Power: <span className="text-black underline font-bold">{powerKw} kW</span>
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
                    <div className="flex justify-between text-[10px]  text-black font-bold mt-1">
                      <span>5 kW</span>
                      <span>500 kW</span>
                    </div>
                  </div>

                  {/* Length Input */}
                  <div>
                    <label className="block text-xs  text-black font-bold mb-1">
                      Run Length: <span className="text-black underline font-bold">{lengthMeters} meters</span>
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
                    <div className="flex justify-between text-[10px]  text-black font-bold mt-1">
                      <span>10 m</span>
                      <span>500 m</span>
                    </div>
                  </div>

                  {/* Power Factor */}
                  <div>
                    <label className="block text-xs  text-black font-bold mb-1">
                      Operating Power Factor: <span className="text-black underline font-bold">{powerFactor}</span>
                    </label>
                    <select
                      value={powerFactor}
                      onChange={(e) => setPowerFactor(Number(e.target.value))}
                      className="w-full bg-white border-2 border-slate-300 rounded-md px-3 py-2 text-xs  text-black font-bold focus:outline-none focus:border-black"
                    >
                      <option value="0.80">0.80 (Inductive / Motors)</option>
                      <option value="0.85">0.85 (Standard Industrial)</option>
                      <option value="0.90">0.90 (Commercial)</option>
                      <option value="0.95">0.95 (P.F. Corrected)</option>
                    </select>
                  </div>

                  {/* Conductor Material using Shadcn Button */}
                  <div>
                    <label className="block text-xs  text-black font-bold mb-1">
                      Conductor Material:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        type="button"
                        size="sm"
                        variant={conductor === 'copper' ? 'dark' : 'outline'}
                        onClick={() => setConductor('copper')}
                        className={`text-xs  font-bold ${conductor === 'copper'
                            ? 'bg-black text-white'
                            : 'bg-white border-slate-300 text-black hover:border-[#1070B1] hover:text-[#1070B1]'
                          }`}
                      >
                        Copper (Cu)
                      </Button>
                      <Button
                        type="button"
                        size="sm"
                        variant={conductor === 'aluminum' ? 'dark' : 'outline'}
                        onClick={() => setConductor('aluminum')}
                        className={`text-xs  font-bold ${conductor === 'aluminum'
                            ? 'bg-black text-white'
                            : 'bg-white border-slate-300 text-black hover:border-[#1070B1] hover:text-[#1070B1]'
                          }`}
                      >
                        Aluminum (Al)
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-white border border-slate-300 text-[11px]  text-black font-medium">
                  Formula: ΔV = [√3 × I × L × ρ × cos(φ)] / S | Target Limit: ≤ {maxVdPercent}% per IEC 60364
                </div>
              </div>

              {/* Calculated Outputs Card */}
              <div className="lg:col-span-5 bg-white border-2 border-slate-300 rounded-xl p-6 space-y-4 shadow-sm text-black">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <span className="text-xs  uppercase text-black font-bold">
                    CALCULATED RESULTS
                  </span>
                  <Badge variant={isVdCompliant ? 'default' : 'destructive'} className="font-bold">
                    {isVdCompliant ? 'COMPLIANT' : 'EXCEEDS LIMIT'}
                  </Badge>
                </div>

                {/* Primary Metric: Recommended Size */}
                <div className="p-4 rounded-xl bg-slate-50 border-2 border-slate-200">
                  <div className="text-[10px]  text-black uppercase tracking-widest font-bold">
                    RECOMMENDED STANDARD CROSS SECTION
                  </div>
                  <div className="text-3xl font-display font-bold text-black mt-1">
                    {selectedSize} <span className="text-black text-lg ">mm²</span>
                  </div>
                  <div className="text-[11px]  text-black font-medium mt-1">
                    3-Phase 4-Core ({conductor === 'copper' ? 'Cu' : 'Al'} / XLPE / PVC / SWA)
                  </div>
                </div>

                {/* Secondary Specs Grid */}
                <div className="grid grid-cols-2 gap-3 text-xs ">
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="text-black text-[10px] font-bold">FULL LOAD CURRENT (Ib)</div>
                    <div className="text-base font-bold text-black mt-0.5">{currentA.toFixed(1)} A</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="text-black text-[10px] font-bold">VOLTAGE DROP (ΔV)</div>
                    <div className="text-base font-bold text-black mt-0.5">
                      {actualVdPercent.toFixed(2)}% ({actualVdVolts.toFixed(1)} V)
                    </div>
                  </div>
                </div>

                <div className="text-[11px] text-black leading-relaxed font-sans font-medium">
                  * Note: Comprehensive engineering design also requires verification of ambient temperature derating, grouping factors, and short-circuit withstand.
                </div>

                <Button asChild variant="dark" className="w-full bg-black hover:bg-neutral-800 text-white font-bold">
                  <a href="#contact">
                    Request Formal Cable Schedule
                  </a>
                </Button>
              </div>

            </div>
          </Card>
        )}

        {/* TOOL 2: TRANSFORMER FAULT LEVEL CALCULATOR */}
        {activeTool === 'trafo' && (
          <Card className="border-2 border-slate-300 shadow-sm p-6 sm:p-8 bg-slate-50 text-black">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

              {/* Inputs Column */}
              <div className="lg:col-span-7 space-y-5 text-black">
                <div className="flex items-center justify-between pb-3 border-b border-slate-300 text-xs  text-black">
                  <span className="flex items-center text-black font-bold">
                    <Zap className="w-3.5 h-3.5 mr-1.5" />
                    TRANSFORMER NAMEPLATE PARAMETERS
                  </span>
                  <span className="font-bold">IEC 60076 / IEC 60909</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Transformer Rating */}
                  <div>
                    <label className="block text-xs  text-black font-bold mb-1">
                      Rated Power (S):
                    </label>
                    <select
                      value={trafoKva}
                      onChange={(e) => setTrafoKva(Number(e.target.value))}
                      className="w-full bg-white border-2 border-slate-300 rounded-md px-3 py-2 text-xs  text-black font-bold focus:outline-none focus:border-black"
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

                  {/* Impedance Uk% */}
                  <div>
                    <label className="block text-xs  text-black font-bold mb-1">
                      Impedance Voltage (Uk%):
                    </label>
                    <select
                      value={impedanceUk}
                      onChange={(e) => setImpedanceUk(Number(e.target.value))}
                      className="w-full bg-white border-2 border-slate-300 rounded-md px-3 py-2 text-xs  text-black font-bold focus:outline-none focus:border-black"
                    >
                      <option value="4.0">4.0% (Typical for &lt;630kVA)</option>
                      <option value="5.0">5.0% (Medium rating)</option>
                      <option value="6.0">6.0% (IEC Standard for 1MVA - 2.5MVA)</option>
                      <option value="7.0">7.0% (High impedance)</option>
                    </select>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-white border border-slate-300 text-[11px]  text-black font-medium">
                  Formula: In = S / (√3 × V2) | Isc = In / (Uk / 100) | Secondary: 400V 3-Phase
                </div>
              </div>

              {/* Calculated Outputs Card */}
              <div className="lg:col-span-5 bg-white border-2 border-slate-300 rounded-xl p-6 space-y-4 shadow-sm text-black">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <span className="text-xs  uppercase text-black font-bold">
                    SUBSTATION FAULT LEVEL
                  </span>
                  <Badge variant="outline" className="border-black text-black font-bold">
                    IEC 60909
                  </Badge>
                </div>

                {/* Symmetrical Fault Current */}
                <div className="p-4 rounded-xl bg-slate-50 border-2 border-slate-200">
                  <div className="text-[10px]  text-black uppercase tracking-widest font-bold">
                    PROSPECTIVE SHORT CIRCUIT CURRENT (Isc)
                  </div>
                  <div className="text-3xl font-display font-bold text-black mt-1">
                    {faultCurrentKa.toFixed(1)} <span className="text-black text-lg ">kA</span>
                  </div>
                  <div className="text-[11px]  text-black font-medium mt-1">
                    Symmetrical RMS at 400V secondary terminals
                  </div>
                </div>

                {/* Secondary Metrics */}
                <div className="grid grid-cols-2 gap-3 text-xs ">
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="text-black text-[10px] font-bold">RATED CURRENT (In)</div>
                    <div className="text-base font-bold text-black mt-0.5">{trafoRatedCurrentA.toFixed(0)} A</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="text-black text-[10px] font-bold">MIN. ACB RATING (Icu)</div>
                    <div className="text-base font-bold text-black mt-0.5">≥ {recommendedIcuKa} kA</div>
                  </div>
                </div>

                <Button asChild variant="dark" className="w-full bg-black hover:bg-neutral-800 text-white font-bold">
                  <a href="#contact">
                    Commission Full ETAP Short-Circuit Study
                  </a>
                </Button>
              </div>

            </div>
          </Card>
        )}

      </div>
    </section>
  );
}
