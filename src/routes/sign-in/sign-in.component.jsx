import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import {
  auth,
  signInWithGooglePopup, 
  signInWithGoogleRedirct, 
  createUserDocumentFromAuth 
} from '../../utils/firebase/firsebase.utils'

const SignIn = () => {
  useEffect(async() => {
    const res = await getRedirectResult(auth);
    if(res) {
      const userDocRef = await createUserDocumentFromAuth(res.user);
    }
  }, []);

  const logGooglePopupUser = async() => {
    const { user }= await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  }

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGooglePopupUser}>
        Sign in with Google Popup
      </button>
      <button onClick={signInWithGoogleRedirct}>
        Sign in with Google Redirect
      </button>
    </div>
  )
}

export default SignIn;