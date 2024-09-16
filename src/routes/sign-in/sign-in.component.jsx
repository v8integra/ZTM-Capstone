import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firsebase.utils'

const SignIn = () => {
  const logGoogleUser = async() => {
    const { user }= await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  }

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>
        Sign in with Google
      </button>
    </div>
  )
}

export default SignIn;