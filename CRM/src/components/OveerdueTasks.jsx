import React from 'react';

function OverdueTasks() {
  const tasks = [
    { id: '#1532', checked: true, date: 'Dec 30, 10:06 AM', priority: 'High' },
    { id: '#1531', checked: false, date: 'Dec 29, 2:59 AM', priority: 'Medium' },
    { id: '#1530', checked: false, date: 'Dec 29, 12:54 AM', priority: 'Medium' },
    { id: '#1529', checked: true, date: 'Dec 28, 2:32 PM', priority: 'High' },
    { id: '#1528', checked: false, date: 'Dec 27, 2:20 PM', priority: 'Low' },
    { id: '#1527', checked: false, date: 'Dec 26, 9:48 AM', priority: 'Medium' }
  ];

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'High': return 'text-red-500';
      case 'Medium': return 'text-yellow-500';
      case 'Low': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="bg-[#0A1F3A] rounded-2xl p-6 text-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Overdue Tasks</h2>
        <div className="text-sm text-gray-400">
          Jan 2025 ▼
        </div>
      </div>
      
      <div className="space-y-3">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center justify-between bg-[#112040] rounded-lg p-3">
            <div className="flex items-center space-x-3">
              <input 
                type="checkbox" 
                checked={task.checked}
                readOnly
                className="form-checkbox h-5 w-5 text-purple-600 bg-gray-800 border-transparent rounded"
              />
              <span>{task.id}</span>
            </div>
            <span className="text-sm text-gray-400">{task.date}</span>
            <span className={`text-xs px-2 py-1 rounded ${getPriorityColor(task.priority)}`}>
              {task.priority}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OverdueTasks;