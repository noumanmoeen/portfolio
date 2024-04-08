import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
// import { HashLink } from 'react-router-hash-link';
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Software Engineer", "Fullstack Developer"];
  const period = 200;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, 200);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility once>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Nouman Moeen`}{" "}
                    <span
                      className="txt-rotate"
                      data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    I am software engineer with expertise in both web and mobile
                    app development. My proficiency spans across a diverse tech
                    stack, including React, Node.js, Angular, React Native,
                    Ionic, Next.js, Nest.js, and AWS services. I've also worked
                    extensively with databases, including MongoDB, PostgreSQL,
                    and SQL. My skills extend to GraphQL and TypeORM, showcasing
                    a comprehensive understanding of modern technologies. I am
                    passionate about crafting innovative solutions and
                    leveraging cutting-edge tools to deliver high-quality,
                    scalable applications.
                  </p>
                  <a href='#connect' className="appearance-none">
                    <button onClick={() => console.log("connect")}>
                      Let’s Connect <ArrowRightCircle size={25} />
                    </button>
                  </a>
                  
                </div>  
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className={"animate__animated animate__zoomIn"}>
              <img src={headerImg} alt="Header Img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};