import { Col, Container, Row } from "react-bootstrap"
import '../style/topModels.css'
import top1 from '../assets/top1.jpg'
import top2 from '../assets/top2.jpg'
import top3 from '../assets/top3.jpg'

const TopModel = () =>{
    return (
        <div className="topModel">
            <Container className="justify-content-center">
                <Row className="justify-content-center align-items-center text-center p-5">
                    <Col sm="6" md="4" className="topModelTagline-right">
                        <h3><span>Be Your</span> Own Models</h3>
                    </Col>
                    <Col md="8" sm="6">
                        <p className="topModelTagline-top">Represents Our Top Models</p>
                        <div className="image-container d-flex">
                            <img className='imgModel' src={top1} alt=""/>
                            <img className='imgModel' src={top2} alt=""/>
                            <img className='imgModel' src={top3} alt=""/>
                        </div>
                    </Col>             
                </Row>
            </Container>
        </div>
    )
}

export default TopModel