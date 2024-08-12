// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyC0vhnrIxnUXNSAZuV5S_ONd-L3iwlw6MA",
  authDomain: "chat-app-6d82c.firebaseapp.com",
  projectId: "chat-app-6d82c",
  storageBucket: "chat-app-6d82c.appspot.com",
  messagingSenderId: "221261346686",
  appId: "1:221261346686:web:f0d76035402939b5a0652f"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    
  }
});

