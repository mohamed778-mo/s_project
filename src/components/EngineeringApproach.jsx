import React, { useState } from 'react';
import {
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { engineerProfile } from '../data/engineerData';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export default function EngineeringApproach() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = engineerProfile.workflowSteps;

  return (
    <section id="approach" className="py-20 lg:py-28 bg-slate-50 text-black relative border-b border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <Badge variant="outline" className="mb-2 border-black text-black">
            STRUCTURED METHODOLOGY
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-black tracking-tight leading-tight">
            5-Stage Engineering Execution Process
          </h2>
          <p className="mt-3 text-black text-sm sm:text-base leading-relaxed font-medium">
            From preliminary load assessments to final on-site commissioning sign-offs, each project progresses through an audit-proof, 5-gate technical engineering lifecycle.
          </p>
        </div>

        {/* Horizontal Step Navigation using Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-8">
          {steps.map((item, idx) => (
            <button
              key={item.step}
              onClick={() => setActiveStep(idx)}
              className={`text-left p-4 rounded-xl border-2 transition-all cursor-pointer ${activeStep === idx
                  ? 'bg-black text-white border-black shadow-sm'
                  : 'bg-white text-black border-slate-200 hover:border-slate-300 hover:shadow-sm'
                }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className={` text-xs font-bold ${activeStep === idx ? 'text-slate-300' : 'text-black'
                  }`}>
                  PHASE {item.step}
                </span>
              </div>
              <div className="text-xs sm:text-sm font-display font-bold leading-tight">
                {item.title}
              </div>
            </button>
          ))}
        </div>

        {/* Active Stage Detailed Breakdown Panel (Shadcn Card) */}
        <Card className="bg-white border-2 border-slate-300 shadow-sm p-6 sm:p-10 text-black">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left: Phase Overview */}
            <div className="lg:col-span-7 space-y-4 text-black">
              <Badge variant="outline" className="text-xs border-black text-black font-bold">
                GATE {steps[activeStep].step} • {steps[activeStep].tag}
              </Badge>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-black">
                {steps[activeStep].title}
              </h3>

              <p className="text-sm sm:text-base text-black font-medium leading-relaxed">
                {steps[activeStep].description}
              </p>

              {/* Progress Indicator */}
              <div className="pt-2 flex items-center space-x-3 text-xs  text-black font-bold">
                <span>Phase {activeStep + 1} of 5</span>
                <div className="flex-1 bg-slate-200 h-2.5 rounded-full overflow-hidden border border-slate-300">
                  <div
                    className="bg-black h-full rounded-full transition-all duration-300"
                    style={{ width: `${((activeStep + 1) / 5) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Right: Mandatory Stage Deliverables */}
            <div className="lg:col-span-5 bg-slate-50 border-2 border-slate-200 rounded-xl p-6 space-y-4 text-black">
              <div className="text-xs  uppercase tracking-wider text-black font-bold flex items-center">
                <CheckCircle2 className="w-4 h-4 text-black mr-2" />
                MANDATORY STAGE DELIVERABLES
              </div>

              <div className="space-y-2">
                {steps[activeStep].keyOutputs.map((output, oIdx) => (
                  <div key={oIdx} className="p-3 rounded-lg bg-white border border-slate-300 text-xs font-bold text-black flex items-center justify-between">
                    <span>{output}</span>
                    <span className="text-[10px]  text-black uppercase font-bold">QA Passed</span>
                  </div>
                ))}
              </div>

              <div className="pt-1">
                <Button
                  variant="dark"
                  onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                  className="w-full bg-black hover:bg-neutral-800 text-white font-bold"
                >
                  <span>Next: Phase {steps[(activeStep + 1) % steps.length].step}</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>

          </div>
        </Card>

      </div>
    </section>
  );
}
