import React from "react";

import { signInWithGoogle } from '../../firebase/firebase';
import { auth } from "firebase";

import FormInput from "../../elements/formInput/formInput";
import CustomButton from "../../elements/customButton/customButton";

import "./styles.scss";

class SignInComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <form className="signin" onSubmit={this.handleSubmit}>
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
        <div className="buttons">
          <CustomButton type="submit"> Sign In </CustomButton>
          <CustomButton onClick={signInWithGoogle} isBlueButton={true} > Sign In With Google </CustomButton>
        </div>
      </form>
    );
  } 
}

export default SignInComponent;
