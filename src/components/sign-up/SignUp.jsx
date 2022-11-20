import React, { useState } from "react";
import FormInput from "../form-input/FormInput";
import CustomBtn from "../custom-btn/CustomBtn";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.scss";

function SignUp(props) {
  const [userInfo, setUserInfo] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = userInfo;

    if (displayName && email && password && confirmPassword) {
      if (password !== confirmPassword) {
        alert("Password don't match!");
        return;
      }

      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );

        createUserProfileDocument(user, { displayName });

        setUserInfo({
          displayName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } catch (error) {
        console.log("Sign Up Error: ", error);
      }
    } else {
      alert("Please fill all the fields to Sign Up");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const { displayName, email, password, confirmPassword } = userInfo;

  return (
    <div className="sign-up">
      <h2 className="title">I don't have an account</h2>
      <span>Sign Up with your email & password</span>
      {/* <form className="sign-up-form" onSubmit={(event)=>handleSubmit(event)}> */}
      <form className="sign-up-form">
        <FormInput
          type="text"
          name="displayName"
          label="Name"
          value={displayName}
          onChange={handleChange}
          required
        />
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={password}
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          value={confirmPassword}
          onChange={handleChange}
          required
        />
        {/* <CustomBtn type='submit'>Sign Up</CustomBtn> */}
        <CustomBtn onClick={(event) => handleSubmit(event)}>Sign Up</CustomBtn>
      </form>
    </div>
  );
}

export default SignUp;
