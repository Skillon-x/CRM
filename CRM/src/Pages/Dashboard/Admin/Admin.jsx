import React from "react";
import Sidebar from "../../../components/Sidebar";
import TotalRevenueCard from "../../../components/TotalRevenueCard";
import TotalProfitCard from "../../../components/TotalProfitCard";
import TotalSalesCard from "../../../components/TotalSalesCard";
import OverallProgress from "../../../components/OverallProgress";
import OverdueTasks from "../../../components/OveerDueTasks";
import AssociatedClients from "../../../components/AssociatedClients";
import TeamsInvolvedChart from "../../../components/TeamsInvolvedChart";

const Admin = () => {
  return (
    <div className="flex h-screen bg-[#0B1739]">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="flex-grow p-6">
        <h1 className="text-white text-2xl mb-6">Dashboard</h1>
        
        {/* Summary Cards Section */}
        <div className="grid grid-cols-4 gap-4">
          <TotalRevenueCard />
          <TotalProfitCard />
          <TotalSalesCard />
          <AssociatedClients />
          
          {/* Expanded components to span 2 columns */}
          <div className="col-span-2">
            <OverallProgress />
          </div>
          <div className="col-span-2">
            <OverdueTasks />
          </div>
          <div className="col-span-4">
            <TeamsInvolvedChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;