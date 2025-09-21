import React from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Activity,
  Shield,
  Brain,
  MapPin,
  Users,
  ArrowRight,
  Globe,
  TrendingUp,
} from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Predictions",
      description:
        "Advanced machine learning algorithms predict disease outbreaks with 92% accuracy",
    },
    {
      icon: MapPin,
      title: "Real-time Mapping",
      description:
        "Interactive maps showing health status across 247 villages in Northeast India",
    },
    {
      icon: Shield,
      title: "Early Warning System",
      description:
        "Immediate alerts for health officials when risk patterns are detected",
    },
    {
      icon: Users,
      title: "Community Health",
      description:
        "Comprehensive monitoring of water quality, symptoms, and resource allocation",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-6"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mx-auto w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mb-8"
          >
            <Activity className="w-10 h-10 text-green-400" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-hero bg-clip-text text-transparent bg-orange-300">
              TechTitans
            </span>
            <br />
            <span className="text-foreground">Health Monitor</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Smart Community Health Monitoring & Early Warning System for
            Government Officials. Powered by AI to detect and prevent disease
            outbreaks before they spread.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={() => navigate("/login")}
              className="gradient-primary text-white px-8 py-3 text-lg font-semibold hover:shadow-xl transition-all duration-300 group"
            >
              Access Dashboard
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              onClick={() => navigate("/signup")}
              variant="outline"
              className="px-8 py-3 text-lg font-semibold hover:bg-accent transition-all duration-300"
            >
              Create Account
            </Button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">247</div>
              <div className="text-muted-foreground">Villages Monitored</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">92%</div>
              <div className="text-muted-foreground">Prediction Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warning mb-2">24/7</div>
              <div className="text-muted-foreground">Real-time Monitoring</div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced Health Surveillance Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for government health officials to monitor, predict, and
              respond to health emergencies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="glass-card p-6 rounded-xl text-center group hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="py-20 px-6 bg-gradient-to-r from-primary/5 to-secondary/5"
      >
        <div className="max-w-4xl mx-auto text-center">
          <Globe className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Protect Your Community?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join health officials across Northeast India using our AI-powered
            system to prevent disease outbreaks and save lives.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate("/signup")}
              className="gradient-hero text-white px-8 py-3 text-lg font-semibold hover:shadow-xl transition-all duration-300"
            >
              Get Started Today
            </Button>
            <Link
              to="/login"
              className="text-primary hover:text-primary/80 font-medium px-8 py-3 transition-colors"
            >
              Already have an account? Sign in →
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border bg-card/50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Activity className="w-5 h-5 text-primary" />
            <span className="font-semibold text-lg">
              TechTitans Health Monitor
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Smart Innovation Hackathon 2025 • Government of India Initiative
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
