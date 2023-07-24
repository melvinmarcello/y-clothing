import { useEffect, useState } from 'react'
import {Card, Col, Row } from 'react-bootstrap'
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
                        <Link className='productName' to={`/catalog/${product.id}`}>
                            <Card.Img variant="top" src={product.image} className="catalog-image" />
                            <Card.Body>
                                <Card.Title>           
                                    <Link className='productName' to={`/catalog/${product.id}`}>{product.title}</Link>
                                </Card.Title>
                                <Card.Text className='text-secondary product-description pb-2'>
                                {product.description}
                                </Card.Text>                            
                            </Card.Body>                        
                        </Link>
                    </Card>          
                </Col>
            )
        })
    }
    
    return(
        <>
            <div className="catalog-wrapper justify-content-center pt-5">
                <div className="container" id="marketplace">
                    <div className="title-wrapper">
                        <h3>OUR CATALOG</h3>
                        <h1 className='pb-3'>FIND THE <span> BEST PICKS </span>OF YOURS.</h1>
                    </div>
                    <Row className="g-3 justify-content-center">
                        <Products/>
                    </Row>
                </div>
            </div>
            <div className="pagination-wrapper container text-center pb-3">
                <Pagination productLength={productList.length} productPerPage={productPerPage} setCurrentPage={setCurrentPage}/>
            </div>
        </>
    )
}

export default Catalog