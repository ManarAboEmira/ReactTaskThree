import React, { Component } from "react";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
    };
  }
  handleFirstNameChange = (event) => {
    this.setState({ firstName: event.target.value });
  };

  handleLastNameChange = (event) => {
    this.setState({ lastName: event.target.value });
  };

  handlePhoneNumberChange = (event) => {
    this.setState({ phoneNumber: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSignup = (event) => {
    event.preventDefault();
    // You can implement signup logic here, e.g., sending data to a server.
    console.log("Signup form submitted with data:", this.state);
  };

  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={this.handleSignup}>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              value={this.state.firstName}
              onChange={this.handleFirstNameChange}
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              value={this.state.lastName}
              onChange={this.handleLastNameChange}
            />
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="text"
              value={this.state.phoneNumber}
              onChange={this.handlePhoneNumberChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default Signup;
