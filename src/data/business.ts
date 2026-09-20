import { BusinessInfo, RepairService, NavItem } from "@/types";

export const BUSINESS_DATA: BusinessInfo = {
  name: "Vikash Electronics",
  tagline: "Professional DJ & Electronic Equipment Repairing Services",
  description:
    "Expert diagnosis, maintenance, and precision repair for professional DJ sound systems, moving heads, stage lighting, amplifiers, and electronic equipment in Surat.",
  phone: "9825485520",
  formattedPhone: "+91 98254 85520",
  technician: {
    name: "Murlidhar Chaudhari",
    role: "Professional DJ & Electronic Equipment Repair Technician",
  },
  address: {
    plotNo: "Plot No. 199",
    sarveNo: "Sarve No. 1-2",
    area: "Sanjay Nagar",
    landmark: "Udhna Yard",
    zone: "Udhna",
    city: "Surat",
    state: "Gujarat",
    country: "India",
    fullAddress:
      "Plot No. 199, Sarve No. 1-2, Sanjay Nagar, Udhna Yard, Udhna, Surat, Gujarat, India.",
  },
};

export const SERVICES_DATA: RepairService[] = [
  {
    id: "speaker-repairing",
    title: "Speaker Repairing",
    description:
      "Voice coil rewinding, cone replacement, spider alignment, and surround repairs for stage monitors, subwoofers, and pro audio speakers.",
    iconName: "Speaker",
    category: "audio",
    highlights: ["Voice Coil Rewinding", "Subwoofers & Line Arrays", "Component Testing"],
  },
  {
    id: "amplifier-repairing",
    title: "Amplifier Repairing",
    description:
      "Troubleshooting blown output transistors, power supply faults, channel imbalances, and distortion in high-power DJ and PA amplifiers.",
    iconName: "Zap",
    category: "audio",
    highlights: ["Power Transistor Replacement", "Toroidal Transformer Check", "Thermal Protection"],
  },
  {
    id: "dj-light-repairing",
    title: "DJ Light Repairing",
    description:
      "Servicing LED par cans, laser projectors, strobe lights, and DMX control boards for stage and event setups.",
    iconName: "Sparkles",
    category: "lighting",
    highlights: ["DMX Protocol Troubleshooting", "LED Array Servicing", "Driver Board Repair"],
  },
  {
    id: "sharpy-moving-head-repairing",
    title: "Sharpy / Moving Head Light Repairing",
    description:
      "Precision optical alignment, stepper motor maintenance, gobo wheel fixes, ballast repair, and beam bulb replacements for beam/moving head lights.",
    iconName: "Lightbulb",
    category: "lighting",
    highlights: ["Pan/Tilt Motor Calibration", "Color & Gobo Wheel Repair", "Ballast & Lamp Replacement"],
  },
  {
    id: "tv-repairing",
    title: "TV Repairing",
    description:
      "Component-level servicing for LED, LCD, and Smart TVs including backlight panel fixes, power supply boards, and mainboard troubleshooting.",
    iconName: "Tv",
    category: "visual",
    highlights: ["LED Backlight Replacement", "Power Board Repairs", "Display Panel Troubleshooting"],
  },
  {
    id: "home-theatre-repairing",
    title: "Home Theatre Repairing",
    description:
      "Repair and calibration of multi-channel AV receivers, surround sound speakers, wireless subwoofers, and digital audio decoding stages.",
    iconName: "Disc3",
    category: "audio",
    highlights: ["5.1 / 7.1 Channel Fixes", "Subwoofer Plate Amps", "Audio Input / DAC Calibration"],
  },
  {
    id: "sound-mixer-repairing",
    title: "Sound Mixer Repairing",
    description:
      "Restoration of DJ mixers, studio audio consoles, analog faders, digital preamps, phantom power circuits, and potentiometer scratchiness.",
    iconName: "Sliders",
    category: "audio",
    highlights: ["Fader & Potentiometer Cleaning", "Mic Preamp Fixes", "Multi-Channel Board Servicing"],
  },
  {
    id: "other-dj-electronic-repairing",
    title: "Other DJ & Electronic Equipment Repairing",
    description:
      "Specialized repairs for crossovers, equalizers, smoke/fog machines, power conditioners, audio processors, and custom electronic gear.",
    iconName: "Wrench",
    category: "general",
    highlights: ["Custom Circuit Diagnostics", "Signal Processors", "Stage Accessories"],
  },
];

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact & Location", href: "#contact" },
];
