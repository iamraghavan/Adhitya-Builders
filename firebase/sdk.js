import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";

  const firebaseConfig = {
    apiKey: "AIzaSyD7g-v-s6rF91mPNXtT739oyYVmlLv_ZoI",
    authDomain: "adhitya-builders.firebaseapp.com",
    projectId: "adhitya-builders",
    storageBucket: "adhitya-builders.appspot.com",
    messagingSenderId: "1065668990292",
    appId: "1:1065668990292:web:4c432e4307f78b842c24c1",
    measurementId: "G-9VPFEYL792"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
