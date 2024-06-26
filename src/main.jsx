import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAt35d2QG7J_DGTQanYWtE3xNJMPDE4i18",
  authDomain: "proyecto-final-braian-ferrari.firebaseapp.com",
  projectId: "proyecto-final-braian-ferrari",
  storageBucket: "proyecto-final-braian-ferrari.appspot.com",
  messagingSenderId: "1020283540812",
  appId: "1:1020283540812:web:4a1a1ce2b91c95e351ebe9",
  measurementId: "G-BN4N115ELK"
};
const app = initializeApp(firebaseConfig)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
  
