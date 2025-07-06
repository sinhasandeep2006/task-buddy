import React from "react";
import Progress from "./Progress";
import AvatarGroup from "../inputs/AvatarGroup";
import { LuPaperclip } from "react-icons/lu";
import moment from "moment";

const TaskCard = ({
  title,
  description,
  priority,
  status,
  progress,
  createdAt,
  dueDate,
  assignedTo,
  attachmentCount,
  completedTodoCount,
  todoChecklist,
  onClick,
}) => {
  const getStatusTagColor = () => {
    switch (status) {
      case "In Progress":
        return "text-cyan-500 bg-cyan-50 border border-cyan-500/10";
      case "Completed":
        return "text-lime-500 bg-lime-50 border border-lime-500/10";
      default:
        return "text-violet-500 bg-violet-50 border border-violet-500/10";
    }
  };

  const getPriorityTagColor = () => {
    switch (priority) {
      case "Low":
        return "text-emerald-500 bg-emerald-50 border border-emerald-500/10";
      case "Medium":
        return "text-amber-500 bg-amber-50 border border-amber-500/10";
      default:
        return "text-rose-500 bg-rose-50 border border-rose-500/10";
    }
  };

  return (
    <div
      className="bg-white rounded-xl shadow-md cursor-pointer shadow-gray-100 border border-gray-200/50"
      onClick={onClick}
    >
      {/* Tags */}
      <div className="flex items-end gap-3 px-4 pt-3">
        <div className={`text-[11px] font-medium ${getStatusTagColor()} px-4 py-0.5 rounded-full`}>
          {status}
        </div>
        <div className={`text-[11px] font-medium ${getPriorityTagColor()} px-4 py-0.5 rounded-full`}>
          {priority} Priority
        </div>
      </div>

      {/* Title & Progress */}
      <div
        className={`px-4 py-2 border-l-[3px] ${
          status === "In Progress"
            ? "border-cyan-500"
            : status === "Completed"
            ? "border-indigo-500"
            : "border-violet-500"
        }`}
      >
        <p className="font-medium text-sm text-gray-800 mt-4 line-clamp-2">{title}</p>
        <p className="text-xs text-gray-500 mt-1.5 line-clamp-2 leading-[18px]">{description}</p>
        <p className="text-[13px] text-gray-700/80 font-medium mt-2 mb-2 leading-[18px]">
          Task Done:{" "}
          <span className="font-semibold text-gray-700">
  {completedTodoCount ?? 0} / {Array.isArray(todoChecklist) ? todoChecklist.length : 0}
</span>
        </p>
        <Progress progress={progress} status={status} />
      </div>

      {/* Dates */}
      <div className="px-4">
        <div className="flex items-center justify-between my-1">
          <div>
            <label className="text-xs text-gray-500">Start Date</label>
            <p className="text-[13px] font-medium text-gray-900">
              {createdAt ? moment(createdAt).format("MMM D, YYYY") : "N/A"}
            </p>
          </div>
          <div>
            <label className="text-xs text-gray-500">Due Date</label>
            <p className="text-[13px] font-medium text-gray-900">
              {dueDate ? moment(dueDate).format("MMM D, YYYY") : "N/A"}
            </p>
          </div>
        </div>

        {/* Avatars and Attachments */}
        <div className="flex items-center justify-between mt-4 mb-3">
          <AvatarGroup avatars={assignedTo || []} maxVisible={3} />
          {attachmentCount > 0 && (
            <div className="flex items-center gap-2 bg-blue-50 px-2.5 py-1.5 rounded-lg">
              <LuPaperclip className="text-primary" />
              <span className="text-xs text-gray-900">{attachmentCount}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
