import React from 'react';

const UserCard = ({ userInfo }) => {
  return (
    <div className="user-card p-4 bg-white shadow-md rounded-lg border border-gray-100">
      <div className="flex items-center gap-4">
        <img
          src={userInfo?.profileImageUrl || "/default-avatar.png"}
          alt="Avatar"
          className="w-12 h-12 rounded-full border"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/default-avatar.png";
          }}
        />
        <div>
          <p className="text-sm font-semibold text-gray-900">{userInfo?.name || "Unnamed"}</p>
          <p className="text-xs text-gray-500">{userInfo?.email || "No Email"}</p>
        </div>
      </div>

     <div className="flex justify-between gap-2 mt-4">
  <StatCard label="Pending" count={userInfo?.pendingTask || 0} status="Pending" />
  <StatCard label="In Progress" count={userInfo?.inProgressTask || 0} status="In Progress" />
  <StatCard label="Completed" count={userInfo?.completedTask || 0} status="Completed" />
</div>

    </div>
  );
};

const StatCard = ({ label, count, status }) => {
  const getStatusTagColor = () => {
    switch (status) {
      case "In Progress":
        return "text-cyan-600 bg-cyan-100";
      case "Completed":
        return "text-indigo-600 bg-indigo-100";
      default:
        return "text-violet-600 bg-violet-100";
    }
  };

  return (
    <div className={`flex-1 py-2 px-3 rounded-md text-center ${getStatusTagColor()}`}>
      <div className="text-base font-bold">{count}</div>
      <div className="text-xs">{label}</div>
    </div>
  );
};

export default UserCard;
