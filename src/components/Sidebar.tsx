import React from "react";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Map,
  Brain,
  AlertTriangle,
  FileText,
  Package,
  Settings,
  Activity,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Outbreak Map",
    href: "/dashboard/outbreak-map",
    icon: Map,
  },
  {
    name: "AI Predictions",
    href: "/dashboard/predictions",
    icon: Brain,
  },
  {
    name: "Alerts",
    href: "/dashboard/alerts",
    icon: AlertTriangle,
  },
  {
    name: "Reports",
    href: "/dashboard/reports",
    icon: FileText,
  },
  {
    name: "Resources",
    href: "/dashboard/resources",
    icon: Package,
  },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <motion.div
      initial={{ x: -280 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed left-0 top-0 z-30 h-screen w-64 bg-card border-r border-border shadow-xl"
    >
      {/* Logo Section */}
      <div className="flex items-center gap-3 p-6 border-b border-border">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center"
        >
          <Activity className="w-6 h-6" />
        </motion.div>
        <div>
          <h1 className="text-lg font-bold text-foreground">TechTitans</h1>
          <p className="text-sm text-muted-foreground">Health Monitor</p>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.href;
          const Icon = item.icon;

          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group relative ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      className={`w-5 h-5 transition-all duration-200 ${
                        isActive
                          ? "text-primary-foreground"
                          : "group-hover:scale-110"
                      }`}
                    />
                    <span className="font-medium">{item.name}</span>

                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute right-2 w-2 h-2 bg-primary-foreground rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}

                    {/* Hover effect */}
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10"
                      whileHover={{ scale: 1.02 }}
                    />
                  </>
                )}
              </NavLink>
            </motion.div>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="absolute bottom-4 left-4 right-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-card p-4 rounded-lg"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <div>
              <p className="text-sm font-medium text-foreground">
                System Status
              </p>
              <p className="text-xs text-muted-foreground">
                All systems operational
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
