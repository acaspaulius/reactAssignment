import React, { useRef, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useStore } from '../store/store';

const AuthPage = () => {
  const loginUsernameRef = useRef();
  const loginPasswordRef = useRef();
  const registerUsernameRef = useRef();
  const registerPasswordRef = useRef();
  const passwordConfirmRef = useRef();

  const navigate = useNavigate();
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const users = useStore((store) => store.users);

  const location = useLocation();
  const [showLoginForm, setShowLoginForm] = useState(true);

  useEffect(() => {
    // form based on location state
    const formType = location.state?.formType;
    setShowLoginForm(formType === 'login');
    // console.log('Form type:', formType);
  }, [location]);

  useEffect(() => {
    // redirect to home page once logged in/registered
    if (isLoggedIn) {
      navigate('/');
      // console.log('Redirecting to home page');
    }
  }, [isLoggedIn, navigate]);

  function validatePassword(password) {
    const isValid = password.length >= 4 && password.length <= 20 && /\d/.test(password);
    // console.log('Password validation result:', isValid);
    return isValid;
  }

  function login() {
    const username = loginUsernameRef.current.value;
    const password = loginPasswordRef.current.value;
    // console.log('Attempting to log in with:', username, password);

    const existingUser = users.find((user) => user.username === username && user.password === password);

    if (existingUser) {
      useStore.getState().setMyUser(existingUser);
      useStore.getState().logIn(existingUser);
      // console.log('Login successful:', existingUser);
    } else {
      alert('Invalid username or password');
      // console.log('Login failed for username:', username);
    }
  }

  function register() {
    const username = registerUsernameRef.current.value;
    const password = registerPasswordRef.current.value;
    const confirmPassword = passwordConfirmRef.current.value;
    // console.log('Attempting to register with:', username, password, confirmPassword);

    if (username.length < 4 || username.length > 20) {
      alert('Username must be between 4 and 20 characters');
      return;
    }

    if (!validatePassword(password)) {
      alert('Password must be between 4 and 20 characters and include at least one number');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    useStore.getState().register({ username, password });
    // console.log('Registration attempted for:', username);
  }

  return (
    <div className='main_auth__div'>
      {showLoginForm ? (
        <div className='auth_form__div'>
          <h1>SIGN IN</h1>
          <input type='text' ref={loginUsernameRef} placeholder='Username' />
          <input type='password' ref={loginPasswordRef} placeholder='Password' />
          <button onClick={login}>Login</button>
        </div>
      ) : (
        <div className='auth_form__div'>
          <h1>SIGN UP</h1>
          <input type='text' ref={registerUsernameRef} placeholder='Username' />
          <input type='password' ref={registerPasswordRef} placeholder='Password' />
          <input type='password' ref={passwordConfirmRef} placeholder='Confirm password' />
          <button onClick={register}>Register</button>
        </div>
      )}
    </div>
  );
};

export default AuthPage;
