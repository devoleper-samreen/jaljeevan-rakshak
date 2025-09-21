import React from "react";
import ResourceManagement from "@/components/ResourceManagement";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

function Resources() {
  return (
    <div className="min-h-screen bg-background">
      {/* <Sidebar />
      <Navbar />
      {/* <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <ResourceManagement />
      </motion.section> */}
      <div className="my-10 h-[83vh] w-[76vw] ml-64">
        <ResourceManagement />
      </div>
    </div>
  );
}

export default Resources;
