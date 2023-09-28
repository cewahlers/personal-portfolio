import { Col, Container, Row } from "react-bootstrap"
import logo from "../assets/img/logo.svg"
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <img src={logo} alt="Lgogo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/pulse/topics/home/?trk=guest_homepage-basic_guest_nav_menu_articles"><img src={navIcon1} alt="LinkedIn" /></a>
                            <a href="https://github.com/cewahlers"><img src={navIcon2} alt="github" /></a>
                        </div>
                        <p>CopyRight 2023. All Right Reserved by Connor Wahlers</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}