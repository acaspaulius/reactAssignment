import React from 'react';
import { useNavigate } from 'react-router-dom';

const PostComp = ({ id, image, title, username }) => {
  const navigate = useNavigate();

  const openPost = () => {
    // console.log(`Navigating to post with ID: ${id}`);
    navigate(`/post/${id}`);
  };

  const openUserPosts = () => {
    // console.log(`Navigate to post with username: ${username}`);
    navigate(`/userPosts/${username}`);
  };

  return (
    <div className='post_comp__div'>
      <img src={image} alt={title} onClick={openPost} />
      <h2>{title}</h2>
      <h4 onClick={openUserPosts}>{username}</h4>
    </div>
  );
};

export default PostComp;
