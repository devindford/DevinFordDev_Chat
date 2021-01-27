import React from 'react';
import './App.css';
import { ProvideAuth } from './library/auth';
import MainLayout from './components/MainLayout';

function App() {
  return (
    <ProvideAuth>
      <MainLayout />
    </ProvideAuth>
  );
}

export default App;
