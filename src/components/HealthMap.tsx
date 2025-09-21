// import React, { useRef } from 'react';
// import { MapContainer, TileLayer, Circle, Tooltip } from 'react-leaflet';
// import { motion } from 'framer-motion';
// import type L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// interface VillageData {
//   id: string;
//   name: string;
//   position: [number, number];
//   cases: number;
//   waterQuality: 'Good' | 'Poor' | 'Critical';
//   outbreakRisk: number;
//   status: 'safe' | 'risk' | 'high-risk';
// }

// const mockVillageData: VillageData[] = [
//   { id: '1', name: 'Guwahati Central', position: [26.1445, 91.7362], cases: 12, waterQuality: 'Poor', outbreakRisk: 82, status: 'high-risk' },
//   { id: '2', name: 'Dibrugarh Town',  position: [27.4728, 94.9120], cases: 5,  waterQuality: 'Good', outbreakRisk: 35, status: 'risk' },
//   { id: '3', name: 'Silchar',           position: [24.8333, 92.7789], cases: 2,  waterQuality: 'Good', outbreakRisk: 15, status: 'safe' },
//   { id: '4', name: 'Tezpur',            position: [26.6341, 92.7789], cases: 8,  waterQuality: 'Critical', outbreakRisk: 67, status: 'high-risk' },
//   { id: '5', name: 'Jorhat',            position: [26.7509, 94.2037], cases: 3,  waterQuality: 'Poor', outbreakRisk: 42, status: 'risk' },
// ];

// const statusColor = (status: VillageData['status']) => ({
//   'safe': '#16a34a',
//   'risk': '#eab308',
//   'high-risk': '#dc2626',
// }[status]);

// const statusText = (status: VillageData['status']) => ({
//   'safe': 'Safe',
//   'risk': 'At Risk',
//   'high-risk': 'High Risk',
// }[status]);

// const HealthMap = () => {
//   const mapRef = useRef<L.Map | null>(null);

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.5, delay: 0.2 }}
//       className="h-[400px] w-full rounded-xl overflow-hidden shadow-lg border"
//     >
//       <MapContainer
//         center={[26.2006, 92.9376]}
//         zoom={7}
//         style={{ height: "100%", width: "100%" }}
//         ref={mapRef as any}
//       >
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />

//         {/* Risk circles */}
//         {mockVillageData.map((v) => (
//           <Circle
//             key={`circle-${v.id}`}
//             center={v.position}
//             pathOptions={{
//               color: statusColor(v.status),
//               fillColor: statusColor(v.status),
//               fillOpacity: 0.25,
//               weight: 2,
//             }}
//             radius={v.outbreakRisk * 200}
//             className={v.status === 'high-risk' ? 'animate-pulse-slow' : ''}
//           >
//             <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent={false}>
//               <div className="space-y-1">
//                 <div className="font-semibold">{v.name}</div>
//                 <div className="text-xs">{`New Cases: ${v.cases}`}</div>
//                 <div className="text-xs">{`Water Quality: ${v.waterQuality}`}</div>
//                 <div className="text-xs">{`Outbreak Risk: ${v.outbreakRisk}% (${statusText(v.status)})`}</div>
//               </div>
//             </Tooltip>
//           </Circle>

//         ))}
//       </MapContainer>
//     </motion.div>
//   );
// };

// export default HealthMap;

// import React, { useRef } from "react";
// import { MapContainer, TileLayer, Circle, Tooltip } from "react-leaflet";
// import { motion } from "framer-motion";
// import type L from "leaflet";
// import "leaflet/dist/leaflet.css";

// interface VillageData {
//   id: string;
//   name: string;
//   position: [number, number];
//   cases: number;
//   waterQuality: "Good" | "Poor" | "Critical";
//   outbreakRisk: number;
//   status: "safe" | "risk" | "high-risk";
// }

