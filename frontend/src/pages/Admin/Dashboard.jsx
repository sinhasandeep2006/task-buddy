import React, { useEffect, useState, useContext } from "react";
import { useUserAuth } from "../../hooks/useUserAuth";
import { UserContext } from "../../context/UserContext";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axoisInstance";
import { API_PATHS } from "../../utils/apiPath";
import InfoCard from "../../components/Cards/InfoCard";
// import { IoMdCard } from "react-icons/io";
import { addThousandsSeparator } from "../../utils/helper";
import moment from "moment";
import TaskListTable from "../../components/Table/TaskListTable";
import { LuArrowRight } from "react-icons/lu";
import CustomPieChart from "../../components/Table/CustomPieChart";
import CustomBarChart from "../../components/Table/CustomBarChart";

const COLORS = [
  "#8D51FF",
  "#00B8DB",
  "#7BCE00",
];

const Dashboard = () => {
  useUserAuth();

  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [dashboardData, setDashboardData] = useState(null);
  const [pieChartData, setPieChartData] = useState(null);
  const [barChartData, setBarChartData] = useState(null);

  // prepere chart data for pie chart
  const preparePieChartData = (data) => {
    const taskDistribution = data?.taskDistribution || null;
    const taskPriorities = data?.taskPriorityLevels || null;

    const taskDistributionData = [
      { name: "Pending", count: taskDistribution?.Pending || 0 },
      { name: "In Progress", count: taskDistribution?.InProgress || 0 },
      { name: "Completed", count: taskDistribution?.Completed || 0 },
    ];

    setPieChartData(taskDistributionData);
    const PriorityLevelData = [
      { name: "High", count: taskPriorities?.High || 0 },
      { name: "Medium", count: taskPriorities?.Medium || 0 },
      { name: "Low", count: taskPriorities?.Low || 0 },
    ];
    setBarChartData(PriorityLevelData);
  };
  const getDashboardData = async () => {
    try {
      const response = await axiosInstance.get(
        API_PATHS.TASKS.GET_DASHBOARD_DATA
      );
      if (response.data) {
        setDashboardData(response.data);
        preparePieChartData(response.data?.charts || null);
      }
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };
  const onSeeMore = () => {
    navigate("/admin/tasks");
  };
  useEffect(() => {
    getDashboardData();
  }, []);

  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className="card my-5">
        <div>
          <div className="col-span-3">
            <h2 className="text-xl md:text-[13px] text-gray-400 mt-1.5">
              Good Morning! {user?.name}
            </h2>
            <p className="card-text">{moment().format("dddd Do MMM YYYY")}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mt-5 ">
          <InfoCard
            // icon={<IoMdCard/>}
            label="Total Tasks"
            value={addThousandsSeparator(
              dashboardData?.charts?.taskDistribution?.All || 0
            )}
            color="text-sm font-medium bg-primary shadow-lg shadow-purple-600/50  rounded-md my-1 hover:bg-blue-600/15 hover:text-blue-600 cursor-pointer"
          />
          <InfoCard
            // icon={<IoMdCard/>}
            label="Pending Tasks"
            value={addThousandsSeparator(
              dashboardData?.charts?.taskDistribution?.Pending || 0
            )}
            color="bg-violet-500 text-white hover:bg-violet-600 text-sm font-medium shadow-lg shadow-purple-600/50  rounded-md my-1 hover:text-white cursor-pointer"
          />

          <InfoCard
            // icon={<IoMdCard/>}
            label="In Progress Tasks"
            value={addThousandsSeparator(
              dashboardData?.charts?.taskDistribution?.InProgress || 0
            )}
            color="bg-cyan-500 text-white hover:bg-cyan-600 text-sm font-medium shadow-lg shadow-purple-600/50 rounded-md my-1 hover:text-white cursor-pointer"
          />
          <InfoCard
            // icon={<IoMdCard/>}
            label="Completed Tasks"
            value={addThousandsSeparator(
              dashboardData?.charts?.taskDistribution?.Completed || 0
            )}
            color="bg-lime-500 text-white hover:bg-lime-600 text-sm font-medium shadow-lg shadow-purple-600/50 rounded-md my-1 hover:text-white cursor-pointer"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4 md:my-6">
        <div>
          <div className="card">
            <div className="flex items-center justify-between">
              <h5 className="font-medium">Task Distribution</h5>
            </div>
            <CustomPieChart Data={pieChartData} color={COLORS} />
            
          </div>
        </div>
           <div>
          <div className="card">
            <div className="flex items-center justify-between">
              <h5 className="font-medium">Task Priority Levels</h5>
            </div>
            <CustomBarChart Data={barChartData} />
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="card">
            <div className="flex items-center justify-between">
              <h5 className="text-lg">Recent Tasks</h5>
              <button className="card-btn" onClick={onSeeMore}>
                See All <LuArrowRight className="text-base" />
              </button>
            </div>
            <TaskListTable tableData={dashboardData?.recentTasks || []} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
