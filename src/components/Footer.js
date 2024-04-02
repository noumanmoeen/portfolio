import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
// import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
// import navIcon2 from "../assets/img/nav-icon2.svg";
// import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container className=''>
        <Row className="align-items-center footer-container">
          <Col size={12} sm={6}>
          <span className="footer-logo-text">&lt;Nouman Moeen /&gt;</span>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/azeem-subhani-cs/"><img src={navIcon1} alt="Icon" /></a>
            </div>
            <p>Made with ❤ by Nouman Moeen</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
