import React, { useState } from 'react';


function SubAccountSideBar() {
    const [count] = useState([
        { name: "emmy", email:"testgmail.com", tag:"XA56xc", id:"one" },
        { name: "emmy", email:"testgmail.com", tag:"XA56xc", id:"two" },
        { name: "emmy", email:"testgmail.com", tag:"XA56xc", id:"three" },
        { name: "emmy", email:"testgmail.com", tag:"XA56xc" , id:"four"},
        { name: "emmy", email:"testgmail.com", tag:"XA56xc", id:"five" },
        { name: "emmy", email:"testgmail.com", tag:"XA56xc", id:"six" },
    ])
    return (
        <>
            <div className="col-xl-4">
                <div className="card card-flush h-xl-100">

                    <div className="card-header pt-7">

                        <h3 className="card-title align-items-start flex-column">
                            <span className="card-label fw-bold text-gray-900">Other Accounts</span>
                            <span className="text-gray-500 mt-1 fw-semibold fs-6"></span>
                        </h3>

                        <div className="card-toolbar">
                            <a href="apps/ecommerce/sales/details.html" className="btn btn-sm btn-light">Clear Defaults</a>
                        </div>

                    </div>

                    <div className="card-body">

                        <div className="hover-scroll-overlay-y pe-6 me-n6" style={{ height: "415px" }}>
                            {
                                count.map((item, i) => (
                                    <div className="border border-dashed border-gray-300 rounded px-7 py-3 mb-6" key={i}>

                                        <div className="d-flex flex-stack mb-3">

                                            <div className="me-3">

                                                {/* <img src="assets/media/stock/ecommerce/210.png" className="w-50px ms-n1 me-1" alt="" /> */}
                                                <i class="fa fa-user w-50px ms-n1 me-1" aria-hidden="true"></i>

                                                <a className={i == 0 ? "text-gray-900 text-hover-primary fw-bold active" : "text-gray-900 text-hover-primary fw-bold"} href={`#${item.id}`} data-bs-toggle="pill">{item.name.toUpperCase()}</a>

                                            </div>

                                            <div className="m-0">

                                                <button className="btn btn-icon btn-color-gray-500 btn-active-color-primary justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">
                                                    {/* <i className="ki-outline ki-dots-square fs-1"></i> */}
                                                    {item.tag}
                                                </button>

                                            </div>

                                        </div>

                                        <div className="d-flex flex-stack">

                                            <span className="text-gray-500 fw-bold">
                                                <a href="apps/ecommerce/sales/details.html" className="text-gray-600 text-hover-primary fw-2">{item.email}</a></span>

                                            <span className="badge badge-light-success">
                                                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                                            </span>

                                        </div>

                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubAccountSideBar