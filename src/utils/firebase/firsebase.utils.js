import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const PE = process.env;

const firebaseConfig = {
  apiKey: PE.REACT_APP_APIKEY,
  authDomain: PE.REACT_APP_AUTHDOMAIN,
  projectId: PE.REACT_APP_PROJECTID,
  storageBucket: PE.REACT_APP_STORAGEBUCKET,
  messagingSenderId: PE.REACT_APP_MESSAGINGSENDERID,
  appId: PE.REACT_APP_APPID
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

