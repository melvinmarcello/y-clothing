import React from "react";
import * as icons from 'react-bootstrap-icons';
const Footer = () =>{
    return (
        <>
          <footer className="text-center text-lg-start text-dark">
            <section className="">
                <div className="container text-center text-md-start pt-5">
                    <div className="row">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Y-Clothing</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{width: "60px", backgroundClip: "#7c4dff", height: "2px"}}
                                />
                            <p>Introducing Y-CLOTHING, where style meets comfort in perfect harmony. We are a trendy and contemporary clothing brand that caters to fashion-forward individuals seeking quality apparel that effortlessly complements their lifestyle.</p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">LINKS</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                                />
                            <p>
                            <a href="#!" className="text-dark">Home</a>
                            </p>
                            <p>
                                <a href="#!" className="text-dark">Catalog</a>
                            </p>
                            <p>
                                <a href="#!" className="text-dark">Cart</a>
                            </p>
                            <p>
                                <a href="#!" className="text-dark">Login</a>
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Socials</h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                            />
                            <p>
                                <a href="#!" className="text-dark"><icons.Facebook/>Facebook</a>
                            </p>
                            <p>
                                <a href="#!" className="text-dark"><icons.Instagram/>Instagram</a>
                            </p>
                            <p>
                                <a href="#!" className="text-dark"><icons.Linkedin/>Linkedin</a>
                            </p>
                            <p>
                                <a href="#!" className="text-dark"><icons.Github/>Github</a>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold">Contacts</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                                />
                            <p><icons.BuildingFill/> New York, NY 10012, US</p>
                            <p><icons.EnvelopeAtFill/> info@example.com</p>
                            <p><icons.TelephoneFill/>+ 01 234 567 88</p>
                            <p><icons.TelephoneFill/> + 01 234 567 89</p>
                        </div>
                    </div>
                </div>
            </section>

                <div className="text-center p-3 copyright-wrapper">
                    © 2020 Copyright: Supported by Antarixa 
                </div>
            </footer>  
        </>
    );
}

export default Footer;