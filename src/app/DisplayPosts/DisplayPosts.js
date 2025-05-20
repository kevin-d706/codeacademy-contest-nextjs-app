"use client";
import React from 'react';
import '../styles/globals.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';

export function DisplayPosts({
    onReadPost,
    filteredPosts
}) {


    return (
        <>
            <h2>Blog Posts</h2>
            <Row className="g-3">
                {filteredPosts.map((post) => (
                    <Col key={post.id || post.slug} xs={12} sm={6} md={4} lg={3}>
                        <Card className="h-100 d-flex flex-column">
                            {post.img && <Card.Img variant="top" src={post.img} style={{ padding: 10, borderRadius: 15 }} />}
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>{post.description}</Card.Text>
                                <button onClick={() => onReadPost(post.slug)} className='btn-theme px-2 py-1 rounded mt-auto'>Read More ➝</button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>



    );
}