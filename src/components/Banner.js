import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const toRotate = ["Web Developer", "React Developer", "Computer Science Student"];
  const period = 2000;

  useEffect(() => {
    const tick = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];

      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta((prevDelta) => prevDelta / 2);
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
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi! I'm Johan `}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Computer Science Engineering student with experience in React,
              Python, and web development. Passionate about building clean,
              user-friendly applications.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};


export default Banner;