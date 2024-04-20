import React from 'react'

function EmailPasswordSettings() {
    return (
        <>
            <div className="card mb-5 mb-xl-10">

                <div className="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_signin_method">
                    <div className="card-title m-0">
                        <h3 className="fw-bold m-0">Sign-in Method</h3>
                    </div>
                </div>


                <div id="kt_account_settings_signin_method" className="collapse show">

                    <div className="card-body border-top p-9">

                        <div className="d-flex flex-wrap align-items-center">

                            <div id="kt_signin_email">
                                <div className="fs-6 fw-bold mb-1">Email Address</div>
                                <div className="fw-semibold text-gray-600">support@keenthemes.com</div>
                            </div>


                            <div id="kt_signin_email_edit" className="flex-row-fluid d-none">

                                <form id="kt_signin_change_email" className="form" novalidate="novalidate">
                                    <div className="row mb-6">
                                        <div className="col-lg-6 mb-4 mb-lg-0">
                                            <div className="fv-row mb-0">
                                                <label for="emailaddress" className="form-label fs-6 fw-bold mb-3">Enter New Email Address</label>
                                                <input type="email" className="form-control form-control-lg form-control-solid" id="emailaddress" placeholder="Email Address" name="emailaddress" value="support@keenthemes.com" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="fv-row mb-0">
                                                <label for="confirmemailpassword" className="form-label fs-6 fw-bold mb-3">Confirm Password</label>
                                                <input type="password" className="form-control form-control-lg form-control-solid" name="confirmemailpassword" id="confirmemailpassword" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <button id="kt_signin_submit" type="button" className="btn btn-primary me-2 px-6">Update Email</button>
                                        <button id="kt_signin_cancel" type="button" className="btn btn-color-gray-500 btn-active-light-primary px-6">Cancel</button>
                                    </div>
                                </form>

                            </div>


                            <div id="kt_signin_email_button" className="ms-auto">
                                <button className="btn signin-btn">Change Email</button>
                            </div>

                        </div>


                        <div className="separator separator-dashed my-6"></div>

                        <div className="d-flex flex-wrap align-items-center mb-10">

                            <div id="kt_signin_password">
                                <div className="fs-6 fw-bold mb-1">Password</div>
                                <div className="fw-semibold text-gray-600">************</div>
                            </div>


                            <div id="kt_signin_password_edit" className="flex-row-fluid d-none">

                                <form id="kt_signin_change_password" className="form" novalidate="novalidate">
                                    <div className="row mb-1">
                                        <div className="col-lg-4">
                                            <div className="fv-row mb-0">
                                                <label for="currentpassword" className="form-label fs-6 fw-bold mb-3">Current Password</label>
                                                <input type="password" className="form-control form-control-lg form-control-solid" name="currentpassword" id="currentpassword" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="fv-row mb-0">
                                                <label for="newpassword" className="form-label fs-6 fw-bold mb-3">New Password</label>
                                                <input type="password" className="form-control form-control-lg form-control-solid" name="newpassword" id="newpassword" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="fv-row mb-0">
                                                <label for="confirmpassword" className="form-label fs-6 fw-bold mb-3">Confirm New Password</label>
                                                <input type="password" className="form-control form-control-lg form-control-solid" name="confirmpassword" id="confirmpassword" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-text mb-5">Password must be at least 8 character and contain symbols</div>
                                    <div className="d-flex">
                                        <button id="kt_password_submit" type="button" className="btn btn-primary me-2 px-6">Update Password</button>
                                        <button id="kt_password_cancel" type="button" className="btn btn-color-gray-500 btn-active-light-primary px-6">Cancel</button>
                                    </div>
                                </form>

                            </div>


                            <div id="kt_signin_password_button" className="ms-auto">
                                <button className="btn signin-btn">Reset Password</button>
                            </div>

                        </div>


                        <div className="notice d-flex rounded secure-component border border-dashed p-6">

                            <i className="ki-outline ki-shield-tick fs-2tx redbiller-text-color me-4"></i>


                            <div className="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">

                                <div className="mb-3 mb-md-0 fw-semibold">
                                    <h4 className="text-gray-900 fw-bold">Secure Your Account</h4>
                                    <div className="fs-6 text-gray-700 pe-7">Two-factor authentication adds an extra layer of security to your account. To log in, in addition you'll need to provide a 6 digit code</div>
                                </div>


                                <a href="#" className="btn signin-btn px-6 align-self-center text-nowrap" data-bs-toggle="modal" data-bs-target="#kt_modal_two_factor_authentication">Enable</a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default EmailPasswordSettings