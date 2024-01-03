import React, { useRef } from 'react';
import { useStore } from '../store/store';

const ProfilePage = () => {
  const newUsernameRef = useRef();
  const myUser = useStore((state) => state.myUser);
  const users = useStore((state) => state.users);
  const updateUsername = useStore((state) => state.updateUsername);

  const changeUsername = () => {
    const newUsername = newUsernameRef.current.value;

    // check if new username meets length requirements
    if (newUsername.length < 4 || newUsername.length > 20) {
      alert('Username must be between 4 and 20 characters');
      return;
    }

    // check if it is available
    const usernameExists = users.some((user) => user.username === newUsername);
    if (usernameExists) {
      alert('Username already exists');
      return;
    }

    // update it in the store
    updateUsername(myUser.username, newUsername);
    newUsernameRef.current.value = '';

    alert('Username updated successfully');
  };

  return (
    <div className='profile_main__div'>
      <h1>{myUser.username}</h1>
      <input type='text' placeholder='New username...' ref={newUsernameRef} />
      <button onClick={changeUsername}>CHANGE USERNAME</button>
    </div>
  );
};

export default ProfilePage;
