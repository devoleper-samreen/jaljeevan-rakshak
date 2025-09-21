import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, Calendar, Share, TrendingUp } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface Report {
  id: string;
  title: string;
  type: 'weekly' | 'monthly' | 'emergency' | 'analysis';
  generatedAt: string;
  status: 'generated' | 'downloaded' | 'shared';
  size: string;
}

const mockReports: Report[] = [
  {
    id: '1',
    title: 'Weekly Health Summary',
    type: 'weekly',
    generatedAt: '2 hours ago',
    status: 'generated',
    size: '2.4 MB'
  },
  {
    id: '2',
    title: 'Emergency Outbreak Report',
    type: 'emergency',
    generatedAt: '1 day ago',
    status: 'shared',
    size: '5.1 MB'
  },
  {
    id: '3',
    title: 'Monthly Analysis Report',
    type: 'monthly',
    generatedAt: '3 days ago',
    status: 'downloaded',
    size: '8.7 MB'
  },
  {
    id: '4',
    title: 'Water Quality Analysis',
    type: 'analysis',
    generatedAt: '1 week ago',
    status: 'generated',
    size: '3.2 MB'
  }
];

const ReportsSection = () => {
  const [reports, setReports] = useState(mockReports);
  const [generatingReport, setGeneratingReport] = useState(false);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'emergency': return 'destructive';
      case 'weekly': return 'default';
      case 'monthly': return 'secondary';
      case 'analysis': return 'outline';
      default: return 'default';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'generated': return 'warning';
      case 'downloaded': return 'secondary';
      case 'shared': return 'default';
      default: return 'default';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'emergency': return '🚨';
      case 'weekly': return '📊';
      case 'monthly': return '📈';
      case 'analysis': return '🔬';
      default: return '📄';
    }
  };

  const handleDownload = (reportId: string, title: string) => {
    setReports(prev => prev.map(report =>
      report.id === reportId
        ? { ...report, status: 'downloaded' as const }
        : report
    ));
    
    toast({
      title: "Download Started",
      description: `${title} is being downloaded...`,
    });
  };

  const handleShare = (reportId: string, title: string) => {
    setReports(prev => prev.map(report =>
      report.id === reportId
        ? { ...report, status: 'shared' as const }
        : report
    ));
    
    toast({
      title: "Report Shared",
      description: `${title} has been shared with government portal.`,
    });
  };

  const generateNewReport = () => {
    setGeneratingReport(true);
    
    setTimeout(() => {
      const newReport: Report = {
        id: Date.now().toString(),
        title: 'Current Health Status Report',
        type: 'emergency',
        generatedAt: 'Just now',
        status: 'generated',
        size: '4.2 MB'
      };
      
      setReports(prev => [newReport, ...prev]);
      setGeneratingReport(false);
      
      toast({
        title: "Report Generated",
        description: "New health status report is ready for download.",
      });
    }, 3000);
  };

  return (
    <Card className="glass-card">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            Reports & Analytics
          </CardTitle>
          <Button
            onClick={generateNewReport}
            disabled={generatingReport}
            className="gradient-primary text-white"
            size="sm"
          >
            {generatingReport ? (
              <>
                <TrendingUp className="w-4 h-4 mr-2 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <FileText className="w-4 h-4 mr-2" />
                Generate Report
              </>
            )}
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        {reports.map((report, index) => (
          <motion.div
            key={report.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{getTypeIcon(report.type)}</span>
                <div>
                  <h4 className="font-medium text-sm">{report.title}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant={getTypeColor(report.type) as any} className="text-xs">
                      {report.type.toUpperCase()}
                    </Badge>
                    <Badge variant={getStatusColor(report.status) as any} className="text-xs">
                      {report.status.toUpperCase()}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{report.generatedAt}</span>
                  <span className="mx-2">•</span>
                  <span>{report.size}</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="h-7 px-3 text-xs"
                  onClick={() => handleDownload(report.id, report.title)}
                  disabled={report.status === 'downloaded'}
                >
                  <Download className="w-3 h-3 mr-1" />
                  {report.status === 'downloaded' ? 'Downloaded' : 'Download'}
                </Button>
                
                <Button
                  size="sm"
                  variant="outline"
                  className="h-7 px-3 text-xs"
                  onClick={() => handleShare(report.id, report.title)}
                  disabled={report.status === 'shared'}
                >
                  <Share className="w-3 h-3 mr-1" />
                  {report.status === 'shared' ? 'Shared' : 'Share'}
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ReportsSection;