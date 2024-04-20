import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const MiniStatement = () => {
    const [statement, setStatement] = useState([
        {
            date: "27/02/2024",
            service: { value: "DEBIT", icon: <i class="bi bi-arrow-up-right" style={{ color: "red" }}></i> },
            amount: 100,
            balance: 5000,
            sn: 1,
            refereence: 1244634422214
        },
        {
            date: "27/02/2024",
            service: { value: "DEBIT", icon: <i class="bi bi-arrow-up-right" style={{ color: "red" }}></i> },
            amount: 100,
            balance: 5000,
            sn: 2,
            refereence: 1244634422214
        },
        {
            date: "27/02/2024",
            service: { value: "CREDIT", icon: <i class="bi bi-arrow-down-left" style={{ color: "green" }}></i> },
            amount: 100,
            balance: 5000,
            sn: 3,
            refereence: 1244634422214
        },
        {
            date: "27/02/2024",
            service: { value: "DEBIT", icon: <i class="bi bi-arrow-up-right" style={{ color: "red" }}></i> },
            amount: 100,
            balance: 5000,
            sn: 4,
            refereence: 1244634422214
        },
        {
            date: "27/02/2024",
            service: { value: "CREDIT", icon: <i class="bi bi-arrow-down-left" style={{ color: "green" }}></i> },
            amount: 100,
            balance: 5000,
            sn: 5,
            refereence: 1244634422214
        },
        {
            date: "27/02/2024",
            service: { value: "CREDIT", icon: <i class="bi bi-arrow-down-left" style={{ color: "green" }}></i> },
            amount: 100,
            balance: 5000,
            sn: 6,
            refereence: 1244634422214
        },
    ]);

    return (
        <div className="card card-flush h-xl-100">

            <div className="card-header pt-7">

                <h3 className="card-title align-items-start flex-column">
                    <span className="card-label fw-bold text-gray-800">Recent Transactions</span>
                    <span className="text-gray-500 mt-1 fw-semibold fs-6">Updated 37 minutes ago</span>
                </h3>


                <div className="card-toolbar mt-10">
                    <Link to="/transactions">
                    <a href="#" className="btn btn-sm btn-light">View More</a>
                    </Link>
                </div>

            </div>


            <div className="card-body">
                
                <div className="table-responsive">

                    <table className="table table-row-dashed align-middle gs-0 gy-3 my-0">

                        <thead>
                            <tr className="fs-7 fw-bold text-gray-500 border-bottom-0">
                                <th className="p-0 pb-3 min-w-175px text-start">DATE</th>
                                <th className="p-0 pb-3 min-w-100px text-start">SERVICE</th>
                                <th className="p-0 pb-3 min-w-100px text-end">AMOUNT</th>
                                <th className="p-0 pb-3 min-w-125px text-end">BALANCE</th>
                                {/* <th className="p-0 pb-3 min-w-100px text-end">No.</th> */}
                                <th className="p-0 pb-3 w-80px text-end"></th>
                            </tr>
                        </thead>


                        <tbody>
                            {
                                statement.map(view => (
                                    <tr key={view.sn}>
                                        <td >
                                            {/* <div className="d-flex align-items-center"> */}
                                            <span className="text-gray-600 fw-bold fs-6">{view.date}</span>

                                            {/* </div> */}
                                        </td>
                                        <td className="text-end pe-0">
                                            <div className="d-flex align-items-center">
                                                <span className="text-gray-600 fw-bold fs-6">{view.service.value}</span>
                                                <span className="text-gray-600 fw-bold fs-6 mx-6">{view.service.icon}</span>
                                            </div>
                                        </td>
                                        <td className="text-end pe-0">
                                            <span className="text-gray-600 fw-bold fs-6">{view.amount}</span>
                                        </td>
                                        <td className="pe-0">
                                            <div className="d-flex align-items-center justify-content-end">

                                                <span className="text-gray-600 fw-bold d-block fs-6">{view.balance}</span>
                                            </div>
                                        </td>
                                        {/* <td className="text-end pe-0">
                                            <span className="text-gray-600 fw-bold fs-6">{view.sn}</span>
                                        </td> */}
                                        <td className="text-end">
                                            <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                                <i class="bi bi-copy"></i>
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            }


                        </tbody>

                    </table>
                </div>



            </div>

        </div>
    )
}

export default MiniStatement;


