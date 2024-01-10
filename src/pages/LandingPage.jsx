import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className='landing_page__div'>
      <h1>THE ASSIGNMENT</h1>
      <div className='landing_buttons__div'>
        <button onClick={() => navigate('/signIn', { state: { formType: 'login' } })}>SIGN IN</button>
        <button onClick={() => navigate('/signIn', { state: { formType: 'register' } })}>SIGN UP</button>
      </div>
    </div>
  );
};

export default LandingPage;
