import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCqCr79e-_RVEity2nZAzJ2poZMhjrVeV8",
    authDomain: "real-time-chat-593a9.firebaseapp.com",
    projectId: "real-time-chat-593a9",
    storageBucket: "real-time-chat-593a9.appspot.com",
    messagingSenderId: "980541991460",
    appId: "1:980541991460:web:2d3ef973604992f07506b1",
    measurementId: "G-KPQX8KTMNH"
});

export const Context = createContext(null)
const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <Context.Provider value={{firestore, auth,firebase}}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
