import React, { useContext, useEffect, useState } from 'react';
import '../../assets/css/style.bundle.css';
import '../../assets/plugins/global/plugins.bundle.css';
import QuickLinks from './components/QuickLinks';
import Balance from './components/balance';
import Header from './components/header';
import MiniStatement from './components/mini-statement';
import Footer from './components/footer';
import MobileSidebar from './components/mobileSidebar';
import { MobileContext } from '../contexts/mobileViewContext';
import LoadingSpinner from '../components/loadingSpinner';


function Dashboard() {
  const { open} = useContext(MobileContext);
  const [spinner, setSpinner] = useState(true);


  setTimeout(() => {
     setSpinner(false)
  }, 2000);

  return (
    <>
    {spinner && <LoadingSpinner/>}
      <div className="d-flex flex-column flex-root app-root bg-gray-100" id="kt_app_root" style={{ position: "relative" }}>
        <div style={{ position: "sticky", top: "0", zIndex: "100" }}>
          <Header />
        </div>
        {
          open && (
            <MobileSidebar />
          )
        }
        <div className="app-page flex-column flex-column-fluid" id="kt_app_page">
          <div className='sidebar_container_dashboard'>

            {/* <Sidebar /> */}
          </div>
          <div className="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
            <div className="app-container container-fluid d-flex flex-grow-1">

              <div className="app-main flex-column flex-row-fluid" id="kt_app_main">

                <div className="d-flex flex-column flex-column-fluid">
                  <div id="kt_app_content" className="app-content pt-4">
                    <QuickLinks />
                    {/* <button onClick={handleTestClick}>click</button> */}
                    <div className="row g-5 g-xl-10 mb-5 mb-xl-10">

                      <div className="col-xl-4">

                        <Balance />

                      </div>


                      <div className="col-xl-8">

                        <MiniStatement />

                      </div>

                    </div>

                    {/* <Others /> */}
                    <Footer />

                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Dashboard;