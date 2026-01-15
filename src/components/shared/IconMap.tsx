import {
  ShieldCheck,
  Wifi,
  Phone,
  Users,
  Activity,
  Server,
  Globe,
  Mail,
  HardDrive,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  "shield-check": ShieldCheck,
  wifi: Wifi,
  phone: Phone,
  users: Users,
  activity: Activity,
  server: Server,
  globe: Globe,
  mail: Mail,
  "hard-drive": HardDrive,
  zap: Zap,
};

interface DynamicIconProps {
  name: string;
  className?: string;
}

export function DynamicIcon({ name, className }: DynamicIconProps) {
  const Icon = iconMap[name] || Activity;
  return <Icon className={className} />;
}

