import React from 'react';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800">TaskBuddy</h2>
          <div className="mt-2 text-sm text-gray-600">sandeep sinha</div>
          <div className="text-xs text-gray-500">1233sandeepsinha@gmail.com</div>
          
          <nav className="mt-8">
            <ul className="space-y-2">
              <li className="px-4 py-2 text-gray-700">Dashboard</li>
              <li className="px-4 py-2 text-gray-700">Create Task</li>
              <li className="px-4 py-2 text-gray-700">My Tasks</li>
              <li className="px-4 py-2 text-gray-700">Team Members</li>
              <li className="px-4 py-2 text-gray-700">Logout</li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Good Morning! sandeep sinha</h1>
          <p className="text-gray-600">Sunday 6th Jul 2025</p>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded shadow">
            <div className="text-2xl font-bold">4</div>
            <div className="text-sm text-gray-600">Total Tasks</div>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <div className="text-2xl font-bold">2</div>
            <div className="text-sm text-gray-600">Pending Tasks</div>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <div className="text-2xl font-bold">1</div>
            <div className="text-sm text-gray-600">In Progress Tasks</div>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <div className="text-2xl font-bold">1</div>
            <div className="text-sm text-gray-600">Completed Tasks</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* Task Distribution */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold mb-2">Task Distribution</h3>
            <ul className="space-y-1">
              <li>Pending</li>
              <li>In Progress</li>
              <li>Completed</li>
            </ul>
          </div>

          {/* Priority Levels */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold mb-2">Task Priority Levels</h3>
            <ul className="space-y-1">
              <li>High</li>
              <li>Medium</li>
              <li>Low</li>
            </ul>
          </div>
        </div>

        {/* Recent Tasks */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold mb-2">Recent Tasks</h3>
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Name</th>
                <th className="text-left py-2">Status</th>
                <th className="text-left py-2">Priority</th>
                <th className="text-left py-2">Created On</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 font-bold">Idele</td>
                <td className="py-2 font-bold">Pending</td>
                <td className="py-2 font-bold">Low</td>
                <td className="py-2">N/A</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-bold">Thid</td>
                <td className="py-2 font-bold">Pending</td>
                <td className="py-2 font-bold">High</td>
                <td className="py-2">N/A</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;