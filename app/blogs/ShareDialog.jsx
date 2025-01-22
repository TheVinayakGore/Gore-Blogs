import React from "react";
import { IoCopyOutline } from "react-icons/io5";
import { toast } from "react-toastify";

const ShareDialog = ({ isOpen, onClose, shareUrl }) => {
  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      toast.success("Link copied to clipboard!", { autoClose: 2000 });
    } catch (error) {
      toast.error("Failed to copy the link.", { autoClose: 2000 });
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40 backdrop-blur-[1px] w-full">
      <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-5 w-1/3">
        <div className="flex flex-col items-start space-y-3 w-full">
          <h2 className="text-xl">Share this blog</h2>
          <div className="flex items-center space-x-2 w-full">
            <input
              type="text"
              readOnly
              className="bg-zinc-950 text-zinc-300 border border-zinc-800 py-2 px-3 text-sm font-light rounded-md whitespace-nowrap overflow-auto w-full h-10"
              value={shareUrl}
            />
            <button
              onClick={handleCopy}
              className="p-2 px-3 bg-white hover:bg-blue-600 text-black hover:text-white rounded-md h-10"
            >
              <IoCopyOutline />
            </button>
          </div>
        </div>
        <div className="space-x-4 mt-5">
          <button
            onClick={onClose}
            className="py-2 leading-5 text-zinc-200 bg-zinc-800 hover:bg-zinc-900 text-sm px-4 rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareDialog;