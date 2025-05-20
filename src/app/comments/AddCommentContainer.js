import React, { useState } from 'react';
import { AddComment } from './AddComment';

export default function AddCommentContainer({ slug }) {
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const updatedPosts = posts.map((p) => {
      if (p.slug === slug) {
        const updatedComments = p.comments ? [...p.comments, { name, comment }] : [{ name, comment }];
        return { ...p, comments: updatedComments };
      }
      return p;
    });
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    setComment('');
    setName('');
  };

  return (
    <AddComment
      name={name}
      comment={comment}
      onNameChange={e => setName(e.target.value)}
      onCommentChange={e => setComment(e.target.value)}
      onSubmit={handleCommentSubmit}
    />
  );
}