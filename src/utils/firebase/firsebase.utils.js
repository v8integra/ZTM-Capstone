import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBmTJBwQLuZJynTzbZ1b_OLOgAc5PEyTOY",
  authDomain: "crwn-shop-db-44c21.firebaseapp.com",
  projectId: "crwn-shop-db-44c21",
  storageBucket: "crwn-shop-db-44c21.appspot.com",
  messagingSenderId: "1002685030762",
  appId: "1:1002685030762:web:3df8efb3c1eced1446c513"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

