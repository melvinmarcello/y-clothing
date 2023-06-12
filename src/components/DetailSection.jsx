import { Container } from "react-bootstrap"
import '../style/detailSection.css'
import { useState } from "react"


const DetailSection = ({product}) =>{

    const [quantity, setQuantity] = useState(0)
    const rate = product?.rating?.rate
    

    
    return(
        <Container>
            <section className="py-5 detailSection">
            <div className="container">
                <div className="row gx-5 align-items-center">
                <aside className="col-lg-6">
                    <div className="border rounded-4 mb-3 d-flex justify-content-center">                    
                        <img alt=''className="rounded-4 fit mainImage" src={product.image} />                
                    </div>            
                </aside>
                <main className="col-lg-6">
                    <div className="ps-lg-3">
                    <h4 className="title text-dark">
                       {product.title}
                    </h4>
                    <div className="d-flex flex-row my-3">
                        <div className="text-warning mb-1 me-2">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <span className="ms-1">
                            {rate}
                        </span>
                        </div>
                        <span className="text-muted"><i className="fas fa-shopping-basket fa-sm mx-1"></i>{product.id} orders</span>
                        <span className="text-success ms-2">{product.id>0 ? "Instock" : "Sold Out"}</span>
                    </div>

                    <div className="mb-3">
                        <span className="h5">${product.price}</span>
                        <span className="text-muted">/pcs</span>
                    </div>

                    <p>
                        {product.description}
                    </p>

                    <div className="row">
                        <dt className="col-3">Type:</dt>
                        <dd className="col-9">{product.category}</dd>

                        <dt className="col-3">Color:</dt>
                        <dd className="col-9">inStock</dd>

                        <dt className="col-3">Stock:</dt>
                        <dd className="col-9">{product.id}</dd>

                        <dt className="col-3">Brand:</dt>
                        <dd className="col-9">Y-CLOTHING</dd>
                    </div>

                    <hr />

                    <div className="row mb-4 utils">
                        <div className="col-md-4 col-6">
                        <label className="mb-2">Size</label>
                        <select className="form-select border border-secondary">
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                        </select>
                        </div>

                        <div className="col-md-4 col-6 mb-3">
                        <label className="mb-2 d-block">Quantity</label>
                        <div className="input-group mb-3">
                            <button className="btn btn-white border border-secondary px-3" type="button" id="button-addon1" data-mdb-ripple-color="dark">
                                <span className="addButton" onClick={() => setQuantity((prev) => prev - 1)}> &lt; </span>
                            </button>
                            <div className="quantity">
                                {quantity<0 ? setQuantity(0) : quantity}
                            </div>                             
                            <button className="btn btn-white border border-secondary px-3" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                                <span className="minButton" onClick={() => setQuantity( (prev) => prev + 1)}> &gt; </span>
                            </button>
                        </div>
                        </div>
                    </div>
                    <a href="/" className="btn btn-primary shadow-0 me-3"> <i className="me-1 fa fa-shopping-basket"></i> Add to cart </a>                    
                    </div>
                </main>
                </div>
            </div>
            </section>
        </Container>
    )
}

export default DetailSection