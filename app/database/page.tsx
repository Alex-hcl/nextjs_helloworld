"use client";

import { useState, useEffect } from 'react'

export default function DatabaseHomePage() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10">
      <h1 className="text-4xl font-bold mb-8">Posts</h1>
      <ul className="w-full max-w-2xl space-y-4">
        {posts.map((post: any) => (
          <li key={post.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-gray-700">{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}