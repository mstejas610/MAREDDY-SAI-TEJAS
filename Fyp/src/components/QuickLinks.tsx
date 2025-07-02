import React from 'react';
import { User, BarChart3, Award, ArrowRight } from 'lucide-react';

interface QuickLinkProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  color: string;
}

const QuickLinkCard: React.FC<QuickLinkProps> = ({ icon, title, description, href, color }) => {
  return (
    <a 
      href={href}
      className="block bg-gray-900 rounded-xl p-6 border border-gray-700 shadow-2xl hover:border-gray-600 transition-all duration-300 group cursor-pointer transform hover:scale-105"
    >
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center shadow-lg ${color} group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 text-sm mb-3">{description}</p>
          <div className="flex items-center gap-2 text-green-400 font-medium text-sm group-hover:gap-3 transition-all">
            <span>Explore</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </a>
  );
};

export const QuickLinks: React.FC = () => {
  const links = [
    {
      icon: <User className="w-6 h-6 text-white" />,
      title: "Profile",
      description: "View your achievements and customize your hacker profile",
      href: "/profile",
      color: "bg-gradient-to-br from-green-500 to-teal-500"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      title: "Leaderboard",
      description: "See how you rank against other cyber warriors",
      href: "/leaderboard",
      color: "bg-gradient-to-br from-purple-500 to-blue-500"
    },
    {
      icon: <Award className="w-6 h-6 text-white" />,
      title: "Certifications",
      description: "Track your progress towards industry certifications",
      href: "/certifications",
      color: "bg-gradient-to-br from-orange-500 to-red-500"
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
          <ArrowRight className="w-4 h-4 text-white" />
        </div>
        Quick Access
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {links.map((link, index) => (
          <QuickLinkCard key={index} {...link} />
        ))}
      </div>
    </div>
  );
};