import { sueState } from 'react';

const defaultFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignupForm = () => {
  const [formFields, setFormFields] = useState(defaultFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({...formFields, [name]: value})
  }

  return (
    <div>
      <h1>Sign up with you email ad password</h1>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input type="text" required onChange={ handleChange } name="displayName" value={ displayName }/>

        <label>Email</label>
        <input type="email" required onChange={ handleChange } name="email" value={ email }/>

        <label>Password</label>
        <input type="password" required onChange={ handleChange } name="password" value={ password }/>

        <label>Confirm Password</label>
        <input type="password" required onChange={ handleChange } name="confirmPassword" value={ confirmPassword }/>

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupForm
