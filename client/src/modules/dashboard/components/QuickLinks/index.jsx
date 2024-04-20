import React from 'react';
import { Link } from 'react-router-dom';
import { useServices } from '../../../bills/hooks/useServices';
import {Nav} from 'react-bootstrap';

const QuickLinks = () => {
    const {billServices} = useServices();
    console.log(billServices)
{/* <Nav.Link eventKey={t.value}> */}
    return (
        <div className="app-toolbar-wrapper w-100 mb-8 bg-gray-100">
            <div className="d-flex flex-stack mb-2">
                <span className="fw-bold fs-5 text-gray-700">Quick Links</span>

                {/* <a href="#" className="btn btn-color-gray-500 fw-semibold" data-bs-toggle="modal" data-bs-target="#kt_modal_create_campaign">View All</a> */}

            </div>


            <div className="nav d-flex justify-content-xxl-between flex-wrap gap-5">

                <li className="nav-item mb-2">
                    {/* btn-active-success */}
                    <p className="nav-link btn  btn-center bg-white-100 btn-color-gray-600 rounded-3 flex-column overflow-hidden w-90px h-85px pt-7 pt-lg-5 pb-2 active"
                        data-bs-toggle="tab" href="#" style={{ backgroundColor: "#93120e" }}>

                        <Link to="/bills">
                            <div className="nav-icon mb-3">
                                <i className="bi bi-cash-stack fs-2x p-0" style={{ color: "#fff" }}></i>

                            </div>
                        </Link>


                        <span className="fw-semibold fs-7 lh-1" style={{ color: "#fff" }}>Transfer</span>


                    </p>


                </li>


                <li className="nav-item mb-2">

                    <p className="nav-link btn hover-btn  btn-center bg-white btn-color-gray-600 rounded-3 flex-column overflow-hidden w-90px h-85px pt-7 pt-lg-5 pb-2" data-bs-toggle="tab" href="#">

                        <Link to="/bills">
                            <div className="nav-icon mb-3">
                                <i className="ki-outline ki-bus fs-2x p-0"></i>
                            </div>
                        </Link>

                        <span className="fw-semibold fs-7 lh-1">Data</span>

                    </p>

                </li>


                <li className="nav-item mb-2">

                    <p className="nav-link btn hover-btn btn-center bg-white btn-color-gray-600 rounded-3 flex-column overflow-hidden w-90px h-85px pt-7 pt-lg-5 pb-2" data-bs-toggle="tab" href="#">

                        <Link to="/bills">
                            <div className="nav-icon mb-3">
                                <i className="bi bi-send-check fs-2x p-0"></i>
                            </div>
                        </Link>

                        <span className="fw-semibold fs-7 lh-1">M Pay</span>

                    </p>

                </li>


                <li className="nav-item mb-2">

                    <p className="nav-link btn hover-btn btn-center bg-white btn-color-gray-600 rounded-3 flex-column overflow-hidden w-90px h-85px pt-7 pt-lg-5 pb-2" data-bs-toggle="tab" href="#">

                        <Link to="/bills">
                            <div className="nav-icon mb-3">
                                <i class="bi bi-suit-spade fs-2x p-0"></i>
                            </div>
                        </Link>

                        <span className="fw-semibold fs-7 lh-1">Betting</span>

                    </p>

                </li>


                <li className="nav-item mb-2">

                    <p className="nav-link btn hover-btn btn-center bg-white btn-color-gray-600 rounded-3 flex-column overflow-hidden w-90px h-85px pt-7 pt-lg-5 pb-2" data-bs-toggle="tab" href="#">

                        <Link to="/bills">
                            <div className="nav-icon mb-3">
                                <i className="bi bi-tv fs-2x p-0"></i>
                            </div>
                        </Link>

                        <span className="fw-semibold fs-7 lh-1">Television</span>

                    </p>

                </li>


                <li className="nav-item mb-2">

                    <p className="nav-link btn hover-btn btn-center bg-white btn-color-gray-600 rounded-3 flex-column overflow-hidden w-90px h-85px pt-7 pt-lg-5 pb-2" data-bs-toggle="tab" href="#">

                        <Link to="/bills">
                            <div className="nav-icon mb-3">
                                <i className="bi bi-lightbulb-fill fs-2x p-0"></i>
                            </div>
                        </Link>

                        <span className="fw-semibold fs-7 lh-1">Electricity</span>

                    </p>

                </li>


                <li className="nav-item mb-2">

                    <p className="nav-link btn hover-btn btn-center bg-white btn-color-gray-600 rounded-3 flex-column overflow-hidden w-90px h-85px pt-7 pt-lg-5 pb-2" data-bs-toggle="tab" href="#">

                        <Link to="/bills">
                            <div className="nav-icon mb-3">
                                <i className="bi bi-router-fill fs-2x p-0"></i>
                            </div>
                        </Link>

                        <span className="fw-semibold fs-7 lh-1">Internet</span>

                    </p>

                </li>


                <li className="nav-item mb-2">

                    <p className="nav-link btn hover-btn btn-center bg-white btn-color-gray-600 rounded-3 flex-column overflow-hidden w-90px h-85px pt-7 pt-lg-5 pb-2" data-bs-toggle="tab" href="#">

                        <Link to="/bills">
                            <div className="nav-icon mb-3">
                                <i className="bi bi-airplane fs-2x p-0"></i>
                            </div>
                        </Link>

                        <span className="fw-semibold fs-7 lh-1">Flight</span>

                    </p>

                </li>


                <li className="nav-item mb-2">

                    <p className="nav-link btn hover-btn btn-center bg-white btn-color-gray-600 rounded-3 flex-column overflow-hidden w-90px h-85px pt-7 pt-lg-5 pb-2" data-bs-toggle="tab" href="#">

                        <Link to="/bills">
                            <div className="nav-icon mb-3">
                                <i className="bi bi-cart-check fs-2x p-0"></i>
                            </div>
                        </Link>

                        <span className="fw-semibold fs-7 lh-1">POS</span>

                    </p>

                </li>


                <li className="nav-item mb-2">

                    <p className="nav-link btn hover-btn btn-center bg-white btn-color-gray-600 rounded-3 flex-column overflow-hidden w-90px h-85px pt-7 pt-lg-5 pb-2" data-bs-toggle="tab" href="#">

                        <Link to="/bills">
                            <div className="nav-icon mb-3">
                                <i className="bi bi-credit-card fs-2x p-0"></i>
                            </div>
                        </Link>

                        <span className="fw-semibold fs-7 lh-1">Cards</span>

                    </p>

                </li>


                <li className="nav-item mb-2">

                    <p className="nav-link btn hover-btn btn-center bg-white btn-color-gray-600 rounded-3 flex-column overflow-hidden w-90px h-85px pt-7 pt-lg-5 pb-2" data-bs-toggle="tab" href="#">

                        <Link to="/bills">
                            <div className="nav-icon mb-3">
                                <i className="bi bi-phone fs-2x p-0"></i>
                            </div>
                        </Link>

                        <span className="fw-semibold fs-7 lh-1">Airtime</span>

                    </p>

                </li>


                <li className="nav-item mb-2">

                    <p className="nav-link btn hover-btn btn-center bg-white btn-color-gray-600 rounded-3 flex-column overflow-hidden w-90px h-85px pt-7 pt-lg-5 pb-2" data-bs-toggle="tab" href="#">

                        <Link to="/bills">
                            <div className="nav-icon mb-3">
                                <i className="bi bi-bank fs-2x p-0"></i>
                            </div>
                        </Link>

                        <span className="fw-semibold fs-7 lh-1">Insurance</span>

                    </p>

                </li>

            </div>

        </div>
    )
}

export default QuickLinks