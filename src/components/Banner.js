import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img-1.svg"
import resume from "../assets/files/resume.pdf"
import 'animate.css';
import TrackVisibility from "react-on-screen"
import { isVisible } from "@testing-library/user-event/dist/utils"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Full Stack Engineer", "Web Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() *100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)}
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({isVisible}) => 
                        <div className={isVisible ? "animated__animated animate_fadeIn" : ""}>
                            <span className="tagline">Welcome to my Portfolio</span>
                            <h1>{"Hi I'm Connor, a "}<span classname="wrap">{text}</span></h1>
                            <p>As a recent graduate of Fordham University, I am excited to begin working in the software engineering field.  I have always been interested in computers, whether it be videogames or simply surfing the web, and computers remain an integral part of my life.  I began coding in April of 2021 and quickly began seriously pursuing a degree in computer science at fordham.  I have always enjoyed working with other developers and my desire to collaborate and creative nature have allowed me to work effectively throughout my time coding.  I look forward to hearing from you and please take a moment to look at my resume below!</p>
                            <a href={resume} download="CWahlers-Resume.pdf" target='_blank' rel="noreferrer" style={{ textDecoration: 'none' }}>
                                <button>Download my resume <ArrowRightCircle size = {25} /></button>
                            </a>
                        </div>
                        }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src ={headerImg} alt = "Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}


/*<BrowserRouter>
<HashLink smooth to='#connect' style={{ textDecoration: 'none' }}>
<button>Download my resume <ArrowRightCircle size = {25} /></button>
</HashLink>
</BrowserRouter>*/