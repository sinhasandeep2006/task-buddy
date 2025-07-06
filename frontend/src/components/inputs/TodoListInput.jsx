import React, { useState } from "react";
import { HiMiniPlus, HiOutlineTrash } from "react-icons/hi2";

const TodoListInput = ({ todoList, setTodoList }) => {
  const [option, setOption] = useState("");

  // Add a task
  const handleAddOption = () => {
    if (option.trim()) {
      setTodoList([...todoList, option.trim()]);
      setOption("");
    }
  };

  // Delete a task
  const handleDeleteOption = (index) => {
    const updatedArr = todoList.filter((_, idx) => idx !== index);
    setTodoList(updatedArr);
  };

  return (
    <div className="space-y-3">
      {/* Render Tasks */}
      {todoList.map((item, index) => (
        <div
          key={`${item}-${index}`}
          className="flex items-center justify-between px-3 py-2 bg-gray-100 rounded-md"
        >
          <p className="flex items-center gap-2 text-sm text-gray-800">
            <span className="text-gray-500 w-6 text-right">
              {index + 1 < 10 ? `0${index + 1}` : index + 1}
            </span>
            {item}
          </p>
          <button
            onClick={() => handleDeleteOption(index)}
            className="text-red-500 hover:text-red-700"
            title="Delete"
          >
            <HiOutlineTrash className="w-4 h-4" />
          </button>
        </div>
      ))}

      {/* Input for New Task */}
      <div className="flex items-center gap-2">
        <input
          value={option}
          onChange={(e) => setOption(e.target.value)}
          placeholder="Add todo item..."
          className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <button
          onClick={handleAddOption}
          className="flex items-center justify-center w-9 h-9 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          title="Add"
        >
          <HiMiniPlus className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default TodoListInput;
