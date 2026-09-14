import {
  Speaker,
  Zap,
  Sparkles,
  Lightbulb,
  Tv,
  Disc3,
  Sliders,
  Wrench,
} from "lucide-react";
import { ServiceItem } from "@/types";

export const services: ServiceItem[] = [
  {
    id: "speaker-repairing",
    title: "SPEAKER REPAIRING",
    description: "DJ Speakers, Subwoofers & other sound speakers.",
    icon: Speaker,
  },
  {
    id: "amplifier-repairing",
    title: "AMPLIFIER REPAIRING",
    description: "Power Amplifiers & other DJ amplifiers.",
    icon: Zap,
  },
  {
    id: "dj-light-repairing",
    title: "DJ LIGHT REPAIRING",
    description: "DJ Lights & Stage Lighting equipment.",
    icon: Sparkles,
  },
  {
    id: "sharpy-light-repairing",
    title: "SHARPY LIGHT REPAIRING",
    description: "Moving Head & Sharpy Lights repairing.",
    icon: Lightbulb,
  },
  {
    id: "tv-repairing",
    title: "TV REPAIRING",
    description: "LED & other Television repairing.",
    icon: Tv,
  },
  {
    id: "home-theatre-repairing",
    title: "HOME THEATRE REPAIRING",
    description: "Home Theatre & sound system repairing.",
    icon: Disc3,
  },
  {
    id: "sound-mixer-repairing",
    title: "SOUND MIXER REPAIRING",
    description: "DJ Mixers & Audio Mixing equipment.",
    icon: Sliders,
  },
  {
    id: "other-electronic-repairing",
    title: "OTHER ELECTRONIC REPAIRING",
    description: "Other DJ & Electronic equipment repairing.",
    icon: Wrench,
  },
];

export default services;
