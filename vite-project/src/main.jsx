import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDraYODcFSy-3LTY9KNmaCLtX1jAd7Pt2k",
  authDomain: "fashion-verse-c9a41.firebaseapp.com",
  projectId: "fashion-verse-c9a41",
  storageBucket: "fashion-verse-c9a41.appspot.com",
  messagingSenderId: "251317780486",
  appId: "1:251317780486:web:013ff19f09204d02664387"
};


initializeApp(firebaseConfig);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
