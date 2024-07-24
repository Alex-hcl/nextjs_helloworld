import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to My Next.js App
        </h1>
        <p className="text-gray-600 mb-6">
          This is the home page.
        </p>
        <a
          href="/about"
          className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
        >
          Get Started
        </a>
      </div>
    </div>
  )
}

export default page