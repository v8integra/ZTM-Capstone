import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth 
} from '../../utils/firebase/firsebase.utils';

import SignupForm from '../../Components/signup-form/signup-form.component';

const SignIn = () => {
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
      <SignupForm />
    </div>
  )
}

export default SignIn;