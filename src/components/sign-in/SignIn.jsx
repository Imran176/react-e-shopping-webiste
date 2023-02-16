import React, { useState } from "react";
import { connect } from "react-redux";

import "./sign-in.scss";

import FormInput from "../form-input/FormInput";
import CustomBtn from "../custom-btn/CustomBtn";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/userActions";

function SignIn(props) {
  const [user, setUser] = useState({ email: "", password: "" });
  const { googleSignInStart } = props;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { emailSignInStart } = props;
    const { email, password } = user;

    emailSignInStart(email, password);

    //   if (email && password) {
    //     try {
    //       await auth.signInWithEmailAndPassword(email, password);
    //       setUser({ email: "", password: "" });
    //     } catch (error) {
    //       console.log("Sign In Error: ", error);
    //     }
    //   } else {
    //     alert("Email & Password are required to Sign In");
    //   }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>Already have an account</h2>
      <span>Sign in with Email</span>

      {/* <form onSubmit={handleSubmit}> */}
      <form>
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
        <div className="btn-group">
          {/* <CustomBtn type="submit">Sign in</CustomBtn> */}
          <CustomBtn type="submit" onClick={(e) => handleSubmit(e)}>
            Sign in
          </CustomBtn>
          <CustomBtn type="button" onClick={googleSignInStart} isGoogleSignIn>
            Sign in Google
          </CustomBtn>
        </div>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
