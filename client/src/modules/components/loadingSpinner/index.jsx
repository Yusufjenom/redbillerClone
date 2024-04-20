import React from 'react';

function LoadingSpinner() {
    return (
        <>
            <div className='loading_spinner_container'>
                <div className='loading_spinner'></div>
                <span className="text-gray-700 text-hover-primary fs-4 fw-bold me-1">Fetching Details...</span>
            </div>
        </>
    )
}

export default LoadingSpinner;