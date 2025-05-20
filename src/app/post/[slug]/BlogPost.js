"use client";
import React from 'react';
import { Card } from 'react-bootstrap';
import { AddComment } from '@/app/comments/AddComment';
import CommentsList from '@/app/comments/CommentsList';

export function BlogPost({ post, onEdit, onDelete, onBack, comments, name, comment, onNameChange, onCommentChange, onAddComment }) {
  if (!post) return null;

  return (
    <div className='container' style={{ maxWidth: 900 }}>
      <Card className='shadow-lg'>
        <Card.Body>
          {post.img && (
            <Card.Img
              variant="top"
              src={post.img}
              style={{ borderRadius: 15, height: 300, objectFit: 'cover' }}
            />
          )}
          <Card.Title className='mt-4'>
            <strong>{post.title}</strong>
          </Card.Title>
          <Card.Text>
            <p>{post.description}</p>
            <p>{post.content}</p>
          </Card.Text>
          <button
            onClick={onEdit}
            className='mt-4 bg-blue-500 text-white px-2 py-2 rounded'
            style={{ marginRight: 10 }}
          >
            ✍ Edit
          </button>
          <button
            onClick={onDelete}
            className='mt-4 bg-red-500 text-white px-2 py-2 rounded'
          >
            🌋Delete
          </button>
          <br />
          <button
            className='mt-2 btn-back bg-gray-200 text-black px-2 py-2 rounded hover:bg-gray-400'
            onClick={onBack}
          >
            🡠 Back
          </button>
          <br />
          <br />
          {comments && <span> {comments.length} Comments</span>}
          <hr />
          <AddComment
            name={name}
            comment={comment}
            onNameChange={onNameChange}
            onCommentChange={onCommentChange}
            onSubmit={onAddComment}
          />
          <hr />
          <CommentsList comments={comments} />
        </Card.Body>
      </Card>
    </div>
  );
}