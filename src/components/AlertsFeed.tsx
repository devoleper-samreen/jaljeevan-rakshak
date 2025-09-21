import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertTriangle, Droplets, Users, Shield } from "lucide-react";

interface Alert {
  id: string;
  type: "outbreak" | "water" | "resource" | "system";
  severity: "high" | "medium" | "low";
  message: string;
  location: string;
  timestamp: string;
  icon: any;
}

const mockAlerts: Alert[] = [
  {
    id: "1",
    type: "outbreak",
    severity: "high",
    message: "5 new diarrhea cases reported",
    location: "Guwahati Central",
    timestamp: "2 minutes ago",
    icon: AlertTriangle,
  },
  {
    id: "2",
    type: "water",
    severity: "medium",
    message: "Poor water quality detected",
    location: "Tezpur region",
    timestamp: "15 minutes ago",
    icon: Droplets,
  },
  {
    id: "3",
    type: "outbreak",
    severity: "medium",
    message: "3 respiratory illness cases",
    location: "Jorhat district",
    timestamp: "32 minutes ago",
    icon: Users,
  },
  {
    id: "4",
    type: "resource",
    severity: "low",
    message: "Medical supplies dispatched",
    location: "Silchar",
    timestamp: "1 hour ago",
    icon: Shield,
  },
  {
    id: "5",
    type: "system",
    severity: "low",
    message: "System maintenance completed",
    location: "Regional server",
    timestamp: "2 hours ago",
    icon: Shield,
  },
  {
    id: "6",
    type: "water",
    severity: "high",
    message: "Critical contamination levels",
    location: "Dibrugarh water source",
    timestamp: "3 hours ago",
    icon: Droplets,
  },
];

const AlertsFeed = () => {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "destructive";
      case "medium":
        return "default";
      case "low":
        return "secondary";
      default:
        return "default";
    }
  };

  const getSeverityDot = (severity: string) => {
    switch (severity) {
      case "high":
        return "bg-destructive";
      case "medium":
        return "bg-warning";
      case "low":
        return "bg-secondary";
      default:
        return "bg-muted";
    }
  };

  return (
    <Card className="glass-card h-[550px]">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Live Alerts</CardTitle>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Live</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <ScrollArea className="h-[450px] px-6">
          <div className="space-y-3">
            {mockAlerts.map((alert, index) => {
              const IconComponent = alert.icon;

              return (
                <motion.div
                  key={alert.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer group"
                >
                  <div
                    className={`p-2 rounded-full ${
                      alert.severity === "high"
                        ? "bg-destructive/10 text-destructive"
                        : alert.severity === "medium"
                        ? "bg-warning/10 text-warning"
                        : "bg-secondary/10 text-secondary"
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </div>

                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {alert.message}
                      </p>
                      <Badge
                        variant={getSeverityColor(alert.severity) as any}
                        className="text-xs px-2 py-0.5"
                      >
                        {alert.severity.toUpperCase()}
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{alert.location}</span>
                      <span>{alert.timestamp}</span>
                    </div>
                  </div>

                  <div
                    className={`w-2 h-2 rounded-full ${getSeverityDot(
                      alert.severity
                    )} group-hover:scale-125 transition-transform`}
                  />
                </motion.div>
              );
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default AlertsFeed;
