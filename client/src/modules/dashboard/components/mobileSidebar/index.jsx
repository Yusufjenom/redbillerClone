import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

function MobileSidebar() {
  return (
    <>
      <div className="mobile-sidebar">

        <ul className="nav flex-column w-lg-100 mt-20 px-5 pt-3" id="kt_app_sidebar_nav">

          <li className="nav-item mb-2">
            <Link to="/">
              <p className="nav-link btn btn-icon hover-btn btn-color-gray-600" data-bs-toggle="tab">
                <i className="bi bi-house fs-2"></i>
              </p>
            </Link>
          </li>

          <li className="nav-item mb-2">

            <Link to="/wallets">
              <p className="nav-link btn btn-icon hover-btn btn-color-gray-600" data-bs-toggle="tab">
                <i className="bi bi-wallet2 fs-2"></i>
              </p>
            </Link>

          </li>


          <li className="nav-item mb-2">

            <Link to="/send-money">
              <p className="nav-link btn btn-icon hover-btn btn-color-gray-600" data-bs-toggle="tab" style={{ backgroundColor: "#93120e" }}>
                <i className="bi bi-cash fs-2"></i>
              </p>
            </Link>

          </li>

          <li className="nav-item mb-2">
            <Link to="/bills">
              <p className="nav-link btn btn-icon hover-btn btn-color-gray-600" data-bs-toggle="tab">
                <i className="bi bi-tv fs-2"></i>
              </p>
            </Link>
          </li>

          <li className="nav-item mb-2">
            <Link to="/collections">
              <p className="nav-link btn btn-icon hover-btn btn-color-gray-600" data-bs-toggle="tab">
                <i className="bi bi-stack fs-2"></i>
              </p>
            </Link>
          </li>

          <li className="nav-item mb-2">
            <Link to="/transactions">
              <p className="nav-link btn btn-icon hover-btn btn-color-gray-600" data-bs-toggle="tab">
                <i className="bi bi-collection fs-2"></i>
              </p>
            </Link>
          </li>

          <li className="nav-item mb-2">
            <Link to="/logout">
              <a className="nav-link btn btn-icon hover-btn btn-color-gray-600" data-bs-toggle="tab" href="#">
                <i className="bi bi-power fs-2"></i>
              </a>
            </Link>
          </li>
        </ul>
      </div>

    </>
  )
}

export default MobileSidebar;