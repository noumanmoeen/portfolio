import meter1 from "../assets/img/meter1.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNode,
  faAws,
  faCss3,
  faHtml5,
  faAngular,
  faJs,
  faNpm,
  faDocker,
  faSass,
  faAndroid,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faFire } from "@fortawesome/free-solid-svg-icons";
import Lottie from "react-lottie";
import codingAnimation from "../lottie/codingAnimation.json";
import { useState, useEffect } from "react";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: codingAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export const Skills = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <section className="skill " id="skills">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="skill-bx wow zoomIn">
                <h2>Skills</h2>
                <p>
                  I refine, educate and drive myself to be a better person
                  everyday. In the rapidly evolving world of technology, I
                  recognize the importance of continuous learning and am
                  committed to refining my skills. With expertise in advanced
                  Mobile Application & Web Application Development using the
                  MERN & MEAN Stack and AWS services, I am a hardworking team
                  player with a passion for delivering high-quality results.
                </p>
                <p>
                  <b>Skills:</b> JavaScript, TypeScript, React, Angular, NextJS,
                  NodeJs, Nest, SQL, JQuery, Git, Lambda, AWS, MongoDB,
                  DynamoDB, Serverless, GraphQL, Mobx, Express.js, WebSocket,
                  Problem-solving, Data Structures, Redux, SAAS, ES6
                </p>
                <div className="flex flex-col lg:flex-row justify-center items-center">
                  <Lottie
                    options={defaultOptions}
                    height={window.innerWidth < 1024 ? 400 : 300}
                    width={window.innerWidth > 1024 ? 600 : 300}
                  />
                  <div className="text-[#B8B8B8]">
                    <FontAwesomeIcon className="h-14 m-4 w-14" icon={faReact} />
                    <FontAwesomeIcon className="h-14 m-4 w-14" icon={faNode} />
                    <FontAwesomeIcon className="h-14 m-4 w-14" icon={faAws} />
                    <FontAwesomeIcon className="h-14 m-4 w-14" icon={faCss3} />
                    <FontAwesomeIcon className="h-14 m-4 w-14" icon={faHtml5} />
                    <FontAwesomeIcon
                      className="h-14 m-4 w-14"
                      icon={faAngular}
                    />
                    <FontAwesomeIcon className="h-14 m-4 w-14" icon={faJs} />
                    <FontAwesomeIcon className="h-14 m-4 w-14" icon={faNpm} />
                    <FontAwesomeIcon
                      className="h-14 m-4 w-14"
                      icon={faDatabase}
                    />
                    <FontAwesomeIcon className="h-14 m-4 w-14" icon={faFire} />
                    <FontAwesomeIcon
                      className="h-14 m-4 w-14"
                      icon={faDocker}
                    />
                    <FontAwesomeIcon className="h-14 m-4 w-14" icon={faSass} />
                    <FontAwesomeIcon
                      className="h-14 m-4 w-14"
                      icon={faAndroid}
                    />
                    <FontAwesomeIcon className="h-14 m-4 w-14" icon={faApple} />
                  </div>
                </div>
                <div className="mt-20">
                  <Carousel
                    responsive={responsive}
                    infinite={true}
                    className="owl-carousel owl-theme skill-slider"
                  >
                    <div className="item">
                      <img src={meter1} alt="Image" />
                      <h5>Frontend Development</h5>
                    </div>
                    <div className="item">
                      <img src={meter3} alt="Image" />
                      <h5>Backend Development</h5>
                    </div>
                    <div className="item">
                      <img src={meter3} alt="Image" />
                      <h5>Database Management</h5>
                    </div>
                    <div className="item">
                      <img src={meter1} alt="Image" />
                      <h5>Mobile App Development</h5>
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
      </section>
    </>
  );
};
