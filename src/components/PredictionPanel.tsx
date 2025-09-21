import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { Brain, TrendingUp, AlertCircle, Info } from "lucide-react";

const predictionData = [
  { day: "Today", risk: 82, cases: 12 },
  { day: "Tomorrow", risk: 78, cases: 15 },
  { day: "Day 3", risk: 85, cases: 18 },
  { day: "Day 4", risk: 89, cases: 22 },
  { day: "Day 5", risk: 92, cases: 28 },
  { day: "Day 6", risk: 87, cases: 24 },
  { day: "Day 7", risk: 83, cases: 20 },
];

const factors = [
  { name: "Water Contamination", impact: 85, trend: "up" },
  { name: "Population Density", impact: 72, trend: "stable" },
  { name: "Recent Symptoms", impact: 91, trend: "up" },
  { name: "Seasonal Patterns", impact: 68, trend: "down" },
  { name: "Healthcare Access", impact: 45, trend: "stable" },
];

const PredictionPanel = () => {
  const currentRisk = 82;
  const [showExplanation, setShowExplanation] = useState(false);

  const getRiskColor = (risk: number) => {
    if (risk >= 80) return "text-destructive";
    if (risk >= 60) return "text-warning";
    return "text-secondary";
  };

  const getRiskBgColor = (risk: number) => {
    if (risk >= 80) return "bg-destructive/10";
    if (risk >= 60) return "bg-warning/10";
    return "bg-secondary/10";
  };

  return (
    <Card className="glass-card">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Brain className="w-5 h-5 text-primary" />
            AI Outbreak Prediction
          </CardTitle>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm" className="text-primary">
                <Info className="w-4 h-4 mr-1" />
                Explain
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>AI Prediction Explanation</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Our AI model analyzes multiple factors to predict outbreak
                  probability:
                </p>
                <div className="space-y-3">
                  {factors.map((factor, index) => (
                    <div
                      key={factor.name}
                      className="flex items-center justify-between p-3 rounded-lg bg-accent/50"
                    >
                      <span className="font-medium">{factor.name}</span>
                      <div className="flex items-center gap-2">
                        <Progress value={factor.impact} className="w-20" />
                        <span className="text-sm font-medium">
                          {factor.impact}%
                        </span>
                        <TrendingUp
                          className={`w-4 h-4 ${
                            factor.trend === "up"
                              ? "text-destructive"
                              : factor.trend === "down"
                              ? "text-secondary"
                              : "text-muted-foreground"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Current Risk Display */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`p-4 rounded-xl ${getRiskBgColor(
            currentRisk
          )} text-center`}
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <AlertCircle className={`w-8 h-8 ${getRiskColor(currentRisk)}`} />
            <span className="text-sm font-medium text-muted-foreground">
              7-Day Outbreak Risk
            </span>
          </div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className={`text-4xl font-bold ${getRiskColor(currentRisk)}`}
          >
            {currentRisk}%
          </motion.div>

          <p className="text-sm text-muted-foreground mt-2">
            High due to water contamination + symptom reports
          </p>
        </motion.div>

        {/* Prediction Chart */}
        <div className="h-[250px] py-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={predictionData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(var(--border))"
              />
              <XAxis
                dataKey="day"
                fontSize={12}
                stroke="hsl(var(--muted-foreground))"
              />
              <YAxis
                fontSize={12}
                stroke="hsl(var(--muted-foreground))"
                domain={[0, 100]}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Line
                type="monotone"
                dataKey="risk"
                stroke="hsl(var(--destructive))"
                strokeWidth={3}
                dot={{ fill: "hsl(var(--destructive))", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Risk Factors */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-destructive rounded-full" />
            <span>Water Quality: Critical</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-warning rounded-full" />
            <span>Population Density: High</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-destructive rounded-full" />
            <span>Symptom Reports: Rising</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-secondary rounded-full" />
            <span>Healthcare: Available</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PredictionPanel;
