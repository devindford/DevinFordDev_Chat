import React from 'react';
import { useAuth } from '../../library/auth';
import MessageList from '../Messages/MessageList';
import codingLogo from '../../assets/codingLogo.png';

const MainLayout = () => {
  const auth = useAuth();

  return (
    <div className='App'>
      <header>
        <button className='sign-out' onClick={() => auth.signOut()}>
          Sign Out
        </button>
        <div className='header-logo'>
          <h2>Devin Ford Development</h2>
          <img src={codingLogo} alt='Coding Bracket' className='logo' />
        </div>
      </header>

      <section>
        {auth.user ? (
          <MessageList />
        ) : (
          <button onClick={(e) => auth.signInWithGoogle()}>SignIn</button>
        )}
      </section>
    </div>
  );
};

export default MainLayout;
