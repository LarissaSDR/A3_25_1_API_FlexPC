import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDJHoWnNJomji5Y6nB34TCJeeiWUFHT9uM",
    authDomain: "projeto-flexpc-api.firebaseapp.com",
    projectId: "projeto-flexpc-api",
    storageBucket: "projeto-flexpc-api.firebasestorage.app",
    messagingSenderId: "274575524560",
    appId: "1:274575524560:web:a312894f3605ab9b1754d5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
