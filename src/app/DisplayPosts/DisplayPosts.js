"use client";
import React from 'react';
import '../styles/globals.css';

import Card from 'react-bootstrap/Card';

export function DisplayPosts({
    onReadPost,
    filteredPosts
}) {
    

    return (
        <>
            <h2>Blog Posts</h2>
            <div className='container d-flex flex-wrap justify-start gap-5 p-0 m-0'>
                {filteredPosts.map((post) => (
                    <Card key={post.id || post.slug} style={{ width: '18rem' }}>
                        {post.img && <Card.Img variant="top" src={post.img} style={{ padding: 10, borderRadius: 15 }} />}
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text>
                                {post.description}
                            </Card.Text>
                            <button onClick={() => onReadPost(post.slug)} className='btn-theme px-2 py-1 rounded'>Read More ➝</button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </>



    );
}