// const mockVillageData: VillageData[] = [
//   {
//     id: "1",
//     name: "Guwahati Central",
//     position: [26.1445, 91.7362],
//     cases: 12,
//     waterQuality: "Poor",
//     outbreakRisk: 82,
//     status: "high-risk",
//   },
//   {
//     id: "2",
//     name: "Dibrugarh Town",
//     position: [27.4728, 94.912],
//     cases: 5,
//     waterQuality: "Good",
//     outbreakRisk: 35,
//     status: "risk",
//   },
//   {
//     id: "3",
//     name: "Silchar",
//     position: [24.8333, 92.7789],
//     cases: 2,
//     waterQuality: "Good",
//     outbreakRisk: 15,
//     status: "safe",
//   },
//   {
//     id: "4",
//     name: "Tezpur",
//     position: [26.6341, 92.7789],
//     cases: 8,
//     waterQuality: "Critical",
//     outbreakRisk: 67,
//     status: "high-risk",
//   },
//   {
//     id: "5",
//     name: "Jorhat",
//     position: [26.7509, 94.2037],
//     cases: 3,
//     waterQuality: "Poor",
//     outbreakRisk: 42,
//     status: "risk",
//   },
// ];

// const statusColor = (status: VillageData["status"]) =>
//   ({
//     safe: "#16a34a",
//     risk: "#eab308",
//     "high-risk": "#dc2626",
//   }[status]);

// const statusText = (status: VillageData["status"]) =>
//   ({
//     safe: "Safe",
//     risk: "At Risk",
//     "high-risk": "High Risk",
//   }[status]);

// const HealthMap = () => {
//   const mapRef = useRef<L.Map | null>(null);

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.5, delay: 0.2 }}
//       className="h-[400px] w-full rounded-xl overflow-hidden shadow-lg border"
//     >
//       <MapContainer
//         center={[26.2006, 92.9376]}
//         zoom={7}
//         style={{ height: "100%", width: "100%" }}
//         ref={mapRef as any}
//       >
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />

//         {/* Risk circles */}
//         {mockVillageData.map((v) => (
//           <Circle
//             key={`circle-${v.id}`}
//             center={v.position}
//             pathOptions={{
//               color: statusColor(v.status),
//               fillColor: statusColor(v.status),
//               fillOpacity: 0.25,
//               weight: 2,
//             }}
//             radius={v.outbreakRisk * 200}
//             className={v.status === "high-risk" ? "animate-pulse-slow" : ""}
//           >
//             {(layer) => (
//               <Tooltip
//                 direction="top"
//                 offset={[0, -10]}
//                 opacity={1}
//                 permanent={false}
//               >
//                 <div className="space-y-1">
//                   <div className="font-semibold">{v.name}</div>
//                   <div className="text-xs">{`New Cases: ${v.cases}`}</div>
//                   <div className="text-xs">{`Water Quality: ${v.waterQuality}`}</div>
//                   <div className="text-xs">{`Outbreak Risk: ${
//                     v.outbreakRisk
//                   }% (${statusText(v.status)})`}</div>
//                 </div>
//               </Tooltip>
//             )}
//           </Circle>
//         ))}
//       </MapContainer>
//     </motion.div>
//   );
// };

// export default HealthMap;

// import React, { useRef } from "react";
// import { MapContainer, TileLayer, Circle, Tooltip } from "react-leaflet";
// import { motion } from "framer-motion";
// import type L from "leaflet";
// import "leaflet/dist/leaflet.css";

// interface VillageData {
//   id: string;
//   name: string;
//   position: [number, number];
//   cases: number;
//   waterQuality: "Good" | "Poor" | "Critical";
//   outbreakRisk: number;
//   status: "safe" | "risk" | "high-risk";
// }

