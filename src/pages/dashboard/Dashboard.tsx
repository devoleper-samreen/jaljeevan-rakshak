import React from "react";
import { motion } from "framer-motion";
import {
  Activity,
  Users,
  Droplets,
  AlertTriangle,
  TrendingUp,
  MapPin,
  Brain,
  Package,
} from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import StatsCard from "@/components/StatsCard";
import HealthMap from "@/components/HealthMap";
import PredictionPanel from "@/components/PredictionPanel";
import AlertsFeed from "@/components/AlertsFeed";
import ResourceManagement from "@/components/ResourceManagement";
import ReportsSection from "@/components/ReportsSection";

const Dashboard = () => {
  const statsData = [
    {
      title: "Villages Monitored",
      value: 247,
      icon: MapPin,
      trend: 5,
      delay: 0.1,
      color: "primary" as const,
    },
    {
      title: "New Reports Today",
      value: 23,
      icon: Activity,
      trend: 12,
      delay: 0.2,
      color: "warning" as const,
    },
    {
      title: "Water Samples Tested",
      value: 156,
      icon: Droplets,
      trend: -3,
      delay: 0.3,
      color: "secondary" as const,
    },
    {
      title: "Active Alerts",
      value: 8,
      icon: AlertTriangle,
      trend: 45,
      delay: 0.4,
      color: "destructive" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="ml-64 p-6 space-y-6"
      >
        {/* Quick Stats Row */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {statsData.map((stat, index) => (
            <StatsCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              trend={stat.trend}
              delay={stat.delay}
              color={stat.color}
            />
          ))}
        </section>

        {/* Main Dashboard Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Interactive Map */}
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Northeast India Health Map
                </h2>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-secondary rounded-full" />
                    <span>Safe</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-warning rounded-full" />
                    <span>At Risk</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-destructive rounded-full animate-pulse" />
                    <span>High Risk</span>
                  </div>
                </div>
              </div>
              {/* <HealthMap /> */}
              <div className="h-[400px] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.58771473488!2d77.93473199679377!3d30.325550807284813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1758514834466!5m2!1sen!2sin"
                  width="600"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Reports Section */}
            <ReportsSection />
          </motion.div>

          {/* Right Column - Panels */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* AI Prediction Panel */}
            <PredictionPanel />

            {/* Live Alerts Feed */}
            <AlertsFeed />
          </motion.div>
        </section>

        {/* Bottom Section - Resource Management */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <ResourceManagement />
        </motion.section>

        {/* Loading Animation Overlay (shows on initial load) */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center pointer-events-none"
        >
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Activity className="w-8 h-8 text-white" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg font-semibold text-foreground"
            >
              Loading Health Monitor...
            </motion.p>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center py-6 border-t border-border mt-12"
        >
          <div className="flex items-center justify-center gap-2">
            <Activity className="w-4 h-4 text-primary" />
            <p className="text-sm text-muted-foreground">
              TechTitans Health Monitor • Smart Community Health Surveillance •
              SIH 2025
            </p>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Powered by AI • Real-time monitoring • Government approved
          </p>
        </motion.footer>
      </motion.main>
    </div>
  );
};

export default Dashboard;
