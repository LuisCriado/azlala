
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDIVQdSwLDk6cPOrjrqTCASqVjfqWWkIcQ",
  authDomain: "zapatillas-2022.firebaseapp.com",
  projectId: "zapatillas-2022",
  storageBucket: "zapatillas-2022.appspot.com",
  messagingSenderId: "1059288626515",
  appId: "1:1059288626515:web:6eea213887a84f0f5a9da6"
};


//inicializar Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export {auth};