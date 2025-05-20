import React from 'react';

export function CreatePost({
  formData,
  onInputChange,
  onFileChange,
  onAddUser,
  fileInputRef,
  onBack,
  onClear
}) {
  return (
    <div className='container'>
      <div className='create-post'>
        <h3 className=''>✍ Create New Blog Post</h3>
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
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={onInputChange}
        />
        <input
          type="file"
          accept="image/*"
          onChange={onFileChange}
          ref={fileInputRef}
        />
        {formData.img && (
          <img src={formData.img} alt="Preview" width={150} height={150} className='mt-2' />
        )}
        <button className='btn-success bg-green-500 text-white px-2 py-1 rounded hover:bg-green-700' onClick={onAddUser}>Add Post</button>
        <button className='btn-success bg-gray-200 text-black px-2 py-1 rounded hover:bg-gray-400' onClick={onBack}>🡠 Back</button>
        {/* <button
          onClick={onClear}
          className='ml-4 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700'
        >
          Clear Posts
        </button> */}
      </div>
    </div>
  );
}
