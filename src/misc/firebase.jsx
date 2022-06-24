import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/storage';

const config = {
  apiKey: 'AIzaSyCDuLpOZrOEJD7-1ieYEQ7ITw2rN9YN1yE',
  authDomain: 'chat-web-app-8ef3f.firebaseapp.com',
  databaseURL: 'https://chat-web-app-8ef3f-default-rtdb.firebaseio.com',
  projectId: 'chat-web-app-8ef3f',
  storageBucket: 'chat-web-app-8ef3f.appspot.com',
  messagingSenderId: '1005494725615',
  appId: '1:1005494725615:web:3e03fd1ad90e2cc8a6241a',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
