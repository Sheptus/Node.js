import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBMask,
  MDBInput,
  MDBView,
  MDBBtn
} from "mdbreact";
import "../../../style/pages/auth.css";
import axios from "axios";

const LoginUrl = "http://localhost:4000/auth/login";

class Login extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
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
    const result = await axios.post(LoginUrl, this.state);
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
      <div className="classic-form-page" id="login">
        <MDBView>
          <MDBMask
            className="d-flex justify-content-center align-items-center"
            overlay="stylish-strong"
          >
            <MDBContainer className="h-100 d-flex justify-content-center align-items-center">
              <MDBRow>
                <MDBCol md="10" lg="6" xl="5" sm="12" className="mt-5 mx-auto">
                  <MDBCard
                    className="card-image"
                    style={{
                      backgroundImage:
                        "url(https://mdbootstrap.com/img/Photos/Others/pricing-table6.jpg)",
                      width: "28rem"
                    }}
                  >
                    <div className="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
                      <div className="text-center">
                        <h3 className="white-text mb-5 mt-4 font-weight-bold">
                          <strong>Login</strong>
                          <a className="green-text font-weight-bold"></a>
                        </h3>
                      </div>
                      <MDBInput
                        label="Your email"
                        group
                        margin="normal"
                        type="text"
                        id="email"
                        name="email"
                        autoComplete="email"
                        validate
                        labelClass="white-text"
                        onChange={this.handleChange}
                      />
                      <MDBInput
                        label="Your password"
                        group
                        margin="normal"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        validate
                        labelClass="white-text"
                        onChange={this.handleChange}
                      />
                      <div className="md-form pb-3"></div>
                      <MDBRow className="d-flex align-items-center mb-4">
                        <div className="text-center mb-3 col-md-12">
                          <MDBBtn
                            color="success"
                            rounded
                            type="button"
                            className="btn-block z-depth-1"
                          >
                            Sign in
                          </MDBBtn>
                        </div>
                      </MDBRow>
                      <MDBCol md="12">
                        <p className="font-small white-text d-flex justify-content-end">
                          Don't have an account?
                          <a
                            href="/signUp"
                            className="green-text ml-1 font-weight-bold"
                          >
                            Sign Up
                          </a>
                        </p>
                      </MDBCol>
                    </div>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

export default Login;
