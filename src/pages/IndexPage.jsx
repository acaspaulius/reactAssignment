import React, { useState, useEffect } from 'react';
import { useStore } from '../store/store';
import PostComp from '../components/PostComp';
import SortingOptions from '../components/SortingOptions'; // Adjust the path as per your project structure

const IndexPage = () => {
  const posts = useStore((state) => state.posts);
  const [sortedPosts, setSortedPosts] = useState([]);

  useEffect(() => {
    setSortedPosts(posts);
  }, [posts]);

  return (
    <>
      <SortingOptions posts={posts} setSortedPosts={setSortedPosts} />
      <div className='main_posts__div'>
        {sortedPosts.map((post) => (
          <PostComp key={post.id} {...post} />
        ))}
      </div>
    </>
  );
};

export default IndexPage;
