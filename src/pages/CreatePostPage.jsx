import React, { useRef } from 'react';
import moment from 'moment-timezone';
import { useStore } from '../store/store';

const CreatePostPage = () => {
  const titleRef = useRef();
  const imageRef = useRef();
  const myUser = useStore((state) => state.myUser);
  const addPost = useStore((state) => state.createPost);

  const createPost = () => {
    const timestamp = moment().tz('Europe/Vilnius').format();

    const post = {
      title: titleRef.current.value,
      image: imageRef.current.value,
      username: myUser.username,
      timestamp: timestamp,
      id: `post-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    };

    // console.log('Creating post:', post);

    addPost(post); // add the post to the posts array in the store

    titleRef.current.value = '';
    imageRef.current.value = '';

    alert('Post created successfully!');
  };

  return (
    <div className='create_post__div'>
      <h1>Create a Post!</h1>
      <input type='text' placeholder='Title...' ref={titleRef} />
      <input type='text' placeholder='Image url...' ref={imageRef} />
      <button onClick={createPost}>POST</button>
    </div>
  );
};

export default CreatePostPage;
