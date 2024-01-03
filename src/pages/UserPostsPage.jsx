import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from '../store/store';
import PostComp from '../components/PostComp';
import SortingOptions from '../components/SortingOptions';

const UserPostsPage = () => {
  const { username } = useParams();
  const posts = useStore((state) => state.posts);
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const filteredPosts = posts.filter((post) => post.username === username);
    setUserPosts(filteredPosts);
  }, [posts, username]);

  return (
    <>
      <SortingOptions posts={userPosts} setSortedPosts={setUserPosts} />
      <div className='users_posts__div'>
        {userPosts.map((post) => (
          <PostComp key={post.id} {...post} />
        ))}
      </div>
    </>
  );
};

export default UserPostsPage;
