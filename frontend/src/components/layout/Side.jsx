import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaTasks } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { BsPlusCircleFill } from "react-icons/bs";
import { Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

const Side = () => {
  const donutData = {
    labels: ["Pending", "In Progress", "Completed"],
    datasets: [
      {
        label: "Tasks",
        data: [2, 0, 2],
        backgroundColor: ["#a855f7", "#3b82f6", "#22c55e"],
        borderWidth: 0,
      },
    ],
  };

  const barData = {
    labels: ["High", "Medium", "Low"],
    datasets: [
      {
        label: "Priority",
        data: [1, 1, 2],
        backgroundColor: ["#f43f5e", "#facc15", "#10b981"],
      },
    ],
  };

  return (
    <div className="w-full h-full flex bg-white rounded-xl overflow-hidden text-sm">
      {/* Sidebar */}
      <div className="w-[220px] bg-white border-r p-4">
        <div className="flex flex-col items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
            alt="avatar"
            className="w-16 h-16 rounded-full mb-2"
          />
          <div className="font-semibold">sandeep sinha</div>
          <div className="text-xs text-gray-500 mb-4">
            1233sandeepsinha@gmail.com
          </div>
        </div>
        <ul className="space-y-3">
          <li className="flex items-center gap-2 text-purple-600 font-medium">
            <LuLayoutDashboard /> Dashboard
          </li>
          <li className="flex items-center gap-2 text-gray-700">
            <BsPlusCircleFill /> Create Task
          </li>
          <li className="flex items-center gap-2 text-gray-700">
            <FaTasks /> My Tasks
          </li>
          <li className="flex items-center gap-2 text-gray-700">
            <IoMdPeople /> Team Members
          </li>
          <li className="flex items-center gap-2 text-gray-700">
            <MdLogout /> Logout
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="mb-4">
          <h1 className="text-lg font-semibold">Good Morning! sandeep sinha</h1>
          <p className="text-sm text-gray-500">Sunday 6th Jul 2025</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <div className="bg-white shadow-md p-4 rounded-md">
            <div className="text-xl font-bold">4</div>
            <div className="text-xs text-gray-600">Total Tasks</div>
          </div>
          <div className="bg-white shadow-md p-4 rounded-md">
            <div className="text-xl font-bold">2</div>
            <div className="text-xs text-gray-600">Pending Tasks</div>
          </div>
          <div className="bg-white shadow-md p-4 rounded-md">
            <div className="text-xl font-bold">0</div>
            <div className="text-xs text-gray-600">In Progress Tasks</div>
          </div>
          <div className="bg-white shadow-md p-4 rounded-md">
            <div className="text-xl font-bold">2</div>
            <div className="text-xs text-gray-600">Completed Tasks</div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white shadow-md p-4 rounded-md">
            <h2 className="font-semibold mb-4">Task Distribution</h2>
            <Doughnut data={donutData} />
          </div>
          <div className="bg-white shadow-md p-4 rounded-md">
            <h2 className="font-semibold mb-4">Task Priority Levels</h2>
            <Bar data={barData} options={{ responsive: true }} />
          </div>
        </div>

        {/* Recent Tasks */}
        <div className="bg-white shadow-md p-4 rounded-md">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-semibold">Recent Tasks</h2>
            <button className="text-xs text-gray-500 border rounded px-2 py-0.5">
              See All
            </button>
          </div>
          <table className="w-full text-xs">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="py-1">Name</th>
                <th className="py-1">Status</th>
                <th className="py-1">Priority</th>
                <th className="py-1">Created On</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-1 font-medium">fefee</td>
                <td className="py-1">
                  <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                    Pending
                  </span>
                </td>
                <td className="py-1">
                  <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded-full">
                    Low
                  </span>
                </td>
                <td className="py-1">N/A</td>
              </tr>
              <tr>
                <td className="py-1 font-medium">thid</td>
                <td className="py-1">
                  <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                    Pending
                  </span>
                </td>
                <td className="py-1">
                  <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded-full">
                    High
                  </span>
                </td>
                <td className="py-1">N/A</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Side;
