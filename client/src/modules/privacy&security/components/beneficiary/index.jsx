import React from 'react';
import AirtimeBeneficiary from './airtime';
import TransferBeneficiary from './transfer';
import CableBeneficiary from './cable';
import ElectricityBeneficiary from './electricity';
import BettingBeneficiary from './bettings';

function Beneficiary() {

    return (
        <>
            <div class="row gx-5 gx-xl-10">
                <div class="col-xl-12 mb-5 mb-xl-10">
                    <div class="card card-flush h-xl-100">

                        <div class="card-header pt-7">

                            {/* <h3 class="card-title align-items-start flex-column">
                                <span class="card-label fw-bold text-gray-800">Beneficiaries</span>
                                
                            </h3> */}


                            <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold">

                                <li className="nav-item mt-2">
                                    <a className="nav-link linkss ms-0 me-10 py-5 active" href="#transfer" data-bs-toggle="pill">Transfers</a>
                                </li>

                                <li className="nav-item mt-2">
                                    <a className="nav-link text-active-primary ms-0 me-10 py-5" href="#airtime" data-bs-toggle="pill">Airtime</a>
                                </li>

                                <li className="nav-item mt-2">
                                    <a className="nav-link text-active-primary ms-0 me-10 py-5" href="#cable" data-bs-toggle="pill">Cable</a>
                                </li>

                                <li className="nav-item mt-2">
                                    <a className="nav-link text-active-primary ms-0 me-10 py-5" href="#electricity" data-bs-toggle="pill">Electricity</a>
                                </li>

                                <li className="nav-item mt-2">
                                    <a className="nav-link text-active-primary ms-0 me-10 py-5" href="#betting" data-bs-toggle="pill">Betting</a>
                                </li>

                            </ul>

                        </div>

                        <div class="card-body">
                            <div class="tab-content">
                                
                                <div class="tab-pane fade active show" id="transfer">
                                    <TransferBeneficiary />
                                </div>

                                <div class="tab-pane fade show" id="airtime">
                                    <AirtimeBeneficiary />
                                </div>

                                <div class="tab-pane fade show" id="cable">
                                    <CableBeneficiary />
                                </div>

                                <div class="tab-pane fade show" id="electricity">
                                    <ElectricityBeneficiary />
                                </div>

                                <div class="tab-pane fade show" id="betting">
                                    <BettingBeneficiary />
                                </div>

                            </div>
                        </div>


                    </div>

                </div>

            </div>

        </>
    )
}

export default Beneficiary