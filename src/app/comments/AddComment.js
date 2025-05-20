"use client";
import React from 'react';

export function AddComment({
  name,
  comment,
  onNameChange,
  onCommentChange,
  onSubmit
}) {
  return (
    <div>
    <h3 className='text-lg font-bold mb-2'>💭 Add New Comment</h3>
      <input
        type="text"
        placeholder='Your Name'
        className='mb-2 border-2 border-gray-300 rounded-md p-2 w-full'
        value={name}
        onChange={onNameChange}
      />
      <input
        type="text"
        placeholder='Add a comment...'
        className='border-2 border-gray-300 rounded-md p-2 w-full'
        value={comment}
        onChange={onCommentChange}
      />
      <button
        className='bg-blue-500 text-white px-4 py-2 rounded-md mt-2'
        onClick={onSubmit}
      >
        Submit
      </button>
    </div>
  );
}