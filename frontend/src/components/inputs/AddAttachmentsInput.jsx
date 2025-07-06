import React, { useState } from "react";
import { HiMiniPlus, HiOutlineTrash } from "react-icons/hi2";
import { LuPaperclip } from "react-icons/lu";

const AddAttachmentsInput = ({ attachments, setAttachments }) => {
  const [option, setOption] = useState("");

  // Add attachment
  const handleAddOption = () => {
    if (option.trim()) {
      setAttachments([...attachments, option.trim()]);
      setOption("");
    }
  };

  // Delete attachment
  const handleDeleteOption = (index) => {
    const updatedArr = attachments.filter((_, idx) => idx !== index);
    setAttachments(updatedArr);
  };

  return (
    <div >
      {/* Render attachments */}
      {attachments.map((item, index) => (
        <div
          key={{item}}
          className="flex items-center justify-between px-3 py-2 bg-gray-100  border-gray-100 rounded-md mb-2"
        >
          <div className="flex items-center gap-3 text-sm text-gray-800 border-gray-100 border-r-2 pr-3">
            <LuPaperclip className=" text-gray-500" />
            <p>{item}</p>
          </div>
          <button
            onClick={() => handleDeleteOption(index)}
            className="text-red-500 hover:text-red-700"
          >
            <HiOutlineTrash className="w-4 h-4" />
          </button>
        </div>
      ))}

      {/* Input to add new attachment */}
      <div className="flex items-center gap-5 mt-4">
        <div className="flex-1 flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2 bg-white w-full">
            <LuPaperclip className="text-gray-500" />
            <input type="text"
            placeholder="add the file link" 
            value={option}
            onChange={({target})=>setOption(target.value)}
            className="w-full text-[13px] text-black outline-none bg-white py-2"/>
         </div>
        <button className="card-btn text-nowrap" onClick={handleAddOption}>
          <HiMiniPlus className="text-lg text-blue-600"/>ADD</button>
              </div>
    </div>
  );
};

export default AddAttachmentsInput;
