import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTHDOMAIN,
    projectId: process.env.FIREBASE_PROJECTID,
    storageBucket: process.env.FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGESENDERID,
    appId: process.env.APPID,
    measurementId: process.env.FIREBASE_MEASURE,
  });
}

export default firebase;
