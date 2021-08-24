import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <style>{`
                .bg-dark {
                    background-color: #212934 !important;
                }
                .container, .container-lg, .container-md, .container-sm {
                    max-width: 960px;
                }
                .container, .container-md, .container-sm {
                    max-width: 720px;
                }
                .container, .container-sm {
                    max-width: 540px;
                }
                .container, .container-fluid, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
                    width: 97%;
                    max-width: 100%;
                    margin: 0;
                    padding: 0;
                }
                .row {
                    --bs-gutter-x: 1.5rem;
                    --bs-gutter-y: 0;
                    display: flex;
                    justify-content: space-around;
                    flex-wrap: wrap;
                    flex-direction: row;
                    margin-top: calc(var(--bs-gutter-y) * -1);
                    margin-right: calc(var(--bs-gutter-x)/ -2);
                    margin-left: calc(var(--bs-gutter-x)/ -2);
                }
                .pt-5 {
                    padding-top: 3rem !important;
                }
                .col-md-4 {
                    flex: 0 0 auto;
                    max-width: 15% !important;
                }
                .row>* {
                    flex-shrink: 0;
                    width: 100%;
                    max-width: 100%;
                    padding-right: calc(var(--bs-gutter-x) / 2);
                    padding-left: calc(var(--bs-gutter-x) / 2);
                    margin-top: var(--bs-gutter-y);
                }
                #tempaltemo_footer .border-light {
                    border-color: #2d343f !important;
                }
                .text-success {
                    color: #59ab6e !important;
                }
                .logo {
                    font-weight: 500 !important;
                }
                .h2 {
                    font-family: 'Roboto', sans-serif;
                    font-size: 30px !important;
                    font-weight: 300;
                }
                .pb-3 {
                    padding-bottom: 1rem !important;
                }
                .border-bottom {
                    border-bottom: 1px solid #dee2e6!important;
                }
                .h1, .h2, .h3, .h4, .h5, .h6 {
                    margin-top: 0;
                    margin-bottom: .5rem;
                    font-weight: 500;
                    line-height: 1.2;
                }
                .text-light {
                    color: #cfd6e1 !important;
                }
                .list-unstyled {
                    padding-left: 0;
                    list-style: none;
                }
                .text-decoration-none {
                    text-decoration: none!important;
                }
                ul.footer-link-list li {
                    padding-bottom: 3vh;
                }
                #tempaltemo_footer a {
                    color: #dcdde1;
                }
                #tempaltemo_footer a:hover {
                    color: #68bb7d;
                }
                .hr {
                    width: 95%;
                    border: none;
                    border-top: 1px solid #2d343f;
                }
            `}
            </style>
            <footer className="bg-dark" id="tempaltemo_footer" style={{ overflow: "hidden" }}>
                <div className="container" style={{ width: "100%", backgroundColor: "#212934" }}>
                    <div className="row" style={{ maxWidth: "100%", margin: 0 }}>
                        <div className="col-md-4 pt-5">
                            <h2 className="h2 text-success border-bottom pb-3 border-light logo">Zay Shop</h2>
                            <ul className="list-unstyled text-light footer-link-list">
                                <li>
                                    <i className="fas fa-map-marker-alt fa-fw"></i>
                                    123 Consectetur at ligula 10660
                                </li>
                                <li>
                                    <i className="fa fa-phone fa-fw"></i>
                                    <a className="text-decoration-none" href="tel:010-020-0340">010-020-0340</a>
                                </li>
                                <li>
                                    <i className="fa fa-envelope fa-fw"></i>
                                    <a className="text-decoration-none" href="mailto:info@company.com">info@company.com</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-4 pt-5">
                            <h2 className="h2 text-light border-bottom pb-3 border-light">Categories</h2>
                            <ul className="list-unstyled text-light footer-link-list">
                                <li><Link className="text-decoration-none" to="/">Category 1</Link></li>
                                <li><Link className="text-decoration-none" to="/">Category 2</Link></li>
                                <li><Link className="text-decoration-none" to="/">Category 3</Link></li>
                                <li><Link className="text-decoration-none" to="/">Category 4</Link></li>
                                <li><Link className="text-decoration-none" to="/">Category 5</Link></li>
                                <li><Link className="text-decoration-none" to="/">Category 6</Link></li>
                                <li><Link className="text-decoration-none" to="/">Category 7</Link></li>
                            </ul>
                        </div>

                        <div className="col-md-4 pt-5">
                            <h2 className="h2 text-light border-bottom pb-3 border-light">Further Info</h2>
                            <ul className="list-unstyled text-light footer-link-list">
                                <li><Link className="text-decoration-none" to="/">Home</Link></li>
                                <li><Link className="text-decoration-none" to="/about">About Us</Link></li>
                                <li><Link className="text-decoration-none" to="/softwares">Softwares</Link></li>
                                <li><Link className="text-decoration-none" to="/">FAQs</Link></li>
                                <li><Link className="text-decoration-none" to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="hr" />

                <div className="w-100 bg-black py-3">
                    <div className="container">
                        <div className="row pt-2">
                            <div className="col-12">
                                <p className="text-left text-light" style={{ marginLeft: "10%" }}>
                                    Copyright &copy; 2021 TechLoaders
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;