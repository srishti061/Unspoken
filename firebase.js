// firebase.js (example)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCGQ8D6kkDQStawobxI2zp9xUFZLXx4IN4",
  authDomain: "unspoken-786.firebaseapp.com",
  projectId: "unspoken-786",
  storageBucket: "unspoken-786.appspot.com",  // corrected bucket here
  messagingSenderId: "325568881433",
  appId: "1:325568881433:web:2ad01872f5e07c0d0a9b88"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
