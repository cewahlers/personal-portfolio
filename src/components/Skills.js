import { Col, Row, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import pylogo from "../assets/img/Skill-Logos/py_logo.svg"
import cpp from "../assets/img/Skill-Logos/c++.svg"
import django from "../assets/img/Skill-Logos/django.svg"
import docker from "../assets/img/Skill-Logos/docker-4.svg"
import html from "../assets/img/Skill-Logos/html-1.svg"
import react from "../assets/img/Skill-Logos/react-2.svg"
import git from "../assets/img/Skill-Logos/git-icon.svg"



export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
            }   
        };

        return (
            <section className="skill" id = 'skills'>
                <Container>
                    <Row>
                        <Col>
                            <div className="skill-bx">
                                <h2>
                                    Skills
                                </h2>
                                <p>Throughout my time coding both in class and in my free time I have gained experience and with many languages and frameworks.  I am a quick learner and enjoy the process of learning new languages and frameworks, and I always welcome new challenges to keep me actively improving as a developer.  I am proficient in Python, C++, HTML, CSS, Javascript, React, and Django, and have experience with Git, Docker, Linux, MySQL, SQLite, and Tailwind CSS.  While I have experience with all of these languages and frameworks, I am confident in my ability to learn new languages, techniques, and  frameworks quickly and efficiently.</p>
                                <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                    <div className="item">
                                        <img src={pylogo} alt='Python' />
                                        <h5>Python</h5>
                                    </div>
                                    <div className="item">
                                        <img src={cpp} alt='c++' />
                                        <h5>C++</h5>
                                    </div>
                                    <div className="item">
                                        <img src={django} alt='django' />
                                        <h5>Django</h5>
                                    </div>
                                    <div className="item">
                                        <img src={html} alt='' />
                                        <h5>HTML 5</h5>
                                    </div>
                                    <div className="item">
                                        <img src={react} alt='' />
                                        <h5>React JS</h5>
                                    </div>
                                    <div className="item">
                                        <img src={git} alt='' />
                                        <h5>Git</h5>
                                    </div>
                                    <div className="item">
                                        <img src={docker} alt='' />
                                        <h5>Docker</h5>
                                    </div>
                                </Carousel>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    };

//import colorSharp from "../assets/img/color-sharp.png"
//<img className="background-image-left" src={colorSharp} alt='' />