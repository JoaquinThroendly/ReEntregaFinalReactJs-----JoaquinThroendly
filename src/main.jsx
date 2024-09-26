import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {initializeApp} from "firebase/app";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


const firebaseConfig = {
  apiKey: "AIzaSyAfmgI1RXHhOhmVIgP-W7K1WBLeceGb9YY",
  authDomain: "final-reactjs.firebaseapp.com",
  projectId: "final-reactjs",
  storageBucket: "final-reactjs.appspot.com",
  messagingSenderId: "891276649320",
  appId: "1:891276649320:web:713f25a0d6ab9e6104acdd",
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
