import React from "react";
import { Badge } from "@/components/ui/badge";

interface CaseCardProps {
  id: string;
  title: string;
  type: string;
  generatedAt: string;
  status: string;
  size: string;
  onClick: () => void;
}

const CaseCard: React.FC<CaseCardProps> = ({ title, type, generatedAt, status, size, onClick }) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "emergency": return "destructive";
      case "weekly": return "default";
      case "monthly": return "secondary";
      case "analysis": return "outline";
      default: return "default";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "generated": return "warning";
      case "downloaded": return "secondary";
      case "shared": return "default";
      default: return "default";
    }
  };

  return (
    <div
      onClick={onClick}
      className="p-4 border rounded-lg hover:bg-accent cursor-pointer transition"
    >
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-medium">{title}</h4>
        <div className="flex gap-2">
          <Badge variant={getTypeColor(type) as any} className="text-xs">{type.toUpperCase()}</Badge>
          <Badge variant={getStatusColor(status) as any} className="text-xs">{status.toUpperCase()}</Badge>
        </div>
      </div>
      <p className="text-xs text-muted-foreground">{generatedAt} • {size}</p>
    </div>
  );
};

export default CaseCard;
