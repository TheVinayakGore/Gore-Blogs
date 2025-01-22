"use client";
import React, { useState } from "react";

const CommentForm = ({ closeModal, onSubmit }) => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && message) {
      onSubmit({ username, message });
      setUsername("");
      setMessage("");
    }
  };

  return (
    <div
      className="fixed top-0 inset-0 flex items-center justify-center bg-black/[0.5] backdrop-blur-[0.5px] z-50 w-full h-full"
      onClick={(e) => e.target === e.currentTarget && closeModal()}
    >
      <div className="bg-zinc-950 border border-zinc-800 shadow-2xl shadow-zinc-950 rounded-lg p-6 w-1/2">
        <h2 className="text-4xl font-bold mb-5 text-zinc-100 opacity-40">
          Leave a Comment
        </h2>
        <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
          <label className="flex flex-col space-y-2">
            <span className="text-zinc-300">Username</span>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
              className="border border-zinc-800 rounded-md p-2 outline-none bg-zinc-900 text-zinc-100 placeholder:text-zinc-600 font-light"
              required
            />
          </label>
          <label className="flex flex-col space-y-2">
            <span className="text-zinc-300">Comment</span>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Leave your comment"
              className="border border-zinc-800 rounded-md p-2 outline-none bg-zinc-900 text-zinc-100 placeholder:text-zinc-600 font-light"
              required
            />
          </label>
          <button
            type="submit"
            className="bg-blue-600 text-white mt-5 rounded-md py-3 leading-3 hover:bg-blue-700 focus:outline-none w-32"
          >
            Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentForm;