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
              <h2>Habilidades</h2>
              <p>
                Tecnologías y herramientas con las que trabajo para construir aplicaciones modernas,
                escalables y fáciles de usar.
              </p>

              <Carousel responsive={responsive} infinite className="skill-slider">
                <div className="item">
                  <img src={meter1} alt="Nivel de desarrollo frontend" />
                  <h5>Desarrollo Frontend</h5>
                </div>

                <div className="item">
                  <img src={meter2} alt="Nivel de desarrollo backend" />
                  <h5>Desarrollo Backend</h5>
                </div>

                <div className="item">
                  <img src={meter3} alt="Nivel de diseño UI y UX" />
                  <h5>Diseño UI / UX</h5>
                </div>

                <div className="item">
                  <img src={meter2} alt="Nivel de bases de datos y manejo de datos" />
                  <h5>Bases de Datos</h5>
                </div>

                <div className="item">
                  <img src={meter1} alt="Nivel de resolución de problemas y algoritmos" />
                  <h5>Resolución de Problemas</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};