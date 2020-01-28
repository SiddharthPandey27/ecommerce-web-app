import React from "react";

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

  handleSubmit = event => {
    event.preventDefault();

    const { email, password } = this.state;
    console.log("Submit");
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
      <form className="signin" submit={this.handleSubmit}>
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
        <CustomButton type="submit"> Sign In </CustomButton>
      </form>
    );
  }
}

export default SignInComponent;
