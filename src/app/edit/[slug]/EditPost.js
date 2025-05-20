"use client";
import React from 'react';

export function EditPost({
  formData,
  onInputChange,
  onFileChange,
  onUpdatePost,
  fileInputRef,
  onBack
}) {
  return (
    <div className='container'>
      <div className='edit-post'>
        <h1 style={{ textAlign: 'center' }}>✍ Edit Post</h1>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={onInputChange}
        />
        <input
          type="text"
          name="slug"
          placeholder="Enter Unique Slug"
          value={formData.slug}
          onChange={onInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={onInputChange}
        />
        <textarea
          name="content"
          placeholder="Content"
          value={formData.content}
          onChange={onInputChange}
          rows={5}
        />
        <input
          type="file"
          accept="image/*"
          onChange={onFileChange}
          ref={fileInputRef}
        />
        {formData.img && (
          <img
            src={formData.img}
            alt="Preview"
            width="250"
            height="250"
          />
        )}
        <button onClick={onUpdatePost} className='bg-green-500 text-white hover:bg-green-700 py-2 rounded'>Update Post</button>
        <button className='btn-success bg-gray-200 text-black px-2 py-1 rounded hover:bg-gray-400' onClick={onBack}>🡠 Back</button>
      </div>
    </div>
  );
}