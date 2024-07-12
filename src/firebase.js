// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0NAOfuGHY_kzfZPT9dFFyu7y5beCc7GU",
  authDomain: "job-portel-bee19.firebaseapp.com",
  databaseURL: "https://job-portel-bee19-default-rtdb.firebaseio.com",
  projectId: "job-portel-bee19",
  storageBucket: "job-portel-bee19.appspot.com",
  messagingSenderId: "972475632209",
  appId: "1:972475632209:web:89bf376564eda5c9b8c670",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database and auth
const database = getDatabase(app);
const auth = getAuth(app);

export { database, auth };
