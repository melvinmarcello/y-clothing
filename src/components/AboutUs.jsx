import { Container, Row, Col } from "react-bootstrap"
import mainImage from '../assets/main.jpg'
import '../style/aboutUs.css'


const AboutUs = () =>{
    return(
        <div className="aboutUs-wrapper mt-5">
            <Container className="justify-content-between">
                <Row className="justify-content-between align-items-center">
                    <Col md="6">
                        <p className="aboutUs-tag">About Us</p>
                        <p className="aboutUs-overview">Introducing Y-CLOTHING, where style meets comfort in perfect harmony. We are a trendy and contemporary clothing brand that caters to fashion-forward individuals seeking quality apparel that effortlessly complements their lifestyle.

                        At Y-CLOTHING, we are dedicated to creating clothing that reflects the latest fashion trends while ensuring maximum comfort and functionality. Our designs are carefully crafted to inspire confidence and express individuality, making every piece a statement of personal style.</p>
                    </Col>
                    <Col md="6" className="mx-auto">
                        <img className="aboutUs-image d-block mx-auto" src={mainImage} alt=""/>
                    </Col>
                </Row>
            </Container>
            <div className="wave">               
            </div>
            
        </div>
    )
}

export default AboutUs