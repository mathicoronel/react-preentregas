import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAiI_mpwJZQoYp4DmY21szEdUldWOiKIM",
  authDomain: "ecommerce-react-50998.firebaseapp.com",
  projectId: "ecommerce-react-50998",
  storageBucket: "ecommerce-react-50998.appspot.com",
  messagingSenderId: "877630995475",
  appId: "1:877630995475:web:54dff565e9c7852a0413e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
