import {
  faEnvelope,
  faLocationDot,
  faPaperPlane,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSucess = () => {
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      swal("Sent error!", "Please insert information", "error");
    } else {
      swal("Sent success!", "I'll contact you soon", "success");
      setName("");
      setEmail("");
      setMessage("");
    }
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_f1iprmh",
      "template_of6ktmy",
      form.current,
      "VwTeuvS8dHtQS2Y7X"
    );
    e.target.reset();
  };
  return (
    <div id="contact">
      <div className="wrapper ">
        <h1 className="ndv__title">GET IN TOUCH</h1>
        <h3 className="text-center text-gray-500 mb-[100px]">CONTACT ME</h3>
        <div className="flex justify-around sm:flex-col sm:items-center">
          <div className="">
            <h3 className="pb-3 text-2xl font-semibold">Talk to me</h3>
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <div className="flex items-center my-6">
                <div className="text-2xl text-second_color">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="pl-6">
                  <h4 className="text-lg font-medium">Email</h4>
                  <a
                    href="mailto:phamdat02012001@gmail.com"
                    className="text-sm text-second_color"
                  >
                    phamdat02012001@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center my-6">
                <div className="text-2xl text-second_color">
                  <FontAwesomeIcon icon={faPhoneVolume} />
                </div>
                <div className="pl-6">
                  <h4 className="text-lg font-medium">Phone</h4>
                  <a
                    href="tel:+0339686430"
                    className="text-sm text-second_color"
                  >
                    0339686430
                  </a>
                </div>
              </div>
              <div className="flex items-center my-6">
                <div className="text-2xl text-second_color">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div className="pl-6">
                  <h4 className="text-lg font-medium">Address</h4>
                  <p className="text-sm text-second_color">
                    33/32/3 Le Hoang Phai Street, Ward 17, Go Vap District, Ho
                    Chi Minh City.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="pb-3 text-2xl font-semibold">Write me something</h3>
            <form
              ref={form}
              onSubmit={sendEmail}
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <div className="relative my-6">
                <label className="ndv__label">Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  placeholder="Insert your name"
                  className="ndv__input"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="relative my-6">
                <label className="ndv__label">Email</label>
                <input
                  type="email"
                  name="mail"
                  value={email}
                  placeholder="Insert your mail"
                  className="ndv__input"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="relative my-6">
                <label className="ndv__label">Message</label>
                <textarea
                  name="message"
                  cols="30"
                  rows="5"
                  value={message}
                  className="resize-none ndv__input"
                  placeholder="Write some thing"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button
                className="ndv__button"
                onClick={() => {
                  handleSucess();
                }}
              >
                Send{" "}
                <i>
                  <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
                </i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
