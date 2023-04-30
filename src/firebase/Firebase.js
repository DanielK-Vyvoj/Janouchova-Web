import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDIpTv9uEG4bSjDuz9s2KPsrfOaIZ9Gl3Q",
  authDomain: "jk-app-24506.firebaseapp.com",
  databaseURL: "https://jk-app-24506-default-rtdb.firebaseio.com",
  projectId: "jk-app-24506",
  storageBucket: "jk-app-24506.appspot.com",
  messagingSenderId: "553191098818",
  appId: "1:553191098818:web:bbc45749d926ac5376ae5b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { app, auth, db };