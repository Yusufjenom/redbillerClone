import React from 'react'

function Test2() {
    return (
        <div style={{height:"100vh", width:"100vw", padding:"1rem"}}>



            <div class="card-toolbar">

                <div class="d-flex justify-content-end" data-kt-subscription-table-toolbar="base">

                    <button type="button" class="btn btn-light-primary me-3" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                        <i class="ki-outline ki-filter fs-2"></i>Filter</button>

                    <div class="menu menu-sub menu-sub-dropdown w-300px w-md-325px" data-kt-menu="true">

                        <div class="px-7 py-5">
                            <div class="fs-5 text-gray-900 fw-bold">Filter Options</div>
                        </div>

                        <div class="separator border-gray-200"></div>

                        <div class="px-7 py-5" data-kt-subscription-table-filter="form">

                            <div class="mb-10">
                                <label class="form-label fs-6 fw-semibold">Month:</label>
                                <select class="form-select form-select-solid fw-bold" data-kt-select2="true" data-placeholder="Select option" data-allow-clear="true" data-kt-subscription-table-filter="month" data-hide-search="true">
                                    <option></option>
                                    <option value="jan">January</option>
                                    <option value="feb">February</option>
                                    <option value="mar">March</option>
                                    <option value="apr">April</option>
                                    <option value="may">May</option>
                                    <option value="jun">June</option>
                                    <option value="jul">July</option>
                                    <option value="aug">August</option>
                                    <option value="sep">September</option>
                                    <option value="oct">October</option>
                                    <option value="nov">November</option>
                                    <option value="dec">December</option>
                                </select>
                            </div>

                            <div class="mb-10">
                                <label class="form-label fs-6 fw-semibold">Status:</label>
                                <select class="form-select form-select-solid fw-bold" data-kt-select2="true" data-placeholder="Select option" data-allow-clear="true" data-kt-subscription-table-filter="status" data-hide-search="true">
                                    <option></option>
                                    <option value="Active">Active</option>
                                    <option value="Expiring">Expiring</option>
                                    <option value="Suspended">Suspended</option>
                                </select>
                            </div>

                            <div class="mb-10">
                                <label class="form-label fs-6 fw-semibold">Billing Method:</label>
                                <select class="form-select form-select-solid fw-bold" data-kt-select2="true" data-placeholder="Select option" data-allow-clear="true" data-kt-subscription-table-filter="billing" data-hide-search="true">
                                    <option></option>
                                    <option value="Auto-debit">Auto-debit</option>
                                    <option value="Manual - Credit Card">Manual - Credit Card</option>
                                    <option value="Manual - Cash">Manual - Cash</option>
                                    <option value="Manual - Paypal">Manual - Paypal</option>
                                </select>
                            </div>

                            <div class="mb-10">
                                <label class="form-label fs-6 fw-semibold">Product:</label>
                                <select class="form-select form-select-solid fw-bold" data-kt-select2="true" data-placeholder="Select option" data-allow-clear="true" data-kt-subscription-table-filter="product" data-hide-search="true">
                                    <option></option>
                                    <option value="Basic">Basic</option>
                                    <option value="Basic Bundle">Basic Bundle</option>
                                    <option value="Teams">Teams</option>
                                    <option value="Teams Bundle">Teams Bundle</option>
                                    <option value="Enterprise">Enterprise</option>
                                    <option value=" Enterprise Bundle">Enterprise Bundle</option>
                                </select>
                            </div>

                            <div class="d-flex justify-content-end">
                                <button type="reset" class="btn btn-light btn-active-light-primary fw-semibold me-2 px-6" data-kt-menu-dismiss="true" data-kt-subscription-table-filter="reset">Reset</button>
                                <button type="submit" class="btn btn-primary fw-semibold px-6" data-kt-menu-dismiss="true" data-kt-subscription-table-filter="filter">Apply</button>
                            </div>

                        </div>

                    </div>

                    <button type="button" class="btn btn-light-primary me-3" data-bs-toggle="modal" data-bs-target="#kt_subscriptions_export_modal">
                        <i class="ki-outline ki-exit-up fs-2"></i>Export</button>


                    <a href="apps/subscriptions/add.html" class="btn btn-primary">
                        <i class="ki-outline ki-plus fs-2"></i>Add Subscription</a>

                </div>

                <div class="d-flex justify-content-end align-items-center d-none" data-kt-subscription-table-toolbar="selected">
                    <div class="fw-bold me-5">
                        <span class="me-2" data-kt-subscription-table-select="selected_count"></span>Selected</div>
                    <button type="button" class="btn btn-danger" data-kt-subscription-table-select="delete_selected">Delete Selected</button>
                </div>

            </div>

        


            <div class="card-body pt-0">

                <table class="table align-middle table-row-dashed fs-6 gy-5" id="kt_subscriptions_table">
                    <thead>
                        <tr class="text-start text-muted fw-bold fs-7 text-uppercase gs-0">
                            <th class="w-10px pe-2">
                                <div class="form-check form-check-sm form-check-custom form-check-solid me-3">
                                    <input class="form-check-input" type="checkbox" data-kt-check="true" data-kt-check-target="#kt_subscriptions_table .form-check-input" value="1" />
                                </div>
                            </th>
                            <th class="min-w-125px">Customer</th>
                            <th class="min-w-125px">Status</th>
                            <th class="min-w-125px">Billing</th>
                            <th class="min-w-125px">Product</th>
                            <th class="min-w-125px">Created Date</th>
                            <th class="text-end min-w-70px">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="text-gray-600 fw-semibold">
                        <tr>
                            <td>
                                <div class="form-check form-check-sm form-check-custom form-check-solid">
                                    <input class="form-check-input" type="checkbox" value="1" />
                                </div>
                            </td>
                            <td>
                                <a href="apps/customers/view.html" class="text-gray-800 text-hover-primary mb-1">Emma Smith</a>
                            </td>
                            <td>
                                <div class="badge badge-light-success">Active</div>
                            </td>
                            <td>
                                <div class="badge badge-light">Auto-debit</div>
                            </td>
                            <td>Basic</td>
                            <td>Jun 24, 2024</td>
                            <td class="text-end">
                                <a href="#" class="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                                    <i class="ki-outline ki-down fs-5 m-0"></i></a>

                                <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">

                                    <div class="menu-item px-3">
                                        <a href="apps/subscriptions/add.html" class="menu-link px-3">View</a>
                                    </div>

                                    <div class="menu-item px-3">
                                        <a href="apps/subscriptions/add.html" class="menu-link px-3">Edit</a>
                                    </div>

                                    <div class="menu-item px-3">
                                        <a href="#" data-kt-subscriptions-table-filter="delete_row" class="menu-link px-3">Delete</a>
                                    </div>

                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-check form-check-sm form-check-custom form-check-solid">
                                    <input class="form-check-input" type="checkbox" value="1" />
                                </div>
                            </td>
                            <td>
                                <a href="apps/customers/view.html" class="text-gray-800 text-hover-primary mb-1">Melody Macy</a>
                            </td>
                            <td>
                                <div class="badge badge-light-success">Active</div>
                            </td>
                            <td>
                                <div class="badge badge-light">Manual - Credit Card</div>
                            </td>
                            <td>Basic</td>
                            <td>Oct 25, 2024</td>
                            <td class="text-end">
                                <a href="#" class="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                                    <i class="ki-outline ki-down fs-5 m-0"></i></a>

                                <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">

                                    <div class="menu-item px-3">
                                        <a href="apps/subscriptions/add.html" class="menu-link px-3">View</a>
                                    </div>

                                    <div class="menu-item px-3">
                                        <a href="apps/subscriptions/add.html" class="menu-link px-3">Edit</a>
                                    </div>

                                    <div class="menu-item px-3">
                                        <a href="#" data-kt-subscriptions-table-filter="delete_row" class="menu-link px-3">Delete</a>
                                    </div>

                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-check form-check-sm form-check-custom form-check-solid">
                                    <input class="form-check-input" type="checkbox" value="1" />
                                </div>
                            </td>
                            <td>
                                <a href="apps/customers/view.html" class="text-gray-800 text-hover-primary mb-1">Max Smith</a>
                            </td>
                            <td>
                                <div class="badge badge-light-success">Active</div>
                            </td>
                            <td>
                                <div class="badge badge-light">Manual - Cash</div>
                            </td>
                            <td>Teams Bundle</td>
                            <td>Oct 25, 2024</td>
                            <td class="text-end">
                                <a href="#" class="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                                    <i class="ki-outline ki-down fs-5 m-0"></i></a>

                                <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">

                                    <div class="menu-item px-3">
                                        <a href="apps/subscriptions/add.html" class="menu-link px-3">View</a>
                                    </div>

                                    <div class="menu-item px-3">
                                        <a href="apps/subscriptions/add.html" class="menu-link px-3">Edit</a>
                                    </div>

                                    <div class="menu-item px-3">
                                        <a href="#" data-kt-subscriptions-table-filter="delete_row" class="menu-link px-3">Delete</a>
                                    </div>

                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-check form-check-sm form-check-custom form-check-solid">
                                    <input class="form-check-input" type="checkbox" value="1" />
                                </div>
                            </td>
                            <td>
                                <a href="apps/customers/view.html" class="text-gray-800 text-hover-primary mb-1">Sean Bean</a>
                            </td>
                            <td>
                                <div class="badge badge-light-warning">Expiring</div>
                            </td>
                            <td>
                                <div class="badge badge-light">Manual - Paypal</div>
                            </td>
                            <td>Enterprise</td>
                            <td>Sep 22, 2024</td>
                            <td class="text-end">
                                <a href="#" class="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                                    <i class="ki-outline ki-down fs-5 m-0"></i></a>

                                <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">

                                    <div class="menu-item px-3">
                                        <a href="apps/subscriptions/add.html" class="menu-link px-3">View</a>
                                    </div>

                                    <div class="menu-item px-3">
                                        <a href="apps/subscriptions/add.html" class="menu-link px-3">Edit</a>
                                    </div>

                                    <div class="menu-item px-3">
                                        <a href="#" data-kt-subscriptions-table-filter="delete_row" class="menu-link px-3">Delete</a>
                                    </div>

                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-check form-check-sm form-check-custom form-check-solid">
                                    <input class="form-check-input" type="checkbox" value="1" />
                                </div>
                            </td>
                            <td>
                                <a href="apps/customers/view.html" class="text-gray-800 text-hover-primary mb-1">Brian Cox</a>
                            </td>
                            <td>
                                <div class="badge badge-light-warning">Expiring</div>
                            </td>
                            <td>
                                <div class="badge badge-light">Auto-debit</div>
                            </td>
                            <td>Basic</td>
                            <td>Apr 15, 2024</td>
                            <td class="text-end">
                                <a href="#" class="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                                    <i class="ki-outline ki-down fs-5 m-0"></i></a>

                                <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">

                                    <div class="menu-item px-3">
                                        <a href="apps/subscriptions/add.html" class="menu-link px-3">View</a>
                                    </div>

                                    <div class="menu-item px-3">
                                        <a href="apps/subscriptions/add.html" class="menu-link px-3">Edit</a>
                                    </div>

                                    <div class="menu-item px-3">
                                        <a href="#" data-kt-subscriptions-table-filter="delete_row" class="menu-link px-3">Delete</a>
                                    </div>

                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-check form-check-sm form-check-custom form-check-solid">
                                    <input class="form-check-input" type="checkbox" value="1" />
                                </div>
                            </td>
                            <td>
                                <a href="apps/customers/view.html" class="text-gray-800 text-hover-primary mb-1">Mikaela Collins</a>
                            </td>
                            <td>
                                <div class="badge badge-light-success">Active</div>
                            </td>
                            <td>
                                <div class="badge badge-light">Auto-debit</div>
                            </td>
                            <td>Enterprise Bundle</td>
                            <td>Dec 20, 2024</td>
                            <td class="text-end">
                                <a href="#" class="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                                    <i class="ki-outline ki-down fs-5 m-0"></i></a>

                                <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">

                                    <div class="menu-item px-3">
                                        <a href="apps/subscriptions/add.html" class="menu-link px-3">View</a>
                                    </div>

                                    <div class="menu-item px-3">
                                        <a href="apps/subscriptions/add.html" class="menu-link px-3">Edit</a>
                                    </div>

                                    <div class="menu-item px-3">
                                        <a href="#" data-kt-subscriptions-table-filter="delete_row" class="menu-link px-3">Delete</a>
                                    </div>

                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-check form-check-sm form-check-custom form-check-solid">
                                    <input class="form-check-input" type="checkbox" value="1" />
                                </div>
                            </td>
                            <td>
                                <a href="apps/customers/view.html" class="text-gray-800 text-hover-primary mb-1">Francis Mitcham</a>
                            </td>
                            <td>
                                <div class="badge badge-light-success">Active</div>
                            </td>
                            <td>
                                <div class="badge badge-light">Auto-debit</div>
                            </td>
                            <td>Teams</td>
                            <td>Aug 19, 2024</td>
                            <td class="text-end">
                                <a href="#" class="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                                    <i class="ki-outline ki-down fs-5 m-0"></i></a>

                                <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">

                                    <div class="menu-item px-3">
                                        <a href="apps/subscriptions/add.html" class="menu-link px-3">View</a>
                                    </div>

                                    <div class="menu-item px-3">
                                        <a href="apps/subscriptions/add.html" class="menu-link px-3">Edit</a>
                                    </div>

                                    <div class="menu-item px-3">
                                        <a href="#" data-kt-subscriptions-table-filter="delete_row" class="menu-link px-3">Delete</a>
                                    </div>

                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-check form-check-sm form-check-custom form-check-solid">
                                    <input class="form-check-input" type="checkbox" value="1" />
                                </div>
                            </td>
                            <td>
                                <a href="apps/customers/view.html" class="text-gray-800 text-hover-primary mb-1">Olivia Wild</a>
                            </td>
                            <td>
                                <div class="badge badge-light-danger">Suspended</div>
                            </td>
                            <td>
                                <div class="badge badge-light">--</div>
                            </td>
                            <td>Enterprise</td>
                            <td>Jun 24, 2024</td>
                            <td class="text-end">
                                <a href="#" class="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                                    <i class="ki-outline ki-down fs-5 m-0"></i></a>

                                <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">

                                    <div class="menu-item px-3">
                                        <a href="apps/subscriptions/add.html" class="menu-link px-3">View</a>
                                    </div>

                                    <div class="menu-item px-3">
                                        <a href="apps/subscriptions/add.html" class="menu-link px-3">Edit</a>
                                    </div>

                                    <div class="menu-item px-3">
                                        <a href="#" data-kt-subscriptions-table-filter="delete_row" class="menu-link px-3">Delete</a>
                                    </div>

                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-check form-check-sm form-check-custom form-check-solid">
                                    <input class="form-check-input" type="checkbox" value="1" />
                                </div>
                            </td>
                            <td>
                                <a href="apps/customers/view.html" class="text-gray-800 text-hover-primary mb-1">Neil Owen</a>
                            </td>
                            <td>
                                <div class="badge badge-light-warning">Expiring</div>
                            </td>
                            <td>
                                <div class="badge badge-light">Auto-debit</div>
                            </td>
                            <td>Basic</td>
                            <td>Mar 10, 2024</td>
                            <td class="text-end">
                                <a href="#" class="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                                    <i class="ki-outline ki-down fs-5 m-0"></i></a>

                                <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">

                                    <div class="menu-item px-3">
                                        <a href="apps/subscriptions/add.html" class="menu-link px-3">View</a>
                                    </div>

                                    <div class="menu-item px-3">
                                        <a href="apps/subscriptions/add.html" class="menu-link px-3">Edit</a>
                                    </div>

                                    <div class="menu-item px-3">
                                        <a href="#" data-kt-subscriptions-table-filter="delete_row" class="menu-link px-3">Delete</a>
                                    </div>

                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-check form-check-sm form-check-custom form-check-solid">
                                    <input class="form-check-input" type="checkbox" value="1" />
                                </div>
                            </td>
                            <td>
                                <a href="apps/customers/view.html" class="text-gray-800 text-hover-primary mb-1">Dan Wilson</a>
                            </td>
                            <td>
                                <div class="badge badge-light-success">Active</div>
                            </td>
                            <td>
                                <div class="badge badge-light">Auto-debit</div>
                            </td>
                            <td>Enterprise Bundle</td>
                            <td>Jul 25, 2024</td>
                            <td class="text-end">
                                <a href="#" class="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                                    <i class="ki-outline ki-down fs-5 m-0"></i></a>

                                <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">

                                    <div class="menu-item px-3">
                                        <a href="apps/subscriptions/add.html" class="menu-link px-3">View</a>
                                    </div>

                                    <div class="menu-item px-3">
                                        <a href="apps/subscriptions/add.html" class="menu-link px-3">Edit</a>
                                    </div>

                                    <div class="menu-item px-3">
                                        <a href="#" data-kt-subscriptions-table-filter="delete_row" class="menu-link px-3">Delete</a>
                                    </div>

                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-check form-check-sm form-check-custom form-check-solid">
                                    <input class="form-check-input" type="checkbox" value="1" />
                                </div>
                            </td>
                            <td>
                                <a href="apps/customers/view.html" class="text-gray-800 text-hover-primary mb-1">Emma Bold</a>
                            </td>
                            <td>
                                <div class="badge badge-light-success">Active</div>
                            </td>
                            <td>
                                <div class="badge badge-light">Manual - Credit Card</div>
                            </td>
                            <td>Enterprise</td>
                            <td>Oct 25, 2024</td>
                            <td class="text-end">
                                <a href="#" class="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                                    <i class="ki-outline ki-down fs-5 m-0"></i></a>

                                <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">

                                    <div class="menu-item px-3">
                                        <a href="apps/subscriptions/add.html" class="menu-link px-3">View</a>
                                    </div>

                                    <div class="menu-item px-3">
                                        <a href="apps/subscriptions/add.html" class="menu-link px-3">Edit</a>
                                    </div>

                                    <div class="menu-item px-3">
                                        <a href="#" data-kt-subscriptions-table-filter="delete_row" class="menu-link px-3">Delete</a>
                                    </div>

                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-check form-check-sm form-check-custom form-check-solid">
                                    <input class="form-check-input" type="checkbox" value="1" />
                                </div>
                            </td>
                            <td>
                                <a href="apps/customers/view.html" class="text-gray-800 text-hover-primary mb-1">Ana Crown</a>
                            </td>
                            <td>
                                <div class="badge badge-light-success">Active</div>
                            </td>
                            <td>
                                <div class="badge badge-light">Manual - Credit Card</div>
                            </td>
                            <td>Basic</td>
                            <td>May 05, 2024</td>
                            <td class="text-end">
                                <a href="#" class="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                                    <i class="ki-outline ki-down fs-5 m-0"></i></a>

                                <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">

                                    <div class="menu-item px-3">
                                        <a href="apps/subscriptions/add.html" class="menu-link px-3">View</a>
                                    </div>

                                    <div class="menu-item px-3">
                                        <a href="apps/subscriptions/add.html" class="menu-link px-3">Edit</a>
                                    </div>

                                    <div class="menu-item px-3">
                                        <a href="#" data-kt-subscriptions-table-filter="delete_row" class="menu-link px-3">Delete</a>
                                    </div>

                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-check form-check-sm form-check-custom form-check-solid">
                                    <input class="form-check-input" type="checkbox" value="1" />
                                </div>
                            </td>
                            <td>
                                <a href="apps/customers/view.html" class="text-gray-800 text-hover-primary mb-1">Robert Doe</a>
                            </td>
                            <td>
                                <div class="badge badge-light-danger">Suspended</div>
                            </td>
                            <td>
                                <div class="badge badge-light">--</div>
                            </td>
                            <td>Teams Bundle</td>
                            <td>Jun 20, 2024</td>
                            <td class="text-end">
                                <a href="#" class="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                                    <i class="ki-outline ki-down fs-5 m-0"></i></a>

                                <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">

                                    <div class="menu-item px-3">
                                        <a href="apps/subscriptions/add.html" class="menu-link px-3">View</a>
                                    </div>

                                    <div class="menu-item px-3">
                                        <a href="apps/subscriptions/add.html" class="menu-link px-3">Edit</a>
                                    </div>

                                    <div class="menu-item px-3">
                                        <a href="#" data-kt-subscriptions-table-filter="delete_row" class="menu-link px-3">Delete</a>
                                    </div>

                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-check form-check-sm form-check-custom form-check-solid">
                                    <input class="form-check-input" type="checkbox" value="1" />
                                </div>
                            </td>
                            <td>
                                <a href="apps/customers/view.html" class="text-gray-800 text-hover-primary mb-1">John Miller</a>
                            </td>
                            <td>
                                <div class="badge badge-light-success">Active</div>
                            </td>
                            <td>
                                <div class="badge badge-light">Manual - Paypal</div>
                            </td>
                            <td>Enterprise</td>
                            <td>Feb 21, 2024</td>
                            <td class="text-end">
                                <a href="#" class="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                                    <i class="ki-outline ki-down fs-5 m-0"></i></a>

                                <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">

                                    <div class="menu-item px-3">
                                        <a href="apps/subscriptions/add.html" class="menu-link px-3">View</a>
                                    </div>

                                    <div class="menu-item px-3">
                                        <a href="apps/subscriptions/add.html" class="menu-link px-3">Edit</a>
                                    </div>

                                    <div class="menu-item px-3">
                                        <a href="#" data-kt-subscriptions-table-filter="delete_row" class="menu-link px-3">Delete</a>
                                    </div>

                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-check form-check-sm form-check-custom form-check-solid">
                                    <input class="form-check-input" type="checkbox" value="1" />
                                </div>
                            </td>
                            <td>
                                <a href="apps/customers/view.html" class="text-gray-800 text-hover-primary mb-1">Lucy Kunic</a>
                            </td>
                            <td>
                                <div class="badge badge-light-success">Active</div>
                            </td>
                            <td>
                                <div class="badge badge-light">Manual - Credit Card</div>
                            </td>
                            <td>Basic</td>
                            <td>Nov 10, 2024</td>
                            <td class="text-end">
                                <a href="#" class="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                                    <i class="ki-outline ki-down fs-5 m-0"></i></a>

                                <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">

                                    <div class="menu-item px-3">
                                        <a href="apps/subscriptions/add.html" class="menu-link px-3">View</a>
                                    </div>

                                    <div class="menu-item px-3">
                                        <a href="apps/subscriptions/add.html" class="menu-link px-3">Edit</a>
                                    </div>

                                    <div class="menu-item px-3">
                                        <a href="#" data-kt-subscriptions-table-filter="delete_row" class="menu-link px-3">Delete</a>
                                    </div>

                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-check form-check-sm form-check-custom form-check-solid">
                                    <input class="form-check-input" type="checkbox" value="1" />
                                </div>
                            </td>
                            <td>
                                <a href="apps/customers/view.html" class="text-gray-800 text-hover-primary mb-1">Neil Owen</a>
                            </td>
                            <td>
                                <div class="badge badge-light-danger">Suspended</div>
                            </td>
                            <td>
                                <div class="badge badge-light">--</div>
                            </td>
                            <td>Basic Bundle</td>
                            <td>Oct 25, 2024</td>
                            <td class="text-end">
                                <a href="#" class="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                                    <i class="ki-outline ki-down fs-5 m-0"></i></a>

                                <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">

                                    <div class="menu-item px-3">
                                        <a href="apps/subscriptions/add.html" class="menu-link px-3">View</a>
                                    </div>

                                    <div class="menu-item px-3">
                                        <a href="apps/subscriptions/add.html" class="menu-link px-3">Edit</a>
                                    </div>

                                    <div class="menu-item px-3">
                                        <a href="#" data-kt-subscriptions-table-filter="delete_row" class="menu-link px-3">Delete</a>
                                    </div>

                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-check form-check-sm form-check-custom form-check-solid">
                                    <input class="form-check-input" type="checkbox" value="1" />
                                </div>
                            </td>
                            <td>
                                <a href="apps/customers/view.html" class="text-gray-800 text-hover-primary mb-1">Dan Wilson</a>
                            </td>
                            <td>
                                <div class="badge badge-light-warning">Expiring</div>
                            </td>
                            <td>
                                <div class="badge badge-light">Manual - Paypal</div>
                            </td>
                            <td>Enterprise</td>
                            <td>Mar 10, 2024</td>
                            <td class="text-end">
                                <a href="#" class="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                                    <i class="ki-outline ki-down fs-5 m-0"></i></a>

                                <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">

                                    <div class="menu-item px-3">
                                        <a href="apps/subscriptions/add.html" class="menu-link px-3">View</a>
                                    </div>

                                    <div class="menu-item px-3">
                                        <a href="apps/subscriptions/add.html" class="menu-link px-3">Edit</a>
                                    </div>

                                    <div class="menu-item px-3">
                                        <a href="#" data-kt-subscriptions-table-filter="delete_row" class="menu-link px-3">Delete</a>
                                    </div>

                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-check form-check-sm form-check-custom form-check-solid">
                                    <input class="form-check-input" type="checkbox" value="1" />
                                </div>
                            </td>
                            <td>
                                <a href="apps/customers/view.html" class="text-gray-800 text-hover-primary mb-1">Emma Smith</a>
                            </td>
                            <td>
                                <div class="badge badge-light-success">Active</div>
                            </td>
                            <td>
                                <div class="badge badge-light">Auto-debit</div>
                            </td>
                            <td>Teams</td>
                            <td>Mar 10, 2024</td>
                            <td class="text-end">
                                <a href="#" class="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                                    <i class="ki-outline ki-down fs-5 m-0"></i></a>

                                <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">

                                    <div class="menu-item px-3">
                                        <a href="apps/subscriptions/add.html" class="menu-link px-3">View</a>
                                    </div>

                                    <div class="menu-item px-3">
                                        <a href="apps/subscriptions/add.html" class="menu-link px-3">Edit</a>
                                    </div>

                                    <div class="menu-item px-3">
                                        <a href="#" data-kt-subscriptions-table-filter="delete_row" class="menu-link px-3">Delete</a>
                                    </div>

                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-check form-check-sm form-check-custom form-check-solid">
                                    <input class="form-check-input" type="checkbox" value="1" />
                                </div>
                            </td>
                            <td>
                                <a href="apps/customers/view.html" class="text-gray-800 text-hover-primary mb-1">Melody Macy</a>
                            </td>
                            <td>
                                <div class="badge badge-light-success">Active</div>
                            </td>
                            <td>
                                <div class="badge badge-light">Manual - Credit Card</div>
                            </td>
                            <td>Basic</td>
                            <td>Apr 15, 2024</td>
                            <td class="text-end">
                                <a href="#" class="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                                    <i class="ki-outline ki-down fs-5 m-0"></i></a>

                                <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">

                                    <div class="menu-item px-3">
                                        <a href="apps/subscriptions/add.html" class="menu-link px-3">View</a>
                                    </div>

                                    <div class="menu-item px-3">
                                        <a href="apps/subscriptions/add.html" class="menu-link px-3">Edit</a>
                                    </div>

                                    <div class="menu-item px-3">
                                        <a href="#" data-kt-subscriptions-table-filter="delete_row" class="menu-link px-3">Delete</a>
                                    </div>

                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-check form-check-sm form-check-custom form-check-solid">
                                    <input class="form-check-input" type="checkbox" value="1" />
                                </div>
                            </td>
                            <td>
                                <a href="apps/customers/view.html" class="text-gray-800 text-hover-primary mb-1">Max Smith</a>
                            </td>
                            <td>
                                <div class="badge badge-light-danger">Suspended</div>
                            </td>
                            <td>
                                <div class="badge badge-light">--</div>
                            </td>
                            <td>Basic Bundle</td>
                            <td>Sep 22, 2024</td>
                            <td class="text-end">
                                <a href="#" class="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                                    <i class="ki-outline ki-down fs-5 m-0"></i></a>

                                <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">

                                    <div class="menu-item px-3">
                                        <a href="apps/subscriptions/add.html" class="menu-link px-3">View</a>
                                    </div>

                                    <div class="menu-item px-3">
                                        <a href="apps/subscriptions/add.html" class="menu-link px-3">Edit</a>
                                    </div>

                                    <div class="menu-item px-3">
                                        <a href="#" data-kt-subscriptions-table-filter="delete_row" class="menu-link px-3">Delete</a>
                                    </div>

                                </div>

                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
										
									
        </div>
    )
}

export default Test2