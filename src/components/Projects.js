import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import ams from "../assets/img/ams.png";
import vanir from "../assets/img/vanir.png";
import darna from "../assets/img/darna.png";
import pavemint from "../assets/img/pavemint.png";

import "animate.css";
import TrackVisibility from "react-on-screen";
import ProjectDetails from "./ProjectDetails";

export const Projects = () => {
  const projects = [
    {
      title: "Scholastic Arts & Writing Portal",
      description:
        " ArtandWriting.org is an online platform that celebrates the artistic and literary talents of young individuals across the United States. This immersive website showcases a diverse range of artwork and written works submitted by talented students. With a user-friendly interface and responsive web design, visitors can easily explore captivating galleries of visual art and literary pieces. ArtandWriting.org also serves as a valuable resource for educators, parents, and students, offering educational materials and fostering artistic and literary development. This platform has been developed to inspire creativity, provide recognition, and build a supportive community for young artists and writers",
      image: ams,
      techStack: ["NextJS", "ChakraUI", "NodeJS", "Sevrerless", "AWS"],
    },
    {
      title: "Vanir Installed Sales",
      description:
        "Vanir Installed Sales is a leading provider of top-quality installation services. With a focus on delivering exceptional craftsmanship and customer satisfaction, we specialize in installing a wide range of products, including doors, windows, flooring, and more. Our website showcases our expertise and commitment to excellence. Leveraging modern technologies, such as React and Ant Design (Antd), we have created a user-friendly interface that enhances usability and ensures a seamless browsing experience. Additionally, our team's proficiency in .NET development ensures a robust backend infrastructure, enabling efficient data management and seamless integration.",
      image: vanir,
      techStack: ["React", "Antd", ".Net"],
      website: "http://admin.vanir.techverxapps.com/",
    },
    {
      title: "Darna",
      description: "Design & Development",
      image: darna,
      techStack: ["React", "MaterialUI", "Flask"],
      website: "https://etuttebcmsprt.theentertainerme.com/",
    },
    {
      title: "Pavemint",
      description:
        "Pavemint provides fully managed parking solutions for events and concerts in LA.Participant portal allows users to view available parking listings with custom facilities. Valet and attendant portal used by Pavemint employees for vehicle parking and check-in/check-out.Admin portal to manage listings and venues with custom attributes. Mobile application for users to search and choose parking listings ",
      image: pavemint,
      techStack: ["React", "NodeJS", "ExpressJS", "StoryBook", "React Native"],
      website: "https://www.pavemint.com/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              )}

              <ul
                role="list"
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2"
              >
                {projects.map(
                  ({
                    description,
                    techStack,
                    title,
                    image,
                    website,
                  }) => (
                    <ProjectDetails
                      description={description}
                      image={image}
                      techStack={techStack}
                      title={title}
                    />
                  )
                )}
              </ul>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
