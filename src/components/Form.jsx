import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import emailjs from "@emailjs/browser";

// import Header from "./Header";
import FormGroup from "./FormGroup";

function Form() {
  const [showAlert, setShowAlert] = useState(false);
  const [success, setSuccess] = useState(false);
  const [verified, setVerified] = useState(true);

  const navigate = useNavigate();

  const successAlert = () => {
    setSuccess(true);
    setShowAlert(true);
    setTimeout(() => {
      setSuccess(false);
      setShowAlert(false);
    }, 3000);
    setTimeout(() => {
      navigate("/feedback");
    }, 3000);
  };

  const failAlert = () => {
    setSuccess(false);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const verificationAlert = () => {
    setVerified(false);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      setVerified(true);
    }, 5000);
  };

  const SERVICE_ID = "service_jxvncse";
  const TEMPLATE_ID = "feedback_app_template";
  const PUBLIC_KEY = "awx-s_47twZRaS-6b";

  const form = useRef();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const processSubmit = async (event) => {
    event.preventDefault();
    if (
      !email ||
      email === " " ||
      !name ||
      name === " " ||
      !subject ||
      subject === " " ||
      !message ||
      message === " "
    ) {
      verificationAlert();
      return;
    }

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);
      successAlert();
      setEmail("");
      setName("");
      setSubject("");
      setMessage("");
      console.log("MESSAGE SENT SUCCESSFULLY!");
    } catch (err) {
      failAlert();
      console.log("FAILED TO SEND MESSAGE, TRY AGAIN LATER...", err.text);
    }

    // emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
    //   () => {
    //     successAlert();
    //     setEmail("");
    //     setName("");
    //     setSubject("");
    //     setMessage("");
    //     console.log("MESSAGE SENT SUCCESSFULLY!");
    //   },
    //   (error) => {
    //     // failAlert();
    //     successAlert();
    //     console.log("FAILED TO SEND MESSAGE, TRY AGAIN LATER...", error.text);
    //   }
    // );
  };

  return (
    <>
      {showAlert &&
        (verified ? (
          <div className={success ? "alert success-alert" : "alert fail-alert"}>
            {success
              ? "Message sent successfully!"
              : "Network issue, try again later..."}
          </div>
        ) : (
          <div className="alert verification-alert ">
            Please fill in all fields.
          </div>
        ))}

      <form ref={form} className="form" onSubmit={processSubmit}>
        {/* <Header identity="hero-text" title="Feedback Form" /> */}

        <FormGroup
          name="email"
          label="Email:"
          value={email}
          textArea={false}
          placeholder={"Email"}
          onChange={(event) => setEmail(event.target.value)}
        />
        <FormGroup
          name="name"
          label="Name:"
          value={name}
          textArea={false}
          placeholder={"Full name"}
          onChange={(event) => setName(event.target.value)}
        />
        <FormGroup
          name="subject"
          label="Subject:"
          value={subject}
          textArea={false}
          placeholder={"Subject"}
          onChange={(event) => setSubject(event.target.value)}
        />
        <FormGroup
          name="message"
          label="Message:"
          value={message}
          textArea={true}
          placeholder={"Type your message here..."}
          onChange={(event) => setMessage(event.target.value)}
        />
        <div className="form-group">
          <input className="btn btn-dark" type="submit" value="Submit" />
        </div>
      </form>
    </>
  );
}

export default Form;
