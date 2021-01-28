import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyBftNfsMqlFz7pMdTKucxTfME1_rjx46OM',
    authDomain: 'dfdchatprod.firebaseapp.com',
    projectId: 'dfdchatprod',
    storageBucket: 'dfdchatprod.appspot.com',
    messagingSenderId: '688168834296',
    appId: '1:688168834296:web:9291a035cb3f006b08570d',
    measurementId: 'G-ESBN3M4N88',
  });
}

export default firebase;
