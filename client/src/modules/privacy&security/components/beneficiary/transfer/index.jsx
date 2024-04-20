import React, { useState } from 'react'

function TransferBeneficiary() {
    const [comps] = useState([
        {
            icon: <i class="fa fa-user fs-3 text-gray-600" aria-hidden="true"></i>,
            name: "Akosa Somtochukwu",
            bank: "Zenith Bank"
        },
        {
            icon: <i class="fa fa-user fs-3 text-gray-600" aria-hidden="true"></i>,
            name: "Yashim Nick",
            bank: "Providus Bank"
        },
        {
            icon: <i class="fa fa-user fs-3 text-gray-600" aria-hidden="true"></i>,
            name: "Gbokoyi Funmi",
            bank: "Access Bank"
        },
        {
            icon: <i class="fa fa-user fs-3 text-gray-600" aria-hidden="true"></i>,
            name: "Ewepeju Oreoluwa",
            bank: "GT Bank"
        },
        {
            icon: <i class="fa fa-user fs-3 text-gray-600" aria-hidden="true"></i>,
            name: "Pashe Samuel",
            bank: "First Bank"
        },
        {
            icon: <i class="fa fa-user fs-3 text-gray-600" aria-hidden="true"></i>,
            name: "Prosper Mike",
            bank: "Ecobank"
        },
    ]);


    return (
        <div>
            <div class="card-body d-flex align-items-end">
                <div class="w-100">
                    {comps.map(comp => (
                        <div key={comp.name}>
                            <div class="d-flex align-items-center">

                                <div class="symbol symbol-30px me-5">
                                    <span class="symbol-label">
                                        {comp.icon}
                                    </span>
                                </div>

                                <div class="d-flex align-items-center flex-stack flex-wrap d-grid gap-1 flex-row-fluid">

                                    <div class="me-5">

                                        <a href="#" class="text-gray-800 fw-bold text-hover-primary fs-6">{comp.name}</a>

                                        <span class="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">{comp.bank}</span>

                                    </div>

                                </div>

                            </div>
                            <div class="separator separator-dashed my-3"></div>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default TransferBeneficiary