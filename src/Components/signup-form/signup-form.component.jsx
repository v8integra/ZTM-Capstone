const SignupForm = () => {
  return (
    <div>
      <h1>Sign up with you email ad password</h1>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input type="text" required/>

        <label>Email</label>
        <input type="email" required/>

        <label>Password</label>
        <input type="password" required/>

        <label>Confirm Password</label>
        <input type="password" required/>

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupForm
