import { Col, Container, Row } from "react-bootstrap"
import '../style/topModels.css'
import top1 from '../assets/top1.jpg'
import top2 from '../assets/top2.jpg'
import top3 from '../assets/top3.jpg'

const TopModel = () =>{
    return (
        <div className="topModel">
            <Container className="justify-content-center py-4">
                <Row className="justify-content-center align-items-center text-center p-5">
                    <Col sm="6" md="4" className="topModelTagline-right">
                        <h3 className="topModel-title"><span>Be Your</span> Own Models</h3>
                    </Col>
                    <Col md="8" sm="6">
                        <p className="topModelTagline-top">Represents Our Top Models</p>
                        <div className="image-container d-flex flex-wrap align-items-center justify-content-center">
                            <img className='imgModel' src={top1} alt=""/>
                            <img className='imgModel' src={top2} alt=""/>
                            <img className='imgModel' src={top3} alt=""/>
                        </div>
                    </Col>             
                </Row>
                <h5 className="ms-3">Capture your outfit and be our top monthly models. </h5>
                <a className="ms-3 text-white" href="#home">Terms and Condition →</a>
            </Container>
        </div>
    )
}

export default TopModel