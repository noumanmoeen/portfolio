import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  // const [buttonText, setButtonText] = useState("Send");
  // const [status, setStatus] = useState({});

  // const onFormUpdate = (category, value) => {
  //   setFormDetails({
  //     ...formDetails,
  //     [category]: value,
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  // };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility once>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility once>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <p className="text-lg">
                    Discuss a project or just want to say hi? my inbox is open
                    for all.
                  </p>
                  <p className="text-lg">Open for opportunities: Yes</p>
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center space-x-4 text-xl">
                      <FontAwesomeIcon className="h-5 w-5" icon={faPhone} />
                      <div>+92 (316) 4001550</div>
                    </div>
                    <div className="flex items-center space-x-4 text-xl">
                      <FontAwesomeIcon className="h-5 w-5" icon={faEnvelope} />
                      <a
                        className="cursor-pointer text-white"
                        href="mailto:azeemsubhani@proton.me"
                      >
                       moeennouman7@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center space-x-4 text-xl">
                      <FontAwesomeIcon
                        className="h-5 w-5"
                        icon={faLocationDot}
                      />
                      <div>Lahore, PK</div>
                    </div>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
