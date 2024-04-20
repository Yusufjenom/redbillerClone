import React from 'react';
import Header from '../dashboard/components/header';
import Sidebar from '../dashboard/components/sidebar';
import Footer from '../dashboard/components/footer';
import StatusBody from './components/body';
import StatusCard from './components/card';
import StatusServices from './components/services';

function StatusPage() {
    return (
        <>
            <div className="d-flex flex-column flex-root app-root bg-gray-100" id="kt_app_root" style={{ position: "relative" }}>
                <div style={{ position: "sticky", top: "0", zIndex: "100" }}>
                    <Header />
                </div>
                <div className="app-page flex-column flex-column-fluid" id="kt_app_page" >

                    <div className="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
                        <div className="app-container container-fluid d-flex flex-grow-1" style={{ position: "relative" }}>
                            <div style={{ position: "fixed", top: "9rem", zIndex: "1", left: "1.5rem" }}>
                                {/* <Sidebar /> */}
                            </div>

                            <div className="app-main flex-column flex-row-fluid" id="kt_app_main">

                                <div className="d-flex flex-column flex-column-fluid">
                                    <div id="kt_app_toolbar" className="app-toolbar pt-7 pt-lg-10">
                                        {/* <ProfileToolBar /> */}
                                       
                                        <div id="kt_app_content" className="app-content">
                                            <div className="d-flex flex-column flex-lg-row">

                                                <div className="flex-lg-row-fluid me-lg-15 order-2 order-lg-1 mb-10 mb-lg-0">
                                                    {/* <StatusCard />
                                                    <StatusCard /> */}
                                                     <StatusBody/>

                                                </div>
                                                {/* <StatusServices /> */}
                                            </div>
                                        </div>
                                        {/* <StatusCard /> */}
                                    </div>
                                </div>
                                <Footer />
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default StatusPage;