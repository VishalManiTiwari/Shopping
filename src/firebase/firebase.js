import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAlPSjKfciN1arVvSveBlYklkpO5G2CsIo",
  authDomain: "e-shop-4657f.firebaseapp.com",
  projectId: "e-shop-4657f",
  storageBucket: "e-shop-4657f.appspot.com",
  messagingSenderId: "233371227363",
  appId: "1:233371227363:web:6cdcf9bc02e87679d661d6",
  measurementId: "G-TKPPGTVZMC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export {auth};