import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/color-sharp2.png";
import projImg1 from "../assets/project-img1.png";
import projImg2 from "../assets/project-img2.png";
import projImg3 from "../assets/project-img3.png";
export const Projects = () => {
    
    const projects = [
        {
            title: "Project One",
            description: "Description for project one.",
            imgUrl: projImg1
        },
        {
            title: "Project One",
            description: "Description for project one.",
            imgUrl: projImg2
        },
        {
            title: "Project One",
            description: "Description for project one.",
            imgUrl: projImg3
        },
        {
            title: "Project One",
            description: "Description for project one.",
            imgUrl: projImg1
        },
        {
            title: "Project One",
            description: "Description for project one.",
            imgUrl: projImg2
        },
        {
            title: "Project One",
            description: "Description for project one.",
            imgUrl: projImg3
        }
    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>lorem ipsum dolor sit amet</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                        <Nav.Link eventKey="first">Tab One</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">Tab Two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="third" >
                        Tab Three
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
                            <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur sagittis, nisl nunc.</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur sagittis, nisl nunc.</p>
                        </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="Image"/>
        </section>
    )
}