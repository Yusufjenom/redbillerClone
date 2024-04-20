import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faNairaSign} from '@fortawesome/free-solid-svg-icons'

const Balance = () => {
    const [isOn, setIsOn] = useState(false);
    const [balance, setBalance] = useState("30,274,000.94");
    const [disputeBalance, setDisputeBalance] = useState("N10,274,000.94")
    const [currentBalance, setCurrentBalance] = useState("N40,274,000.94")

    const handleToggleBtn = () => {
        setIsOn(!isOn)
    };

    return (
        <div className="card card-flush h-xl-100">

            <div className="card-header pt-5 mb-6">

                <h3 className="card-title align-items-start flex-column">

                    <div className="d-flex align-items-center mb-2">

                        <span className="fs-2hx fw-bold text-gray-800 align-self-start me-1">
                        <FontAwesomeIcon icon={faNairaSign} />
                        </span>


                        <span className="fs-2hx fw-bold text-gray-800 me-2 lh-1 ls-n2">{isOn ? balance : "******"}</span>


                        {/* <span className="badge badge-light-success fs-base">
                            <i className="ki-outline ki-arrow-up fs-5 text-success ms-n1"></i>9.2%</span> */}

                    </div>


                    {/* <span className="fs-6 fw-semibold text-gray-500">Etherium rate</span> */}

                </h3>


                <div className="card-toolbar">

                    <button
                        type='button'
                        className={`btn btn-lg ${isOn ? 'btn-success' : 'btn-secondary'}`}
                        onClick={handleToggleBtn}
                        style={{ backgroundColor: "#93120e", color: "#fff" }}
                    >
                        {isOn ? 'Hide Balance' : 'Show Balance'}
                        {/* <i className="ki-outline ki-dots-square fs-1 text-gray-500 me-n1"></i> */}
                    </button>


                </div>

            </div>


            <div className="card-body py-0 px-0">

                <ul className="nav d-flex justify-content-between mb-3 mx-9 flex-column px-3">



                    <li className="nav-item mb-3 d-flex flex-column">

                        <a
                            data-bs-toggle="tab" id="kt_charts_widget_33_tab_1" href="#kt_charts_widget_33_tab_content_1"
                            style={{ color: "red" }}
                        >{isOn ? disputeBalance : "******"}</a>
                        <span className="fw-semibold fs-8 lh-1" style={{ color: "gray" }}>Dispute balance</span>

                    </li>
                    <hr />
                    <li className="nav-item mb-3 d-flex flex-column">

                        <a
                            data-bs-toggle="tab" id="kt_charts_widget_33_tab_1" href="#kt_charts_widget_33_tab_content_1">{isOn ? currentBalance : "******"}</a>
                        <span className="fw-semibold fs-8 lh-1" style={{ color: "gray" }}>Current balance</span>

                    </li>


                </ul>

            </div>


            <div className="card-body d-flex" style={{
                color: "#93120e",
                display: "flex",
                border: "1px solid #f2f3f4",
                borderRadius: '.6rem',
                margin: ".3rem",
                alignItems: "center",
                gap: ".5rem"
            }}>
                <Button variant="outline">Add Money</Button>
                <Button variant="outline">Withdraw Money</Button>
                <Link to="/privacy-security"><i class="bi bi-gear fs-2x p-0"></i></Link>
            </div>

        </div>
    )
}

export default Balance