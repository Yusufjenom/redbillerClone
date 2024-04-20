import React, { useContext } from 'react'
import Header from '../dashboard/components/header';
import Bills from './components2';
import MobileSidebar from '../dashboard/components/mobileSidebar';
import { MobileContext } from '../contexts/mobileViewContext';


function BillsComponent() {
    const { open } = useContext(MobileContext);
    return (
        <>
            <div data-kt-app-header-fixed="true" data-kt-app-header-fixed-mobile="true"
                data-kt-app-sidebar-enabled="true" data-kt-app-sidebar-fixed="true" data-kt-app-sidebar-push-toolbar="true"
                data-kt-app-sidebar-push-footer="true" className="app-default">

                <div className="d-flex flex-column flex-root app-root bg-gray-100" >
                    <div className="app-page flex-column flex-column-fluid">
                        <Header />
                        <div className="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
                            {/* <Sidebar /> */}
                            {
                                open && (
                                    <MobileSidebar />
                                )
                            }
                            <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
                                <div className="d-flex flex-column flex-column-fluid">
                                    <div className="app-content flex-column-fluid">
                                        <div className="app-container container-fluid">
                                            <Bills />
                                        </div>
                                    </div>
                                </div>
                                {/* <Footer /> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div id="kt_scrolltop" className="scrolltop" data-kt-scrolltop="true"><i className="ki-outline ki-arrow-up"></i></div>
            </div>

        </>
    )
}

export default BillsComponent