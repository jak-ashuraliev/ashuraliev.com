import React, { Component } from "react";
import "../../components/ContactForm/ContactForm.css";
import * as emailjs from "emailjs-com";
import {
  Button,
  // FormFeedback,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      nameError: "",
      emailError: "",
      messageError: "",
      successMessage: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.sendEmail.bind(this);
  }

  // handleChange
  handleChange(param, e) {
    this.setState({ [param]: e.target.value });
  }

  // validate form
  validate() {
    let nameError = "";
    let emailError = "";
    let messageError = "";

    if (!this.state.name) {
      nameError = " * name required";
    }

    if (!this.state.email.includes("@")) {
      emailError = " * enter valid email";
    }

    if (!this.state.message) {
      messageError = " * message required";
    }

    if (nameError || emailError || messageError) {
      this.setState({
        nameError,
        emailError,
        messageError,
      });
      return false;
    }

    return true;
  }

  // sendEmail
  sendEmail(e) {
    e.preventDefault();

    const { name, email, message } = this.state;

    const isValid = this.validate();
    if (isValid) {
      let templateParams = {
        from_name: name,
        to_name: "Jak",
        from_email: email,
        message_html: message,
      };

      emailjs
        .send(
          "gmail",
          "template_eMdOhXWQ",
          templateParams,
          "user_CvP2eg4WiZqNUVLzJM2Rx"
        )
        .then()
        .catch();
      //clear form
      this.setState({
        name: "",
        email: "",
        message: "",
        nameError: "",
        emailError: "",
        messageError: "",
        successMessage: true,
      });

      setTimeout(() => {
        this.setState({
          successMessage: false,
        });
      }, 3500);
    }
  }

  render() {
    return (
      <section className="section-contact" id="contact">
        <div>
          <p className="bg-contact">Contact</p>
        </div>
        <h2>contact.</h2>
        <div className="contact-container">
          <div className="contact-inner">
            <h3>I'm based in Seattle, WA and...</h3>
            <p className="contact-p">
              I enjoy working closely with each of my clients which allows me to
              provide high quality, professional, yet personal service. This
              creates an environment that is flexible allowing me to adapt to my
              clients needs and expectations.
            </p>
          </div>
        </div>
        <br></br>
        <Form onSubmit={this.sendEmail.bind(this)}>
          <h3 className="text-center">Send me a message.</h3>
          <FormGroup controlId="formBasicName">
            <div
              className={`alert alert-success text-center ${
                this.state.successMessage ? "alert-shown" : "alert-hidden"
              }`}
            >
              <strong>Thank you!</strong> Your message has been submitted.
            </div>
            <Label className="text-muted">
              Your Name: <span>{this.state.nameError}</span>
            </Label>
            <Input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange.bind(this, "name")}
              placeholder="Enter your name"
            />
          </FormGroup>
          <FormGroup controlId="formBasicEmail">
            <Label className="text-muted">
              Email Address: <span>{this.state.emailError}</span>
            </Label>
            <Input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange.bind(this, "email")}
              placeholder="Enter your email"
            />
          </FormGroup>
          <FormGroup controlId="formBasicMessage">
            <Label className="text-muted">
              Message: <span>{this.state.messageError}</span>
            </Label>
            <Input
              type="textarea"
              name="message"
              rows="4"
              value={this.state.message}
              onChange={this.handleChange.bind(this, "message")}
              placeholder="Enter message"
            />
          </FormGroup>
          <Button variant="primary" type="submit">
            Send
          </Button>
        </Form>
      </section>
    );
  }
}

export default ContactForm;
