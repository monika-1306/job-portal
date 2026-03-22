function Register() {
  return (
    <div style={{ width: "300px", margin: "auto", marginTop: "50px" }}>
      <h2>Create your account</h2>

      <input type="text" placeholder="First name" /><br /><br />
      <input type="text" placeholder="Last name" /><br /><br />
      <input type="email" placeholder="Email address" /><br /><br />
      <input type="text" placeholder="Phone number" /><br /><br />
      <input type="password" placeholder="Password" /><br /><br />

      {/* ❌ removed confirm password as asked */}

      <button>Create account</button>
    </div>
  );
}

export default Register;