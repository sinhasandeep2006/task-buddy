import React from "react";
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

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const Side = () => {
  const pieData = {
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
        backgroundColor: ["#ef4444", "#facc15", "#10b981"],
        borderRadius: 5,
        barThickness: 25,
      },
    ],
  };

  const barOptions = {
  maintainAspectRatio: false,
  responsive: true,
  layout: {
    padding: {
      top: 10,
      bottom: 0, // remove spacing below bars
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 1,
        padding: 2,
      },
      grid: {
        drawBorder: false,
        color: "#f3f4f6",
      },
    },
    x: {
      ticks: {
        padding: 1
      },
      grid: {
        drawBorder: false,
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const pieOptions = {
  plugins: {
    legend: {
      labels: {
        font: {
          size: 8.5, // change to your desired size (e.g., 14, 10, etc.)
        },
        color: "#555", // optional: adjust text color
        boxWidth: 10,  // size of legend color boxes
      },
      position: "top", // or 'right', 'bottom', etc.
    },
  },
  cutout: "70%", // for doughnut thickness
};

  return (
    <div className="flex w-[575px]  bg-white rounded-3xl shadow-md overflow-hidden">
      

      {/* Content */}
      <div className="flex-1 p-2">
        <h2 className="text-xl font-semibold text-gray-800">Good Morning! User</h2>
        <p className="text-sm text-gray-500 mb-1">Sunday 6th Jul 2025</p>

        {/* Stats */}
        <div className="flex items-center gap-7 mb-2">
          <div className="bg-white shadow rounded-md px-2 py-1">
            <p className="text-xs font-bold text-gray-800 text-center">4</p>
            <p className="text-xs text-gray-500 text-center">Total Tasks</p>
          </div>
          <div className="bg-white shadow rounded-md px-2 py-1">
            <p className="text-xs font-bold text-gray-800 text-center">2</p>
            <p className="text-xs text-gray-500 text-center">Pending Tasks</p>
          </div>
          <div className="bg-white shadow rounded-md px-2 py-1">
            <p className="text-xs font-bold text-gray-800 text-center">0</p>
            <p className="text-xs text-gray-500 text-center">In Progress</p>
          </div>
          <div className="bg-white shadow rounded-md px-2 py-1">
            <p className="text-xs font-bold text-gray-800 text-center">2</p>
            <p className="text-xs text-gray-500 text-center">Completed</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-2 gap-1 mb-1">
          <div className="bg-white rounded-lg shadow p-1">
            <h4 className="font-semibold text-sm text-gray-700 mb-1">Task Distribution</h4>
            <div className="w-[200px] h-[200px] mx-auto">
  <Doughnut data={pieData} options={pieOptions} />
</div>
          </div>
          <div className="bg-white rounded-lg shadow p-1">
            <h4 className="font-semibold text-sm text-gray-700 mb-2">Task Priority Levels</h4>
            <div className="h-48">
            <Bar data={barData} options={barOptions} />
            </div>
            
          </div>
        </div>

        {/* Recent Tasks */}
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-semibold text-sm text-gray-700">Recent Tasks</h4>
            <button className="text-sm text-gray-500 hover:underline">See All</button>
          </div>
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="py-2">Name</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Created On</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 font-semibold text-gray-800">fefee</td>
                <td><span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">Pending</span></td>
                <td><span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">Low</span></td>
                <td>N/A</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold text-gray-800">thid</td>
                <td><span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">Pending</span></td>
                <td><span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">High</span></td>
                <td>N/A</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Side;
