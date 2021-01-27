import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyDfXOynq42l7e9NLHUNi6UKzL-w7SwW8jk',
    authDomain: 'qtech-chat-example.firebaseapp.com',
    projectId: 'qtech-chat-example',
    storageBucket: 'qtech-chat-example.appspot.com',
    messagingSenderId: '559549061123',
    appId: '1:559549061123:web:c7f8d304f95d3de266d636',
  });
}

export default firebase;