// const mockVillageData: VillageData[] = [
//   {
//     id: "1",
//     name: "Guwahati Central",
//     position: [26.1445, 91.7362],
//     cases: 12,
//     waterQuality: "Poor",
//     outbreakRisk: 82,
//     status: "high-risk",
//   },
//   {
//     id: "2",
//     name: "Dibrugarh Town",
//     position: [27.4728, 94.912],
//     cases: 5,
//     waterQuality: "Good",
//     outbreakRisk: 35,
//     status: "risk",
//   },
//   {
//     id: "3",
//     name: "Silchar",
//     position: [24.8333, 92.7789],
//     cases: 2,
//     waterQuality: "Good",
//     outbreakRisk: 15,
//     status: "safe",
//   },
//   {
//     id: "4",
//     name: "Tezpur",
//     position: [26.6341, 92.7789],
//     cases: 8,
//     waterQuality: "Critical",
//     outbreakRisk: 67,
//     status: "high-risk",
//   },
//   {
//     id: "5",
//     name: "Jorhat",
//     position: [26.7509, 94.2037],
//     cases: 3,
//     waterQuality: "Poor",
//     outbreakRisk: 42,
//     status: "risk",
//   },
// ];

// const statusColor = (status: VillageData["status"]) =>
//   ({
//     safe: "#16a34a",
//     risk: "#eab308",
//     "high-risk": "#dc2626",
//   }[status]);

// const statusText = (status: VillageData["status"]) =>
//   ({
//     safe: "Safe",
//     risk: "At Risk",
//     "high-risk": "High Risk",
//   }[status]);

// const HealthMap = () => {
//   const mapRef = useRef<L.Map | null>(null);

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.5, delay: 0.2 }}
//       className="h-[400px] w-full rounded-xl overflow-hidden shadow-lg border"
//     >
//       <MapContainer
//         center={[26.2006, 92.9376]}
//         zoom={7}
//         style={{ height: "100%", width: "100%" }}
//         ref={mapRef as any}
//       >
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />

//         {/* Risk circles */}
//         {mockVillageData.map((v) => (
//           <Circle
//             key={v.id}
//             center={v.position}
//             pathOptions={{
//               color: statusColor(v.status),
//               fillColor: statusColor(v.status),
//               fillOpacity: 0.25,
//               weight: 2,
//             }}
//             radius={v.outbreakRisk * 200}
//             className={v.status === "high-risk" ? "animate-pulse-slow" : ""}
//           >
//             <Tooltip
//               direction="top"
//               offset={[0, -10]}
//               opacity={1}
//               permanent={false}
//             >
//               <div className="space-y-1">
//                 <div className="font-semibold">{v.name}</div>
//                 <div className="text-xs">{`New Cases: ${v.cases}`}</div>
//                 <div className="text-xs">{`Water Quality: ${v.waterQuality}`}</div>
//                 <div className="text-xs">{`Outbreak Risk: ${
//                   v.outbreakRisk
//                 }% (${statusText(v.status)})`}</div>
//               </div>
//             </Tooltip>
//           </Circle>
//         ))}
//       </MapContainer>
//     </motion.div>
//   );
// };

// export default HealthMap;

// import React, { useRef } from "react";
// import { MapContainer, TileLayer, Circle, Tooltip } from "react-leaflet";
// import { motion } from "framer-motion";
// import type { Map as LeafletMap } from "leaflet";
// import "leaflet/dist/leaflet.css";

// interface VillageData {
//   id: string;
//   name: string;
//   position: [number, number];
//   cases: number;
//   waterQuality: "Good" | "Poor" | "Critical";
//   outbreakRisk: number;
//   status: "safe" | "risk" | "high-risk";
// }

// const mockVillageData: VillageData[] = [
//   {
//     id: "1",
//     name: "Guwahati Central",
//     position: [26.1445, 91.7362],
//     cases: 12,
//     waterQuality: "Poor",
//     outbreakRisk: 82,
//     status: "high-risk",
//   },
//   {
//     id: "2",
//     name: "Dibrugarh Town",
//     position: [27.4728, 94.912],
//     cases: 5,
//     waterQuality: "Good",
//     outbreakRisk: 35,
//     status: "risk",
//   },
//   {
//     id: "3",
//     name: "Silchar",
//     position: [24.8333, 92.7789],
//     cases: 2,
//     waterQuality: "Good",
//     outbreakRisk: 15,
//     status: "safe",
//   },
//   {
//     id: "4",
//     name: "Tezpur",
//     position: [26.6341, 92.7789],
//     cases: 8,
//     waterQuality: "Critical",
//     outbreakRisk: 67,
//     status: "high-risk",
//   },
//   {
//     id: "5",
//     name: "Jorhat",
//     position: [26.7509, 94.2037],
//     cases: 3,
//     waterQuality: "Poor",
//     outbreakRisk: 42,
//     status: "risk",
//   },
// ];

