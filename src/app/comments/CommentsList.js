"use client";
import React from 'react';
import { RxAvatar } from "react-icons/rx";

export default function CommentsList({ comments = [] }) {
    return (
        <>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem'}}>Comments</h3>
            {comments.length > 0 ? (
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {comments.map((comment, index) => (
                        <li key={index} className="comment-card" style={{ marginBottom: '1.2rem', padding: '0.7rem 1rem', borderBottom: '1px solid var(--list-border)', background: 'var(--card-bg)', color: 'var(--text-main)' }}>
                            <div className='d-flex align-items-center gap-1' style={{ fontWeight: 500, color: 'var(--btn-bg)', marginBottom: 2 }}><RxAvatar style={{fontSize: '2rem'}}/> {comment.name} <i style={{color: 'var(--text-secondary)', fontSize: '0.8rem'}}> on {comment.date}</i> </div>
                            <div style={{ fontSize: '1rem', color: 'var(--text-main)' }}>{comment.comment}</div>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="comment-card" style={{ color: 'var(--text-secondary)', fontStyle: 'italic', padding: '0.7rem 1rem', background: 'var(--card-bg)' }}>
                    No comments yet. Be the first to comment!
                </div>
            )}
        </>
    );
}