import React, { Component } from "react";
import { Modal, Button, Row, Col, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Formik, Field, Form } from "formik";
import Recaptcha from "react-recaptcha";
import * as Yup from "yup";
import { Redirect } from 'react-router-dom';
import { Route , withRouter} from 'react-router-dom';
import home from '../Home/home'
import { useHistory } from "react-router-dom";
import history from '../../History'
const validateLogin = Yup.object().shape({
  username: Yup.string()
    .trim()
    .required("Please enter your username"),
  password: Yup.string()
    .trim()
    .required("Please enter your password")
    .min(4, "Password must be at least 4 characters long"),
});
const validateEmail = Yup.object().shape({
  username: Yup.string()
    .trim()
    .required("Please enter your username"),
});

export default class LoginModal extends Component {
  constructor(props) {
    console.log("aaa");
    super(props);
    this.state = {
      isOpen: true,
      isCaptchLoaded: false,
      captha: process.env.CAPTCHA_SITE_KEY,
      forgotPassword: false,
      isLogin: true,
      rememberMe: false,
      isRedirect:false
    };

    this.closeModal = this.closeModal.bind(this);
    this.capthLoaded = this.capthLoaded.bind(this);
    this.capthReloadded = this.capthReloadded.bind(this);
    this.forgotPassword = this.forgotPassword.bind(this);
    this.signIn = this.signIn.bind(this);
    this.toggleRememberMe = this.toggleRememberMe.bind(this);
    this.redirect = this.redirect.bind(this);
  }
  signIn() {
    this.setState({
      forgotPassword: false,
      isLogin: true,
    });
  }
  toggleRememberMe() {
    this.setState({
      rememberMe: !this.state.rememberMe,
    });
  }
  capthLoaded() {
    console.log("captcha successfully loadded");
  }
  forgotPassword() {
    this.setState({
      forgotPassword: true,
      isLogin: false,
    });
  }
  capthReloadded(response) {
    if (response) {
      this.setState({
        isCaptchLoaded: true,
      });
    }
  }
  closeModal() {
    this.setState({
      isOpen: false,
    });

    this.props.closeClick(false);
  }
  handleClose = () => {};
  handleSubmitEvent = (values, action) => {
    console.log("form values", values);
    if(values.username=='anupom@gmail.com' && values.password=='1234'){
      console.log("/no")
      this.redirect()
      }
     
  };
  redirect()
  {
  
    console.log('redirect' )
    this.closeModal()
   console.log(history)
    // history.push("/User/account/");
    this.setState({
      isRedirect:true,
    });
    
  }
  handleSubmit = (values, action) => {
    console.log("form value", values.username);
    
  };
  render() {
   
    console.log("ass", process.env.CAPTCHA_SITE_KEY);

    const newInitialValues = {
      username: "",
      password: "",
    };
    const newInitialValueForEmail={
      username: "",
    } 
    return (
      <Fragment>
        <Modal show={this.state.isOpen}>
          <Modal.Header closeButton onClick={() => this.props.closeClick()}>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          {this.state.isLogin ? (
            <Modal.Body>
                
              <Formik
                initialValues={newInitialValues}
                validationSchema={validateLogin}
                onSubmit={this.props.handleSubmitEvent}
              >
                {({
                  values,
                  errors,
                  touched,
                  isValid,
                  isSubmitting,
                  setFieldValue,
                  setFieldTouched,
                  setErrors,
                }) => {
                  return (
                    <Form>
                      <Modal.Body>
                        <div className="contBox box-area">
                          <Row>
                            <Col xs={12} sm={12} md={12}>
                              <div className="gpex position-relative1">
                                <div className="form-group">
                                  <FormGroup controlId="username">
                                    <Field
                                      name="username"
                                      type="text"
                                      className={`form-control`}
                                      placeholder="Your email address"
                                      autoComplete="off"
                                    />
                                    {errors.name && touched.name ? (
                                      <span className="errorMsg">
                                        {errors.name}
                                      </span>
                                    ) : null}
                                  </FormGroup>
                                </div>
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            <Col xs={12} sm={12} md={12}>
                              <div className="gpex position-relative">
                                <div className="form-group">
                                  <FormGroup controlId="password">
                                    <Field
                                      name="password"
                                      type="text"
                                      className={`form-control`}
                                      placeholder="Password"
                                      autoComplete="off"
                                    />
                                    {errors.name && touched.name ? (
                                      <span className="errorMsg">
                                        {errors.name}
                                      </span>
                                    ) : null}
                                  </FormGroup>
                                </div>
                                <Recaptcha
                                  sitekey="6Lfa-5gbAAAAANlC89h7Rgt_LknGZYa2MZFs_fYv"
                                  render="explicit"
                                  onloadCallback={this.capthLoaded}
                                  varifyCallback={this.capthReloadded}
                                />
                                {/* <div className="form-group">
                                  <label htmlFor="rememberMe">
                                    Remember me
                                  </label>
                                  <input
                                    type="checkbox"
                                    className="form-control"
                                    id="rememberMe"
                                    ref="rememberMe"
                                    placeholder="Remember Me"
                                    onChange={this.toggleRememberMe}
                                  />
                                </div> */}
                                <Link to="">
                                  <a href="true" onClick={this.forgotPassword}>
                                    Trouble Logged In?
                                  </a>
                                </Link>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </Modal.Body>
                      <Modal.Footer>
                        {/* <Button variant="secondary" onClick={() => this.props.closeClick()}>
                   Close
                 </Button> */}
                        <div>
                          <Button variant="outline-warning" type="submit">
                            SIGN IN
                          </Button>
                          <br></br>
                        </div>

                        <div>
                          <Row>
                            <Col xs={12} sm={12} md={12}>
                              Don't have an account yet? Register Now!
                            </Col>
                          </Row>
                        </div>
                      </Modal.Footer>
                    </Form>
                  );
                }}
              </Formik>
            </Modal.Body>
          ) : (
            <Modal.Body>
              Enter your registered email
              <Formik
                initialValues={newInitialValueForEmail}
                validationSchema={validateEmail}
                onSubmit={this.handleSubmit}
              >
                {({
                  values,
                  errors,
                  touched,
                  isValid,
                  isSubmitting,
                  setFieldValue,
                  setFieldTouched,
                  setErrors,
                }) => {
                  return (
                    <Form>
                      <Modal.Body>
                        <div className="contBox box-area">
                          <Row>
                            <Col xs={12} sm={12} md={12}>
                              <div className="gpex position-relative">
                                <div className="form-group">
                                  <Field
                                    name="username"
                                    type="text"
                                    className={`form-control`}
                                    placeholder="Your email address"
                                    autoComplete="off"
                                  />
                                  {errors.name && touched.name ? (
                                    <span className="errorMsg">
                                      {errors.name}
                                    </span>
                                  ) : null}
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </Modal.Body>
                      <Modal.Footer>
                        {/* <Button variant="secondary" onClick={() => this.props.closeClick()}>
                  Close
                </Button> */}
                        <div>
                          <Button variant="outline-warning" type="submit">
                            RESET PASSWORD
                          </Button>
                          <br></br>
                        </div>

                        <div>
                          <Row>
                            <Col xs={12} sm={12} md={12}>
                              <Link to="">
                                <a href onClick={this.signIn}>
                                  Return to Sign In?
                                </a>
                              </Link>
                            </Col>
                          </Row>
                        </div>
                      </Modal.Footer>
                    </Form>
                  );
                }}
              </Formik>
            </Modal.Body>
          )}
        </Modal>

        {/* {!this.setState.isOpen} */}
      </Fragment>
    );
  }
}
