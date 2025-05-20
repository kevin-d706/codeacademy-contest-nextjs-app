"use client";
import React, { useState, useEffect, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import { Row, Col } from 'react-bootstrap';
import { DisplayPosts } from './DisplayPosts/DisplayPosts';
import SideBar from './SideBar/SideBar';
import './styles/globals.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // Optionally log error info
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong while displaying posts.</div>;
    }
    return this.props.children;
  }
}

export default function DisplayPostsContainer() {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedPosts = localStorage.getItem('posts');
      setPosts(savedPosts ? JSON.parse(savedPosts) : []);
    }
  }, []);

  // Extract unique categories from posts
    const categories = ['All', ...new Set(posts.map((post) => post.category))];

    // Filter posts based on search query and selected category
    const filteredPosts = posts.filter((post) => {
        const matchesSearch = post.slug && post.slug.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading posts...</div>}>
        <div>
          <Row>
            <h1>📚 Blog Posts</h1>
            <button onClick={() => router.push('/create-post/')} className='border btn-create text-white px-3 py-1' style={{ width: '300px' }}>➕ Create New Blog Post</button>
          </Row>
          <Row>
            <input
              type="text"
              placeholder="Search by slug..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-bar my-3"
            />
          </Row>
          <Row>
            <Col xs={3} md={2}>
              <SideBar categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            </Col>
            <Col xs={9} md={10}>
              <DisplayPosts
                onReadPost={slug => router.push(`/post/${slug}`)}
                filteredPosts={filteredPosts}
              />
            </Col>
          </Row>
        </div>

      </Suspense>
    </ErrorBoundary>
  );
}