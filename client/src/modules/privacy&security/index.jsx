import React, { useContext, useState } from 'react';
import Header from '../dashboard/components/header';
import Sidebar from '../dashboard/components/sidebar';
import ProfileHeader from './components/profileHeader';
import EditProfileDetails from './components/editProfileeDetails';
import EmailPasswordSettings from './components/emailPasswordSetting';
import DeactivateAccount from './components/deactivateAccount';
import BusinessProfileUpdate from './components/businessProfile';
import AccountLimits from './components/accountLimits';
import Beneficiary from './components/beneficiary';
import SubAccounts from './components/subAccounts';
import Footer from '../dashboard/components/footer';
import MobileSidebar from '../dashboard/components/mobileSidebar';
import { MobileContext } from '../contexts/mobileViewContext';
import Withdrawal from './components/withdrawals';
import LoadingSpinner from '../components/loadingSpinner';


function PrivacyAndSecurity() {
    const { open } = useContext(MobileContext);
    const [spinner, setSpinner] = useState(true);


    setTimeout(() => {
        setSpinner(false)
    }, 2000);

    return (
        <>

            <div className="d-flex flex-column flex-root app-root bg-gray-100" id="kt_app_root" style={{ position: "relative" }}>
                {spinner && <LoadingSpinner />}
                <div style={{ position: "sticky", top: "0", zIndex: "100" }}>
                    <Header />
                </div>

                <div className="app-page flex-column flex-column-fluid" id="kt_app_page" >

                    {
                        open && (
                            <MobileSidebar />
                        )
                    }

                    <div className="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
                        <div className="app-container container-fluid d-flex flex-grow-1">

                            <div className="app-main flex-column flex-row-fluid" id="kt_app_main">

                                <div className="d-flex flex-column flex-column-fluid">

                                    <div id="kt_app_toolbar" className="app-toolbar pt-7 pt-lg-10" data-bs-toggle="pill" >
                                        {/* <ProfileToolBar /> */}
                                        {/* id="kt_forms_widget_1_tab_1" */}
                                        <ProfileHeader />
                                    </div>

                                    <div class="card-body">

                                        <div class="tab-content">
                                            <div class="tab-pane fade active show" id="profile">
                                                <EditProfileDetails />
                                            </div>

                                            <div class="tab-pane fade" id="deactivate">
                                                <EmailPasswordSettings />

                                                <DeactivateAccount />
                                            </div>

                                            <div class="tab-pane fade" id="business">
                                                <BusinessProfileUpdate />
                                            </div>

                                            <div class="tab-pane fade" id="beneficiary">
                                                <Beneficiary />
                                            </div>

                                            <div class="tab-pane fade" id="withdrawal">
                                                <Withdrawal />
                                            </div>

                                            <div class="tab-pane fade" id="accountLimits">
                                                <AccountLimits />
                                            </div>

                                            <div class="tab-pane fade" id="subAccounts">
                                                <SubAccounts />
                                            </div>
                                        </div>
                                    </div>


                                    <Footer />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default PrivacyAndSecurity;

