import React from 'react'

export default function Sidebar() {
    return (
        <div style={{position:"sticky"}} id="kt_app_sidebar" className="app-sidebar flex-column flex-shrink-0" data-kt-drawer="true" data-kt-drawer-name="app-sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="auto" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle">
            <div className="hover-scroll-overlay-y me-lg-4 mb-5" data-kt-sticky="true" data-kt-sticky-name="app-sidebar-menu-sticky" data-kt-sticky-offset="{default: false, xl: '400px'}" data-kt-sticky-release="#kt_app_stats" data-kt-sticky-width="auto" data-kt-sticky-left="auto" data-kt-sticky-top="100px" data-kt-sticky-animation="false" data-kt-sticky-zindex="95" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_app_header, #kt_app_footer" data-kt-scroll-wrappers="#kt_app_sidebar_nav" data-kt-scroll-offset="0px">
                <ul className="nav flex-column w-lg-100" id="kt_app_sidebar_nav">
                    <li className="nav-item mb-2">
                        <a className="nav-link btn btn-icon hover-btn btn-color-gray-600" data-bs-toggle="tab" href="#">
                            <i className="ki-outline ki-home-2 fs-2"></i>
                        </a>
                    </li>
                    <li className="nav-item mb-2">

                        <a className="nav-link btn btn-icon hover-btn btn-color-gray-600" data-bs-toggle="tab" href="#">
                            <i className="ki-outline ki-handcart fs-2"></i>
                        </a>

                    </li>


                    <li className="nav-item mb-2">

                        <a className="nav-link btn btn-icon hover-btn btn-color-gray-600" data-bs-toggle="tab" href="#" style={{backgroundColor:"#93120e"}}>
                            <i className="ki-outline ki-paypal fs-2"></i>
                        </a>

                    </li>


                    <li className="nav-item mb-2">

                        <a className="nav-link btn btn-icon hover-btn btn-color-gray-600" data-bs-toggle="tab" href="#">
                            <i className="ki-outline ki-cheque fs-2"></i>
                        </a>

                    </li>


                    <li className="nav-item mb-2">

                        <a className="nav-link btn btn-icon hover-btn btn-color-gray-600" data-bs-toggle="tab" href="#">
                            <i className="ki-outline ki-address-book fs-2"></i>
                        </a>

                    </li>

                   

                </ul>

            </div>

        </div>
    )
}
