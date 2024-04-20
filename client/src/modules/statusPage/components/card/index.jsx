import React from 'react'

function StatusCard() {
    return (
        <>
            <div className="card card-flush pt-3 mb-5 mb-xl-10">

                <div className="card-header">

                    <div className="card-title">
                        <h2>Invoices</h2>
                    </div>


                    <div className="card-toolbar">

                        <ul className="nav nav-stretch fs-5 fw-semibold nav-line-tabs nav-line-tabs-2x border-transparent" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a id="kt_referrals_year_tab" className="nav-link text-active-primary active" data-bs-toggle="tab" role="tab" href="#kt_customer_details_invoices_1">This Year</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a id="kt_referrals_2019_tab" className="nav-link text-active-primary ms-3" data-bs-toggle="tab" role="tab" href="#kt_customer_details_invoices_2">2020</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a id="kt_referrals_2018_tab" className="nav-link text-active-primary ms-3" data-bs-toggle="tab" role="tab" href="#kt_customer_details_invoices_3">2019</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a id="kt_referrals_2017_tab" className="nav-link text-active-primary ms-3" data-bs-toggle="tab" role="tab" href="#kt_customer_details_invoices_4">2018</a>
                            </li>
                        </ul>

                    </div>

                </div>


                <div className="card-body pt-2">

                    <div id="kt_referred_users_tab_content" className="tab-content">

                        <div id="kt_customer_details_invoices_1" className="tab-pane fade show active" role="tabpanel">

                            <div className="table-responsive">

                                <table id="kt_customer_details_invoices_table_1" className="table align-middle table-row-dashed fs-6 fw-bold gs-0 gy-4 p-0 m-0">
                                    <thead className="border-bottom border-gray-200 fs-7 text-uppercase fw-bold">
                                        <tr className="text-start text-gray-500">
                                            <th className="min-w-100px">Order ID</th>
                                            <th className="min-w-100px">Amount</th>
                                            <th className="min-w-100px">Status</th>
                                            <th className="min-w-125px">Date</th>
                                            <th className="w-100px">Invoice</th>
                                        </tr>
                                    </thead>
                                    <tbody className="fs-6 fw-semibold text-gray-600">
                                        <tr>
                                            <td>
                                                <a href="#" className="text-gray-600 text-hover-primary">102445788</a>
                                            </td>
                                            <td className="text-success">$38.00</td>
                                            <td>
                                                <span className="badge badge-light-success">Approved</span>
                                            </td>
                                            <td>Nov 01, 2020</td>
                                            <td className="">
                                                <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#" className="text-gray-600 text-hover-primary">423445721</a>
                                            </td>
                                            <td className="text-danger">$-2.60</td>
                                            <td>
                                                <span className="badge badge-light-success">Approved</span>
                                            </td>
                                            <td>Oct 24, 2020</td>
                                            <td className="">
                                                <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#" className="text-gray-600 text-hover-primary">312445984</a>
                                            </td>
                                            <td className="text-success">$76.00</td>
                                            <td>
                                                <span className="badge badge-light-warning">Pending</span>
                                            </td>
                                            <td>Oct 08, 2020</td>
                                            <td className="">
                                                <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#" className="text-gray-600 text-hover-primary">312445984</a>
                                            </td>
                                            <td className="text-success">$5.00</td>
                                            <td>
                                                <span className="badge badge-light-success">Approved</span>
                                            </td>
                                            <td>Sep 15, 2020</td>
                                            <td className="">
                                                <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#" className="text-gray-600 text-hover-primary">523445943</a>
                                            </td>
                                            <td className="text-danger">$-1.30</td>
                                            <td>
                                                <span className="badge badge-light-info">In progress</span>
                                            </td>
                                            <td>May 30, 2020</td>
                                            <td className="">
                                                <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>

                        </div>


                        <div id="kt_customer_details_invoices_2" className="tab-pane fade" role="tabpanel">

                            <div className="table-responsive">

                                <table id="kt_customer_details_invoices_table_2" className="table align-middle table-row-dashed fs-6 fw-bold gs-0 gy-4 p-0 m-0">
                                    <thead className="border-bottom border-gray-200 fs-7 text-uppercase fw-bold">
                                        <tr className="text-start text-gray-500">
                                            <th className="min-w-100px">Order ID</th>
                                            <th className="min-w-100px">Amount</th>
                                            <th className="min-w-100px">Status</th>
                                            <th className="min-w-125px">Date</th>
                                            <th className="w-100px">Invoice</th>
                                        </tr>
                                    </thead>
                                    <tbody className="fs-6 fw-semibold text-gray-600">
                                        <tr>
                                            <td>
                                                <a href="#" className="text-gray-600 text-hover-primary">523445943</a>
                                            </td>
                                            <td className="text-danger">$-1.30</td>
                                            <td>
                                                <span className="badge badge-light-success">Approved</span>
                                            </td>
                                            <td>May 30, 2020</td>
                                            <td className="">
                                                <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#" className="text-gray-600 text-hover-primary">231445943</a>
                                            </td>
                                            <td className="text-success">$204.00</td>
                                            <td>
                                                <span className="badge badge-light-danger">Rejected</span>
                                            </td>
                                            <td>Apr 22, 2020</td>
                                            <td className="">
                                                <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#" className="text-gray-600 text-hover-primary">426445943</a>
                                            </td>
                                            <td className="text-success">$31.00</td>
                                            <td>
                                                <span className="badge badge-light-warning">Pending</span>
                                            </td>
                                            <td>Feb 09, 2020</td>
                                            <td className="">
                                                <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#" className="text-gray-600 text-hover-primary">984445943</a>
                                            </td>
                                            <td className="text-success">$52.00</td>
                                            <td>
                                                <span className="badge badge-light-success">Approved</span>
                                            </td>
                                            <td>Nov 01, 2020</td>
                                            <td className="">
                                                <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#" className="text-gray-600 text-hover-primary">324442313</a>
                                            </td>
                                            <td className="text-danger">$-0.80</td>
                                            <td>
                                                <span className="badge badge-light-success">Approved</span>
                                            </td>
                                            <td>Jan 04, 2020</td>
                                            <td className="">
                                                <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>

                        </div>


                        <div id="kt_customer_details_invoices_3" className="tab-pane fade" role="tabpanel">

                            <div className="table-responsive">

                                <table id="kt_customer_details_invoices_table_3" className="table align-middle table-row-dashed fs-6 fw-bold gs-0 gy-4 p-0 m-0">
                                    <thead className="border-bottom border-gray-200 fs-7 text-uppercase fw-bold">
                                        <tr className="text-start text-gray-500">
                                            <th className="min-w-100px">Order ID</th>
                                            <th className="min-w-100px">Amount</th>
                                            <th className="min-w-100px">Status</th>
                                            <th className="min-w-125px">Date</th>
                                            <th className="w-100px">Invoice</th>
                                        </tr>
                                    </thead>
                                    <tbody className="fs-6 fw-semibold text-gray-600">
                                        <tr>
                                            <td>
                                                <a href="#" className="text-gray-600 text-hover-primary">426445943</a>
                                            </td>
                                            <td className="text-success">$31.00</td>
                                            <td>
                                                <span className="badge badge-light-warning">Pending</span>
                                            </td>
                                            <td>Feb 09, 2020</td>
                                            <td className="">
                                                <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#" className="text-gray-600 text-hover-primary">984445943</a>
                                            </td>
                                            <td className="text-success">$52.00</td>
                                            <td>
                                                <span className="badge badge-light-warning">Pending</span>
                                            </td>
                                            <td>Nov 01, 2020</td>
                                            <td className="">
                                                <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#" className="text-gray-600 text-hover-primary">324442313</a>
                                            </td>
                                            <td className="text-danger">$-0.80</td>
                                            <td>
                                                <span className="badge badge-light-success">Approved</span>
                                            </td>
                                            <td>Jan 04, 2020</td>
                                            <td className="">
                                                <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#" className="text-gray-600 text-hover-primary">312445984</a>
                                            </td>
                                            <td className="text-success">$5.00</td>
                                            <td>
                                                <span className="badge badge-light-danger">Rejected</span>
                                            </td>
                                            <td>Sep 15, 2020</td>
                                            <td className="">
                                                <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#" className="text-gray-600 text-hover-primary">102445788</a>
                                            </td>
                                            <td className="text-success">$38.00</td>
                                            <td>
                                                <span className="badge badge-light-info">In progress</span>
                                            </td>
                                            <td>Nov 01, 2020</td>
                                            <td className="">
                                                <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>

                        </div>


                        <div id="kt_customer_details_invoices_4" className="tab-pane fade" role="tabpanel">

                            <div className="table-responsive">

                                <table id="kt_customer_details_invoices_table_4" className="table align-middle table-row-dashed fs-6 fw-bold gs-0 gy-4 p-0 m-0">
                                    <thead className="border-bottom border-gray-200 fs-7 text-uppercase fw-bold">
                                        <tr className="text-start text-gray-500">
                                            <th className="min-w-100px">Order ID</th>
                                            <th className="min-w-100px">Amount</th>
                                            <th className="min-w-100px">Status</th>
                                            <th className="min-w-125px">Date</th>
                                            <th className="w-100px">Invoice</th>
                                        </tr>
                                    </thead>
                                    <tbody className="fs-6 fw-semibold text-gray-600">
                                        <tr>
                                            <td>
                                                <a href="#" className="text-gray-600 text-hover-primary">102445788</a>
                                            </td>
                                            <td className="text-success">$38.00</td>
                                            <td>
                                                <span className="badge badge-light-danger">Rejected</span>
                                            </td>
                                            <td>Nov 01, 2020</td>
                                            <td className="">
                                                <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#" className="text-gray-600 text-hover-primary">423445721</a>
                                            </td>
                                            <td className="text-danger">$-2.60</td>
                                            <td>
                                                <span className="badge badge-light-info">In progress</span>
                                            </td>
                                            <td>Oct 24, 2020</td>
                                            <td className="">
                                                <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#" className="text-gray-600 text-hover-primary">102445788</a>
                                            </td>
                                            <td className="text-success">$38.00</td>
                                            <td>
                                                <span className="badge badge-light-warning">Pending</span>
                                            </td>
                                            <td>Nov 01, 2020</td>
                                            <td className="">
                                                <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#" className="text-gray-600 text-hover-primary">423445721</a>
                                            </td>
                                            <td className="text-danger">$-2.60</td>
                                            <td>
                                                <span className="badge badge-light-success">Approved</span>
                                            </td>
                                            <td>Oct 24, 2020</td>
                                            <td className="">
                                                <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#" className="text-gray-600 text-hover-primary">426445943</a>
                                            </td>
                                            <td className="text-success">$31.00</td>
                                            <td>
                                                <span className="badge badge-light-info">In progress</span>
                                            </td>
                                            <td>Feb 09, 2020</td>
                                            <td className="">
                                                <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default StatusCard