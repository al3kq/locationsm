import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="p-6 m-4 bg-white rounded shadow-md w-full sm:w-3/4 lg:w">
      <h2 className="text-2xl font-bold m-1">{post.title}</h2>
      <p className="text-gray-700">{post.content}</p>
      <p className="text-gray-500">Location: {post.location_id}</p>
      <p className="text-gray-500">Posted on: {new Date(post.created_at).toLocaleDateString()}</p>
    </div>
  );
};

export default Post;

