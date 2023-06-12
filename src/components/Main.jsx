import { Container, Col, Row, Button, Image } from "react-bootstrap";
import '../style/main.css'
import mainImage from '../assets/main.jpg'
const Main = () =>{
    return(
        <div className="wrapper">
            <Container>
                <Row className="align-items-center">                    
                    <Col md="6" className="text-center">
                        <Image src={mainImage} className='mainImage ' alt='...'/>
                    </Col>
                    <Col md="6" className="text-center">
                        <span className="tagline-2">Antarixa Collection</span>
                        <Row className="justify-content-center">
                            <Button href="#marketplace" className="getStart btn-lg">Shop Now</Button>                                         
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Main;