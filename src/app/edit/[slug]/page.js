"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { EditPost } from './EditPost';
import '../../styles/globals.css';

export default function EditPostContainer({ params }) {
  const [formData, setFormData] = useState({ slug: '', title: '', description: '', img: '' });
  const [notFound, setNotFound] = useState(false);
  const fileInputRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedPosts = localStorage.getItem('posts');
      const posts = savedPosts ? JSON.parse(savedPosts) : [];
      const post = posts.find((p) => p.slug === params.slug);
      if (post) {
        setFormData(post);
      } else {
        setNotFound(true);
      }
    }
  }, [params.slug, router]);

  if (notFound) {
    return <div>Post not found.</div>;
  }
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevFormData) => ({ ...prevFormData, img: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdatePost = () => {
    if (typeof window !== 'undefined') {
      const savedPosts = localStorage.getItem('posts');
      const posts = savedPosts ? JSON.parse(savedPosts) : [];
      const updatedPosts = posts.map((p) => (p.slug === formData.slug ? formData : p));
      localStorage.setItem('posts', JSON.stringify(updatedPosts));
      router.push(`/post/${params.slug}`);
    }
  };

  const handleBack = () => router.push('/');

  return (
    <EditPost
      formData={formData}
      onInputChange={handleInputChange}
      onFileChange={handleFileChange}
      onUpdatePost={handleUpdatePost}
      fileInputRef={fileInputRef}
      onBack={handleBack}
    />
  );
}