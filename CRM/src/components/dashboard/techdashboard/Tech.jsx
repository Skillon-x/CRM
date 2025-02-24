import React from "react";
import { DollarSign, Users, UserPlus, ShoppingBag } from 'lucide-react';
import Sidebar from "../layout/Sidebar";
import WelcomeWidget from "../components/welcome/WelcomeWidget";
import ProgressCircle from "../components/progress/ProgressCircle";
import WorkOverviewChart from "../components/charts/WorkOverview";
import ActiveWorkersChart from "../components/charts/ActiveWorkers";
import ProjectsTable from "../components/projects/ProjectsTable";
import StatCard from "../components/cards/StatCard";
import { monthlyData, projects, activeWorkersData } from '../../dashboard/data/mockData';


export default function Tech() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-950 to-blue-900">
        <Sidebar />
        
        <div className="ml-64 p-6">
          {/* Stats Row */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <StatCard
              icon={<DollarSign className="h-5 w-5 text-blue-400" />}
              title="Today's Money"
              value="$53,000"
              change="+55%"
            />
            <StatCard
              icon={<Users className="h-5 w-5 text-blue-400" />}
              title="Workers"
              value="2,300"
              change="+5%"
            />
            <StatCard
              icon={<UserPlus className="h-5 w-5 text-blue-400" />}
              title="New Clients"
              value="+3,052"
              change="-14%"
            />
            <StatCard
              icon={<ShoppingBag className="h-5 w-5 text-blue-400" />}
              title="Total Sales"
              value="$173,000"
              change="+8%"
            />
          </div>
  
          {/* Main Grid Layout */}
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-4">
              <WelcomeWidget />
            </div>
  
            <div className="col-span-4">
              <ProgressCircle
                title="Work progress"
                subtitle="From all projects"
                percentage={95}
                gradientColors={['#0284c7', '#38bdf8']}
              />
            </div>
  
            <div className="col-span-4">
              <ProgressCircle
                title="Safety Score"
                subtitle="Total Score"
                percentage={93}
                gradientColors={['#10b981', '#34d399']}
              />
            </div>
  
            <div className="col-span-6">
              <WorkOverviewChart data={monthlyData} />
            </div>
  
            <div className="col-span-6">
              <ActiveWorkersChart data={activeWorkersData} />
            </div>
          </div>
  
          {/* Projects Table */}
          <div className="mt-6">
            <ProjectsTable projects={projects} />
          </div>
        </div>
      </div>
    );
  }