import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/color-sharp2.png";
import projImg1 from "../assets/project-img1.png";
import projImg2 from "../assets/project-img2.png";
import projImg3 from "../assets/project-img3.png";
export const Projects = () => {
    
    const projects = [
        {
            title: "Proyecto Uno",
            description: "Descripción del proyecto uno.",
            imgUrl: projImg1
        },
        {
            title: "Proyecto Dos",
            description: "Descripción del proyecto dos.",
            imgUrl: projImg2
        },
        {
            title: "Proyecto Tres",
            description: "Descripción del proyecto tres.",
            imgUrl: projImg3
        },
        {
            title: "Proyecto Uno",
            description: "Descripción del proyecto uno.",
            imgUrl: projImg1
        },
        {
            title: "Proyecto Uno",
            description: "Descripción del proyecto uno.",
            imgUrl: projImg2
        },
        {
            title: "Proyecto Uno",
            description: "Descripción del proyecto uno.",
            imgUrl: projImg3
        }
    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Proyectos</h2>
                        <p>Explora algunos de mis trabajos y proyectos recientes.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                        <Nav.Link eventKey="first">Pestaña Uno</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">Pestaña Dos</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="third" >
                        Pestaña Tres
                        </Nav.Link>
                        </Nav.Item>
                        </Nav>
                        <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project, index) => {
                                        return (
                                            <ProjectCard 
                                                key={index}
                                                {...project}
                                            />
                                        )
                                    })
                                }
                            </Row>
                            </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <p>Contenido de ejemplo para la segunda pestaña.</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <p>Contenido de ejemplo para la tercera pestaña.</p>
                        </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt=""/>
        </section>
    )
}