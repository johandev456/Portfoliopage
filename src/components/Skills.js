import { Container, Row, Col } from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
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
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Technologies and tools I work with to build modern, scalable,
                and user-friendly applications.
              </p>

              <Carousel responsive={responsive} infinite className="skill-slider">
                <div className="item">
                  <img src={meter1} alt="Frontend development skill level" />
                  <h5>Frontend Development</h5>
                </div>

                <div className="item">
                  <img src={meter2} alt="Backend development skill level" />
                  <h5>Backend Development</h5>
                </div>

                <div className="item">
                  <img src={meter3} alt="UI and UX design skill level" />
                  <h5>UI / UX Design</h5>
                </div>

                <div className="item">
                  <img src={meter2} alt="Database and data handling skill level" />
                  <h5>Databases</h5>
                </div>

                <div className="item">
                  <img src={meter1} alt="Problem solving and algorithms skill level" />
                  <h5>Problem Solving</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};