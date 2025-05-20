"use client";
import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { CreatePost } from './CreatePost';

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
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong while rendering the form.</div>;
    }
    return this.props.children;
  }
}

export default function CreatePostContainer() {
  const [formData, setFormData] = useState({ slug: '', title: '', description: '', content: '', category:'', img: '' });
  const fileInputRef = useRef(null);
  const router = useRouter();

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, img: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const onAddUser = () => {
    const newFormData = { ...formData, category: formData.category.toLowerCase() };
    if (typeof window !== 'undefined') {
      const existingPosts = JSON.parse(localStorage.getItem('posts')) || [];
      const slugExists = existingPosts.some(post => post.slug === newFormData.slug);
      if (slugExists) {
        alert('A post with this slug already exists. Please use a unique slug.');
        return;
      }
      const updatedPosts = [...existingPosts, { ...newFormData, comments: [] }];
      localStorage.setItem('posts', JSON.stringify(updatedPosts));
    }
    setFormData({ slug: '', title: '', description: '', content:'', category:'', img: '' });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    router.push('/');
  };

  const onBack = () => router.push('/');

  const onClear = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('posts');
    }
    setFormData({ slug: '', title: '', description: '', content:'', category:'', img: '' });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <ErrorBoundary>
      <CreatePost
        formData={formData}
        onInputChange={onInputChange}
        onFileChange={onFileChange}
        onAddUser={onAddUser}
        fileInputRef={fileInputRef}
        onBack={onBack}
        onClear={onClear}
      />
    </ErrorBoundary>
  );
}