// const statusColor = (status: VillageData["status"]) =>
//   ({
//     safe: "#16a34a",
//     risk: "#eab308",
//     "high-risk": "#dc2626",
//   }[status]);

// const statusText = (status: VillageData["status"]) =>
//   ({
//     safe: "Safe",
//     risk: "At Risk",
//     "high-risk": "High Risk",
//   }[status]);

// const HealthMap = () => {
//   const mapRef = useRef<LeafletMap | null>(null);

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.5, delay: 0.2 }}
//       className="h-[400px] w-full rounded-xl overflow-hidden shadow-lg border"
//     >
//       <MapContainer
//         center={[26.2006, 92.9376]}
//         zoom={7}
//         style={{ height: "100%", width: "100%" }}
//         // whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
//         // whenReady={(event) => {
//         //   mapRef.current = event.target; // This gives you the map instance
//         // }}
//         //ref={mapRef as React.Ref<Map>}
//       >
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />

//         {mockVillageData.map((v) => (
//           <Circle
//             key={v.id}
//             center={v.position}
//             pathOptions={{
//               color: statusColor(v.status),
//               fillColor: statusColor(v.status),
//               fillOpacity: 0.25,
//               weight: 2,
//             }}
//             radius={v.outbreakRisk * 200}
//             className={v.status === "high-risk" ? "animate-pulse-slow" : ""}
//           >
//             <Tooltip
//               direction="top"
//               offset={[0, -10]}
//               opacity={1}
//               permanent={false}
//             >
//               <div className="space-y-1">
//                 <div className="font-semibold">{v.name}</div>
//                 <div className="text-xs">{`New Cases: ${v.cases}`}</div>
//                 <div className="text-xs">{`Water Quality: ${v.waterQuality}`}</div>
//                 <div className="text-xs">{`Outbreak Risk: ${
//                   v.outbreakRisk
//                 }% (${statusText(v.status)})`}</div>
//               </div>
//             </Tooltip>
//           </Circle>
//         ))}
//       </MapContainer>
//     </motion.div>
//   );
// };

// export default HealthMap;

// import React, { useRef } from "react";
// import { MapContainer, TileLayer, Circle, Tooltip } from "react-leaflet";
// import { motion } from "framer-motion";
// import "leaflet/dist/leaflet.css";

// // Mock village data
// const mockVillageData = [
//   {
//     id: "1",
//     name: "Guwahati Central",
//     position: [26.1445, 91.7362],
//     cases: 12,
//     waterQuality: "Poor",
//     outbreakRisk: 82,
//     status: "high-risk",
//   },
//   {
//     id: "2",
//     name: "Dibrugarh Town",
//     position: [27.4728, 94.912],
//     cases: 5,
//     waterQuality: "Good",
//     outbreakRisk: 35,
//     status: "risk",
//   },
//   {
//     id: "3",
//     name: "Silchar",
//     position: [24.8333, 92.7789],
//     cases: 2,
//     waterQuality: "Good",
//     outbreakRisk: 15,
//     status: "safe",
//   },
//   {
//     id: "4",
//     name: "Tezpur",
//     position: [26.6341, 92.7789],
//     cases: 8,
//     waterQuality: "Critical",
//     outbreakRisk: 67,
//     status: "high-risk",
//   },
//   {
//     id: "5",
//     name: "Jorhat",
//     position: [26.7509, 94.2037],
//     cases: 3,
//     waterQuality: "Poor",
//     outbreakRisk: 42,
//     status: "risk",
//   },
// ];

// const statusColor = (status) =>
//   ({
//     safe: "#16a34a",
//     risk: "#eab308",
//     "high-risk": "#dc2626",
//   }[status]);

