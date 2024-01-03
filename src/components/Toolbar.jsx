import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../store/store';

const Toolbar = () => {
  const navigate = useNavigate();
  const logOut = useStore((state) => state.logOut);

  const handleLogout = () => {
    logOut();
    navigate('/welcome');
  };

  const checkActive = (path) => {
    return window.location.pathname === path ? 'active' : '';
  };

  return (
    <div className='main_toolbar__div'>
      <div className='links_div'>
        <Link to='/profile' className={checkActive('/profile')}>
          PROFILE
        </Link>
        <Link to='/' className={checkActive('/')}>
          POSTS
        </Link>
        <Link to='/createPost' className={checkActive('/createPost')}>
          CREATE POST
        </Link>
      </div>
      <div className='logout_div' onClick={handleLogout}>
        LOGOUT
      </div>
    </div>
  );
};

export default Toolbar;
