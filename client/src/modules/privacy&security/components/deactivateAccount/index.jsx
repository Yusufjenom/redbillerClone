import React from 'react'

function DeactivateAccount() {
    return (
        <>
            <div className="card" id='deactivate'>

                <div className="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_deactivate" aria-expanded="true" aria-controls="kt_account_deactivate">
                    <div className="card-title m-0">
                        <h3 className="fw-bold m-0">Deactivate Account</h3>
                    </div>
                </div>


                <div id="kt_account_settings_deactivate" className="collapse show">

                    <form id="kt_account_deactivate_form" className="form">

                        <div className="card-body border-top p-9">

                            <div className="notice d-flex bg-light-warning rounded border-warning border border-dashed mb-9 p-6">

                                <i className="ki-outline ki-information fs-2tx text-warning me-4"></i>


                                <div className="d-flex flex-stack flex-grow-1">

                                    <div className="fw-semibold">
                                        <h4 className="text-gray-900 fw-bold">You Are Deactivating Your Account</h4>
                                        <div className="fs-6 text-gray-700">For extra security, this requires you to confirm your email or phone number when you reset yousignr password.
                                            <br />
                                            <a className="fw-bold" href="#">Learn more</a></div>
                                    </div>

                                </div>

                            </div>


                            <div className="form-check form-check-solid fv-row">
                                <input name="deactivate" className="form-check-input" type="checkbox" value="" id="deactivate" />
                                <label className="form-check-label fw-semibold ps-2 fs-6" for="deactivate">I confirm my account deactivation</label>
                            </div>

                        </div>


                        <div className="card-footer d-flex justify-content-end py-6 px-9">
                            <button id="kt_account_deactivate_account_submit" type="submit" className="btn btn-danger fw-semibold">Deactivate Account</button>
                        </div>

                    </form>

                </div>

            </div>
        </>
    )
}

export default DeactivateAccount