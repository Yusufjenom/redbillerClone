import React, {useState} from 'react'

function BettingBeneficiary() {
    const [comps] = useState([
        {
            icon: <i class="fa fa-user fs-3 text-gray-600" aria-hidden="true"></i>,
            name: "Akosa Somtochukwu",
            id: "QW223456RTY7890",
            product:"SPORTY BET"
        },
        {
            icon: <i class="fa fa-user fs-3 text-gray-600" aria-hidden="true"></i>,
            name: "Yashim Nick",
            id: "QW223456RTY7890",
            product:"BET9JA"
        },
        {
            icon: <i class="fa fa-user fs-3 text-gray-600" aria-hidden="true"></i>,
            name: "Gbokoyi Funmi",
            id: "QW223456RTY7890",
            product:"KINGS BET"
        },
        {
            icon: <i class="fa fa-user fs-3 text-gray-600" aria-hidden="true"></i>,
            name: "Ewepeju Oreoluwa",
            id: "QW223456RTY7890",
            product:"FRAPAPA BET"
        },
        {
            icon: <i class="fa fa-user fs-3 text-gray-600" aria-hidden="true"></i>,
            name: "Pashe Samuel",
            id: "QW223456RTY7890",
            product:"NAIRABET"
        },
        {
            icon: <i class="fa fa-user fs-3 text-gray-600" aria-hidden="true"></i>,
            name: "Prosper Mike",
            id: "QW223456RTY7890",
            product:""
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

                                        <span class="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">{comp.id}</span>
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

export default BettingBeneficiary