// CaseDashboard.tsx
import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { CaseDocument } from "../../types";

interface Props {
  caseId: string;
  onBack: () => void; // function to go back to report list
}

const CaseDashboard: React.FC<Props> = ({ caseId, onBack }) => {
  const [caseData, setCaseData] = useState<CaseDocument | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!caseId) return;

    const docRef = doc(db, "forms", caseId); // <-- correct collection name
    const unsubscribe = onSnapshot(
      docRef,
      (snapshot) => {
        if (snapshot.exists()) {
          setCaseData(snapshot.data() as CaseDocument);
        } else {
          console.log("No such document!");
          setCaseData(null);
        }
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching case:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [caseId]);

  if (loading) return <div>Loading case details...</div>;
  if (!caseData) return <div>No case data found</div>;

  return (
    <div className="p-4 space-y-2 border rounded shadow">
      <button
        className="px-3 py-1 bg-gray-200 rounded"
        onClick={onBack}
      >
        ← Back to Reports
      </button>

      <h2 className="text-xl font-semibold">Case ID: {caseData.caseId}</h2>
      <p>Patient: {caseData.patientName} ({caseData.patientAge} years)</p>
      <p>Gender: {caseData.gender}</p>
      <p>Severity: {caseData.severity}</p>
      <p>District: {caseData.districtName}</p>
      <p>Block: {caseData.blockName}</p>
      <p>Village: {caseData.villageName}</p>
      <p>Reporting Date: {caseData.reportingDateTime}</p>

      <p>Actions: {caseData.actions.length > 0 ? caseData.actions.join(", ") : "None"}</p>
      <p>Other Action: {caseData.otherAction || "N/A"}</p>

      <p>Symptoms: {caseData.symptoms.length > 0 ? caseData.symptoms.join(", ") : "None"}</p>
      <p>Other Symptom: {caseData.otherSymptom || "N/A"}</p>

      <p>Water Sources: {caseData.waterSources.length > 0 ? caseData.waterSources.join(", ") : "None"}</p>
      <p>Other Water Source: {caseData.otherWaterSource || "N/A"}</p>
      <p>Water Source Location: {caseData.waterSourceLocation}</p>

      <p>Assigned To: {caseData.assignedTo || "Not assigned"}</p>
      <p>Asha Worker: {caseData.ashaWorkerName} ({caseData.ashaWorkerId})</p>
      <p>Asha Mobile: {caseData.ashaMobile}</p>

      <p>Patient Aadhaar: {caseData.patientAadhaar}</p>
      <p>Patient Address: {caseData.patientAddress}</p>
      <p>Symptom Start Date: {caseData.symptomStartDate}</p>
      <p>Follow Up Required: {caseData.followUpRequired}</p>
      <p>Verification Status: {caseData.verificationStatus}</p>

      <p>Comments: {caseData.comments || "No comments"}</p>
      <p>Latitude: {caseData.latitude}</p>
      <p>Longitude: {caseData.longitude}</p>
    </div>
  );
};

export default CaseDashboard;
