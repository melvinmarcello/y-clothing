import { useEffect, useState } from 'react'
import {Card, Button, Col, Row } from 'react-bootstrap'
import '../style/catalog.css'
import { getProductList } from '../api'
import Pagination from '../components/Pagination'
import { Link } from 'react-router-dom'



const Catalog = () =>{
    const [productList, setProductList] =  useState([])
    const [currentPage, setCurrentPage] =useState(1)
    const [productPerPage] =useState(10)

    const lastProducts = currentPage * productPerPage
    const firstProducts = lastProducts - productPerPage
    const currentProducts = productList.slice(firstProducts, lastProducts)

    

    useEffect(() =>{
        getProductList().then((result) =>{
            setProductList(result)
        })
    }, [])

    const Products = () =>{
        return currentProducts.map((product, i) =>{
            return (
                <Col md="6" xl="4" key={i}>
                    <Card>
                        <Card.Img variant="top" src={product.image} className="prodImage imgCard" />
                        <Card.Body>
                            <Card.Title>           
                                <Link className='productName' to={`/catalog/${product.id}`}>{product.title}</Link>
                            </Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Click Me</Button>
                        </Card.Body>
                    </Card>          
                </Col>
            )
        })
    }
    
    return(
        <>
            <div className="catalog-wrapper justify-content-center">
                <div className="container" id="marketplace">
                    <h3>OUR CATALOG</h3>
                    <h1>FIND THE <span> BEST PICKS </span>OF YOURS.</h1>
                    <Row className="g-3 justify-content-center">
                        <Products/>
                    </Row>
                </div>
            </div>
            <div className="pagination-wrapper container text-center">
                <Pagination productLength={productList.length} productPerPage={productPerPage} setCurrentPage={setCurrentPage}/>
            </div>
        </>
    )
}

export default Catalog