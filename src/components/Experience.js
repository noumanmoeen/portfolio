import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";

// CONSTANTS
import EXPERIENCES from "../constants/experiences";

export const Experiences = () => {
  return (
    <section className="experience" id="">
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
                  <div className="">
                    <h2 className="text-5xl">Experience</h2>
                    <ul role="list" class="space-y-6 my-10">
                      {EXPERIENCES.map((experience) => {
                        return (
                          <li class="relative flex gap-x-4">
                          <div class="absolute left-0 top-0 flex h-6 w-6 justify-center">
                          </div>
                          <div class="relative flex h-10 w-10 flex-none items-center justify-center ">
                      
                            <img
                                  className="h-10 w-10 flex-none "
                                  src={experience.logo}
                                  alt=""
                                />
                          </div>
                          <p class="flex-auto mt-2 py-0.5 text-lg leading-5"><span class="font-medium text-white text-xl mr-5">{experience.company}</span> ({experience.designation})</p>
                          <time datetime="2023-01-24T09:20" class="flex-none mt-2 py-0.5 text-xl leading-5">{experience.workSpan}</time>
                        </li>
                        );
                      })}
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
