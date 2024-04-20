import React, {useState} from 'react'

function AirtimeBeneficiary() {
    const [comps] = useState([
        {
            icon: <i class="fa fa-user fs-3 text-gray-600" aria-hidden="true"></i>,
            name: "Akosa Somtochukwu",
            number: "08095764436",
            provider:"MTN"
        },
        {
            icon: <i class="fa fa-user fs-3 text-gray-600" aria-hidden="true"></i>,
            name: "Yashim Nick",
            number: "08095764436",
            provider:"AIRTEL"
        },
        {
            icon: <i class="fa fa-user fs-3 text-gray-600" aria-hidden="true"></i>,
            name: "Gbokoyi Funmi",
            number: "08095764436",
            provider:"9MOBILE"
        },
        {
            icon: <i class="fa fa-user fs-3 text-gray-600" aria-hidden="true"></i>,
            name: "Ewepeju Oreoluwa",
            number: "08095764436",
            provider:"GLO"
        },
        {
            icon: <i class="fa fa-user fs-3 text-gray-600" aria-hidden="true"></i>,
            name: "Pashe Samuel",
            number: "08095764436",
            provider:"MTN"
        },
        {
            icon: <i class="fa fa-user fs-3 text-gray-600" aria-hidden="true"></i>,
            name: "Prosper Mike",
            number: "08095764436",
            provider:"GLO"
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

                                        <span class="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">{comp.number}</span>
                                        <span class="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">{comp.provider}</span>

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

export default AirtimeBeneficiary;