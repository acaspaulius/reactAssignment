import React from 'react';

const SortingOptions = ({ posts, setSortedPosts }) => {
  const sortByTitle = () => {
    const sorted = [...posts].sort((a, b) => a.title.localeCompare(b.title));
    setSortedPosts(sorted);
  };

  const sortByUploadTime = () => {
    const sorted = [...posts].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    setSortedPosts(sorted);
  };

  return (
    <div className='sorting_options'>
      <div onClick={sortByTitle}>Sort Posts by Title</div>
      <div onClick={sortByUploadTime}>Sort Posts by Upload Time</div>
    </div>
  );
};

export default SortingOptions;
