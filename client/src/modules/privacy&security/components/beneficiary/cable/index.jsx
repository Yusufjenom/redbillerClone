import React, {useState} from 'react'

function CableBeneficiary() {
    const [comps] = useState([
        {
            icon: <i class="fa fa-user fs-3 text-gray-600" aria-hidden="true"></i>,
            name: "Akosa Somtochukwu",
            smartCard: "134 5678 9012",
            product: "DSTV"
        },
        {
            icon: <i class="fa fa-user fs-3 text-gray-600" aria-hidden="true"></i>,
            name: "Yashim Nick",
            smartCard: "134 5678 9012",
            product: "STARTIMES"
        },
        {
            icon: <i class="fa fa-user fs-3 text-gray-600" aria-hidden="true"></i>,
            name: "Gbokoyi Funmi",
            smartCard: "134 5678 9012",
            product: "GOTV"
        },
        {
            icon: <i class="fa fa-user fs-3 text-gray-600" aria-hidden="true"></i>,
            name: "Ewepeju Oreoluwa",
            smartCard: "134 5678 9012",
            product: "SPORTY TV"
        },
        {
            icon: <i class="fa fa-user fs-3 text-gray-600" aria-hidden="true"></i>,
            name: "Pashe Samuel",
            smartCard: "134 5678 9012",
            product: "SHOWTIMES"
        },
        {
            icon: <i class="fa fa-user fs-3 text-gray-600" aria-hidden="true"></i>,
            name: "Prosper Mike",
            smartCard: "134 5678 9012",
            product: "FREE TV"
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

                                        <span class="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">{comp.smartCard}</span>
                                        <span class="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">{comp.product}</span>

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

export default CableBeneficiary