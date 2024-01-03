import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useStore } from './store/store';
import Toolbar from './components/Toolbar';
import AuthPage from './pages/AuthPage';
import IndexPage from './pages/IndexPage';
import ProfilePage from './pages/ProfilePage';
import CreatePostPage from './pages/CreatePostPage';
import SinglePostPage from './pages/SinglePostPage';
import UserPostsPage from './pages/UserPostsPage';
import LandingPage from './pages/LandingPage';

const App = () => {
  const isLoggedIn = useStore((state) => state.isLoggedIn);

  return (
    <div className='App'>
      <BrowserRouter>
        {isLoggedIn && <Toolbar />}
        <Routes>
          {/* Redirect to welcome if not logged in */}
          {!isLoggedIn && <Route path='*' element={<Navigate to='/welcome' replace />} />}

          {/* Routes available only for logged-in users */}
          {isLoggedIn && (
            <>
              <Route path='/' element={<IndexPage />} />
              <Route path='/profile' element={<ProfilePage />} />
              <Route path='/createPost' element={<CreatePostPage />} />
              <Route path='/post/:id' element={<SinglePostPage />} />
              <Route path='/userPosts/:username' element={<UserPostsPage />} />
            </>
          )}

          {/* Public Routes */}
          <Route path='/welcome' element={<LandingPage />} />
          <Route path='/signIn' element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
