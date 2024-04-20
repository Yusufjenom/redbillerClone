import React from 'react';

function AccountLimits() {
    return (
        <>
            <div class="row gx-5 gx-xl-10">
                <div class="col-xl-12 mb-xl-10">

                    <div class="card h-xl-100">

                        <div class="card-header border-0 pt-5">
                            <h3 class="card-title align-items-start flex-column">
                                <span class="card-label fw-bold text-gray-900">ACCOUNT LIMIT</span>
                                <span class="text-muted mt-1 fw-semibold fs-7">Tier 1</span>
                            </h3>

                            <div class="card-toolbar">
                                <a href="#" class="btn btn-sm btn-light">Request Increment</a>
                            </div>

                        </div>

                        <div class="card-body pt-6">

                            {/*  */}

                            <div class="d-flex flex-stack">

                                <div class="symbol symbol-40px me-4">
                                    <div class="symbol-label fs-2 fw-semibold bg-danger text-inverse-danger">D</div>
                                </div>

                                <div class="d-flex align-items-center flex-row-fluid flex-wrap">

                                    <div class="flex-grow-1 me-2">
                                        <a href="pages/user-profile/overview.html" class="text-gray-800 text-hover-primary fs-6 fw-bold">Daily</a>
                                        <span class="text-muted fw-semibold d-block fs-7">10,000</span>
                                    </div>

                                    <a href="#" class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-45px h-45px">
                                        {/* <i class="ki-outline ki-arrow-right fs-2"></i> */}
                                        <span class="text-muted fw-semibold d-block fs-7">0.00%</span>
                                    </a>

                                </div>

                            </div>

                            <div class="separator separator-dashed my-4"></div>

                            {/*  */}

                            <div class="d-flex flex-stack">

                                <div class="symbol symbol-40px me-4">
                                    <div class="symbol-label fs-2 fw-semibold bg-success text-inverse-success">W</div>
                                </div>

                                <div class="d-flex align-items-center flex-row-fluid flex-wrap">

                                    <div class="flex-grow-1 me-2">
                                        <a href="pages/user-profile/overview.html" class="text-gray-800 text-hover-primary fs-6 fw-bold">Weekly</a>
                                        <span class="text-muted fw-semibold d-block fs-7">50,000</span>
                                    </div>

                                    <a href="#" class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-45px h-45px">
                                        {/* <i class="ki-outline ki-arrow-right fs-2"></i> */}
                                        <span class="text-muted fw-semibold d-block fs-7">0.00%</span>
                                    </a>

                                </div>

                            </div>

                            <div class="separator separator-dashed my-4"></div>

                            {/*  */}

                            <div class="d-flex flex-stack">

                                <div class="symbol symbol-40px me-4">
                                    <div class="symbol-label fs-2 fw-semibold bg-info text-inverse-info">M</div>
                                </div>

                                <div class="d-flex align-items-center flex-row-fluid flex-wrap">

                                    <div class="flex-grow-1 me-2">
                                        <a href="pages/user-profile/overview.html" class="text-gray-800 text-hover-primary fs-6 fw-bold">Monthly</a>
                                        <span class="text-muted fw-semibold d-block fs-7">500,000</span>
                                    </div>

                                    <a href="#" class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-45px h-45px">
                                        {/* <i class="ki-outline ki-arrow-right fs-2"></i> */}
                                        <span class="text-muted fw-semibold d-block fs-7">0.00%</span>
                                    </a>

                                </div>

                            </div>

                            <div class="separator separator-dashed my-4"></div>
                            {/*  */}

                            {/* <div class="d-flex flex-stack">

                                <div class="symbol symbol-40px me-4">
                                    <div class="symbol-label fs-2 fw-semibold bg-primary text-inverse-primary">M</div>
                                </div>

                                <div class="d-flex align-items-center flex-row-fluid flex-wrap">

                                    <div class="flex-grow-1 me-2">
                                        <a href="pages/user-profile/overview.html" class="text-gray-800 text-hover-primary fs-6 fw-bold">Marketing</a>
                                        <span class="text-muted fw-semibold d-block fs-7">50+ Courses.</span>
                                    </div>

                                    <a href="#" class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                        <i class="ki-outline ki-arrow-right fs-2"></i>
                                    </a>

                                </div>

                            </div>

                            <div class="separator separator-dashed my-4"></div> */}

                            {/*  */}

                            {/* <div class="d-flex flex-stack">

                                <div class="symbol symbol-40px me-4">
                                    <div class="symbol-label fs-2 fw-semibold bg-warning text-inverse-warning">P</div>
                                </div>

                                <div class="d-flex align-items-center flex-row-fluid flex-wrap">

                                    <div class="flex-grow-1 me-2">
                                        <a href="pages/user-profile/overview.html" class="text-gray-800 text-hover-primary fs-6 fw-bold">Philosophy</a>
                                        <span class="text-muted fw-semibold d-block fs-7">24+ Courses</span>
                                    </div>

                                    <a href="#" class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                        <i class="ki-outline ki-arrow-right fs-2"></i>
                                    </a>

                                </div>

                            </div>

                            <div class="separator separator-dashed my-4"></div> */}

                            {/*  */}

                            {/* <div class="d-flex flex-stack">

                                <div class="symbol symbol-40px me-4">
                                    <div class="symbol-label fs-2 fw-semibold bg-dark text-inverse-dark">M</div>
                                </div>

                                <div class="d-flex align-items-center flex-row-fluid flex-wrap">

                                    <div class="flex-grow-1 me-2">
                                        <a href="pages/user-profile/overview.html" class="text-gray-800 text-hover-primary fs-6 fw-bold">Mathematics</a>
                                        <span class="text-muted fw-semibold d-block fs-7">24+ Courses</span>
                                    </div>

                                    <a href="#" class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                        <i class="ki-outline ki-arrow-right fs-2"></i>
                                    </a>

                                </div>

                            </div> */}
                            {/*  */}

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default AccountLimits