import React from 'react';
import moment from 'moment';

const TaskListTable = ({ tableData }) => {
  const getStatusBadgeColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 border border-green-200';
      case 'In Progress':
        return 'bg-purple-100 text-purple-800 border border-purple-200';
      case 'Pending':
        return 'bg-cyan-100 text-cyan-800 border border-cyan-200';
      default:
        return 'bg-gray-100 text-gray-800 border border-gray-200';
    }
  };

  const getPriorityBadgeColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800 border border-red-200';
      case 'Medium':
        return 'bg-orange-100 text-orange-800 border border-orange-200';
      case 'Low':
        return 'bg-green-100 text-green-800 border border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border border-gray-200';
    }
  };

  return (
    <div className="overflow-x-auto p-0 rounded-lg mt-3">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="py-3 px-4 text-gray-800 font-medium text-[13px]">Name</th>
            <th className="py-3 px-4 text-gray-800 font-medium text-[13px]">Status</th>
            <th className="py-3 px-4 text-gray-800 font-medium text-[13px]">Priority</th>
            <th className="py-3 px-4 text-gray-800 font-medium text-[13px] hidden md:table-cell">Created On</th>
          </tr>
        </thead>
        <tbody>
  {tableData.map((task, index) => (
    <tr
      key={task._id || index}
      className="border-t border-gray-200 hover:bg-gray-50 transition-colors duration-200"
    >
      <td className="py-4 px-4 text-center text-gray-700 text-[13px] line-clamp-1 overflow-hidden">
        {task.title}
      </td>
      <td className="px-4 py-4 text-center">
        <span
          className={`px-2 py-1 text-xs rounded inline-block ${getStatusBadgeColor(task.status)}`}
        >
          {task.status}
        </span>
      </td>
      <td className="px-4 py-4 text-center">
        <span
          className={`px-2 py-1 text-xs rounded inline-block ${getPriorityBadgeColor(task.priority)}`}
        >
          {task.priority}
        </span>
      </td>
      <td className="px-4 py-4 text-center text-gray-700 text-[13px] text-nowrap hidden md:table-cell">
  {task.createdAt ? moment(task.createdAt).format('DD MM YYYY') : 'N/A'}
</td>

    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
};

export default TaskListTable;
