import React from 'react'
import slack from '../../../../assets/media/svg/brand-logos/slack-icon.svg'
import youtube from '../../../../assets/media/svg/brand-logos/youtube-3.svg';
import dribble from "../../../../assets/media/svg/brand-logos/dribbble-icon-1.svg";
import linkedin from "../../../../assets/media/svg/brand-logos/linkedin-1.svg";

const Others = () => {
    return (
        <>
            <div className="row gx-5 gx-xl-10">

                <div className="col-xl-4 mb-5 mb-xl-10">

                    <div className="card card-flush h-xl-100">

                        <div className="card-header pt-7">

                            <h3 className="card-title align-items-start flex-column">
                                <span className="card-label fw-bold text-gray-800">Visits by Source</span>
                                <span className="text-gray-500 mt-1 fw-semibold fs-6">29.4k visitors</span>
                            </h3>


                            <div className="card-toolbar">

                                <button className="btn btn-icon btn-color-gray-500 btn-active-color-primary justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">
                                    <i className="ki-outline ki-dots-square fs-1 text-gray-500 me-n1"></i>
                                </button>

                                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">

                                    <div className="menu-item px-3">
                                        <div className="menu-content fs-6 text-gray-900 fw-bold px-3 py-4">Quick Actions</div>
                                    </div>


                                    <div className="separator mb-3 opacity-75"></div>


                                    <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">New Ticket</a>
                                    </div>


                                    <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">New Customer</a>
                                    </div>


                                    <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">

                                        <a href="#" className="menu-link px-3">
                                            <span className="menu-title">New Group</span>
                                            <span className="menu-arrow"></span>
                                        </a>


                                        <div className="menu-sub menu-sub-dropdown w-175px py-4">

                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">Admin Group</a>
                                            </div>


                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">Staff Group</a>
                                            </div>


                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">Member Group</a>
                                            </div>

                                        </div>

                                    </div>


                                    <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">New Contact</a>
                                    </div>


                                    <div className="separator mt-3 opacity-75"></div>


                                    <div className="menu-item px-3">
                                        <div className="menu-content px-3 py-3">
                                            <a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
                                        </div>
                                    </div>

                                </div>


                            </div>

                        </div>


                        <div className="card-body d-flex align-items-end">

                            <div className="w-100">

                                <div className="d-flex align-items-center">

                                    <div className="symbol symbol-30px me-5">
                                        <span className="symbol-label">
                                            <i className="ki-outline ki-rocket fs-3 text-gray-600"></i>
                                        </span>
                                    </div>


                                    <div className="d-flex align-items-center flex-stack flex-wrap d-grid gap-1 flex-row-fluid">

                                        <div className="me-5">

                                            <a href="#" className="text-gray-800 fw-bold text-hover-primary fs-6">Direct Source</a>


                                            <span className="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">Direct link clicks</span>

                                        </div>


                                        <div className="d-flex align-items-center">

                                            <span className="text-gray-800 fw-bold fs-4 me-3">1,067</span>



                                            <span className="badge badge-light-success fs-base">
                                                <i className="ki-outline ki-arrow-up fs-5 text-success ms-n1"></i>2.6%</span>


                                        </div>

                                    </div>

                                </div>


                                <div className="separator separator-dashed my-3"></div>


                                <div className="d-flex align-items-center">

                                    <div className="symbol symbol-30px me-5">
                                        <span className="symbol-label">
                                            <i className="ki-outline ki-tiktok fs-3 text-gray-600"></i>
                                        </span>
                                    </div>


                                    <div className="d-flex align-items-center flex-stack flex-wrap d-grid gap-1 flex-row-fluid">

                                        <div className="me-5">

                                            <a href="#" className="text-gray-800 fw-bold text-hover-primary fs-6">Social Networks</a>


                                            <span className="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">All Social Channels</span>

                                        </div>


                                        <div className="d-flex align-items-center">

                                            <span className="text-gray-800 fw-bold fs-4 me-3">24,588</span>



                                            <span className="badge badge-light-success fs-base">
                                                <i className="ki-outline ki-arrow-up fs-5 text-success ms-n1"></i>4.1%</span>


                                        </div>

                                    </div>

                                </div>


                                <div className="separator separator-dashed my-3"></div>


                                <div className="d-flex align-items-center">

                                    <div className="symbol symbol-30px me-5">
                                        <span className="symbol-label">
                                            <i className="ki-outline ki-sms fs-3 text-gray-600"></i>
                                        </span>
                                    </div>


                                    <div className="d-flex align-items-center flex-stack flex-wrap d-grid gap-1 flex-row-fluid">

                                        <div className="me-5">

                                            <a href="#" className="text-gray-800 fw-bold text-hover-primary fs-6">Email Newsletter</a>


                                            <span className="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">Mailchimp Campaigns</span>

                                        </div>


                                        <div className="d-flex align-items-center">

                                            <span className="text-gray-800 fw-bold fs-4 me-3">794</span>



                                            <span className="badge badge-light-success fs-base">
                                                <i className="ki-outline ki-arrow-up fs-5 text-success ms-n1"></i>0.2%</span>


                                        </div>

                                    </div>

                                </div>


                                <div className="separator separator-dashed my-3"></div>


                                <div className="d-flex align-items-center">

                                    <div className="symbol symbol-30px me-5">
                                        <span className="symbol-label">
                                            <i className="ki-outline ki-icon fs-3 text-gray-600"></i>
                                        </span>
                                    </div>


                                    <div className="d-flex align-items-center flex-stack flex-wrap d-grid gap-1 flex-row-fluid">

                                        <div className="me-5">

                                            <a href="#" className="text-gray-800 fw-bold text-hover-primary fs-6">Referrals</a>


                                            <span className="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">Impact Radius visits</span>

                                        </div>


                                        <div className="d-flex align-items-center">

                                            <span className="text-gray-800 fw-bold fs-4 me-3">6,578</span>



                                            <span className="badge badge-light-danger fs-base">
                                                <i className="ki-outline ki-arrow-down fs-5 text-danger ms-n1"></i>0.4%</span>


                                        </div>

                                    </div>

                                </div>


                                <div className="separator separator-dashed my-3"></div>


                                <div className="d-flex align-items-center">

                                    <div className="symbol symbol-30px me-5">
                                        <span className="symbol-label">
                                            <i className="ki-outline ki-abstract-25 fs-3 text-gray-600"></i>
                                        </span>
                                    </div>


                                    <div className="d-flex align-items-center flex-stack flex-wrap d-grid gap-1 flex-row-fluid">

                                        <div className="me-5">

                                            <a href="#" className="text-gray-800 fw-bold text-hover-primary fs-6">Other</a>


                                            <span className="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">Many Sources</span>

                                        </div>


                                        <div className="d-flex align-items-center">

                                            <span className="text-gray-800 fw-bold fs-4 me-3">79,458</span>



                                            <span className="badge badge-light-success fs-base">
                                                <i className="ki-outline ki-arrow-up fs-5 text-success ms-n1"></i>8.3%</span>


                                        </div>

                                    </div>

                                </div>


                                <div className="separator separator-dashed my-3"></div>


                                <div className="d-flex align-items-center">

                                    <div className="symbol symbol-30px me-5">
                                        <span className="symbol-label">
                                            <i className="ki-outline ki-abstract-39 fs-3 text-gray-600"></i>
                                        </span>
                                    </div>


                                    <div className="d-flex align-items-center flex-stack flex-wrap d-grid gap-1 flex-row-fluid">

                                        <div className="me-5">

                                            <a href="#" className="text-gray-800 fw-bold text-hover-primary fs-6">Rising Networks</a>


                                            <span className="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">Social Network</span>

                                        </div>


                                        <div className="d-flex align-items-center">

                                            <span className="text-gray-800 fw-bold fs-4 me-3">18,047</span>



                                            <span className="badge badge-light-success fs-base">
                                                <i className="ki-outline ki-arrow-up fs-5 text-success ms-n1"></i>1.9%</span>


                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                <div className="col-xl-4 mb-5 mb-xl-10">

                    <div className="card card-flush h-xl-100">

                        <div className="card-header pt-7 mb-7">

                            <h3 className="card-title align-items-start flex-column">
                                <span className="card-label fw-bold text-gray-800">Warephase stats</span>
                                <span className="text-gray-500 mt-1 fw-semibold fs-6">8k social visitors</span>
                            </h3>


                            <div className="card-toolbar">
                                <a href="apps/ecommerce/catalog/add-product.html" className="btn btn-sm btn-light">PDF Report</a>
                            </div>

                        </div>


                        <div className="card-body d-flex align-items-end pt-0">

                            <div id="kt_charts_widget_31_chart" className="w-100 h-300px"></div>

                        </div>

                    </div>

                </div>


                <div className="col-xl-4 mb-5 mb-xl-10">

                    <div className="card card-flush h-xl-100">

                        <div className="card-header pt-7 mb-7">

                            <h3 className="card-title align-items-start flex-column">
                                <span className="card-label fw-bold text-gray-800">Stats by Department</span>
                                <span className="text-gray-500 mt-1 fw-semibold fs-6">8k social visitors</span>
                            </h3>


                            <div className="card-toolbar">
                                <a href="apps/ecommerce/catalog/add-product.html" className="btn btn-sm btn-light">PDF Report</a>
                            </div>

                        </div>


                        <div className="card-body d-flex justify-content-between flex-column">

                            <div className="d-flex flex-wrap d-grid gap-5 mb-10">

                                <div className="border-end-dashed border-end border-gray-300 pe-xxl-7 me-xxl-5">

                                    <div className="d-flex mb-2">
                                        <span className="fs-4 fw-semibold text-gray-500 me-1">$</span>
                                        <span className="fs-2hx fw-bold text-gray-800 me-2 lh-1 ls-n2">8,035</span>
                                    </div>


                                    <span className="fs-6 fw-semibold text-gray-500">Actual for April</span>

                                </div>


                                <div className="m-0">

                                    <div className="d-flex align-items-center mb-2">

                                        <span className="fs-4 fw-semibold text-gray-500 align-self-start me-1">$</span>


                                        <span className="fs-2hx fw-bold text-gray-800 me-2 lh-1 ls-n2">4,684</span>


                                        <span className="badge badge-light-success fs-base">
                                            <i className="ki-outline ki-arrow-up fs-5 text-success ms-n1"></i>4.5%</span>

                                    </div>


                                    <span className="fs-6 fw-semibold text-gray-500">GAP</span>

                                </div>

                            </div>


                            <div id="kt_charts_widget_30_chart" className="w-100 h-200px"></div>

                        </div>

                    </div>

                </div>

            </div>


            <div className="row gx-5 gx-xl-10">

                <div className="col-xxl-4 mb-5 mb-xl-10">

                    <div className="card card-flush h-xl-100">

                        <div className="card-header py-7">

                            <div className="m-0">

                                <div className="d-flex align-items-center mb-2">

                                    <span className="fs-2hx fw-bold text-gray-800 me-2 lh-1 ls-n2">35,568</span>


                                    <span className="badge badge-light-danger fs-base">
                                        <i className="ki-outline ki-arrow-up fs-5 text-danger ms-n1"></i>8.02%</span>

                                </div>


                                <span className="fs-6 fw-semibold text-gray-500">Organic Sessions</span>

                            </div>


                            <div className="card-toolbar">

                                <button className="btn btn-icon btn-color-gray-500 btn-active-color-primary justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">
                                    <i className="ki-outline ki-dots-square fs-1 text-gray-500 me-n1"></i>
                                </button>

                                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">

                                    <div className="menu-item px-3">
                                        <div className="menu-content fs-6 text-gray-900 fw-bold px-3 py-4">Quick Actions</div>
                                    </div>


                                    <div className="separator mb-3 opacity-75"></div>


                                    <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">New Ticket</a>
                                    </div>


                                    <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">New Customer</a>
                                    </div>


                                    <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">

                                        <a href="#" className="menu-link px-3">
                                            <span className="menu-title">New Group</span>
                                            <span className="menu-arrow"></span>
                                        </a>


                                        <div className="menu-sub menu-sub-dropdown w-175px py-4">

                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">Admin Group</a>
                                            </div>


                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">Staff Group</a>
                                            </div>


                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">Member Group</a>
                                            </div>

                                        </div>

                                    </div>


                                    <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">New Contact</a>
                                    </div>


                                    <div className="separator mt-3 opacity-75"></div>


                                    <div className="menu-item px-3">
                                        <div className="menu-content px-3 py-3">
                                            <a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
                                        </div>
                                    </div>

                                </div>


                            </div>

                        </div>


                        <div className="card-body pt-0 pb-1">
                            <div id="kt_charts_widget_27" className="min-h-auto"></div>
                        </div>

                    </div>

                </div>


                <div className="col-xxl-4 mb-5 mb-xl-10">

                    <div className="card card-flush h-xl-100">

                        <div className="card-header py-7">

                            <div className="m-0">

                                <div className="d-flex align-items-center mb-2">

                                    <span className="fs-2hx fw-bold text-gray-800 me-2 lh-1 ls-n2">2,579</span>


                                    <span className="badge badge-light-success fs-base">
                                        <i className="ki-outline ki-arrow-up fs-5 text-success ms-n1"></i>2.2%</span>

                                </div>


                                <span className="fs-6 fw-semibold text-gray-500">Domain External Links</span>

                            </div>


                            <div className="card-toolbar">

                                <button className="btn btn-icon btn-color-gray-500 btn-active-color-primary justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">
                                    <i className="ki-outline ki-dots-square fs-1 text-gray-500 me-n1"></i>
                                </button>

                                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">

                                    <div className="menu-item px-3">
                                        <div className="menu-content fs-6 text-gray-900 fw-bold px-3 py-4">Quick Actions</div>
                                    </div>


                                    <div className="separator mb-3 opacity-75"></div>


                                    <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">New Ticket</a>
                                    </div>


                                    <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">New Customer</a>
                                    </div>


                                    <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">

                                        <a href="#" className="menu-link px-3">
                                            <span className="menu-title">New Group</span>
                                            <span className="menu-arrow"></span>
                                        </a>


                                        <div className="menu-sub menu-sub-dropdown w-175px py-4">

                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">Admin Group</a>
                                            </div>


                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">Staff Group</a>
                                            </div>


                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">Member Group</a>
                                            </div>

                                        </div>

                                    </div>


                                    <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">New Contact</a>
                                    </div>


                                    <div className="separator mt-3 opacity-75"></div>


                                    <div className="menu-item px-3">
                                        <div className="menu-content px-3 py-3">
                                            <a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
                                        </div>
                                    </div>

                                </div>


                            </div>

                        </div>


                        <div className="card-body d-flex align-items-end ps-4 pe-0 pb-4">

                            <div id="kt_charts_widget_28" className="h-300px w-100 min-h-auto"></div>

                        </div>

                    </div>

                </div>


                <div className="col-xxl-4 mb-5 mb-xl-10">

                    <div className="card card-flush h-xl-100">

                        <div className="card-header py-7">

                            <div className="m-0">

                                <div className="d-flex align-items-center mb-2">

                                    <span className="fs-2hx fw-bold text-gray-800 me-2 lh-1 ls-n2">5,037</span>


                                    <span className="badge badge-light-success fs-base">
                                        <i className="ki-outline ki-arrow-up fs-5 text-success ms-n1"></i>2.2%</span>

                                </div>


                                <span className="fs-6 fw-semibold text-gray-500">Visits by Social Networks</span>

                            </div>


                            <div className="card-toolbar">

                                <button className="btn btn-icon btn-color-gray-500 btn-active-color-primary justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">
                                    <i className="ki-outline ki-dots-square fs-1 text-gray-500 me-n1"></i>
                                </button>

                                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">

                                    <div className="menu-item px-3">
                                        <div className="menu-content fs-6 text-gray-900 fw-bold px-3 py-4">Quick Actions</div>
                                    </div>


                                    <div className="separator mb-3 opacity-75"></div>


                                    <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">New Ticket</a>
                                    </div>


                                    <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">New Customer</a>
                                    </div>


                                    <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">

                                        <a href="#" className="menu-link px-3">
                                            <span className="menu-title">New Group</span>
                                            <span className="menu-arrow"></span>
                                        </a>


                                        <div className="menu-sub menu-sub-dropdown w-175px py-4">

                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">Admin Group</a>
                                            </div>


                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">Staff Group</a>
                                            </div>


                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">Member Group</a>
                                            </div>

                                        </div>

                                    </div>


                                    <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">New Contact</a>
                                    </div>


                                    <div className="separator mt-3 opacity-75"></div>


                                    <div className="menu-item px-3">
                                        <div className="menu-content px-3 py-3">
                                            <a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
                                        </div>
                                    </div>

                                </div>


                            </div>

                        </div>


                        <div className="card-body card-body d-flex justify-content-between flex-column pt-3">

                            <div className="d-flex flex-stack">

                                <img src={dribble} className="me-4 w-30px" style={{ borderRadius: 4 }} alt="" />


                                <div className="d-flex align-items-center flex-stack flex-wrap flex-row-fluid d-grid gap-2">

                                    <div className="me-5">

                                        <a href="#" className="text-gray-800 fw-bold text-hover-primary fs-6">Dribbble</a>


                                        <span className="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">Community</span>

                                    </div>


                                    <div className="d-flex align-items-center">

                                        <span className="text-gray-800 fw-bold fs-4 me-3">579</span>


                                        <div className="m-0">

                                            <span className="badge badge-light-success fs-base">
                                                <i className="ki-outline ki-arrow-up fs-5 text-success ms-n1"></i>2.6%</span>

                                        </div>

                                    </div>

                                </div>

                            </div>


                            <div className="separator separator-dashed my-3"></div>


                            <div className="d-flex flex-stack">

                                <img src={linkedin} className="me-4 w-30px" style={{ borderRadius: 4 }} alt="" />


                                <div className="d-flex align-items-center flex-stack flex-wrap flex-row-fluid d-grid gap-2">

                                    <div className="me-5">

                                        <a href="#" className="text-gray-800 fw-bold text-hover-primary fs-6">Linked In</a>


                                        <span className="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">Social Media</span>

                                    </div>


                                    <div className="d-flex align-items-center">

                                        <span className="text-gray-800 fw-bold fs-4 me-3">1,088</span>


                                        <div className="m-0">

                                            <span className="badge badge-light-danger fs-base">
                                                <i className="ki-outline ki-arrow-down fs-5 text-danger ms-n1"></i>0.4%</span>

                                        </div>

                                    </div>

                                </div>

                            </div>


                            <div className="separator separator-dashed my-3"></div>


                            <div className="d-flex flex-stack">

                                <img src={slack} className="me-4 w-30px" style={{ borderRadius: 4 }} alt="" />


                                <div className="d-flex align-items-center flex-stack flex-wrap flex-row-fluid d-grid gap-2">

                                    <div className="me-5">

                                        <a href="#" className="text-gray-800 fw-bold text-hover-primary fs-6">Slack</a>


                                        <span className="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">Messanger</span>

                                    </div>


                                    <div className="d-flex align-items-center">

                                        <span className="text-gray-800 fw-bold fs-4 me-3">794</span>


                                        <div className="m-0">

                                            <span className="badge badge-light-success fs-base">
                                                <i className="ki-outline ki-arrow-up fs-5 text-success ms-n1"></i>0.2%</span>

                                        </div>

                                    </div>

                                </div>

                            </div>


                            <div className="separator separator-dashed my-3"></div>


                            <div className="d-flex flex-stack">

                                <img src={youtube} className="me-4 w-30px" style={{ borderRadius: 4 }} alt="" />


                                <div className="d-flex align-items-center flex-stack flex-wrap flex-row-fluid d-grid gap-2">

                                    <div className="me-5">

                                        <a href="#" className="text-gray-800 fw-bold text-hover-primary fs-6">YouTube</a>


                                        <span className="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">Video Channel</span>

                                    </div>


                                    <div className="d-flex align-items-center">

                                        <span className="text-gray-800 fw-bold fs-4 me-3">978</span>


                                        <div className="m-0">

                                            <span className="badge badge-light-success fs-base">
                                                <i className="ki-outline ki-arrow-up fs-5 text-success ms-n1"></i>4.1%</span>

                                        </div>

                                    </div>

                                </div>

                            </div>


                            <div className="separator separator-dashed my-3"></div>


                            <div className="d-flex flex-stack">

                                <img src="../../assets/media/svg/brand-logos/instagram-2-1.svg" className="me-4 w-30px" style={{ borderRadius: 4 }} alt="" />


                                <div className="d-flex align-items-center flex-stack flex-wrap flex-row-fluid d-grid gap-2">

                                    <div className="me-5">

                                        <a href="#" className="text-gray-800 fw-bold text-hover-primary fs-6">Instagram</a>


                                        <span className="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">Social Network</span>

                                    </div>


                                    <div className="d-flex align-items-center">

                                        <span className="text-gray-800 fw-bold fs-4 me-3">1,458</span>


                                        <div className="m-0">

                                            <span className="badge badge-light-success fs-base">
                                                <i className="ki-outline ki-arrow-up fs-5 text-success ms-n1"></i>8.3%</span>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </div>


            <div className="row g-5 g-xl-10">

                <div className="col-xxl-6">

                    <div className="row g-5 g-xl-10">

                        <div className="col-md-6 col-xl-6 mb-5 mb-xl-10">
                            <div className="card overflow-hidden h-md-50 mb-5 mb-xl-10">
                                <div className="card-body d-flex justify-content-between flex-column px-0 pb-0">

                                    <div className="mb-4 px-9">

                                        <div className="d-flex align-items-center mb-2">

                                            <span className="fs-4 fw-semibold text-gray-500 align-self-start me-1&gt;">$</span>


                                            <span className="fs-2hx fw-bold text-gray-800 me-2 lh-1">69,700</span>


                                            <span className="badge badge-light-success fs-base">
                                                <i className="ki-outline ki-arrow-up fs-5 text-success ms-n1"></i>2.2%</span>

                                        </div>


                                        <span className="fs-6 fw-semibold text-gray-500">Total Online Sales</span>

                                    </div>


                                    <div id="kt_card_widget_8_chart" className="min-h-auto" style={{ height: 125 }}></div>

                                </div>

                            </div>


                            <div className="card card-flush h-md-50 mb-xl-10">

                                <div className="card-header pt-5">

                                    <div className="card-title d-flex flex-column">

                                        <div className="d-flex align-items-center">

                                            <span className="fs-2hx fw-bold text-gray-900 me-2 lh-1 ls-n2">1,836</span>


                                            <span className="badge badge-light-danger fs-base">
                                                <i className="ki-outline ki-arrow-down fs-5 text-danger ms-n1"></i>2.2%</span>

                                        </div>


                                        <span className="text-gray-500 pt-1 fw-semibold fs-6">Total Sales</span>

                                    </div>

                                </div>


                                <div className="card-body d-flex align-items-end pt-0">

                                    <div className="d-flex align-items-center flex-column mt-3 w-100">
                                        <div className="d-flex justify-content-between w-100 mt-auto mb-2">
                                            <span className="fw-bolder fs-6 text-gray-900">1,048 to Goal</span>
                                            <span className="fw-bold fs-6 text-gray-500">62%</span>
                                        </div>
                                        <div className="h-8px mx-3 w-100 bg-light-success rounded">
                                            <div className="bg-success rounded h-8px" role="progressbar" style={{ width: '62%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>


                        <div className="col-md-6 col-xl-6 mb-5 mb-xl-10">

                            <div className="card overflow-hidden h-md-50 mb-5 mb-xl-10">

                                <div className="card-body d-flex justify-content-between flex-column px-0 pb-0">

                                    <div className="mb-4 px-9">

                                        <div className="d-flex align-items-center mb-2">

                                            <span className="fs-2hx fw-bold text-gray-800 me-2 lh-1">29,420</span>


                                            <span className="badge badge-light-success fs-base">
                                                <i className="ki-outline ki-arrow-up fs-5 text-success ms-n1"></i>2.6%</span>

                                        </div>


                                        <span className="fs-6 fw-semibold text-gray-500">Total Online Visitors</span>

                                    </div>


                                    <div id="kt_card_widget_9_chart" className="min-h-auto" style={{ height: 125 }}></div>

                                </div>

                            </div>

                            <div className="card card-flush h-md-50 mb-xl-10">

                                <div className="card-header pt-5">

                                    <div className="card-title d-flex flex-column">

                                        <span className="fs-2hx fw-bold text-gray-900 me-2 lh-1 ls-n2">6.3k</span>


                                        <span className="text-gray-500 pt-1 fw-semibold fs-6">Total New Customers</span>

                                    </div>

                                </div>


                                <div className="card-body d-flex flex-column justify-content-end pe-0">

                                    <span className="fs-6 fw-bolder text-gray-800 d-block mb-2">Today’s Heroes</span>


                                    <div className="symbol-group symbol-hover flex-nowrap">
                                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Alan Warden">
                                            <span className="symbol-label bg-warning text-inverse-warning fw-bold">A</span>
                                        </div>
                                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Michael Eberon">
                                            <img alt="Pic" src="../../assets/media/avatars/300-11.jpg" />
                                        </div>
                                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Susan Redwood">
                                            <span className="symbol-label bg-primary text-inverse-primary fw-bold">S</span>
                                        </div>
                                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Melody Macy">
                                            <img alt="Pic" src="../../assets/media/avatars/300-2.jpg" />
                                        </div>
                                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Perry Matthew">
                                            <span className="symbol-label bg-danger text-inverse-danger fw-bold">P</span>
                                        </div>
                                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Barry Walter">
                                            <img alt="Pic" src="../../assets/media/avatars/300-12.jpg" />
                                        </div>
                                        <a href="#" className="symbol symbol-35px symbol-circle" data-bs-toggle="modal" data-bs-target="#kt_modal_view_users">
                                            <span className="symbol-label bg-light text-gray-400 fs-8 fw-bold">+42</span>
                                        </a>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                <div className="col-xxl-6">

                    <div className="card card-flush h-md-100">

                        <div className="card-header pt-7">

                            <h3 className="card-title align-items-start flex-column">
                                <span className="card-label fw-bold text-gray-900">World Sales</span>
                                <span className="text-gray-500 pt-2 fw-semibold fs-6">Top Selling Countries</span>
                            </h3>


                            <div className="card-toolbar">

                                <button className="btn btn-icon btn-color-gray-500 btn-active-color-primary justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">
                                    <i className="ki-outline ki-dots-square fs-1 text-gray-500 me-n1"></i>
                                </button>
                                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3" data-kt-menu="true">

                                    <div className="menu-item px-3">
                                        <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Payments</div>
                                    </div>


                                    <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">Create Invoice</a>
                                    </div>


                                    <div className="menu-item px-3">
                                        <a href="#" className="menu-link flex-stack px-3">Create Payment
                                            <span className="ms-2" data-bs-toggle="tooltip" title="Specify a target name for future usage and reference">
                                                <i className="ki-outline ki-information fs-6"></i>
                                            </span></a>
                                    </div>


                                    <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">Generate Bill</a>
                                    </div>


                                    <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
                                        <a href="#" className="menu-link px-3">
                                            <span className="menu-title">Subscription</span>
                                            <span className="menu-arrow"></span>
                                        </a>

                                        <div className="menu-sub menu-sub-dropdown w-175px py-4">

                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">Plans</a>
                                            </div>


                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">Billing</a>
                                            </div>


                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">Statements</a>
                                            </div>


                                            <div className="separator my-2"></div>


                                            <div className="menu-item px-3">
                                                <div className="menu-content px-3">

                                                    <label className="form-check form-switch form-check-custom form-check-solid">

                                                        <input className="form-check-input w-30px h-20px" type="checkbox" value="1" defaultChecked name="notifications" />
                                                        <span className="form-check-label text-muted fs-6">Recuring</span>
                                                    </label>
                                                </div>
                                            </div>

                                        </div>

                                    </div>


                                    <div className="menu-item px-3 my-1">
                                        <a href="#" className="menu-link px-3">Settings</a>
                                    </div>

                                </div>
                            </div>

                        </div>


                        <div className="card-body d-flex flex-center">

                            <div id="kt_maps_widget_1_map" className="w-100 h-350px"></div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Others