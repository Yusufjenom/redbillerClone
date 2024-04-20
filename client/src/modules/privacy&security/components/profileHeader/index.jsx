import React from 'react'

function ProfileHeader() {
    return (
        <>
            <div id="kt_app_content" className="app-content" style={{ width: "100%" }}>

                <div className="card mb-5 mb-xl-10" style={{ width: "100%" }}>
                    <div className="card-body pt-9 pb-0">

                        <div className="d-flex flex-wrap flex-sm-nowrap">

                            <div className="me-7 mb-4">
                                <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
                                    <img src="/" alt="image" />
                                    <div className="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-body h-20px w-20px"></div>
                                </div>
                            </div>

                            <div className="flex-grow-1">

                                <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">

                                    <div className="d-flex flex-column">

                                        <div className="d-flex align-items-center mb-2">
                                            <a href="#" className="text-gray-900 text-hover-primary fs-2 fw-bold me-1">Akinkunmi</a>
                                            <a href="#">
                                                <i className="ki-outline ki-verify fs-1" style={{ color: "#93120e" }}></i>
                                            </a>
                                        </div>

                                        <div className="d-flex flex-wrap fw-semibold fs-6 mb-4 pe-2">
                                            <a href="#" className="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2">
                                                <i className="ki-outline ki-profile-circle fs-4 me-1"></i>Cloud Engr</a>
                                            <a href="#" className="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2">
                                                <i className="ki-outline ki-geolocation fs-4 me-1"></i>Oshodi, Lagos</a>
                                            <a href="#" className="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2">
                                                <i className="ki-outline ki-sms fs-4 me-1"></i>akinkunmi@redbiller.com</a>
                                        </div>

                                    </div>

                                    {/* '''''''' */}



                                    {/* ''''''''' */}

                                </div>

                                {/*  */}




                                {/* /////////////// */}
                                <div className="d-flex flex-wrap flex-stack" >

                                    <div className="d-flex flex-column flex-grow-1 pe-8">

                                        <div className="d-flex flex-wrap">

                                            <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">

                                                <div className="d-flex align-items-center">
                                                    <i className="ki-outline ki-arrow-up fs-3 text-success me-2"></i>
                                                    {/* <div className="fs-2 fw-bold" data-kt-countup="true" data-kt-countup-value="4500" data-kt-countup-prefix="$">0</div> */}
                                                </div>

                                                <div className="fw-semibold fs-6 text-gray-500">Status Page</div>

                                            </div>


                                            <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">

                                                <div className="d-flex align-items-center">
                                                    <i className="ki-outline ki-arrow-up fs-3 text-success me-2"></i>
                                                    {/* <div className="fs-2 fw-bold" data-kt-countup="true" data-kt-countup-value="60" data-kt-countup-prefix="%">0</div> */}
                                                </div>

                                                <div className="fw-semibold fs-6 text-gray-500">Success Rate</div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                {/* ///////////// */}





                                {/*  */}

                            </div>

                        </div>

                        <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold">

                            <li className="nav-item mt-2">
                                <a className="nav-link linkss ms-0 me-10 py-5 active" href="#profile" data-bs-toggle="pill">Profile</a>
                            </li>

                            <li className="nav-item mt-2">
                                <a className="nav-link text-active-primary ms-0 me-10 py-5" href="#business" data-bs-toggle="pill">Business Account</a>
                            </li>

                            <li className="nav-item mt-2">
                                <a className="nav-link text-active-primary ms-0 me-10 py-5" href="#deactivate" data-bs-toggle="pill">Privacy & Security</a>
                            </li>

                            <li className="nav-item mt-2">
                                <a className="nav-link text-active-primary ms-0 me-10 py-5" href="#beneficiary" data-bs-toggle="pill">Beneficiaries</a>
                            </li>

                            <li className="nav-item mt-2">
                                <a className="nav-link text-active-primary ms-0 me-10 py-5" href="#withdrawal" data-bs-toggle="pill">Withdrawals</a>
                            </li>

                            <li className="nav-item mt-2">
                                <a className="nav-link text-active-primary ms-0 me-10 py-5" href="#accountLimits" data-bs-toggle="pill">Account Limit</a>
                            </li>

                            <li className="nav-item mt-2">
                                <a className="nav-link text-active-primary ms-0 me-10 py-5" href="#subAccounts" data-bs-toggle="pill">Sub Accounts</a>
                            </li>

                            <li className="nav-item mt-2">
                                <a className="nav-link text-active-primary ms-0 me-10 py-5" href="#" data-bs-toggle="pill">API & Web Hook</a>
                            </li>

                            <li className="nav-item mt-2">
                                <a className="nav-link text-active-primary ms-0 me-10 py-5" href="#" data-bs-toggle="pill">User Sessions</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileHeader