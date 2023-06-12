import { Container, Row, Col } from "react-bootstrap"
import mainImage from '../assets/main.jpg'

const AboutUs = () =>{
    return(
        <div className="aboutUs-wrapper mt-5 mb-5">
            <Container className="justify-content-between">
                <Row className="justify-content-between align-items-center">
                    <Col md="6">
                        <p className="aboutUs-tag">About Us</p>
                        <p className="aboutUs-overview">I am a prospective graduate of a Bachelor's degree in multimedia arts seeking an internship position at local design studios and digital marketing companies. I am a highly motivated and creative individual specializing in layout design, 3D modeling, and typography art. </p>
                    </Col>
                    <Col md="6" className="">
                        <img className="aboutUs-image mx-auto" src={mainImage} alt=""/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutUs