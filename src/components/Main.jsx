import { Container, Col, Row, Image } from "react-bootstrap";
import '../style/main.css'
import mainImage from '../assets/main.jpg'
import { Link } from "react-router-dom";

const Main = () =>{
    return(
        <div className="wrapper">
            <Container>
                <Row className="align-items-center py-5">  
                    <Col md="6" className="text-center">
                        <div className="hero-image-wrapper">
                            <Image src={mainImage} className='hero-image ' alt='...'/>            
                        </div>
                    </Col>
                    <Col md="6" className="text-center">
                        <span className="tagline-2">Antarixa Collection</span>
                        <Row className="justify-content-center">
                            <Link to="/catalog" className="getStart">Shop Now</Link>                                         
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Main;