"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BlogPost } from './BlogPost';

export default function BlogPostContainer({ params }) {
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [name, setName] = React.useState('');
    const [comment, setComment] = React.useState('');
    const router = useRouter();
    
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const posts = JSON.parse(localStorage.getItem('posts')) || [];
            const foundPost = posts.find((p) => p.slug === params.slug);
            if (!foundPost) {
                setPost(null);
            } else {
                setPost(foundPost);
                setComments(foundPost.comments || []);
            }
            setLoading(false);
        }
    }, [loading]);

    if (loading) return <div>Loading...</div>;
    if (!post) return <div>Post not found.</div>;

    const handleEdit = () => router.push(`/edit/${post.slug}`);
    const handleDelete = () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this post?");
        if (confirmDelete) {
            const posts = JSON.parse(localStorage.getItem('posts')) || [];
            const updatedPosts = posts.filter((p) => p.slug !== post.slug);
            localStorage.setItem('posts', JSON.stringify(updatedPosts));
            router.push('/');
        }
    };
    const handleBack = () => router.push('/');


    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    // Helper to format date as '01, July 2025'
    function formatCommentDate(dateObj) {
        const day = String(dateObj.getDate()).padStart(2, '0');
        const month = dateObj.toLocaleString('default', { month: 'long' });
        const year = dateObj.getFullYear();
        return `${day}, ${month} ${year}`;
    }

    const handleAddComment = (e) => {
        e.preventDefault();
        if (!name.trim() || !comment.trim()) return;
        const date = formatCommentDate(new Date());
        const newComments = [...comments, { name, comment, date }];
        setComments(newComments);

        // Update localStorage
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        const updatedPosts = posts.map((p) =>
            p.slug === post.slug ? { ...p, comments: newComments } : p
        );
        localStorage.setItem('posts', JSON.stringify(updatedPosts));

        setName('');
        setComment('');
    };

    return (
        <BlogPost
            post={post}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onBack={handleBack}
            comments={comments}
            name={name}
            comment={comment}
            onNameChange={handleNameChange}
            onCommentChange={handleCommentChange}
            onAddComment={handleAddComment}
        />
    );
}