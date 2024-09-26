import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {initializeApp} from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDOklp8u_5IyyjBlpu-7qVDnc444vamcSA",
  authDomain: "cualquier-nombre-c45c8.firebaseapp.com",
  projectId: "cualquier-nombre-c45c8",
  storageBucket: "cualquier-nombre-c45c8.appspot.com",
  messagingSenderId: "573140796814",
  appId: "1:57314079614:web:4d05d4fd40cb7e845710df",
}

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
