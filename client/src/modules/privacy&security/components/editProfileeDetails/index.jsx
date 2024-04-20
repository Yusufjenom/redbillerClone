import React from 'react'

function EditProfileDetails() {
    return (
        <>
            <div className="card mb-5 mb-xl-10">

                <div className="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_profile_details" aria-expanded="true" aria-controls="kt_account_profile_details">

                    <div className="card-title m-0">
                        <h3 className="fw-bold m-0">Profile Details</h3>
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

                                <label className="col-lg-4 col-form-label required fw-semibold fs-6">Full Name</label>


                                <div className="col-lg-8">

                                    <div className="row">

                                        <div className="col-lg-6 fv-row">
                                            <input type="text" name="fname" className="form-control form-control-lg form-control-solid mb-3 mb-lg-0" placeholder="First name" value="Akinkunmi" />
                                        </div>


                                        <div className="col-lg-6 fv-row">
                                            <input type="text" name="lname" className="form-control form-control-lg form-control-solid" placeholder="Last name" value="Tokede" />
                                        </div>

                                    </div>

                                </div>

                            </div>


                            <div className="row mb-6">

                                <label className="col-lg-4 col-form-label required fw-semibold fs-6">Company</label>


                                <div className="col-lg-8 fv-row">
                                    <input type="text" name="company" className="form-control form-control-lg form-control-solid" placeholder="Company name" value="Kumi Worldwide" />
                                </div>

                            </div>


                            <div className="row mb-6">

                                <label className="col-lg-4 col-form-label fw-semibold fs-6">
                                    <span className="required">Contact Phone</span>
                                    <span className="ms-1" data-bs-toggle="tooltip" title="Phone number must be active">
                                        <i className="ki-outline ki-information-5 text-gray-500 fs-6"></i>
                                    </span>
                                </label>


                                <div className="col-lg-8 fv-row">
                                    <input type="tel" name="phone" className="form-control form-control-lg form-control-solid" placeholder="Phone number" value="044 3276 454 935" />
                                </div>

                            </div>


                            <div className="row mb-6">

                                <label className="col-lg-4 col-form-label fw-semibold fs-6">Company Site</label>


                                <div className="col-lg-8 fv-row">
                                    <input type="text" name="website" className="form-control form-control-lg form-control-solid" placeholder="Company website" value="akinkunmi@redbiller.com" />
                                </div>

                            </div>


                            <div className="row mb-6">

                                <label className="col-lg-4 col-form-label required fw-semibold fs-6">Communication</label>


                                <div className="col-lg-8 fv-row">

                                    <div className="d-flex align-items-center mt-3">

                                        <label className="form-check form-check-custom form-check-inline form-check-solid me-5">
                                            <input className="form-check-input" name="communication[]" type="checkbox" value="1" />
                                            <span className="fw-semibold ps-2 fs-6">Email</span>
                                        </label>


                                        <label className="form-check form-check-custom form-check-inline form-check-solid">
                                            <input className="form-check-input" name="communication[]" type="checkbox" value="2" />
                                            <span className="fw-semibold ps-2 fs-6">Phone</span>
                                        </label>

                                    </div>

                                </div>

                            </div>


                            <div className="row mb-0">

                                <label className="col-lg-4 col-form-label fw-semibold fs-6">Allow Marketing</label>


                                <div className="col-lg-8 d-flex align-items-center">
                                    <div className="form-check form-check-solid form-switch form-check-custom fv-row">
                                        <input className="form-check-input w-45px h-30px" type="checkbox" id="allowmarketing" />
                                        {/* checked="checked" */}
                                        <label className="form-check-label" for="allowmarketing"></label>
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

export default EditProfileDetails