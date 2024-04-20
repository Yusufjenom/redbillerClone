import React from 'react'

function BusinessProfileUpdate() {
    return (
        <>
            <div className="card mb-5 mb-xl-10">

                <div className="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_profile_details" aria-expanded="true" aria-controls="kt_account_profile_details">

                    <div className="card-title m-0">
                        <h3 className="fw-bold m-0">Business Details</h3>
                    </div>

                </div>


                <div id="kt_account_settings_profile_details" className="collapse show">

                    <form id="kt_account_profile_details_form" className="form">

                        <div className="card-body border-top p-9">

                            <div className="row mb-6">

                                <label className="col-lg-4 col-form-label fw-semibold fs-6">Avatar</label>


                                <div className="col-lg-8">

                                    <div className="image-input image-input-outline" data-kt-image-input="true" >
                                        {/* style="background-image: url('assets/media/svg/avatars/blank.svg')" */}

                                        <div className="image-input-wrapper w-125px h-125px" ></div>
                                        {/* style="background-image: url(assets/media/avatars/300-1.jpg)" */}


                                        <label className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change avatar">
                                            <i className="ki-outline ki-pencil fs-7"></i>

                                            <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                                            <input type="hidden" name="avatar_remove" />

                                        </label>


                                        <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="Cancel avatar">
                                            <i className="ki-outline ki-cross fs-2"></i>
                                        </span>


                                        <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="Remove avatar">
                                            <i className="ki-outline ki-cross fs-2"></i>
                                        </span>

                                    </div>


                                    <div className="form-text">Allowed file types: png, jpg, jpeg.</div>

                                </div>

                            </div>


                            <div className="row mb-6">

                                <label className="col-lg-4 col-form-label required fw-semibold fs-6">Business Name</label>

                                        <div className="col-lg-8 fv-row">
                                            <input type="text" name="fname" className="form-control form-control-lg form-control-solid mb-3 mb-lg-0" placeholder="Business name" value="Akinkunmi Transport" />
                                        </div>

                                    
                            </div>


                            <div className="row mb-6">

                                <label className="col-lg-4 col-form-label required fw-semibold fs-6">Business Type</label>


                                <div className="col-lg-8 fv-row">
                                    <input type="text" name="company" className="form-control form-control-lg form-control-solid" placeholder="Business name" value="Logistics" />
                                </div>

                            </div>

                            <div className="row mb-6">

                                <label className="col-lg-4 col-form-label required fw-semibold fs-6">Industry</label>


                                <div className="col-lg-8 fv-row">
                                    <input type="text" name="company" className="form-control form-control-lg form-control-solid" placeholder="Industry" value="Transportation" />
                                </div>

                            </div>


                            <div className="row mb-6">

                                <label className="col-lg-4 col-form-label fw-semibold fs-6">
                                    <span className="required">Registration Number</span>
                                    <span className="ms-1" data-bs-toggle="tooltip" title="Phone number must be active">
                                        <i className="ki-outline ki-information-5 text-gray-500 fs-6"></i>
                                    </span>
                                </label>


                                <div className="col-lg-8 fv-row">
                                    <input type="tel" name="phone" className="form-control form-control-lg form-control-solid" placeholder="Registration number" value="044 3276 454 935" />
                                </div>

                            </div>

                            <div className="row mb-6">

                                <label className="col-lg-4 col-form-label fw-semibold fs-6">
                                    <span className="required">VAT Number</span>
                                    <span className="ms-1" data-bs-toggle="tooltip" title="Phone number must be active">
                                        <i className="ki-outline ki-information-5 text-gray-500 fs-6"></i>
                                    </span>
                                </label>


                                <div className="col-lg-8 fv-row">
                                    <input type="tel" name="phone" className="form-control form-control-lg form-control-solid" placeholder="VAT number" value="044 3276 454 935" />
                                </div>

                            </div>


                            <div className="row mb-6">

                                <label className="col-lg-4 col-form-label fw-semibold fs-6">Nature of Business</label>


                                <div className="col-lg-8 fv-row">
                                    <input type="text" name="website" className="form-control form-control-lg form-control-solid" placeholder="Nature of Business" value="Inter-state transportation" />
                                </div>

                            </div>


                            <div className="row mb-6">

                                <label className="col-lg-4 col-form-label required fw-semibold fs-6">Contact</label>


                                <div className="col-lg-8 fv-row">

                                    <div className="d-flex align-items-center mt-3">

                                        <label className="form-check form-check-custom form-check-inline form-check-solid me-5">
                                            <input type='email' className="form-control form-control-lg form-control-solid" name="email" placeholder="Email" value="KunmiTransport@gmail.com" />
                                            
                                        </label>


                                        <label className="form-check form-check-custom form-check-inline form-check-solid">
                                            <input type="tel" name="phone" className="form-control form-control-lg form-control-solid" placeholder="Phone number" value="044 3276 454 935" />
                                            
                                        </label>

                                    </div>

                                </div>

                            </div>

                        </div>


                        <div className="card-footer d-flex justify-content-end py-6 px-9">
                            <button type="reset" className="btn discard-btn me-2">Discard</button>
                            <button type="submit" className="btn signin-btn" id="kt_account_profile_details_submit">Save Changes</button>
                        </div>

                    </form>

                </div>

            </div>

        </>
    )
}

export default BusinessProfileUpdate;