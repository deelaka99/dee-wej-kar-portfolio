import React, { useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import { useContext } from "react";

function Contact() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();

  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2g2rlux",
        "template_g1e0olw",
        form.current,
        "cqxzL_7BgBKKZE56c"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="Contact">
      <div className="w-left">
        <div className="awesome">
          <span style={{color:darkMode?'white':''}}>Get in touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name" style={{background:darkMode ?"#444444":"",color:darkMode?"white":""}}
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email" style={{background:darkMode ?"#444444":"",color:darkMode?"white":""}}
          />
          <textarea name="message" className="user" placeholder="Message"  style={{background:darkMode ?"#444444":"",color:darkMode?"white":""}}/>
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for contactin me!"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
