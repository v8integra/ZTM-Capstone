import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

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
export const signInWithGoogleRedirct = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);
  
  if(!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (err) {
      console.log('Error creating user: ', err.message);
    }
  }

  return userDocRef;
}
