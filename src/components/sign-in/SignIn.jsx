import React, { useState } from "react";
import "./sign-in.scss";

import FormInput from "../form-input/FormInput";
import CustomBtn from "../custom-btn/CustomBtn";

function SignIn(props) {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleSignIn = (e) => {
    e.preventDefault();
    setUser({ email: "", password: "" });
  };

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setUser({ [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>Already have an account</h2>
      <span>Sign in with Email</span>

      <form onSubmit={handleSignIn}>
        <FormInput
          type="email"
          name="email"
          label="Email"
          required
          value={user.email}
          handleChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          required
          value={user.password}
          handleChange={handleChange}
        />
        <CustomBtn type="submit" value="Submit Form">Sign in</CustomBtn>
      </form>
    </div>
  );
}

export default SignIn;
