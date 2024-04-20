import React from 'react'

function NavDropDown() {
    return (
        <>
            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown px-lg-2 py-lg-4 w-lg-200px" style={{backgroundColor:"red"}}>

                <div className="menu-item">

                    <a className="menu-link" href="https://preview.keenthemes.com/html/metronic/docs/base/utilities" target="_blank" title="Check out over 200 in-house components, plugins and ready for use solutions" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
                        <span className="menu-icon">
                            <i className="ki-outline ki-rocket fs-2"></i>
                        </span>
                        <span className="menu-title">Components</span>
                    </a>

                </div>


                <div className="menu-item">

                    <a className="menu-link" href="https://preview.keenthemes.com/html/metronic/docs" target="_blank" title="Check out the complete documentation" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
                        <span className="menu-icon">
                            <i className="ki-outline ki-abstract-26 fs-2"></i>
                        </span>
                        <span className="menu-title">Documentation</span>
                    </a>

                </div>


                <div className="menu-item">

                    <a className="menu-link" href="https://preview.keenthemes.com/metronic8/demo51/layout-builder.html" title="Build your layout and export HTML for server side integration" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
                        <span className="menu-icon">
                            <i className="ki-outline ki-switch fs-2"></i>
                        </span>
                        <span className="menu-title">Layout Builder</span>
                    </a>

                </div>


                <div className="menu-item">

                    <a className="menu-link" href="https://preview.keenthemes.com/html/metronic/docs/getting-started/changelog" target="_blank">
                        <span className="menu-icon">
                            <i className="ki-outline ki-code fs-2"></i>
                        </span>
                        <span className="menu-title">Changelog v8.2.3</span>
                    </a>

                </div>


            </div>
        </>
    )
}

export default NavDropDown;