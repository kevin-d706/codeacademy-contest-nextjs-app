import React, { useEffect, useState } from 'react';
import CommentsList from './CommentsList';

export default function CommentsListContainer({ slug }) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        const post = posts.find((p) => p.slug === slug);
        setComments(post && post.comments ? post.comments : []);
    }, [slug]);

    return <CommentsList comments={comments} />;
}