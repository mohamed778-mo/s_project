import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { Badge } from './ui/badge';

export default function StandardsBanner() {
  const codes = [
    { label: "IEC 60364", desc: "Low Voltage Electrical Installations" },
    { label: "IEC 60909", desc: "Short-Circuit Current Calculation" },
    { label: "IEC 61439", desc: "Low-Voltage Switchgear Assemblies" },
    { label: "IEC 61131", desc: "Programmable Controllers (PLC)" },
    { label: "IEEE 1584", desc: "Arc-Flash Hazard Calculations" },
    { label: "IEEE 80", desc: "Substation Grounding Grid Safety" },
    { label: "NFPA 70 / NEC", desc: "National Electrical Code" },
  ];

  return (
    <div className="bg-white border-y border-slate-300 py-6 relative text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">

          <div className="flex items-center space-x-3 text-black flex-shrink-0">
            <div className="p-2 rounded-lg bg-black text-white">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-[11px]  uppercase tracking-wider text-black font-bold">
                INTERNATIONAL CODES & COMPLIANCE
              </div>
              <div className="text-sm font-bold text-black font-display">
                Governed by Globally Recognized Standards
              </div>
            </div>
          </div>

          {/* Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 w-full">
            {codes.map((code, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-sm px-3 py-2 rounded-lg text-center transition-all duration-300 group"
              >
                <div className="text-xs  font-bold text-black group-hover:text-[#1070B1] transition-colors">
                  {code.label}
                </div>
                <div className="text-[10px] text-black/80 font-medium truncate mt-0.5" title={code.desc}>
                  {code.desc}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
