import { Container, Row, Col } from "react-bootstrap";
// import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Education = () => {
  return (
    <section className="education" id="">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility once>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <div className="edu-bx flex items-center justify-center flex-col">
                    <h2 className="text-5xl">Education</h2>
                    <ul role="list" className="flex items-center justify-center flex-col">
                      <li className="flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                          <img
                            className="h-20 w-20 flex-none rounded-full "
                            src="https://crystalpng.com/wp-content/uploads/2022/02/COMSATS-University-logo.png"
                            alt=""
                          />
                          <div className="min-w-0 flex-auto">
                            <p className="text-2xl font-semibold leading-6">
                              Comsats University Islamabad, Lahore
                            </p>
                            <p className="mt-1 text-lg leading-5">
                              Bachelor of Science in Computer Science (BSCS)
                            </p>
                          </div>
                        </div>
                        {/* <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                          <p className="text-sm leading-6">Co-Founder / CEO</p>
                          <p className="mt-1 text-xs leading-5 ">
                            Last seen{" "}
                            <time datetime="2023-01-23T13:23Z">3h ago</time>
                          </p>
                        </div> */}
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
