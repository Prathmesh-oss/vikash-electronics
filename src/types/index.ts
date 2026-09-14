import type { LucideIcon } from "lucide-react";

export interface BusinessInfo {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  formattedPhone: string;
  technician?: {
    name: string;
    role: string;
  };
  address: {
    plotNo: string;
    sarveNo: string;
    area: string;
    landmark: string;
    zone: string;
    city: string;
    state: string;
    country: string;
    fullAddress: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface RepairService {
  id: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  iconName?: string;
  category?: "audio" | "lighting" | "visual" | "general";
  highlights?: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
