import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Package, Truck, CheckCircle, Clock, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Resource {
  id: string;
  type: "medical" | "water" | "food" | "personnel";
  item: string;
  location: string;
  quantity: number;
  status: "pending" | "dispatched" | "delivered";
  priority: "high" | "medium" | "low";
  requestedAt: string;
}

const mockResources: Resource[] = [
  {
    id: "1",
    type: "medical",
    item: "ORS Packets",
    location: "Guwahati Central",
    quantity: 500,
    status: "pending",
    priority: "high",
    requestedAt: "2 hours ago",
  },
  {
    id: "2",
    type: "water",
    item: "Clean Water Supply",
    location: "Tezpur",
    quantity: 1000,
    status: "dispatched",
    priority: "high",
    requestedAt: "4 hours ago",
  },
  {
    id: "3",
    type: "medical",
    item: "Antibiotics",
    location: "Jorhat",
    quantity: 200,
    status: "delivered",
    priority: "medium",
    requestedAt: "1 day ago",
  },
  {
    id: "4",
    type: "personnel",
    item: "Medical Team",
    location: "Silchar",
    quantity: 5,
    status: "pending",
    priority: "medium",
    requestedAt: "3 hours ago",
  },
  {
    id: "5",
    type: "water",
    item: "Water Purification",
    location: "Dibrugarh",
    quantity: 10,
    status: "dispatched",
    priority: "high",
    requestedAt: "6 hours ago",
  },
];

const ResourceManagement = () => {
  const [resources, setResources] = useState(mockResources);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return Clock;
      case "dispatched":
        return Truck;
      case "delivered":
        return CheckCircle;
      default:
        return Package;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "warning";
      case "dispatched":
        return "default";
      case "delivered":
        return "secondary";
      default:
        return "default";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
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

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "medical":
        return "💊";
      case "water":
        return "💧";
      case "food":
        return "🍞";
      case "personnel":
        return "👨‍⚕️";
      default:
        return "📦";
    }
  };

  const handleDispatch = (resourceId: string) => {
    setResources((prev) =>
      prev.map((resource) =>
        resource.id === resourceId
          ? { ...resource, status: "dispatched" as const }
          : resource
      )
    );

    toast({
      title: "Resource Dispatched",
      description: "Resource has been marked as dispatched and is on the way.",
    });
  };

  const handleMarkDelivered = (resourceId: string) => {
    setResources((prev) =>
      prev.map((resource) =>
        resource.id === resourceId
          ? { ...resource, status: "delivered" as const }
          : resource
      )
    );

    toast({
      title: "Delivery Confirmed",
      description: "Resource has been successfully delivered.",
    });
  };

  return (
    <Card className="glass-card h-full w-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Package className="w-5 h-5 text-primary" />
          Resource Management
        </CardTitle>
      </CardHeader>

      <CardContent className="p-0">
        <ScrollArea className="h-[460px] px-6">
          <div className="space-y-3">
            {resources.map((resource, index) => {
              const StatusIcon = getStatusIcon(resource.status);

              return (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">
                        {getTypeIcon(resource.type)}
                      </span>
                      <div>
                        <h4 className="font-medium text-sm">{resource.item}</h4>
                        <p className="text-xs text-muted-foreground">
                          {resource.location}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Badge
                        variant={getPriorityColor(resource.priority) as any}
                        className="text-xs"
                      >
                        {resource.priority.toUpperCase()}
                      </Badge>
                      <Badge
                        variant={getStatusColor(resource.status) as any}
                        className="text-xs flex items-center gap-1"
                      >
                        <StatusIcon className="w-3 h-3" />
                        {resource.status.toUpperCase()}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">
                      <span>Qty: {resource.quantity}</span>
                      <span className="mx-2">•</span>
                      <span>{resource.requestedAt}</span>
                    </div>

                    <div className="flex gap-2">
                      {resource.status === "pending" && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-7 px-3 text-xs"
                          onClick={() => handleDispatch(resource.id)}
                        >
                          <Send className="w-3 h-3 mr-1" />
                          Dispatch
                        </Button>
                      )}

                      {resource.status === "dispatched" && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-7 px-3 text-xs"
                          onClick={() => handleMarkDelivered(resource.id)}
                        >
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Mark Delivered
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default ResourceManagement;
