
// ProjectsTable.jsx
import React from 'react';

export default function ProjectsTable({ projects }) {
  return (
    <div className="bg-blue-950 rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-white text-lg">Projects</h3>
        <span className="text-green-500">30 done this month</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-gray-400 text-sm">
              <th className="text-left pb-4">COMPANIES</th>
              <th className="text-left pb-4">MEMBERS</th>
              <th className="text-left pb-4">BUDGET</th>
              <th className="text-left pb-4">COMPLETION</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index} className="border-t border-blue-900">
                <td className="py-4 text-white">{project.name}</td>
                <td className="py-4">
                  <div className="flex -space-x-2">
                    {[...Array(project.members)].map((_, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-blue-400" />
                    ))}
                  </div>
                </td>
                <td className="py-4 text-white">
                  {project.budget ? `$${project.budget.toLocaleString()}` : 'Not set'}
                </td>
                <td className="py-4">
                  <div className="w-full bg-blue-900 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${project.completion}%` }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
  }