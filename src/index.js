import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

firebase.initializeApp({
    apiKey: "AIzaSyBYB1NHnwMorzv2nnHZLeKMEikVvj-M44g",
    authDomain: "messenger-5545f.firebaseapp.com",
    projectId: "messenger-5545f",
    storageBucket: "messenger-5545f.appspot.com",
    messagingSenderId: "252769561188",
    appId: "1:252769561188:web:6a296893bc4d18e774cd71"
  }
);

const auth = firebase.auth();
const firestore = firebase.firestore();

export const Context = createContext(null)

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{
      firebase,
      auth,
      firestore
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
