export const engineerProfile = {
  name: "Ahmed Salama",
  title: "Electrical Design & Automation Engineer",
  designation: "Power Distribution, Industrial Control & Automation Engineer",
  photo: "/ahmed-salama.jpg",
  location: "Cairo, Egypt",
  email: "ahmeddragab.2001@gmail.com",
  phone: "+20 15 53077712",
  whatsapp: "+201553077712",
  linkedin: "https://www.linkedin.com/in/ahmed-salama-b2b80123a/",
  availability: "Available for Electrical Design & Automation Projects",
  officeHours: "Sun – Thu: 09:00 – 18:00 (GMT+2)",
  
  hero: {
    badge: "IEC & IEEE Certified Engineering Standards",
    headline: "Engineering Reliable Power Solutions for a Smarter Future.",
    subheadline: "Electrical Power Engineer specializing in power systems, electrical infrastructure, industrial installations, and engineering solutions designed for safety, efficiency, and reliability.",
    primaryCta: "Explore My Expertise",
    secondaryCta: "Get in Touch",
    stats: [
      { label: "Voltage Classes", value: "0.4kV – 33kV", desc: "Low & Medium Voltage Networks" },
      { label: "Design Compliance", value: "IEC & IEEE", desc: "Rigorous International Codes" },
      { label: "Power Studies", value: "ETAP / DIgSILENT", desc: "Short Circuit, Load Flow & Arc Flash" },
      { label: "Automation", value: "PLC & SCADA", desc: "Industrial Control & Motor Control" }
    ]
  },

  about: {
    eyebrow: "ABOUT THE ENGINEER",
    title: "Precision engineering grounded in technical rigor and standards-driven design.",
    paragraphs: [
      "I am an Electrical Design & Automation Engineer dedicated to designing, analyzing, and supervising resilient electrical infrastructure and industrial automation systems for manufacturing plants, commercial facilities, and medium-voltage distribution networks.",
      "My engineering philosophy centers on absolute technical rigor: every circuit, transformer, protective device, and motor control center must be verified through exact mathematical calculations and international engineering standards (IEC, IEEE, NFPA) before field execution.",
      "With hands-on experience bridging technical office calculations, automated panel schematics, and on-site engineering supervision, I ensure that design deliverables translate seamlessly into safe, buildable, and code-compliant installations that optimize operational efficiency and minimize downtime."
    ],
    education: [
      {
        degree: "Bachelor of Science in Electrical Power & Machines Engineering",
        institution: "Faculty of Engineering",
        period: "Specialized in Electrical Power Systems, Distribution & Automation",
        focus: "High-Voltage Engineering, Power System Protection, Numerical Simulation, PLC & Industrial Control"
      }
    ],
    experienceHighlights: [
      {
        role: "Electrical Design & Automation Engineer",
        focus: "Industrial Power Distribution & Automation Systems",
        description: "Leading technical office engineering, MV/LV single-line diagrams, ETAP power calculations, PLC panel schematics, and site commissioning supervision for industrial and infrastructure clients."
      },
      {
        role: "Power Systems Studies & Technical Office",
        focus: "Short Circuit, Protection Coordination & Substation Design",
        description: "Conducting short-circuit analysis per IEC 60909, protective relay coordination curves (TCC), cable sizing, and material submittal approvals (MAS) for multi-megawatt facilities."
      }
    ],
    pillars: [
      {
        code: "01",
        title: "Safety & Life Protection",
        desc: "Design solutions governed by NFPA 70E and IEC 61439, prioritizing arc flash risk mitigation, selective trip coordination, and robust earthing."
      },
      {
        code: "02",
        title: "Standards Compliance",
        desc: "Strict adherence to IEC 60364, IEC 60909, IEEE 141/242/399, ensuring audits pass without deviation and equipment operates within safe thermal limits."
      },
      {
        code: "03",
        title: "Industrial Automation Integration",
        desc: "Coordinating power distribution seamlessly with PLC/SCADA architectures, Motor Control Centers (MCC), and industrial field instrumentation."
      },
      {
        code: "04",
        title: "End-to-End Technical Ownership",
        desc: "Comprehensive engineering continuity from preliminary single-line diagrams to detailed cable schedules, BOQs, and commissioning signoffs."
      }
    ],
    technicalHighlights: [
      "MV Substation Architecture (11kV / 22kV / 33kV)",
      "Industrial Automation & PLC / SCADA Schematics",
      "Short Circuit & Protective Device Coordination",
      "Arc Flash Hazard Analysis & PPE Category Labeling",
      "Motor Control Centers (MCC) & VFD Drives",
      "Earthing Grid Design (IEEE 80 / IEC 62305)"
    ]
  },

  disciplines: [
    {
      id: "power-dist",
      title: "Electrical Power Distribution",
      category: "Distribution",
      icon: "Network",
      voltage: "0.4kV – 33kV",
      summary: "Comprehensive architecture of MV/LV distribution networks, busway systems, main distribution switchboards, and optimized load balancing.",
      deliverables: ["Single-Line Diagrams (SLD)", "Panel Schedules", "Busbar Trunking Routing", "Diversity Factor Modeling"],
      standards: "IEC 60364 / IEC 61439"
    },
    {
      id: "power-analysis",
      title: "Power System Analysis",
      category: "Calculations",
      icon: "Activity",
      voltage: "Up to 66kV",
      summary: "Rigorous numerical simulation including load flow, symmetrical & asymmetrical short-circuit (IEC 60909), motor starting, and harmonics.",
      deliverables: ["Short Circuit Reports", "Load Flow Analysis", "Motor Acceleration Curves", "Harmonic THD Studies"],
      standards: "IEEE 399 / IEC 60909"
    },
    {
      id: "automation-control",
      title: "Industrial Automation & Control",
      category: "Automation",
      icon: "Cpu",
      voltage: "24V DC / 230V / 400V AC",
      summary: "Design of PLC control panels, Motor Control Centers (MCC), variable frequency drives (VFD), and SCADA telemetry interlocks.",
      deliverables: ["PLC I/O Schematics", "MCC Single-Lines", "Control Loop Diagrams", "Interlocking Matrix"],
      standards: "IEC 61131 / IEC 61439"
    },
    {
      id: "lv-mv-systems",
      title: "Low & Medium Voltage Systems",
      category: "Systems",
      icon: "Zap",
      voltage: "LV (400V) & MV (11/22kV)",
      summary: "Engineering of Medium Voltage switchgear, Ring Main Units (RMU), vacuum circuit breakers, MDBs, SMDBs, and capacitor banks.",
      deliverables: ["Switchgear Front Elevation", "Control Schematics", "Internal Separation (Form 4b)", "Capacitor Bank Sizing"],
      standards: "IEC 62271-200 / IEC 61439-2"
    },
    {
      id: "substations",
      title: "Electrical Substations",
      category: "Infrastructure",
      icon: "Boxes",
      voltage: "11kV / 22kV / 33kV",
      summary: "Layout engineering for indoor package substations, oil-immersed & cast-resin transformers, trenching, and ventilation calculations.",
      deliverables: ["Substation Layout Drawings", "Trench & Cable Routing", "Transformer Heat Dissipation", "Containment Bund Sizing"],
      standards: "IEC 61936-1 / IEEE C37"
    },
    {
      id: "protection-control",
      title: "Protection & Control Systems",
      category: "Protection",
      icon: "ShieldAlert",
      voltage: "ANSI 50/51, 50N/51N, 87T",
      summary: "Relay grading curves, CT/VT saturation sizing, numerical protection relay configuration, interlocking logic, and differential protection.",
      deliverables: ["Time-Current Coordination (TCC)", "Relay Setting Tables", "Trip Matrix Logic", "CT/VT Sizing Calculations"],
      standards: "IEEE 242 (Buff Book) / IEC 60255"
    },
    {
      id: "load-calculations",
      title: "Electrical Load Calculations",
      category: "Calculations",
      icon: "Calculator",
      voltage: "LV & MV Networks",
      summary: "Connected, demand, and future spare load profiling. Accurate sizing of intake transformers, standby diesel generators, and central UPS.",
      deliverables: ["Comprehensive Load Schedules", "Generator Step-Loading Study", "UPS Runtime Sizing", "Power Factor Optimization"],
      standards: "NEC Article 220 / IEC 60364"
    },
    {
      id: "infrastructure",
      title: "Electrical Installation & Infrastructure",
      category: "Infrastructure",
      icon: "Layers",
      voltage: "Low & Medium Voltage",
      summary: "Containment routing including cable trays, ladder racks, underground concrete duct banks, and hazardous area zone classifications.",
      deliverables: ["Cable Routing & Sizing Plans", "Underground Trench Details", "Containment Loading Calculations", "Hazardous Area Zone Drawings"],
      standards: "IEC 60079 / BS 7671"
    },
    {
      id: "earthing-lightning",
      title: "Earthing & Lightning Protection",
      category: "Safety",
      icon: "ShieldCheck",
      voltage: "Ground Potential Rise",
      summary: "Substation earth grid design utilizing IEEE 80 standards for step and touch potential safety, soil resistivity analysis, and Faraday cage systems.",
      deliverables: ["IEEE 80 Earth Mesh Calculations", "Step & Touch Potential Plots", "Rolling Sphere Risk Assessment", "Lightning Down-Conductor Layout"],
      standards: "IEEE 80 / IEC 62305"
    },
    {
      id: "tech-docs",
      title: "Electrical Design & Documentation",
      category: "Engineering",
      icon: "FileSpreadsheet",
      voltage: "All Systems",
      summary: "Complete technical office documentation packages including schematic drawings, wiring diagrams, interconnection schedules, and BOQs.",
      deliverables: ["Single-Line & Riser Diagrams", "Interconnection Wiring Schedules", "Material Approval Sheets (MAS)", "Method Statements"],
      standards: "ISO 9001 / IEC 61082"
    }
  ],

  services: [
    {
      code: "SRV-01",
      title: "Electrical Design & Engineering",
      subtitle: "Concept to Construction Packages",
      description: "Complete design packages for industrial plants, commercial complexes, and infrastructure projects from concept schematics to Issued for Construction (IFC) drawings.",
      features: [
        "Single-line diagrams & electrical riser concepts",
        "Small power, lighting, and specialized machinery layouts",
        "Transformer and main switchboard sizing",
        "Emergency generator & central UPS backup architectures"
      ],
      deliverable: "Complete CAD/BIM IFC Drawing Package & Design Brief"
    },
    {
      code: "SRV-02",
      title: "Power Distribution Design",
      subtitle: "MV & LV Infrastructure Planning",
      description: "Engineered power distribution networks tailored for continuous reliability, fault tolerance, and seamless expansion under demanding industrial conditions.",
      features: [
        "11kV / 22kV Ring Main Unit (RMU) distribution schemes",
        "Substation equipment layouts & ventilation engineering",
        "Busbar trunking (sandwich busduct) design up to 5000A",
        "Motor Control Centers (MCC) and DOL/Star-Delta/VFD sizing"
      ],
      deliverable: "Distribution Topology, Substation Layouts & Schematics"
    },
    {
      code: "SRV-03",
      title: "Industrial Automation & Control",
      subtitle: "PLC, SCADA & Motor Controls",
      description: "Complete automation engineering from control panel schematics to PLC I/O wiring, drive integration, and automated safety interlocking.",
      features: [
        "Control panel assembly drawings and terminal schedules",
        "PLC hardware configuration and I/O assignment",
        "Variable frequency drive (VFD) & soft starter integration",
        "Integration with SCADA and industrial fieldbuses"
      ],
      deliverable: "Control Panel Schematics, I/O Wiring Lists & Logic Architecture"
    },
    {
      code: "SRV-04",
      title: "Technical Studies & Calculations",
      subtitle: "Numerical Simulation & Code Compliance",
      description: "In-depth engineering simulations using ETAP and DIgSILENT PowerFactory to validate power system stability, fault handling, and personnel safety.",
      features: [
        "Short-circuit analysis per IEC 60909 (Ik'', ip, Ib, Ik)",
        "Overcurrent & earth-fault protective relay coordination",
        "Arc flash hazard analysis & incident energy calculations (IEEE 1584)",
        "Voltage drop and cable thermal derating calculations"
      ],
      deliverable: "Formal Engineering Study Report with TCC Curves & Relay Settings"
    },
    {
      code: "SRV-05",
      title: "Electrical Site Supervision",
      subtitle: "Quality Assurance & Field Execution",
      description: "On-site technical representation ensuring electrical contractors strictly adhere to approved engineering drawings, method statements, and safety protocols.",
      features: [
        "Inspection of MV/LV equipment installations & cable pulling",
        "Verification of earth pit resistances & grid bonding",
        "Issuance and tracking of NCRs (Non-Conformance Reports)",
        "Review and approval of field changes (Red-line markups)"
      ],
      deliverable: "Site Inspection Reports (WIR), Snag Lists & Compliance Logs"
    },
    {
      code: "SRV-06",
      title: "Technical Office Services",
      subtitle: "Contractor Support & Procurement Engineering",
      description: "Specialized technical office deliverables bridging contract drawings, shop drawings, client approvals, and vendor equipment submittals.",
      features: [
        "Preparation of fully coordinated shop drawings in AutoCAD/Revit",
        "Material Submittal Sheets (MAS) & technical compliance matrices",
        "Review and response to engineering Requests for Information (RFI)",
        "Preparation of As-Built drawing packages and O&M manuals"
      ],
      deliverable: "Coordinated Shop Drawings, MAS Approvals & As-Built Sets"
    },
    {
      code: "SRV-07",
      title: "Electrical BOQ & Cost Estimation",
      subtitle: "Material Take-Offs & Budget Engineering",
      description: "Accurate Bill of Quantities (BOQ) preparation based on detailed engineering designs, preventing cost overruns and material procurement delays.",
      features: [
        "Itemized take-offs for cables, conduits, trays, and switchgear",
        "Detailed specifications aligning with international standards",
        "Tender evaluation and technical comparison of vendor bids",
        "Value engineering alternatives for capital cost optimization"
      ],
      deliverable: "Priced/Unpriced BOQ Schedules & Technical Tender Comparison"
    },
    {
      code: "SRV-08",
      title: "Testing & Commissioning Support",
      subtitle: "Energization Readiness & Verification",
      description: "Hands-on engineering support for pre-commissioning, FAT (Factory Acceptance Testing), SAT, and primary equipment energization.",
      features: [
        "Review of test sheets for insulation resistance & Hi-Pot",
        "Primary & secondary current injection testing witness",
        "Transformer winding resistance & turns ratio (TTR)",
        "Control panel functional checks & safety interlock testing"
      ],
      deliverable: "Commissioning Dossier, FAT/SAT Sign-off & Handover Certificate"
    }
  ],

  projects: [
    {
      id: "industrial-substation-22kv",
      title: "22kV / 0.4kV Industrial Manufacturing Substation",
      category: "Industrial & Substations",
      sector: "Heavy Manufacturing Facility",
      location: "10th of Ramadan Industrial City, Egypt",
      capacity: "12.5 MVA (Dual 6.25 MVA Transformers)",
      voltage: "22kV / 0.4kV, 50Hz",
      image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=1200&q=80",
      description: "Complete design, power system analysis, and technical office engineering for a dedicated 12.5 MVA indoor step-down substation serving a heavy industrial plant.",
      challenge: "High prospective short-circuit levels from the local utility grid required precise arc flash risk mitigation and low-impedance grounding without interrupting 24/7 continuous furnace operations.",
      solution: "Engineered a dual-fed 22kV gas-insulated switchgear configuration coupled with cast-resin dry-type transformers and Schweitzer numerical protection relays calibrated via ETAP to trip in under 45ms.",
      results: "Zero unplanned tripping events during continuous operations, with incident energy contained under 8 cal/cm² across all main 4000A LV distribution boards.",
      scope: [
        "Turnkey design of 22kV Medium Voltage Gas-Insulated Switchgear (GIS)",
        "ETAP short-circuit calculation per IEC 60909 and relay coordination study",
        "Main Low Voltage switchboards (MDB) with 4000A busbar trunking systems",
        "Soil resistivity testing analysis and IEEE 80 grounding grid mesh design"
      ],
      equipment: [
        "Schneider Electric Premset / SM6 MV Switchgear",
        "ABB Cast Resin Transformers (2x 6250 kVA)",
        "Schweitzer Engineering Laboratories (SEL-751) Feeder Protection Relays",
        "Schneider Electric Masterpact MTZ Air Circuit Breakers (4000A)"
      ],
      standards: ["IEC 61936-1", "IEC 60909", "IEEE 80", "IEC 61439-2"]
    },
    {
      id: "automated-mcc-plc-center",
      title: "Industrial Automated Motor Control Center & PLC Architecture",
      category: "Industrial Automation",
      sector: "Automated Process Plant",
      location: "6th of October Industrial Zone, Egypt",
      capacity: "3.2 MVA Total Connected Load",
      voltage: "400V Distribution & 24V DC Control",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
      description: "Design of intelligent Motor Control Centers (iMCC) with Siemens S7-1500 PLC integration, PROFINET communication, and variable frequency drives for continuous processing lines.",
      challenge: "Integrating 38 heavy induction motors with varying torque requirements while preventing severe voltage dips during direct-on-line and soft-starter acceleration sequences.",
      solution: "Developed an intelligent MCC architecture utilizing Siemens Sinamics VFDs with built-in active harmonic filtration and fail-safe safety interlocks over industrial PROFINET.",
      results: "Total Harmonic Distortion (THDv) maintained below 3.2% under full facility operating conditions with complete SCADA diagnostics.",
      scope: [
        "Form 4b type-tested low voltage switchboard assembly engineering",
        "Control schematics, PLC I/O mapping, and fail-safe safety circuit design",
        "VFD motor starting and harmonic mitigation filtering",
        "Factory acceptance test (FAT) protocol preparation and panel inspection"
      ],
      equipment: [
        "Siemens S7-1500 Modular PLC System & ET 200SP Remote I/O",
        "Siemens Sinamics G120 Variable Frequency Drives",
        "Schneider Electric TeSys Island Digital Motor Starters",
        "Rittal VX25 Industrial Enclosure Suite"
      ],
      standards: ["IEC 61439-1/2", "IEC 61131", "IEC 60204-1"]
    },
    {
      id: "petrochemical-mv-distribution",
      title: "Petrochemical Complex MV Distribution & Power Quality",
      category: "Oil & Gas & Heavy Industry",
      sector: "Petrochemical Processing",
      location: "Alexandria Industrial Zone, Egypt",
      capacity: "18 MVA Total Connected Load",
      voltage: "6.6kV & 0.4kV Distribution",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
      description: "Power distribution engineering and motor starting stability studies for heavy rotating machinery, large pumps, and gas compressor motor control centers.",
      challenge: "Hazardous ATEX/IECEx Zone 1 environmental constraints combined with starting 1200kW compressor motors without triggering system undervoltage relays.",
      solution: "Performed ETAP dynamic motor acceleration simulation and specified flameproof MV vacuum circuit breakers with selective directional protection.",
      results: "Successful motor start transitions within 6.8 seconds with bus voltage dip restricted to <11%, fully conforming to IEEE 399 recommendations.",
      scope: [
        "ETAP dynamic motor starting simulation for 800kW and 1200kW induction motors",
        "IEEE 1584 Arc Flash Hazard Analysis with safety labeling across 24 cubicles",
        "Hazardous area electrical equipment specification (Zone 1 / Zone 2 ATEX/IECEx)",
        "Harmonic distortion analysis and tuned capacitor bank design for 0.96 PF target"
      ],
      equipment: [
        "Siemens NXAIR 6.6kV Air-Insulated Switchgear with Vacuum Breakers",
        "SIPROTEC 5 Numerical Multi-Function Protection Relays",
        "ABB ACS880 Industrial Variable Frequency Drives (VFD)",
        "Eaton / Cooper Crouse-Hinds Explosion-Proof Enclosures"
      ],
      standards: ["IEEE 1584", "IEC 60079", "IEEE 399", "IEC 60255"]
    },
    {
      id: "tier-3-datacenter-power",
      title: "Mission-Critical Tier III Data Center Emergency Power",
      category: "Critical Infrastructure",
      sector: "Financial & Data Infrastructure",
      location: "Smart Village, Giza, Egypt",
      capacity: "4.8 MVA IT Load (2N Architecture)",
      voltage: "11kV Dual Feed / 400V Distribution",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
      description: "Dual utility intake and automated emergency standby power design ensuring 99.982% electrical availability under continuous full-load Tier III parameters.",
      challenge: "Ensuring zero millisecond interruption to critical server racks during utility switchover and generator paralleling test cycles.",
      solution: "Implemented concurrent maintainable 2N power paths with dual 2500kVA Cummins isochronous diesel generators and static modular UPS distribution.",
      results: "Full Uptime Institute Tier III concurrent maintainability certification achieved with zero transfer interruption during commissioning testing.",
      scope: [
        "Dual 11kV utility incoming feeders with automatic motorized transfer switchgear",
        "N+1 2500kVA Standby Diesel Generators with digital isochronous synchronizing",
        "Static UPS modular distribution with harmonic isolation transformers",
        "Selective tripping coordination avoiding downstream fault propagation"
      ],
      equipment: [
        "Cummins PowerCommand 3.3 Synchronizing & Paralleling Switchgear",
        "Vertiv Liebert EXL S1 Modular High-Efficiency UPS Systems",
        "Schneider Electric Prisma Plus LV Distribution Switchboards",
        "Socomec Automatic Transfer Switches (ATS)"
      ],
      standards: ["TIA-942 Tier III", "IEEE 242", "NFPA 110", "IEC 60364"]
    },
    {
      id: "commercial-headquarters-power",
      title: "Commercial & Administrative Complex Power Infrastructure",
      category: "Commercial Infrastructure",
      sector: "Corporate Headquarters",
      location: "New Cairo, Egypt",
      capacity: "4.5 MVA Connected Load",
      voltage: "0.4kV Distribution / Standby Gen",
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80",
      description: "Comprehensive electrical design covering main distribution, lighting calculations, cable routing, earthing network, and energy management monitoring.",
      challenge: "Strict energy efficiency targets and architectural constraints requiring compact busduct risers across 12 floors without overheating.",
      solution: "Engineered sandwich-type copper busbar trunking systems with Dialux EVO daylight-harvesting photometric calculations and smart sub-metering.",
      results: "Achieved 22% energy consumption reduction and complete compliance with European photometric code EN 12464-1.",
      scope: [
        "Dialux photometric calculations for office spaces meeting EN 12464-1",
        "Low-voltage distribution riser design with busbar trunking systems",
        "Power factor correction bank sizing and harmonic filtration",
        "Detailed bill of quantities (BOQ) and technical specification tender documents"
      ],
      equipment: [
        "Schneider Electric Okken Low Voltage Switchboards",
        "El Sewedy Electric Low Smoke Zero Halogen (LSZH) Cables",
        "ABB Energy Meters with Modbus RS485 communication",
        "DEHN Lightning Protection and Surge Arresters"
      ],
      standards: ["IEC 60364", "EN 12464-1", "BS 7671", "NFPA 101"]
    }
  ],

  softwareTools: [
    {
      name: "AutoCAD Electrical",
      category: "Drafting & Schematics",
      level: "Expert",
      useCase: "Engineering single-line diagrams, schematic wiring, panel general arrangement (GA), cable routing, and trench details.",
      proficiency: 98
    },
    {
      name: "ETAP",
      category: "Power System Simulation",
      level: "Advanced",
      useCase: "Short-circuit (IEC 60909), load flow, arc flash analysis (IEEE 1584), motor acceleration, and protection relay coordination (Star).",
      proficiency: 94
    },
    {
      name: "Siemens TIA Portal",
      category: "Automation & PLC Programming",
      level: "Proficient",
      useCase: "PLC hardware configuration, LAD/SCL programming, HMI screen design, and PROFINET industrial network commissioning.",
      proficiency: 90
    },
    {
      name: "EPLAN Electric P8",
      category: "Control Panel Schematics",
      level: "Advanced",
      useCase: "Detailed terminal connection diagrams, PLC I/O schematics, cross-referencing, and automated panel bill of materials.",
      proficiency: 92
    },
    {
      name: "DIgSILENT PowerFactory",
      category: "Grid Interconnection & Dynamics",
      level: "Proficient",
      useCase: "Medium voltage grid analysis, dynamic stability, harmonic distortion modeling, and load flow calculation.",
      proficiency: 85
    },
    {
      name: "Revit MEP",
      category: "BIM & Clash Coordination",
      level: "Proficient",
      useCase: "3D electrical containment modeling, panel schedule integration, and multi-service clash detection with HVAC/Piping.",
      proficiency: 86
    },
    {
      name: "Dialux EVO",
      category: "Photometric Lighting Design",
      level: "Expert",
      useCase: "Indoor, industrial, and exterior lighting simulation, emergency egress lux level verification complying with EN 12464-1.",
      proficiency: 95
    }
  ],

  standardsList: [
    { code: "IEC 60364", title: "Low-voltage electrical installations - Design, selection and erection" },
    { code: "IEC 60909", title: "Short-circuit currents in three-phase a.c. systems" },
    { code: "IEC 61439", title: "Low-voltage switchgear and controlgear assemblies (Form 1 to Form 4b)" },
    { code: "IEC 61131", title: "Programmable controllers - Equipment requirements and programming languages" },
    { code: "IEEE 1584", title: "Guide for Performing Arc-Flash Hazard Calculations" },
    { code: "IEEE 80", title: "Guide for Safety in AC Substation Grounding" },
    { code: "NFPA 70", title: "National Electrical Code (NEC) - Safety and wire ampacity standards" },
    { code: "IEC 62305", title: "Protection against lightning - Physical damage and life hazard" }
  ],

  workflowSteps: [
    {
      step: "01",
      title: "Understand Requirements",
      tag: "Initiation & Data Gathering",
      description: "Thorough gathering of client design briefs, utility connection requirements, fault level data from the local electricity distributor, site environmental parameters, and operational load profiles.",
      keyOutputs: ["Design Basis Memorandum", "Utility Interconnection Rules", "Environmental & Site Matrix"]
    },
    {
      step: "02",
      title: "Engineering Assessment",
      tag: "Feasibility & Architecture",
      description: "System topology selection, establishing redundancy architectures (N, N+1, or 2N), sizing primary intake transformers, evaluating space constraints, and determining regulatory compliance baselines.",
      keyOutputs: ["Power Architecture Diagram", "Preliminary Load Sizing", "Reliability Assessment Report"]
    },
    {
      step: "03",
      title: "Design & Calculations",
      tag: "Rigorous Modeling & Sizing",
      description: "Full numerical modeling in ETAP / DIgSILENT. Performing short-circuit analysis, voltage drop calculations, cable thermal sizing, protective relay grading, and substation layout drafting.",
      keyOutputs: ["ETAP Simulation Model", "Cable & Breaker Sizing Sheets", "Single-Line Diagram (SLD) Draft"]
    },
    {
      step: "04",
      title: "Technical Review & QA",
      tag: "Multi-Disciplinary Verification",
      description: "Strict quality assurance review: checking multi-service clash coordination with mechanical and civil systems, arc flash safety mitigation, value engineering review, and client engineering alignment.",
      keyOutputs: ["Clash Resolution Reports", "Arc Flash Hazard Labels", "Approved IFC Drawing Package"]
    },
    {
      step: "05",
      title: "Implementation & Testing",
      tag: "Site Supervision & Commissioning",
      description: "Technical office support during installation, site inspection for compliance with engineering drawings, witnessing factory acceptance tests (FAT), site acceptance tests (SAT), and final energization.",
      keyOutputs: ["FAT/SAT Test Dossiers", "Red-line / As-Built Drawings", "Handover & Energization Sign-off"]
    }
  ]
};
