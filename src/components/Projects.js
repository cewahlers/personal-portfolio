import { Col, Container, Nav, Row, Tab } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
//import bg from "../assets/img/proj-bg.png"
import gameImg1 from "../assets/img/project-images/gameimg1.png"
import gameImg2 from "../assets/img/project-images/gameimg2.png"
import gameImg3 from "../assets/img/project-images/gameimg3.png"
import prodImg1 from "../assets/img/project-images/homeimg1.png"
import prodImg3 from "../assets/img/project-images/searchimg1.png"
import prodImg4 from "../assets/img/project-images/prodimg1.png"


export const Projects = () => {

    const project1 = [
        {
            title: "Game Design",
            description: "Design and Development",
            imgUrl: gameImg1,

        },
        {
            title: "Implementation",
            description: "Problem Solving",
            imgUrl: gameImg2,

        },
        {
            title: "Artwork",
            description: "Creativity",
            imgUrl: gameImg3,

        },
    ]
    
    const project2 = [
        {
            title: "Game Design",
            description: "Design and Development",
            imgUrl: prodImg1,

        },
        {
            title: "Implementation",
            description: "Problem Solving",
            imgUrl: prodImg3,

        },
        {
            title: "Artwork",
            description: "Creativity",
            imgUrl: prodImg4,

        },
    ]

    


    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>While exploring new frameworks and languages I have completed various projects.  These projects were completed to improve my skills as a developer and reinforce the skills I have already acquired.  My problem solving and creative abilities have greatly improved while completing these projects, and my ability to follow the software development process can be seen in my projects.  While not all of my projects can be seen here, all of them have been posted to my personal GitHub, so please check them out!</p>
                        <Tab.Container id="project-tabs" defaultActiveKey="first">
                            <Nav variant='pills' className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                    {
                                            project1.map((project, index) => {
                                                return(
                                                    <ProjectCard
                                                    key={index}
                                                    {...project} 
                                                    />
                                                )
                                            })
                                        }
                                        <p>Video games have been a prominent interest of mine for as long as I can remember, which is why I spent time building a game from scratch.  The pygame library was utilized to build the game, with significant use of the Sprite class for creating obstacles and the player itself and   Aseprite was used in the creation of the art used within the game.  All art and implementations are entirely original.</p>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                    {
                                            project2.map((project, index) => {
                                                return(
                                                    <ProjectCard
                                                    key={index}
                                                    {...project} 
                                                    />
                                                )
                                            })
                                        }
                                        <p>I had the privilege of creating an online marketplace using django, tailwind CSS, and SQLite for a startup clothing company.  While the majority of the marketplace was built and designed by me, I was able to work on small portions of the project with other developers as needed which helped me improve my teamwork and communication skills.  Unfortunately, the company this site was built for is now defunct, however, the experiences I gained while building this site are an incredibly important part of my current portfolio and skills as a developer.</p>
                                    </Row></Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

//<img className="background-image-right" src={bg} alt='' />