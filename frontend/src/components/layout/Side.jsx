// src/pages/Auth/Side.jsx   (or wherever you keep it)
import React from "react";

function Side() {
  /*  The root div must stretch to whatever box it’s placed in,
      so use w‑full / h‑full instead of the invalid h‑50%          */
  return (
    <div className="w-full h-full flex bg-white rounded-xl overflow-hidden shadow-lg text-xs"> 
      {/* -------------  Sidebar ------------- */}
      <div className="w-24 sm:w-40 bg-white border-r shadow-inner p-3">
        <h2 className="text-base font-bold text-purple-600 mb-4">TaskBuddy</h2>

        <nav className="space-y-2 font-medium">
          <a className="block text-gray-700">Dashboard</a>
          <a className="block text-gray-700">Create Task</a>
          <a className="block text-gray-700">My Tasks</a>
          <a className="block text-gray-700">Team Members</a>
        </nav>
      </div>

      {/* -------------  Main preview area ------------- */}
      <div className="flex-1 p-4 overflow-y-auto">
        <header className="mb-4">
          <h1 className="text-lg font-bold text-gray-800">
            Good Morning, Sandeep!
          </h1>
          <p className="text-gray-500 text-xs">Sun 6 Jul 2025</p>
        </header>

        {/* four tiny stat cards */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {["Total","Pending","In‑Progress","Completed"].map((label,i)=>(  
            <div key={i} className="bg-gray-100 rounded p-2 text-center">
              <div className="text-base font-bold">{[4,2,1,1][i]}</div>
              <div className="text-[10px] text-gray-600">{label}</div>
            </div>
          ))}
        </div>

        {/* Fake chart placeholders (keep it lightweight) */}
        <div className="h-24 bg-gray-100 rounded mb-3 flex items-center justify-center text-[10px] text-gray-400">
          Pie / Bar charts here
        </div>

        {/* recent tasks table (condensed) */}
        <table className="w-full text-[10px]">
          <thead>
            <tr className="border-b text-left">
              {["Name","Status","Prio","Created"].map(h=>(
                <th key={h} className="py-[2px]">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-[2px] font-bold">Idele</td>
              <td className="py-[2px]">Pending</td>
              <td className="py-[2px]">Low</td>
              <td className="py-[2px]">N/A</td>
            </tr>
            <tr>
              <td className="py-[2px] font-bold">Thid</td>
              <td className="py-[2px]">Pending</td>
              <td className="py-[2px]">High</td>
              <td className="py-[2px]">N/A</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Side;
