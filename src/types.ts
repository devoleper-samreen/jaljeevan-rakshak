// types.ts
export interface CaseDocument {
  actions: string[];
  ashaMobile: string;
  ashaWorkerId: string;
  ashaWorkerName: string;
  assignedTo: string | null;
  blockName: string;
  caseId: string;
  comments: string;
  districtName: string;
  followUpRequired: string;
  gender: string;
  latitude: string;
  longitude: string;
  otherAction: string | null;
  otherSymptom: string | null;
  otherWaterSource: string | null;
  patientAadhaar: string;
  patientAddress: string;
  patientAge: string;
  patientName: string;
  reportingDateTime: string;
  severity: string;
  symptomStartDate: string;
  symptoms: string[];
  verificationStatus: string;
  villageName: string;
  waterSourceLocation: string;
  waterSources: string[];
}
