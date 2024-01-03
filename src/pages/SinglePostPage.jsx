import React from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from '../store/store';

const SinglePostPage = () => {
  const { id } = useParams();
  const posts = useStore((state) => state.posts);
  const post = posts.find((p) => p.id === id);

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  return (
    <div className='single_post__div'>
      <div className='single_image__div'>
        <img src={post.image} alt={post.title} />
      </div>
      <div className='single_info__div'>
        <h2>{post.title}</h2>
        <h3>{post.username}</h3>
        <h4>{formatDate(post.timestamp)}</h4>
      </div>
    </div>
  );
};

export default SinglePostPage;
