import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";

import "../../../style/pages/auth.css";

import axios from "axios";

const RegisterUrl = "http://localhost:4040/auth/register";

class Register extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      userName: "",
      email: "",
      password: ""
    };
  }

  saveToLocalStorage = (key: any, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  handleChange = (e: any) => {
    const { target } = e;
    this.setState({
      [target.name]: target.value
    });
  };

  handleRegister = async () => {
    // console.log(this.state);
    const result = await axios.post(RegisterUrl, this.state);
    //check if there some errors
    const { error, message, redirect, session } = result.data;
    if (error) return alert(error);
    alert(`${message}. your session number: ${session}`);
    this.saveToLocalStorage(`flight-session-${session}`, session);
    //redirect if i pass from server to home page
    if (redirect) this.props.history.push("/");
  };

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form>
              <p className="h5 text-center mb-4">Sign up</p>
              <div className="grey-text">
                <MDBInput
                  label="Your name"
                  icon="user"
                  group
                  margin="normal"
                  type="userName"
                  id="userName"
                  autoComplete="current-userName"
                  validate
                  labelClass="dark-text"
                  onChange={this.handleChange}
                />
                <MDBInput
                  label="Your email"
                  icon="envelope"
                  group
                  margin="normal"
                  type="text"
                  id="email"
                  name="email"
                  autoComplete="email"
                  validate
                  labelClass="dark-text"
                  onChange={this.handleChange}
                />
                {/* <MDBInput
                  label="Confirm your email"
                  icon="exclamation-triangle"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                /> */}
                <MDBInput
                  label="Your password"
                  icon="lock"
                  group
                  margin="normal"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  validate
                  labelClass="dark-text"
                  onChange={this.handleChange}
                />
              </div>
              <div className="text-center">
                <MDBBtn color="primary" onClick={this.handleRegister}>
                  Register
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Register;
