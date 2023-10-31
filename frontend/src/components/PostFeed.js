import React, { useState, useEffect } from 'react';
import Post from './Post';

const PostFeed = ({ userId }) => {
  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
         // Fetch user posts
    fetch(`/api/users/${userId}/posts`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => response.json())
    .then(data => setPosts(data)) // set user posts
    .catch(error => { console.log('Fetch error:', error);
      setPosts([])
  });
  }, [userId, token]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostFeed;
