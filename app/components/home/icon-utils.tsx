import * as React from 'react';
import * as Icons from 'lucide-react';
import type { IconName } from './constants';

// Type for our icon components
type IconComponent = React.ComponentType<{ className?: string }>;

// Explicitly type the icon map
const iconMap: Record<IconName, IconComponent> = {
  LayoutDashboard: Icons.LayoutDashboard,
  Cpu: Icons.Cpu,
  Code: Icons.Code,
  Mail: Icons.Mail,
  MapPin: Icons.MapPin,
  Phone: Icons.Phone,
  Github: Icons.Github,
  Linkedin: Icons.Linkedin,
  GraduationCap: Icons.GraduationCap,
  GitBranch: Icons.GitBranch,
  Monitor: Icons.Monitor,
  Smartphone: Icons.Smartphone
} as const;

/**
 * Renders an icon component by name with optional className
 * @param iconName - Name of the icon to render
 * @param className - Optional CSS class name
 * @returns React element or null if icon not found
 */
export function renderIcon(iconName: IconName, className = ''): React.ReactElement | null {
  const Icon = iconMap[iconName];
  if (!Icon) return null;
  return React.createElement(Icon, { className });
}