// const statusText = (status) =>
//   ({
//     safe: "Safe",
//     risk: "At Risk",
//     "high-risk": "High Risk",
//   }[status]);

// const HealthMap = () => {
//   const mapRef = useRef(null);

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.5, delay: 0.2 }}
//       className="h-[500px] w-full rounded-xl overflow-hidden shadow-lg border"
//     >
//       <MapContainer
//         center={[26.2006, 92.9376]}
//         zoom={7}
//         style={{ height: "100%", width: "100%" }}
//         ref={mapRef}
//       >
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />

//         {mockVillageData.map((v) => (
//           <Circle
//             key={v.id}
//             center={v.position as [number, number]}
//             pathOptions={{
//               color: statusColor(v.status),
//               fillColor: statusColor(v.status),
//               fillOpacity: 0.3,
//               weight: 2,
//             }}
//             radius={v.outbreakRisk * 200}
//           >
//             <Tooltip
//               direction="top"
//               offset={[0, -10]}
//               opacity={1}
//               permanent={false}
//             >
//               <div className="space-y-1">
//                 <div className="font-semibold">{v.name}</div>
//                 <div className="text-xs">{`New Cases: ${v.cases}`}</div>
//                 <div className="text-xs">{`Water Quality: ${v.waterQuality}`}</div>
//                 <div className="text-xs">{`Outbreak Risk: ${
//                   v.outbreakRisk
//                 }% (${statusText(v.status)})`}</div>
//               </div>
//             </Tooltip>
//           </Circle>
//         ))}
//       </MapContainer>
//     </motion.div>
//   );
// };

// export default HealthMap;

import React from "react";
import Map, { Marker, Popup } from "react-map-gl";
import { motion } from "framer-motion";

// Mock village data
const mockVillageData = [
  {
    id: "1",
    name: "Guwahati Central",
    position: [26.1445, 91.7362],
    cases: 12,
    waterQuality: "Poor",
    outbreakRisk: 82,
    status: "high-risk",
  },
  {
    id: "2",
    name: "Dibrugarh Town",
    position: [27.4728, 94.912],
    cases: 5,
    waterQuality: "Good",
    outbreakRisk: 35,
    status: "risk",
  },
  {
    id: "3",
    name: "Silchar",
    position: [24.8333, 92.7789],
    cases: 2,
    waterQuality: "Good",
    outbreakRisk: 15,
    status: "safe",
  },
  {
    id: "4",
    name: "Tezpur",
    position: [26.6341, 92.7789],
    cases: 8,
    waterQuality: "Critical",
    outbreakRisk: 67,
    status: "high-risk",
  },
  {
    id: "5",
    name: "Jorhat",
    position: [26.7509, 94.2037],
    cases: 3,
    waterQuality: "Poor",
    outbreakRisk: 42,
    status: "risk",
  },
];

const statusColor = (status) =>
  ({
    safe: "bg-green-500",
    risk: "bg-yellow-400",
    "high-risk": "bg-red-500",
  }[status]);

const statusText = (status) =>
  ({
    safe: "Safe",
    risk: "At Risk",
    "high-risk": "High Risk",
  }[status]);

const HealthMap = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="h-[500px] w-full rounded-xl overflow-hidden shadow-lg border"
    >
      <Map
        initialViewState={{
          latitude: 26.2006,
          longitude: 92.9376,
          zoom: 7,
        }}
        style={{ width: "100%", height: "100%" }}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      >
        {mockVillageData.map((v) => (
          <Marker key={v.id} longitude={v.position[1]} latitude={v.position[0]}>
            <motion.div
              className={`w-5 h-5 rounded-full ${statusColor(v.status)}`}
              animate={v.status === "high-risk" ? { scale: [1, 1.5, 1] } : {}}
              transition={
                v.status === "high-risk"
                  ? { repeat: Infinity, duration: 1 }
                  : {}
              }
              title={`${v.name} - ${statusText(v.status)}`}
            ></motion.div>
          </Marker>
        ))}
      </Map>
    </motion.div>
  );
};

export default HealthMap;
