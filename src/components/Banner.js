// Banner con efecto de máquina de escribir para roles
import { useState, useEffect, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Banner = () => {
  // Índice actual de la frase
  const [loopNum, setLoopNum] = useState(0);
  // Estado de borrado del texto
  const [isDeleting, setIsDeleting] = useState(false);
  // Texto mostrado
  const [text, setText] = useState("");
  // Intervalo en ms (se ajusta dinámicamente)
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  // Pausa antes de borrar
  const period = 2000;

  // Lista de roles
  const toRotate = useMemo(
    () => ["Desarrollador Web", "Desarrollador React", "Estudiante de Ciencias de la Computación"],
    []
  );

  useEffect(() => {
    // Avanza el efecto de escritura/borrado
    const tick = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];

      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta((prev) => prev / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
        setDelta(500);
      }
    };

    const ticker = setInterval(tick, delta);
    return () => clearInterval(ticker);
  }, [text, delta, isDeleting, loopNum, toRotate, period]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Bienvenido a mi Portafolio</span>
            <h1>
              ¡Hola! Soy Johan <span className="wrap">{text}</span>
            </h1>
            <p>
              Estudiante de Ingeniería en Ciencias de la Computación con experiencia en React,
              Python y desarrollo web moderno.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};


export default Banner;