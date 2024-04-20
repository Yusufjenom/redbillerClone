import React from 'react';
import StatusServices from '../services';
import StatusCard from '../card';

function StatusBody() {
    return (
        <>

            <div id="kt_app_content" className="app-content">

                <div className="d-flex flex-column flex-lg-row">

                    <div className="flex-lg-row-fluid me-lg-15 order-2 order-lg-1 mb-10 mb-lg-0">

                        <StatusCard/>
                        
                        <StatusCard/>
      
                        <StatusCard/>
                    </div>

                    <StatusServices/>   

                </div>
            </div>

        </>
    )
}

export default StatusBody