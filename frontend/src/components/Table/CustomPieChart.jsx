import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import CustomTooltip from './CustomTooltip';
import CustomLegend from './CustomLegend';

const CustomPieChart = ({ Data = [], color = [] }) => {
  if (!Array.isArray(Data) || Data.length === 0) {
    return <div className="text-center text-gray-400 text-sm">No data available</div>;
  }

  return (
    <div>
      <ResponsiveContainer width="100%" height={325}>
        <PieChart>
          <Pie
            data={Data}
            dataKey="count"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={130}
            innerRadius={100}
            labelLine={false}
          >
            {Data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={color[index % color.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend content={<CustomLegend />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomPieChart;
