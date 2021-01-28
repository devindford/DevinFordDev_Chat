import React from 'react';
import './App.css';
import { ProvideAuth } from './library/auth';
import MainLayout from './components/MainLayout';
import 'firebase/analytics';
import firebase from 'firebase/app';
//eslint-disable-next-line
const defaultAnalytics = firebase.analytics();

function App() {
  return (
    <ProvideAuth>
      <MainLayout />
    </ProvideAuth>
  );
}

export default App;
