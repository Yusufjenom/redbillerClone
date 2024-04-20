import React from 'react'

function SubAccountContent({ name }) {

    return (
        <>
            <div className="col-xl-8">

                <div className="card card-flush h-xl-100">

                    <div className="card-header pt-7">

                        <h3 className="card-title align-items-start flex-column">
                            <span className="card-label fw-bold text-gray-900">Account</span>
                            <span className="text-gray-500 mt-1 fw-semibold fs-6"></span>
                        </h3>

                        <div className="card-toolbar">

                            <div className="d-flex flex-stack flex-wrap gap-4">

                                <div className="d-flex align-items-center fw-bold">

                                    <a href="apps/ecommerce/catalog/products.html" className="btn btn-primary btn-sm" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: ".3rem" }}>
                                        switch
                                        <i class="fa fa-check-square" aria-hidden="true"></i>
                                    </a>


                                </div>



                                <a href="apps/ecommerce/catalog/products.html" className="btn btn-light btn-sm">Make Default</a>

                            </div>

                        </div>

                    </div>

                    <div className="card-body">
                        <div class="tab-content">

                            {name.map((item, i) => (
                                <div class={ i == 0 ? "tab-pane fade active show" : "tab-pane fade show"} id={`#${item.id}`} key={i}>
                                    {console.log(item.id)}
                                   <h1>{item.name}</h1>
                                </div>
                            ))}
                            {/* <div class="tab-pane fade show" id="two">

                            </div>

                            <div class="tab-pane fade show" id="three">

                            </div>

                            <div class="tab-pane fade show" id="four">

                            </div>

                            <div class="tab-pane fade show" id="five">

                            </div>
                            
                            <div class="tab-pane fade show" id="six">

                            </div> */}
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default SubAccountContent