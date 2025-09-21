import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  trend?: number;
  delay?: number;
  color?: 'primary' | 'secondary' | 'warning' | 'destructive';
  suffix?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  icon: Icon,
  trend,
  delay = 0,
  color = 'primary',
  suffix = ''
}) => {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      let startValue = 0;
      const duration = 2000;
      const increment = value / (duration / 10);

      const counter = setInterval(() => {
        startValue += increment;
        if (startValue >= value) {
          setAnimatedValue(value);
          clearInterval(counter);
        } else {
          setAnimatedValue(Math.floor(startValue));
        }
      }, 10);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  const colorClasses = {
    primary: 'text-primary bg-primary/10',
    secondary: 'text-secondary bg-secondary/10',
    warning: 'text-warning bg-warning/10',
    destructive: 'text-destructive bg-destructive/10',
  };

  const trendColor = trend && trend > 0 ? 'text-destructive' : trend && trend < 0 ? 'text-secondary' : 'text-muted-foreground';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: delay,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ scale: 1.02, y: -2 }}
      className="group"
    >
      <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 glass-card">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">
                {title}
              </p>
              <div className="flex items-baseline space-x-2">
                <motion.p 
                  className="text-3xl font-bold text-foreground animate-count-up"
                  key={animatedValue}
                >
                  {animatedValue.toLocaleString()}{suffix}
                </motion.p>
                {trend !== undefined && (
                  <span className={`text-sm font-medium ${trendColor}`}>
                    {trend > 0 ? '+' : ''}{trend}%
                  </span>
                )}
              </div>
            </div>
            
            <motion.div
              className={`p-3 rounded-xl ${colorClasses[color]} group-hover:scale-110 transition-all duration-300`}
              whileHover={{ rotate: 10 }}
            >
              <Icon className="h-6 w-6" />
            </motion.div>
          </div>

          {/* Animated border gradient */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default StatsCard;