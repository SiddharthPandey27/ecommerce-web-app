import React from "react";

import { auth, createUserProfileDoc } from "../../firebase/firebase";

import FormInput from "../../elements/formInput/formInput";
import CustomButton from "../../elements/customButton/customButton";

class SignUpComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDoc(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <form className="sign-up-component" onSubmit={this.handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          value={displayName}
          label="Display Name"
          required
          handleChange={this.handleChange}
        />
        <FormInput
          name="email"
          type="email"
          value={email}
          label="Email"
          required
          handleChange={this.handleChange}
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          label="Password"
          required
          handleChange={this.handleChange}
        />
        <FormInput
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          label="Confirm Password"
          required
          handleChange={this.handleChange}
        />
        <CustomButton type="submit"> Sign Up </CustomButton>
      </form>
    );
  }
}

export default SignUpComponent;
