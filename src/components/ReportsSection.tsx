import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./../firebase";
import CaseCard from "./reports/CaseCard";
import CaseDashboard from "./reports/CaseDashboard";

interface CaseSummary {
  id: string;
  title: string;
  type: string;
  generatedAt: string;
  status: string;
  size: string;
}

const ReportsSection = () => {
  const [cases, setCases] = useState<CaseSummary[]>([]);
  const [selectedCase, setSelectedCase] = useState<string | null>(null);

  useEffect(() => {
    const casesRef = collection(db, "forms");
    const unsubscribe = onSnapshot(casesRef, (snapshot) => {
      const caseList = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          title: `Case ${data.caseId}`,
          type: data.severity || "analysis",
          generatedAt: data.reportingDateTime || "Unknown",
          status: data.verificationStatus || "generated",
          size: "3 MB",
        } as CaseSummary;
      });
      setCases(caseList);
    });

    return () => unsubscribe();
  }, []);

  if (selectedCase) {
    return (
      <CaseDashboard
        caseId={selectedCase}
        onBack={() => setSelectedCase(null)}
      />
    );
  }

  return (
    <div className="space-y-4 shadow-lg p-8 rounded-lg my-10 dark:border dark: border-gray-700">
      {cases.length === 0 && <p>No cases found</p>}
      <h1 className="font-bold text-2xl mb-2">Reports</h1>
      {cases.map((c) => (
        <CaseCard key={c.id} {...c} onClick={() => setSelectedCase(c.id)} />
      ))}
    </div>
  );
};

export default ReportsSection;
