import { Card, Col, Row, Container } from "react-bootstrap";
import '../style/style.css'
import { useEffect, useState } from "react";
import { getBestSeller } from "../api";
import { Link } from "react-router-dom";
const BestSeller = () => {
    const [bestSeller, setBestSeller] = useState()

    useEffect(() =>{
        getBestSeller().then(res => setBestSeller(res))
    }, [])


    return(
        <Container className="bestSeller py-5">
            <div className="title-wrapper pb-2">
                <h3>BEST SELLER</h3>
                <h1>FIND THE <span> BEST PICKS </span></h1>
            </div>
            <Row className="mt-5">
                {bestSeller?.map((data, key) => (
                    <Col md="6" xl="4" key={key}>
                        <Card className="bestSeller-card">
                             <Link className='productName' to={`/catalog/${data.id}`}>
                                <Card.Img variant="top" src={data.image} className="imgCard" />
                                <Card.Body>
                                    <Card.Title className="mb-0">{data.title}</Card.Title>
                                    <Card.Text className="bestSeller-description">
                                    {data.description}
                                    </Card.Text>                            
                                </Card.Body>
                             </Link>
                        </Card>
                    </Col>

                ))}                
            </Row>
        </Container>
        
    )
}

export default BestSeller;