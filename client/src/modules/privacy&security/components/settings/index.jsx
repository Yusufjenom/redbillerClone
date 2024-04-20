import React from 'react'

function PrivacyAndSecurityy() {
  return (
    <div>
	
		<div className="d-flex flex-column flex-root app-root" id="kt_app_root">
			
			<div className="app-page flex-column flex-column-fluid" id="kt_app_page">
				
				<div id="kt_app_header" className="app-header" data-kt-sticky="true" data-kt-sticky-activate="{default: false, lg: true}" data-kt-sticky-name="app-header-sticky" data-kt-sticky-offset="{default: false, lg: '300px'}">
					
					<div className="app-container container-fluid d-flex align-items-stretch justify-content-between" id="kt_app_header_container">
						
						<div className="d-flex align-items-center justify-content-between flex-row-fluid" id="kt_app_header_wrapper">
							
							<div className="app-header-logo d-flex align-items-center">
								
								<div className="btn btn-icon btn-color-gray-500 btn-active-color-primary w-35px h-35px ms-n3 me-2 d-flex d-lg-none" id="kt_app_sidebar_mobile_toggle">
									<i className="ki-outline ki-abstract-14 fs-1"></i>
								</div>
								
								<a href="index.html" className="me-5 me-lg-9">
									<img alt="Logo" src="assets/media/logos/demo51.svg" className="h-25px h-sm-30px" />
								</a>
								
								<div className="d-none d-md-inline">
									<div className="fw-bold fs-3 text-gray-900">Good morning, James</div>
									<div className="fw-semibold text-gray-500">Plan your blog post by choosing a topic</div>
								</div>
								
							</div>
							
							<div className="d-flex align-items-stretch" id="kt_app_header_menu_wrapper">
								
								<div className="app-header-menu app-header-mobile-drawer align-items-stretch" data-kt-drawer="true" data-kt-drawer-name="app-header-menu" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_header_menu_toggle" data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_app_body', lg: '#kt_app_header_menu_wrapper'}">
									
									<div className="menu menu-rounded menu-column menu-lg-row menu-active-bg menu-title-gray-600 menu-state-gray-900 menu-arrow-gray-500 fw-semibold fw-semibold fs-6 align-items-stretch my-5 my-lg-0 px-2 px-lg-0" id="#kt_app_header_menu" data-kt-menu="true">

										<div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" data-kt-menu-offset="-250,0" className="menu-item menu-here-bg menu-lg-down-accordion me-0 me-lg-2">

											<span className="menu-link">
												<span className="menu-title">Dashboards</span>
												<span className="menu-arrow d-lg-none"></span>
											</span>


											<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0 w-100 w-lg-850px">

												<div className="menu-state-bg menu-extended overflow-hidden overflow-lg-visible" data-kt-menu-dismiss="true">

													<div className="row">

														<div className="col-lg-8 mb-3 mb-lg-0 py-3 px-3 py-lg-6 px-lg-6">

															<div className="row">

																<div className="col-lg-6 mb-3">

																	<div className="menu-item p-0 m-0">

																		<a href="index.html" className="menu-link">
																			<span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
																				<i className="ki-outline ki-element-11 text-primary fs-1"></i>
																			</span>
																			<span className="d-flex flex-column">
																				<span className="fs-6 fw-bold text-gray-800">Default</span>
																				<span className="fs-7 fw-semibold text-muted">Reports & statistics</span>
																			</span>
																		</a>

																	</div>

																</div>


																<div className="col-lg-6 mb-3">

																	<div className="menu-item p-0 m-0">

																		<a href="dashboards/ecommerce.html" className="menu-link">
																			<span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
																				<i className="ki-outline ki-basket text-danger fs-1"></i>
																			</span>
																			<span className="d-flex flex-column">
																				<span className="fs-6 fw-bold text-gray-800">eCommerce</span>
																				<span className="fs-7 fw-semibold text-muted">Sales reports</span>
																			</span>
																		</a>

																	</div>

																</div>


																<div className="col-lg-6 mb-3">

																	<div className="menu-item p-0 m-0">

																		<a href="dashboards/projects.html" className="menu-link">
																			<span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
																				<i className="ki-outline ki-abstract-44 text-info fs-1"></i>
																			</span>
																			<span className="d-flex flex-column">
																				<span className="fs-6 fw-bold text-gray-800">Projects</span>
																				<span className="fs-7 fw-semibold text-muted">Tasts, graphs & charts</span>
																			</span>
																		</a>

																	</div>

																</div>


																<div className="col-lg-6 mb-3">

																	<div className="menu-item p-0 m-0">

																		<a href="dashboards/online-courses.html" className="menu-link">
																			<span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
																				<i className="ki-outline ki-color-swatch text-success fs-1"></i>
																			</span>
																			<span className="d-flex flex-column">
																				<span className="fs-6 fw-bold text-gray-800">Online Courses</span>
																				<span className="fs-7 fw-semibold text-muted">Student progress</span>
																			</span>
																		</a>

																	</div>

																</div>


																<div className="col-lg-6 mb-3">

																	<div className="menu-item p-0 m-0">

																		<a href="dashboards/marketing.html" className="menu-link">
																			<span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
																				<i className="ki-outline ki-chart-simple text-gray-900 fs-1"></i>
																			</span>
																			<span className="d-flex flex-column">
																				<span className="fs-6 fw-bold text-gray-800">Marketing</span>
																				<span className="fs-7 fw-semibold text-muted">Campaings & conversions</span>
																			</span>
																		</a>

																	</div>

																</div>


																<div className="col-lg-6 mb-3">

																	<div className="menu-item p-0 m-0">

																		<a href="dashboards/bidding.html" className="menu-link">
																			<span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
																				<i className="ki-outline ki-switch text-warning fs-1"></i>
																			</span>
																			<span className="d-flex flex-column">
																				<span className="fs-6 fw-bold text-gray-800">Bidding</span>
																				<span className="fs-7 fw-semibold text-muted">Campaings & conversions</span>
																			</span>
																		</a>

																	</div>

																</div>


																<div className="col-lg-6 mb-3">

																	<div className="menu-item p-0 m-0">

																		<a href="dashboards/pos.html" className="menu-link">
																			<span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
																				<i className="ki-outline ki-abstract-42 text-danger fs-1"></i>
																			</span>
																			<span className="d-flex flex-column">
																				<span className="fs-6 fw-bold text-gray-800">POS System</span>
																				<span className="fs-7 fw-semibold text-muted">Campaings & conversions</span>
																			</span>
																		</a>

																	</div>

																</div>


																<div className="col-lg-6 mb-3">

																	<div className="menu-item p-0 m-0">

																		<a href="dashboards/call-center.html" className="menu-link">
																			<span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
																				<i className="ki-outline ki-call text-primary fs-1"></i>
																			</span>
																			<span className="d-flex flex-column">
																				<span className="fs-6 fw-bold text-gray-800">Call Center</span>
																				<span className="fs-7 fw-semibold text-muted">Campaings & conversions</span>
																			</span>
																		</a>

																	</div>

																</div>

															</div>

															<div className="separator separator-dashed mx-5 my-5"></div>

															<div className="d-flex flex-stack flex-wrap flex-lg-nowrap gap-2 mx-5">
																<div className="d-flex flex-column me-5">
																	<div className="fs-6 fw-bold text-gray-800">Landing Page Template</div>
																	<div className="fs-7 fw-semibold text-muted">Onpe page landing template with pricing & others</div>
																</div>
																<a href="landing.html" className="btn btn-sm btn-primary fw-bold">Explore</a>
															</div>

														</div>


														<div className="menu-more bg-light col-lg-4 py-3 px-3 py-lg-6 px-lg-6 rounded-end">
															
															<h4 className="fs-6 fs-lg-4 text-gray-800 fw-bold mt-3 mb-3 ms-4">More Dashboards</h4>
															

															<div className="menu-item p-0 m-0">

																<a href="dashboards/logistics.html" className="menu-link py-2">
																	<span className="menu-title">Logistics</span>
																</a>

															</div>


															<div className="menu-item p-0 m-0">

																<a href="dashboards/website-analytics.html" className="menu-link py-2">
																	<span className="menu-title">Website Analytics</span>
																</a>

															</div>


															<div className="menu-item p-0 m-0">

																<a href="dashboards/finance-performance.html" className="menu-link py-2">
																	<span className="menu-title">Finance Performance</span>
																</a>

															</div>


															<div className="menu-item p-0 m-0">

																<a href="dashboards/store-analytics.html" className="menu-link py-2">
																	<span className="menu-title">Store Analytics</span>
																</a>

															</div>


															<div className="menu-item p-0 m-0">

																<a href="dashboards/social.html" className="menu-link py-2">
																	<span className="menu-title">Social</span>
																</a>

															</div>


															<div className="menu-item p-0 m-0">

																<a href="dashboards/delivery.html" className="menu-link py-2">
																	<span className="menu-title">Delivery</span>
																</a>

															</div>


															<div className="menu-item p-0 m-0">

																<a href="dashboards/crypto.html" className="menu-link py-2">
																	<span className="menu-title">Crypto</span>
																</a>

															</div>


															<div className="menu-item p-0 m-0">

																<a href="dashboards/school.html" className="menu-link py-2">
																	<span className="menu-title">School</span>
																</a>

															</div>


															<div className="menu-item p-0 m-0">

																<a href="dashboards/podcast.html" className="menu-link py-2">
																	<span className="menu-title">Podcast</span>
																</a>

															</div>

														</div>

													</div>

												</div>

											</div>

										</div>


										<div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" data-kt-menu-offset="-400,0" className="menu-item here show">

											<span className="menu-link">
												<span className="menu-title">Pages</span>
												<span className="menu-arrow d-lg-none"></span>
											</span>


											<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0">
												
												<div className="menu-active-bg px-4 px-lg-0">
													
													<div className="d-flex w-100 overflow-auto">
														<ul className="nav nav-stretch nav-line-tabs fw-bold fs-6 p-0 p-lg-10 flex-nowrap flex-grow-1">

															<li className="nav-item mx-lg-1">
																<a className="nav-link py-3 py-lg-6 text-active-primary" href="#" data-bs-toggle="tab" data-bs-target="#kt_app_header_menu_pages_pages">General</a>
															</li>


															<li className="nav-item mx-lg-1">
																<a className="nav-link py-3 py-lg-6 active text-active-primary" href="#" data-bs-toggle="tab" data-bs-target="#kt_app_header_menu_pages_account">Account</a>
															</li>


															<li className="nav-item mx-lg-1">
																<a className="nav-link py-3 py-lg-6 text-active-primary" href="#" data-bs-toggle="tab" data-bs-target="#kt_app_header_menu_pages_authentication">Authentication</a>
															</li>


															<li className="nav-item mx-lg-1">
																<a className="nav-link py-3 py-lg-6 text-active-primary" href="#" data-bs-toggle="tab" data-bs-target="#kt_app_header_menu_pages_utilities">Utilities</a>
															</li>


															<li className="nav-item mx-lg-1">
																<a className="nav-link py-3 py-lg-6 text-active-primary" href="#" data-bs-toggle="tab" data-bs-target="#kt_app_header_menu_pages_widgets">Widgets</a>
															</li>

														</ul>
													</div>
													
                                                    
													
													<div className="tab-content py-4 py-lg-8 px-lg-7">
														
														<div className="tab-pane w-lg-1000px" id="kt_app_header_menu_pages_pages">

															<div className="row">

																<div className="col-lg-8">

																	<div className="row">

																		<div className="col-lg-3 mb-6 mb-lg-0">
																			
																			<h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">User Profile</h4>
																			

																			<div className="menu-item p-0 m-0">

																				<a href="pages/user-profile/overview.html" className="menu-link">
																					<span className="menu-title">Overview</span>
																				</a>

																			</div>


																			<div className="menu-item p-0 m-0">

																				<a href="pages/user-profile/projects.html" className="menu-link">
																					<span className="menu-title">Projects</span>
																				</a>

																			</div>


																			<div className="menu-item p-0 m-0">

																				<a href="pages/user-profile/campaigns.html" className="menu-link">
																					<span className="menu-title">Campaigns</span>
																				</a>

																			</div>


																			<div className="menu-item p-0 m-0">

																				<a href="pages/user-profile/documents.html" className="menu-link">
																					<span className="menu-title">Documents</span>
																				</a>

																			</div>


																			<div className="menu-item p-0 m-0">

																				<a href="pages/user-profile/followers.html" className="menu-link">
																					<span className="menu-title">Followers</span>
																				</a>

																			</div>


																			<div className="menu-item p-0 m-0">

																				<a href="pages/user-profile/activity.html" className="menu-link">
																					<span className="menu-title">Activity</span>
																				</a>

																			</div>

																		</div>


																		<div className="col-lg-3 mb-6 mb-lg-0">

																			<div className="mb-6">

																				<h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Corporate</h4>
																				

																				<div className="menu-item p-0 m-0">

																					<a href="pages/about.html" className="menu-link">
																						<span className="menu-title">About</span>
																					</a>

																				</div>


																				<div className="menu-item p-0 m-0">

																					<a href="pages/team.html" className="menu-link">
																						<span className="menu-title">Our Team</span>
																					</a>

																				</div>


																				<div className="menu-item p-0 m-0">

																					<a href="pages/contact.html" className="menu-link">
																						<span className="menu-title">Contact Us</span>
																					</a>

																				</div>


																				<div className="menu-item p-0 m-0">

																					<a href="pages/licenses.html" className="menu-link">
																						<span className="menu-title">Licenses</span>
																					</a>

																				</div>


																				<div className="menu-item p-0 m-0">

																					<a href="pages/sitemap.html" className="menu-link">
																						<span className="menu-title">Sitemap</span>
																					</a>

																				</div>

																			</div>
																			

																			<div className="mb-0">

																				<h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Careers</h4>


																				<div className="menu-item p-0 m-0">

																					<a href="pages/careers/list.html" className="menu-link">
																						<span className="menu-title">Careers List</span>
																					</a>

																				</div>


																				<div className="menu-item p-0 m-0">

																					<a href="pages/careers/apply.html" className="menu-link">
																						<span className="menu-title">Careers Apply</span>
																					</a>

																				</div>

																			</div>

																		</div>


																		<div className="col-lg-3 mb-6 mb-lg-0">

																			<div className="mb-6">

																				<h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">FAQ</h4>


																				<div className="menu-item p-0 m-0">

																					<a href="pages/faq/classic.html" className="menu-link">
																						<span className="menu-title">FAQ Classic</span>
																					</a>

																				</div>


																				<div className="menu-item p-0 m-0">

																					<a href="pages/faq/extended.html" className="menu-link">
																						<span className="menu-title">FAQ Extended</span>
																					</a>

																				</div>

																			</div>


																			<div className="mb-6">

																				<h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Blog</h4>


																				<div className="menu-item p-0 m-0">

																					<a href="pages/blog/home.html" className="menu-link">
																						<span className="menu-title">Blog Home</span>
																					</a>

																				</div>


																				<div className="menu-item p-0 m-0">

																					<a href="pages/blog/post.html" className="menu-link">
																						<span className="menu-title">Blog Post</span>
																					</a>

																				</div>

																			</div>


																			<div className="mb-0">

																				<h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Pricing</h4>


																				<div className="menu-item p-0 m-0">

																					<a href="pages/pricing.html" className="menu-link">
																						<span className="menu-title">Column Pricing</span>
																					</a>

																				</div>


																				<div className="menu-item p-0 m-0">

																					<a href="pages/pricing/table.html" className="menu-link">
																						<span className="menu-title">Table Pricing</span>
																					</a>

																				</div>

																			</div>

																		</div>


																		<div className="col-lg-3 mb-6 mb-lg-0">

																			<div className="mb-0">

																				<h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Social</h4>


																				<div className="menu-item p-0 m-0">

																					<a href="pages/social/feeds.html" className="menu-link">
																						<span className="menu-title">Feeds</span>
																					</a>

																				</div>


																				<div className="menu-item p-0 m-0">

																					<a href="pages/social/activity.html" className="menu-link">
																						<span className="menu-title">Activty</span>
																					</a>

																				</div>


																				<div className="menu-item p-0 m-0">

																					<a href="pages/social/followers.html" className="menu-link">
																						<span className="menu-title">Followers</span>
																					</a>

																				</div>


																				<div className="menu-item p-0 m-0">

																					<a href="pages/social/settings.html" className="menu-link">
																						<span className="menu-title">Settings</span>
																					</a>

																				</div>

																			</div>

																		</div>

																	</div>

																</div>


																<div className="col-lg-4">
																	<img src="assets/media/stock/600x600/img-82.jpg" className="rounded mw-100" alt="" />
																</div>

															</div>

														</div>


														<div className="tab-pane active w-lg-600px" id="kt_app_header_menu_pages_account">

															<div className="row">

																<div className="col-lg-5 mb-6 mb-lg-0">

																	<div className="row">

																		<div className="col-lg-6">

																			<div className="menu-item p-0 m-0">

																				<a href="account/overview.html" className="menu-link">
																					<span className="menu-title">Overview</span>
																				</a>

																			</div>


																			<div className="menu-item p-0 m-0">

																				<a href="account/settings.html" className="menu-link active">
																					<span className="menu-title">Settings</span>
																				</a>

																			</div>


																			<div className="menu-item p-0 m-0">

																				<a href="account/security.html" className="menu-link">
																					<span className="menu-title">Security</span>
																				</a>

																			</div>


																			<div className="menu-item p-0 m-0">

																				<a href="account/activity.html" className="menu-link">
																					<span className="menu-title">Activity</span>
																				</a>

																			</div>


																			<div className="menu-item p-0 m-0">

																				<a href="account/billing.html" className="menu-link">
																					<span className="menu-title">Billing</span>
																				</a>

																			</div>

																		</div>


																		<div className="col-lg-6">

																			<div className="menu-item p-0 m-0">

																				<a href="account/statements.html" className="menu-link">
																					<span className="menu-title">Statements</span>
																				</a>

																			</div>


																			<div className="menu-item p-0 m-0">

																				<a href="account/referrals.html" className="menu-link">
																					<span className="menu-title">Referrals</span>
																				</a>

																			</div>


																			<div className="menu-item p-0 m-0">

																				<a href="account/api-keys.html" className="menu-link">
																					<span className="menu-title">API Keys</span>
																				</a>

																			</div>


																			<div className="menu-item p-0 m-0">

																				<a href="account/logs.html" className="menu-link">
																					<span className="menu-title">Logs</span>
																				</a>

																			</div>

																		</div>

																	</div>

																</div>


																<div className="col-lg-7">
																	<img src="assets/media/stock/900x600/46.jpg" className="rounded mw-100" alt="" />
																</div>

															</div>

														</div>


														<div className="tab-pane w-lg-1000px" id="kt_app_header_menu_pages_authentication">

															<div className="row">

																<div className="col-lg-3 mb-6 mb-lg-0">

																	<div className="mb-6">

																		<h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Corporate Layout</h4>


																		<div className="menu-item p-0 m-0">

																			<a href="authentication/layouts/corporate/sign-in.html" className="menu-link">
																				<span className="menu-title">Sign-In</span>
																			</a>

																		</div>


																		<div className="menu-item p-0 m-0">

																			<a href="authentication/layouts/corporate/sign-up.html" className="menu-link">
																				<span className="menu-title">Sign-Up</span>
																			</a>

																		</div>


																		<div className="menu-item p-0 m-0">

																			<a href="authentication/layouts/corporate/two-factor.html" className="menu-link">
																				<span className="menu-title">Two-Factor</span>
																			</a>

																		</div>


																		<div className="menu-item p-0 m-0">

																			<a href="authentication/layouts/corporate/reset-password.html" className="menu-link">
																				<span className="menu-title">Reset Password</span>
																			</a>

																		</div>


																		<div className="menu-item p-0 m-0">

																			<a href="authentication/layouts/corporate/new-password.html" className="menu-link">
																				<span className="menu-title">New Password</span>
																			</a>

																		</div>

																	</div>


																	<div className="mb-0">

																		<h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Overlay Layout</h4>


																		<div className="menu-item p-0 m-0">

																			<a href="authentication/layouts/overlay/sign-in.html" className="menu-link">
																				<span className="menu-title">Sign-In</span>
																			</a>

																		</div>


																		<div className="menu-item p-0 m-0">

																			<a href="authentication/layouts/overlay/sign-up.html" className="menu-link">
																				<span className="menu-title">Sign-Up</span>
																			</a>

																		</div>


																		<div className="menu-item p-0 m-0">

																			<a href="authentication/layouts/overlay/two-factor.html" className="menu-link">
																				<span className="menu-title">Two-Factor</span>
																			</a>

																		</div>


																		<div className="menu-item p-0 m-0">

																			<a href="authentication/layouts/overlay/reset-password.html" className="menu-link">
																				<span className="menu-title">Reset Password</span>
																			</a>

																		</div>


																		<div className="menu-item p-0 m-0">

																			<a href="authentication/layouts/overlay/new-password.html" className="menu-link">
																				<span className="menu-title">New Password</span>
																			</a>

																		</div>

																	</div>

																</div>


																<div className="col-lg-3 mb-6 mb-lg-0">

																	<div className="mb-6">

																		<h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Creative Layout</h4>


																		<div className="menu-item p-0 m-0">

																			<a href="authentication/layouts/creative/sign-in.html" className="menu-link">
																				<span className="menu-title">Sign-in</span>
																			</a>

																		</div>


																		<div className="menu-item p-0 m-0">

																			<a href="authentication/layouts/creative/sign-up.html" className="menu-link">
																				<span className="menu-title">Sign-up</span>
																			</a>

																		</div>


																		<div className="menu-item p-0 m-0">

																			<a href="authentication/layouts/creative/two-factor.html" className="menu-link">
																				<span className="menu-title">Two-Factor</span>
																			</a>

																		</div>


																		<div className="menu-item p-0 m-0">

																			<a href="authentication/layouts/creative/reset-password.html" className="menu-link">
																				<span className="menu-title">Reset Password</span>
																			</a>

																		</div>


																		<div className="menu-item p-0 m-0">

																			<a href="authentication/layouts/creative/new-password.html" className="menu-link">
																				<span className="menu-title">New Password</span>
																			</a>

																		</div>

																	</div>


																	<div className="mb-6">

																		<h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Fancy Layout</h4>


																		<div className="menu-item p-0 m-0">

																			<a href="authentication/layouts/fancy/sign-in.html" className="menu-link">
																				<span className="menu-title">Sign-In</span>
																			</a>

																		</div>


																		<div className="menu-item p-0 m-0">

																			<a href="authentication/layouts/fancy/sign-up.html" className="menu-link">
																				<span className="menu-title">Sign-Up</span>
																			</a>

																		</div>


																		<div className="menu-item p-0 m-0">

																			<a href="authentication/layouts/fancy/two-factor.html" className="menu-link">
																				<span className="menu-title">Two-Factor</span>
																			</a>

																		</div>


																		<div className="menu-item p-0 m-0">

																			<a href="authentication/layouts/fancy/reset-password.html" className="menu-link">
																				<span className="menu-title">Reset Password</span>
																			</a>

																		</div>


																		<div className="menu-item p-0 m-0">

																			<a href="authentication/layouts/fancy/new-password.html" className="menu-link">
																				<span className="menu-title">New Password</span>
																			</a>

																		</div>

																	</div>

																</div>


																<div className="col-lg-3 mb-6 mb-lg-0">

																	<div className="mb-0">

																		<h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">General</h4>


																		<div className="menu-item p-0 m-0">

																			<a href="authentication/extended/multi-steps-sign-up.html" className="menu-link">
																				<span className="menu-title">Multi-Steps Sign-Up</span>
																			</a>

																		</div>


																		<div className="menu-item p-0 m-0">

																			<a href="authentication/general/welcome.html" className="menu-link">
																				<span className="menu-title">Welcome Message</span>
																			</a>

																		</div>


																		<div className="menu-item p-0 m-0">

																			<a href="authentication/general/verify-email.html" className="menu-link">
																				<span className="menu-title">Verify Email</span>
																			</a>

																		</div>


																		<div className="menu-item p-0 m-0">

																			<a href="authentication/general/coming-soon.html" className="menu-link">
																				<span className="menu-title">Coming Soon</span>
																			</a>

																		</div>


																		<div className="menu-item p-0 m-0">

																			<a href="authentication/general/password-confirmation.html" className="menu-link">
																				<span className="menu-title">Password Confirmation</span>
																			</a>

																		</div>


																		<div className="menu-item p-0 m-0">

																			<a href="authentication/general/account-deactivated.html" className="menu-link">
																				<span className="menu-title">Account Deactivation</span>
																			</a>

																		</div>


																		<div className="menu-item p-0 m-0">

																			<a href="authentication/general/error-404.html" className="menu-link">
																				<span className="menu-title">Error 404</span>
																			</a>

																		</div>


																		<div className="menu-item p-0 m-0">

																			<a href="authentication/general/error-500.html" className="menu-link">
																				<span className="menu-title">Error 500</span>
																			</a>

																		</div>

																	</div>

																</div>


																<div className="col-lg-3 mb-6 mb-lg-0">

																	<div className="mb-0">

																		<h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Email Templates</h4>


																		<div className="menu-item p-0 m-0">

																			<a href="authentication/email/welcome-message.html" className="menu-link">
																				<span className="menu-title">Welcome Message</span>
																			</a>

																		</div>


																		<div className="menu-item p-0 m-0">

																			<a href="authentication/email/reset-password.html" className="menu-link">
																				<span className="menu-title">Reset Password</span>
																			</a>

																		</div>


																		<div className="menu-item p-0 m-0">

																			<a href="authentication/email/subscription-confirmed.html" className="menu-link">
																				<span className="menu-title">Subscription Confirmed</span>
																			</a>

																		</div>


																		<div className="menu-item p-0 m-0">

																			<a href="authentication/email/card-declined.html" className="menu-link">
																				<span className="menu-title">Credit Card Declined</span>
																			</a>

																		</div>


																		<div className="menu-item p-0 m-0">

																			<a href="authentication/email/promo-1.html" className="menu-link">
																				<span className="menu-title">Promo 1</span>
																			</a>

																		</div>


																		<div className="menu-item p-0 m-0">

																			<a href="authentication/email/promo-2.html" className="menu-link">
																				<span className="menu-title">Promo 2</span>
																			</a>

																		</div>


																		<div className="menu-item p-0 m-0">

																			<a href="authentication/email/promo-3.html" className="menu-link">
																				<span className="menu-title">Promo 3</span>
																			</a>

																		</div>

																	</div>

																</div>

															</div>

														</div>


														<div className="tab-pane w-lg-1000px" id="kt_app_header_menu_pages_utilities">

															<div className="row">

																<div className="col-lg-7">

																	<div className="row">

																		<div className="col-lg-4 mb-6 mb-lg-0">

																			<div className="mb-0">

																				<h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">General Modals</h4>


																				<div className="menu-item p-0 m-0">

																					<a href="utilities/modals/general/invite-friends.html" className="menu-link">
																						<span className="menu-title">Invite Friends</span>
																					</a>

																				</div>


																				<div className="menu-item p-0 m-0">

																					<a href="utilities/modals/general/view-users.html" className="menu-link">
																						<span className="menu-title">View Users</span>
																					</a>

																				</div>


																				<div className="menu-item p-0 m-0">

																					<a href="utilities/modals/general/select-users.html" className="menu-link">
																						<span className="menu-title">Select Users</span>
																					</a>

																				</div>


																				<div className="menu-item p-0 m-0">

																					<a href="utilities/modals/general/upgrade-plan.html" className="menu-link">
																						<span className="menu-title">Upgrade Plan</span>
																					</a>

																				</div>


																				<div className="menu-item p-0 m-0">

																					<a href="utilities/modals/general/share-earn.html" className="menu-link">
																						<span className="menu-title">Share & Earn</span>
																					</a>

																				</div>


																				<div className="menu-item p-0 m-0">

																					<a href="utilities/modals/forms/new-target.html" className="menu-link">
																						<span className="menu-title">New Target</span>
																					</a>

																				</div>


																				<div className="menu-item p-0 m-0">

																					<a href="utilities/modals/forms/new-card.html" className="menu-link">
																						<span className="menu-title">New Card</span>
																					</a>

																				</div>


																				<div className="menu-item p-0 m-0">

																					<a href="utilities/modals/forms/new-address.html" className="menu-link">
																						<span className="menu-title">New Address</span>
																					</a>

																				</div>


																				<div className="menu-item p-0 m-0">

																					<a href="utilities/modals/forms/create-api-key.html" className="menu-link">
																						<span className="menu-title">Create API Key</span>
																					</a>

																				</div>


																				<div className="menu-item p-0 m-0">

																					<a href="utilities/modals/forms/bidding.html" className="menu-link">
																						<span className="menu-title">Bidding</span>
																					</a>

																				</div>

																			</div>

																		</div>


																		<div className="col-lg-4 mb-6 mb-lg-0">

																			<div className="mb-6">

																				<h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Advanced Modals</h4>


																				<div className="menu-item p-0 m-0">

																					<a href="utilities/modals/wizards/create-app.html" className="menu-link">
																						<span className="menu-title">Create App</span>
																					</a>

																				</div>


																				<div className="menu-item p-0 m-0">

																					<a href="utilities/modals/wizards/create-campaign.html" className="menu-link">
																						<span className="menu-title">Create Campaign</span>
																					</a>

																				</div>


																				<div className="menu-item p-0 m-0">

																					<a href="utilities/modals/wizards/create-account.html" className="menu-link">
																						<span className="menu-title">Create Business Acc</span>
																					</a>

																				</div>


																				<div className="menu-item p-0 m-0">

																					<a href="utilities/modals/wizards/create-project.html" className="menu-link">
																						<span className="menu-title">Create Project</span>
																					</a>

																				</div>


																				<div className="menu-item p-0 m-0">

																					<a href="utilities/modals/wizards/top-up-wallet.html" className="menu-link">
																						<span className="menu-title">Top Up Wallet</span>
																					</a>

																				</div>


																				<div className="menu-item p-0 m-0">

																					<a href="utilities/modals/wizards/offer-a-deal.html" className="menu-link">
																						<span className="menu-title">Offer a Deal</span>
																					</a>

																				</div>


																				<div className="menu-item p-0 m-0">

																					<a href="utilities/modals/wizards/two-factor-authentication.html" className="menu-link">
																						<span className="menu-title">Two Factor Auth</span>
																					</a>

																				</div>

																			</div>


																			<div className="mb-0">

																				<h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Search</h4>


																				<div className="menu-item p-0 m-0">

																					<a href="utilities/search/horizontal.html" className="menu-link">
																						<span className="menu-title">Horizontal</span>
																					</a>

																				</div>


																				<div className="menu-item p-0 m-0">

																					<a href="utilities/search/vertical.html" className="menu-link">
																						<span className="menu-title">Vertical</span>
																					</a>

																				</div>


																				<div className="menu-item p-0 m-0">

																					<a href="utilities/modals/search/users.html" className="menu-link">
																						<span className="menu-title">Users</span>
																					</a>

																				</div>


																				<div className="menu-item p-0 m-0">

																					<a href="utilities/modals/search/select-location.html" className="menu-link">
																						<span className="menu-title">Select Location</span>
																					</a>

																				</div>

																			</div>

																		</div>


																		<div className="col-lg-4 mb-6 mb-lg-0">

																			<div className="mb-0">

																				<h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Wizards</h4>


																				<div className="menu-item p-0 m-0">

																					<a href="utilities/wizards/horizontal.html" className="menu-link">
																						<span className="menu-title">Horizontal</span>
																					</a>

																				</div>


																				<div className="menu-item p-0 m-0">

																					<a href="utilities/wizards/vertical.html" className="menu-link">
																						<span className="menu-title">Vertical</span>
																					</a>

																				</div>


																				<div className="menu-item p-0 m-0">

																					<a href="utilities/wizards/two-factor-authentication.html" className="menu-link">
																						<span className="menu-title">Two Factor Auth</span>
																					</a>

																				</div>


																				<div className="menu-item p-0 m-0">

																					<a href="utilities/wizards/create-app.html" className="menu-link">
																						<span className="menu-title">Create App</span>
																					</a>

																				</div>


																				<div className="menu-item p-0 m-0">

																					<a href="utilities/wizards/create-campaign.html" className="menu-link">
																						<span className="menu-title">Create Campaign</span>
																					</a>

																				</div>


																				<div className="menu-item p-0 m-0">

																					<a href="utilities/wizards/create-account.html" className="menu-link">
																						<span className="menu-title">Create Account</span>
																					</a>

																				</div>


																				<div className="menu-item p-0 m-0">

																					<a href="utilities/wizards/create-project.html" className="menu-link">
																						<span className="menu-title">Create Project</span>
																					</a>

																				</div>


																				<div className="menu-item p-0 m-0">

																					<a href="utilities/modals/wizards/top-up-wallet.html" className="menu-link">
																						<span className="menu-title">Top Up Wallet</span>
																					</a>

																				</div>


																				<div className="menu-item p-0 m-0">

																					<a href="utilities/wizards/offer-a-deal.html" className="menu-link">
																						<span className="menu-title">Offer a Deal</span>
																					</a>

																				</div>

																			</div>

																		</div>

																	</div>

																</div>


																<div className="col-lg-5 pe-lg-5">
																	<img src="assets/media/stock/600x600/img-84.jpg" className="rounded mw-100" alt="" />
																</div>

															</div>

														</div>


														<div className="tab-pane w-lg-500px" id="kt_app_header_menu_pages_widgets">

															<div className="row">

																<div className="col-lg-4 mb-6 mb-lg-0">

																	<div className="menu-item p-0 m-0">

																		<a href="widgets/lists.html" className="menu-link">
																			<span className="menu-title">Lists</span>
																		</a>

																	</div>


																	<div className="menu-item p-0 m-0">

																		<a href="widgets/statistics.html" className="menu-link">
																			<span className="menu-title">Statistics</span>
																		</a>

																	</div>


																	<div className="menu-item p-0 m-0">

																		<a href="widgets/charts.html" className="menu-link">
																			<span className="menu-title">Charts</span>
																		</a>

																	</div>


																	<div className="menu-item p-0 m-0">

																		<a href="widgets/mixed.html" className="menu-link">
																			<span className="menu-title">Mixed</span>
																		</a>

																	</div>


																	<div className="menu-item p-0 m-0">

																		<a href="widgets/tables.html" className="menu-link">
																			<span className="menu-title">Tables</span>
																		</a>

																	</div>


																	<div className="menu-item p-0 m-0">

																		<a href="widgets/feeds.html" className="menu-link">
																			<span className="menu-title">Feeds</span>
																		</a>

																	</div>

																</div>


																<div className="col-lg-8">
																	<img src="assets/media/stock/900x600/44.jpg" className="rounded mw-100" alt="" />
																</div>

															</div>

														</div>

													</div>

												</div>

											</div>

										</div>


										<div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" data-kt-menu-offset="12,0" className="menu-item menu-lg-down-accordion menu-sub-lg-down-indention me-0 me-lg-2">

											<span className="menu-link">
												<span className="menu-title">Apps</span>
												<span className="menu-arrow d-lg-none"></span>
											</span>


											<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown px-lg-2 py-lg-4 w-lg-250px">

												<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">

													<span className="menu-link">
														<span className="menu-icon">
															<i className="ki-outline ki-rocket fs-2"></i>
														</span>
														<span className="menu-title">Projects</span>
														<span className="menu-arrow"></span>
													</span>


													<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">

														<div className="menu-item">

															<a className="menu-link" href="apps/projects/list.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">My Projects</span>
															</a>

														</div>


														<div className="menu-item">

															<a className="menu-link" href="apps/projects/project.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">View Project</span>
															</a>

														</div>


														<div className="menu-item">

															<a className="menu-link" href="apps/projects/targets.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Targets</span>
															</a>

														</div>


														<div className="menu-item">

															<a className="menu-link" href="apps/projects/budget.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Budget</span>
															</a>

														</div>


														<div className="menu-item">

															<a className="menu-link" href="apps/projects/users.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Users</span>
															</a>

														</div>


														<div className="menu-item">

															<a className="menu-link" href="apps/projects/files.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Files</span>
															</a>

														</div>


														<div className="menu-item">

															<a className="menu-link" href="apps/projects/activity.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Activity</span>
															</a>

														</div>


														<div className="menu-item">

															<a className="menu-link" href="apps/projects/settings.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Settings</span>
															</a>

														</div>

													</div>

												</div>


												<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">

													<span className="menu-link">
														<span className="menu-icon">
															<i className="ki-outline ki-handcart fs-2"></i>
														</span>
														<span className="menu-title">eCommerce</span>
														<span className="menu-arrow"></span>
													</span>


													<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">

														<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">

															<span className="menu-link">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Catalog</span>
																<span className="menu-arrow"></span>
															</span>


															<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">

																<div className="menu-item">

																	<a className="menu-link" href="apps/ecommerce/catalog/products.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Products</span>
																	</a>

																</div>


																<div className="menu-item">

																	<a className="menu-link" href="apps/ecommerce/catalog/categories.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Categories</span>
																	</a>

																</div>


																<div className="menu-item">

																	<a className="menu-link" href="apps/ecommerce/catalog/add-product.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Add Product</span>
																	</a>

																</div>


																<div className="menu-item">

																	<a className="menu-link" href="apps/ecommerce/catalog/edit-product.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Edit Product</span>
																	</a>

																</div>


																<div className="menu-item">

																	<a className="menu-link" href="apps/ecommerce/catalog/add-category.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Add Category</span>
																	</a>

																</div>


																<div className="menu-item">

																	<a className="menu-link" href="apps/ecommerce/catalog/edit-category.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Edit Category</span>
																	</a>

																</div>

															</div>

														</div>


														<div data-kt-menu-trigger="click" className="menu-item menu-accordion menu-sub-indention">

															<span className="menu-link">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Sales</span>
																<span className="menu-arrow"></span>
															</span>


															<div className="menu-sub menu-sub-accordion">

																<div className="menu-item">

																	<a className="menu-link" href="apps/ecommerce/sales/listing.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Orders Listing</span>
																	</a>

																</div>


																<div className="menu-item">

																	<a className="menu-link" href="apps/ecommerce/sales/details.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Order Details</span>
																	</a>

																</div>


																<div className="menu-item">

																	<a className="menu-link" href="apps/ecommerce/sales/add-order.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Add Order</span>
																	</a>

																</div>


																<div className="menu-item">

																	<a className="menu-link" href="apps/ecommerce/sales/edit-order.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Edit Order</span>
																	</a>

																</div>

															</div>

														</div>


														<div data-kt-menu-trigger="click" className="menu-item menu-accordion menu-sub-indention">

															<span className="menu-link">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Customers</span>
																<span className="menu-arrow"></span>
															</span>


															<div className="menu-sub menu-sub-accordion">

																<div className="menu-item">

																	<a className="menu-link" href="apps/ecommerce/customers/listing.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Customers Listing</span>
																	</a>

																</div>


																<div className="menu-item">

																	<a className="menu-link" href="apps/ecommerce/customers/details.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Customers Details</span>
																	</a>

																</div>

															</div>

														</div>


														<div data-kt-menu-trigger="click" className="menu-item menu-accordion menu-sub-indention">

															<span className="menu-link">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Reports</span>
																<span className="menu-arrow"></span>
															</span>


															<div className="menu-sub menu-sub-accordion">

																<div className="menu-item">

																	<a className="menu-link" href="apps/ecommerce/reports/view.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Products Viewed</span>
																	</a>

																</div>


																<div className="menu-item">

																	<a className="menu-link" href="apps/ecommerce/reports/sales.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Sales</span>
																	</a>

																</div>


																<div className="menu-item">

																	<a className="menu-link" href="apps/ecommerce/reports/returns.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Returns</span>
																	</a>

																</div>


																<div className="menu-item">

																	<a className="menu-link" href="apps/ecommerce/reports/customer-orders.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Customer Orders</span>
																	</a>

																</div>


																<div className="menu-item">

																	<a className="menu-link" href="apps/ecommerce/reports/shipping.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Shipping</span>
																	</a>

																</div>

															</div>

														</div>


														<div className="menu-item">

															<a className="menu-link" href="apps/ecommerce/settings.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Settings</span>
															</a>

														</div>

													</div>

												</div>


												<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">

													<span className="menu-link">
														<span className="menu-icon">
															<i className="ki-outline ki-chart fs-2"></i>
														</span>
														<span className="menu-title">Support Center</span>
														<span className="menu-arrow"></span>
													</span>


													<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">

														<div className="menu-item">

															<a className="menu-link" href="apps/support-center/overview.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Overview</span>
															</a>

														</div>


														<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">

															<span className="menu-link">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Tickets</span>
																<span className="menu-arrow"></span>
															</span>


															<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">

																<div className="menu-item">

																	<a className="menu-link" href="apps/support-center/tickets/list.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Ticket List</span>
																	</a>

																</div>


																<div className="menu-item">

																	<a className="menu-link" href="apps/support-center/tickets/view.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Ticket View</span>
																	</a>

																</div>

															</div>

														</div>


														<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">

															<span className="menu-link">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Tutorials</span>
																<span className="menu-arrow"></span>
															</span>


															<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">

																<div className="menu-item">

																	<a className="menu-link" href="apps/support-center/tutorials/list.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Tutorials List</span>
																	</a>

																</div>


																<div className="menu-item">

																	<a className="menu-link" href="apps/support-center/tutorials/post.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Tutorials Post</span>
																	</a>

																</div>

															</div>

														</div>


														<div className="menu-item">

															<a className="menu-link" href="apps/support-center/faq.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">FAQ</span>
															</a>

														</div>


														<div className="menu-item">

															<a className="menu-link" href="apps/support-center/licenses.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Licenses</span>
															</a>

														</div>


														<div className="menu-item">

															<a className="menu-link" href="apps/support-center/contact.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Contact Us</span>
															</a>

														</div>

													</div>

												</div>


												<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">

													<span className="menu-link">
														<span className="menu-icon">
															<i className="ki-outline ki-shield-tick fs-2"></i>
														</span>
														<span className="menu-title">User Management</span>
														<span className="menu-arrow"></span>
													</span>


													<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">

														<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">

															<span className="menu-link">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Users</span>
																<span className="menu-arrow"></span>
															</span>


															<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">

																<div className="menu-item">

																	<a className="menu-link" href="apps/user-management/users/list.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Users List</span>
																	</a>

																</div>


																<div className="menu-item">

																	<a className="menu-link" href="apps/user-management/users/view.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">View User</span>
																	</a>

																</div>

															</div>

														</div>


														<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">

															<span className="menu-link">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Roles</span>
																<span className="menu-arrow"></span>
															</span>


															<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">

																<div className="menu-item">

																	<a className="menu-link" href="apps/user-management/roles/list.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Roles List</span>
																	</a>

																</div>


																<div className="menu-item">

																	<a className="menu-link" href="apps/user-management/roles/view.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">View Roles</span>
																	</a>

																</div>

															</div>

														</div>


														<div className="menu-item">

															<a className="menu-link" href="apps/user-management/permissions.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Permissions</span>
															</a>

														</div>

													</div>

												</div>


												<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">

													<span className="menu-link">
														<span className="menu-icon">
															<i className="ki-outline ki-phone fs-2"></i>
														</span>
														<span className="menu-title">Contacts</span>
														<span className="menu-arrow"></span>
													</span>


													<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">

														<div className="menu-item">

															<a className="menu-link" href="apps/contacts/getting-started.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Getting Started</span>
															</a>

														</div>


														<div className="menu-item">

															<a className="menu-link" href="apps/contacts/add-contact.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Add Contact</span>
															</a>

														</div>


														<div className="menu-item">

															<a className="menu-link" href="apps/contacts/edit-contact.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Edit Contact</span>
															</a>

														</div>


														<div className="menu-item">

															<a className="menu-link" href="apps/contacts/view-contact.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">View Contact</span>
															</a>

														</div>

													</div>

												</div>


												<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">

													<span className="menu-link">
														<span className="menu-icon">
															<i className="ki-outline ki-basket fs-2"></i>
														</span>
														<span className="menu-title">Subscriptions</span>
														<span className="menu-arrow"></span>
													</span>


													<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">

														<div className="menu-item">

															<a className="menu-link" href="apps/subscriptions/getting-started.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Getting Started</span>
															</a>

														</div>


														<div className="menu-item">

															<a className="menu-link" href="apps/subscriptions/list.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Subscription List</span>
															</a>

														</div>


														<div className="menu-item">

															<a className="menu-link" href="apps/subscriptions/add.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Add Subscription</span>
															</a>

														</div>


														<div className="menu-item">

															<a className="menu-link" href="apps/subscriptions/view.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">View Subscription</span>
															</a>

														</div>

													</div>

												</div>


												<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">

													<span className="menu-link">
														<span className="menu-icon">
															<i className="ki-outline ki-briefcase fs-2"></i>
														</span>
														<span className="menu-title">Customers</span>
														<span className="menu-arrow"></span>
													</span>


													<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">

														<div className="menu-item">

															<a className="menu-link" href="apps/customers/getting-started.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Getting Started</span>
															</a>

														</div>


														<div className="menu-item">

															<a className="menu-link" href="apps/customers/list.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Customer Listing</span>
															</a>

														</div>


														<div className="menu-item">

															<a className="menu-link" href="apps/customers/view.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Customer Details</span>
															</a>

														</div>

													</div>

												</div>


												<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">

													<span className="menu-link">
														<span className="menu-icon">
															<i className="ki-outline ki-credit-cart fs-2"></i>
														</span>
														<span className="menu-title">Invoice Management</span>
														<span className="menu-arrow"></span>
													</span>


													<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">

														<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">

															<span className="menu-link">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Profile</span>
																<span className="menu-arrow"></span>
															</span>


															<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">

																<div className="menu-item">

																	<a className="menu-link" href="apps/invoices/view/invoice-1.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Invoice 1</span>
																	</a>

																</div>


																<div className="menu-item">

																	<a className="menu-link" href="apps/invoices/view/invoice-2.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Invoice 2</span>
																	</a>

																</div>


																<div className="menu-item">

																	<a className="menu-link" href="apps/invoices/view/invoice-3.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Invoice 3</span>
																	</a>

																</div>

															</div>

														</div>


														<div className="menu-item">

															<a className="menu-link" href="apps/invoices/create.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Create Invoice</span>
															</a>

														</div>

													</div>

												</div>


												<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">

													<span className="menu-link">
														<span className="menu-icon">
															<i className="ki-outline ki-file-added fs-2"></i>
														</span>
														<span className="menu-title">File Manager</span>
														<span className="menu-arrow"></span>
													</span>


													<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">

														<div className="menu-item">

															<a className="menu-link" href="apps/file-manager/folders.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Folders</span>
															</a>

														</div>


														<div className="menu-item">

															<a className="menu-link" href="apps/file-manager/files.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Files</span>
															</a>

														</div>


														<div className="menu-item">

															<a className="menu-link" href="apps/file-manager/blank.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Blank Directory</span>
															</a>

														</div>


														<div className="menu-item">

															<a className="menu-link" href="apps/file-manager/settings.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Settings</span>
															</a>

														</div>

													</div>

												</div>


												<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">

													<span className="menu-link">
														<span className="menu-icon">
															<i className="ki-outline ki-sms fs-2"></i>
														</span>
														<span className="menu-title">Inbox</span>
														<span className="menu-arrow"></span>
													</span>


													<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">

														<div className="menu-item">

															<a className="menu-link" href="apps/inbox/listing.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Messages</span>
																<span className="menu-badge">
																	<span className="badge badge-light-success">3</span>
																</span>
															</a>

														</div>


														<div className="menu-item">

															<a className="menu-link" href="apps/inbox/compose.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Compose</span>
															</a>

														</div>


														<div className="menu-item">

															<a className="menu-link" href="apps/inbox/reply.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">View & Reply</span>
															</a>

														</div>

													</div>

												</div>


												<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">

													<span className="menu-link">
														<span className="menu-icon">
															<i className="ki-outline ki-message-text-2 fs-2"></i>
														</span>
														<span className="menu-title">Chat</span>
														<span className="menu-arrow"></span>
													</span>


													<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">

														<div className="menu-item">

															<a className="menu-link" href="apps/chat/private.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Private Chat</span>
															</a>

														</div>


														<div className="menu-item">

															<a className="menu-link" href="apps/chat/group.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Group Chat</span>
															</a>

														</div>


														<div className="menu-item">

															<a className="menu-link" href="apps/chat/drawer.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Drawer Chat</span>
															</a>

														</div>

													</div>

												</div>


												<div className="menu-item">

													<a className="menu-link" href="apps/calendar.html">
														<span className="menu-icon">
															<i className="ki-outline ki-calendar-8 fs-2"></i>
														</span>
														<span className="menu-title">Calendar</span>
													</a>

												</div>

											</div>

										</div>


										<div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" data-kt-menu-offset="12,0" className="menu-item menu-lg-down-accordion menu-sub-lg-down-indention me-0 me-lg-2">

											<span className="menu-link">
												<span className="menu-title">Help</span>
												<span className="menu-arrow d-lg-none"></span>
											</span>


											<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown px-lg-2 py-lg-4 w-lg-200px">

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

										</div>

									</div>
									
								</div>
								
							</div>
							
							<div className="app-navbar flex-shrink-0">

								<div className="app-navbar-item me-3" id="kt_header_user_menu_toggle">

									<div className="btn btn-icon btn-icon-gray-600 border border-dashed border-gray-300 w-35px h-35px w-md-40px h-md-40px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
										<i className="ki-outline ki-user fs-3"></i>
									</div>
									
									<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px" data-kt-menu="true">

										<div className="menu-item px-3">
											<div className="menu-content d-flex align-items-center px-3">

												<div className="symbol symbol-50px me-5">
													<img alt="Logo" src="assets/media/avatars/300-5.jpg" />
												</div>


												<div className="d-flex flex-column">
													<div className="fw-bold d-flex align-items-center fs-5">Max Smith 
													<span className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">Pro</span></div>
													<a href="#" className="fw-semibold text-muted text-hover-primary fs-7">max@kt.com</a>
												</div>
												
											</div>
										</div>


										<div className="separator my-2"></div>


										<div className="menu-item px-5">
											<a href="account/overview.html" className="menu-link px-5">My Profile</a>
										</div>


										<div className="menu-item px-5">
											<a href="apps/projects/list.html" className="menu-link px-5">
												<span className="menu-text">My Projects</span>
												<span className="menu-badge">
													<span className="badge badge-light-danger badge-circle fw-bold fs-7">3</span>
												</span>
											</a>
										</div>


										<div className="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="left-start" data-kt-menu-offset="-15px, 0">
											<a href="#" className="menu-link px-5">
												<span className="menu-title">My Subscription</span>
												<span className="menu-arrow"></span>
											</a>

											<div className="menu-sub menu-sub-dropdown w-175px py-4">

												<div className="menu-item px-3">
													<a href="account/referrals.html" className="menu-link px-5">Referrals</a>
												</div>


												<div className="menu-item px-3">
													<a href="account/billing.html" className="menu-link px-5">Billing</a>
												</div>


												<div className="menu-item px-3">
													<a href="account/statements.html" className="menu-link px-5">Payments</a>
												</div>


												<div className="menu-item px-3">
													<a href="account/statements.html" className="menu-link d-flex flex-stack px-5">Statements 
													<span className="ms-2 lh-0" data-bs-toggle="tooltip" title="View your statements">
														<i className="ki-outline ki-information-5 fs-5"></i>
													</span></a>
												</div>


												<div className="separator my-2"></div>


												<div className="menu-item px-3">
													<div className="menu-content px-3">
														<label className="form-check form-switch form-check-custom form-check-solid">
															<input className="form-check-input w-30px h-20px" type="checkbox" value="1"  name="notifications" />
                                                            {/* checked="checked" */}
															<span className="form-check-label text-muted fs-7">Notifications</span>
														</label>
													</div>
												</div>

											</div>

										</div>


										<div className="menu-item px-5">
											<a href="account/statements.html" className="menu-link px-5">My Statements</a>
										</div>


										<div className="separator my-2"></div>


										<div className="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="left-start" data-kt-menu-offset="-15px, 0">
											<a href="#" className="menu-link px-5">
												<span className="menu-title position-relative">Mode 
												<span className="ms-5 position-absolute translate-middle-y top-50 end-0">
													<i className="ki-outline ki-night-day theme-light-show fs-2"></i>
													<i className="ki-outline ki-moon theme-dark-show fs-2"></i>
												</span></span>
											</a>

											<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-gray-500 menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px" data-kt-menu="true" data-kt-element="theme-mode-menu">

												<div className="menu-item px-3 my-0">
													<a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="light">
														<span className="menu-icon" data-kt-element="icon">
															<i className="ki-outline ki-night-day fs-2"></i>
														</span>
														<span className="menu-title">Light</span>
													</a>
												</div>


												<div className="menu-item px-3 my-0">
													<a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="dark">
														<span className="menu-icon" data-kt-element="icon">
															<i className="ki-outline ki-moon fs-2"></i>
														</span>
														<span className="menu-title">Dark</span>
													</a>
												</div>


												<div className="menu-item px-3 my-0">
													<a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="system">
														<span className="menu-icon" data-kt-element="icon">
															<i className="ki-outline ki-screen fs-2"></i>
														</span>
														<span className="menu-title">System</span>
													</a>
												</div>

											</div>

										</div>


										<div className="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="left-start" data-kt-menu-offset="-15px, 0">
											<a href="#" className="menu-link px-5">
												<span className="menu-title position-relative">Language 
												<span className="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">English 
												<img className="w-15px h-15px rounded-1 ms-2" src="assets/media/flags/united-states.svg" alt="" /></span></span>
											</a>

											<div className="menu-sub menu-sub-dropdown w-175px py-4">

												<div className="menu-item px-3">
													<a href="account/settings.html" className="menu-link d-flex px-5 active">
													<span className="symbol symbol-20px me-4">
														<img className="rounded-1" src="assets/media/flags/united-states.svg" alt="" />
													</span>English</a>
												</div>


												<div className="menu-item px-3">
													<a href="account/settings.html" className="menu-link d-flex px-5">
													<span className="symbol symbol-20px me-4">
														<img className="rounded-1" src="assets/media/flags/spain.svg" alt="" />
													</span>Spanish</a>
												</div>


												<div className="menu-item px-3">
													<a href="account/settings.html" className="menu-link d-flex px-5">
													<span className="symbol symbol-20px me-4">
														<img className="rounded-1" src="assets/media/flags/germany.svg" alt="" />
													</span>German</a>
												</div>


												<div className="menu-item px-3">
													<a href="account/settings.html" className="menu-link d-flex px-5">
													<span className="symbol symbol-20px me-4">
														<img className="rounded-1" src="assets/media/flags/japan.svg" alt="" />
													</span>Japanese</a>
												</div>


												<div className="menu-item px-3">
													<a href="account/settings.html" className="menu-link d-flex px-5">
													<span className="symbol symbol-20px me-4">
														<img className="rounded-1" src="assets/media/flags/france.svg" alt="" />
													</span>French</a>
												</div>

											</div>

										</div>


										<div className="menu-item px-5 my-1">
											<a href="account/settings.html" className="menu-link px-5">Account Settings</a>
										</div>


										<div className="menu-item px-5">
											<a href="authentication/layouts/corporate/sign-in.html" className="menu-link px-5">Sign Out</a>
										</div>

									</div>

									
								</div>


								<div className="app-navbar-item me-3">
									<a href="#" className="d-flex align-items-center" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
										<button className="btn btn-icon btn-body position-relative btn btn-icon btn-icon-gray-600 border border-dashed border-gray-300 w-35px h-35px w-md-40px h-md-40px" id="kt_drawer_chat_toggle">
											<i className="ki-outline ki-messages fs-3"></i>
											<span className="position-absolute top-0 start-100 translate-middle badge badge-circle badge-sm badge-info">5</span>
										</button>
									</a>
								</div>
								
								<div className="app-navbar-item me-3">

									<div className="btn btn-icon btn-icon-gray-600 border border-dashed border-gray-300 w-35px h-35px w-md-40px h-md-40px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
										<i className="ki-outline ki-element-11 fs-3"></i>
									</div>

									<div className="menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px" data-kt-menu="true" id="kt_menu_notifications">

										<div className="d-flex flex-column bgi-no-repeat rounded-top" >
                                            {/* style={{backgroundImage:'assets/media/misc/menu-header-bg.jpg'}} */}

											<h3 className="text-white fw-semibold px-9 mt-10 mb-6">Notifications 
											<span className="fs-8 opacity-75 ps-3">24 reports</span></h3>

											
											<ul className="nav nav-line-tabs nav-line-tabs-2x nav-stretch fw-semibold px-9">
												<li className="nav-item">
													<a className="nav-link text-white opacity-75 opacity-state-100 pb-4" data-bs-toggle="tab" href="#kt_topbar_notifications_1">Alerts</a>
												</li>
												<li className="nav-item">
													<a className="nav-link text-white opacity-75 opacity-state-100 pb-4 active" data-bs-toggle="tab" href="#kt_topbar_notifications_2">Updates</a>
												</li>
												<li className="nav-item">
													<a className="nav-link text-white opacity-75 opacity-state-100 pb-4" data-bs-toggle="tab" href="#kt_topbar_notifications_3">Logs</a>
												</li>
											</ul>
											
										</div>


										<div className="tab-content">

											<div className="tab-pane fade" id="kt_topbar_notifications_1" role="tabpanel">

												<div className="scroll-y mh-325px my-5 px-8">

													<div className="d-flex flex-stack py-4">

														<div className="d-flex align-items-center">

															<div className="symbol symbol-35px me-4">
																<span className="symbol-label bg-light-primary">
																	<i className="ki-outline ki-abstract-28 fs-2 text-primary"></i>
																</span>
															</div>


															<div className="mb-0 me-2">
																<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Project Alice</a>
																<div className="text-gray-500 fs-7">Phase 1 development</div>
															</div>

														</div>


														<span className="badge badge-light fs-8">1 hr</span>

													</div>

													<div className="d-flex flex-stack py-4">

														<div className="d-flex align-items-center">

															<div className="symbol symbol-35px me-4">
																<span className="symbol-label bg-light-danger">
																	<i className="ki-outline ki-information fs-2 text-danger"></i>
																</span>
															</div>


															<div className="mb-0 me-2">
																<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">HR Confidential</a>
																<div className="text-gray-500 fs-7">Confidential staff documents</div>
															</div>

														</div>


														<span className="badge badge-light fs-8">2 hrs</span>

													</div>

													<div className="d-flex flex-stack py-4">

														<div className="d-flex align-items-center">

															<div className="symbol symbol-35px me-4">
																<span className="symbol-label bg-light-warning">
																	<i className="ki-outline ki-briefcase fs-2 text-warning"></i>
																</span>
															</div>


															<div className="mb-0 me-2">
																<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Company HR</a>
																<div className="text-gray-500 fs-7">Corporeate staff profiles</div>
															</div>

														</div>


														<span className="badge badge-light fs-8">5 hrs</span>

													</div>

													<div className="d-flex flex-stack py-4">

														<div className="d-flex align-items-center">

															<div className="symbol symbol-35px me-4">
																<span className="symbol-label bg-light-success">
																	<i className="ki-outline ki-abstract-12 fs-2 text-success"></i>
																</span>
															</div>


															<div className="mb-0 me-2">
																<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Project Redux</a>
																<div className="text-gray-500 fs-7">New frontend admin theme</div>
															</div>

														</div>


														<span className="badge badge-light fs-8">2 days</span>

													</div>

													<div className="d-flex flex-stack py-4">

														<div className="d-flex align-items-center">

															<div className="symbol symbol-35px me-4">
																<span className="symbol-label bg-light-primary">
																	<i className="ki-outline ki-colors-square fs-2 text-primary"></i>
																</span>
															</div>


															<div className="mb-0 me-2">
																<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Project Breafing</a>
																<div className="text-gray-500 fs-7">Product launch status update</div>
															</div>

														</div>


														<span className="badge badge-light fs-8">21 Jan</span>

													</div>

													<div className="d-flex flex-stack py-4">

														<div className="d-flex align-items-center">

															<div className="symbol symbol-35px me-4">
																<span className="symbol-label bg-light-info">
																	<i className="ki-outline ki-picture fs-2 text-info"></i>
																</span>
															</div>


															<div className="mb-0 me-2">
																<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Banner Assets</a>
																<div className="text-gray-500 fs-7">Collection of banner images</div>
															</div>

														</div>


														<span className="badge badge-light fs-8">21 Jan</span>

													</div>

													<div className="d-flex flex-stack py-4">

														<div className="d-flex align-items-center">

															<div className="symbol symbol-35px me-4">
																<span className="symbol-label bg-light-warning">
																	<i className="ki-outline ki-color-swatch fs-2 text-warning"></i>
																</span>
															</div>


															<div className="mb-0 me-2">
																<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Icon Assets</a>
																<div className="text-gray-500 fs-7">Collection of SVG icons</div>
															</div>

														</div>


														<span className="badge badge-light fs-8">20 March</span>

													</div>
												</div>


												<div className="py-3 text-center border-top">
													<a href="pages/user-profile/activity.html" className="btn btn-color-gray-600 btn-active-color-primary">View All 
													<i className="ki-outline ki-arrow-right fs-5"></i></a>
												</div>

											</div>


											<div className="tab-pane fade show active" id="kt_topbar_notifications_2" role="tabpanel">

												<div className="d-flex flex-column px-9">

													<div className="pt-10 pb-0">

														<h3 className="text-gray-900 text-center fw-bold">Get Pro Access</h3>


														<div className="text-center text-gray-600 fw-semibold pt-1">Outlines keep you honest. They stoping you from amazing poorly about drive</div>


														<div className="text-center mt-5 mb-9">
															<a href="#" className="btn btn-sm btn-primary px-6" data-bs-toggle="modal" data-bs-target="#kt_modal_upgrade_plan">Upgrade</a>
														</div>

													</div>


													<div className="text-center px-4">
														<img className="mw-100 mh-200px" alt="image" src="assets/media/illustrations/sketchy-1/1.png" />
													</div>

												</div>

											</div>


											<div className="tab-pane fade" id="kt_topbar_notifications_3" role="tabpanel">

												<div className="scroll-y mh-325px my-5 px-8">

													<div className="d-flex flex-stack py-4">

														<div className="d-flex align-items-center me-2">

															<span className="w-70px badge badge-light-success me-4">200 OK</span>


															<a href="#" className="text-gray-800 text-hover-primary fw-semibold">New order</a>

														</div>


														<span className="badge badge-light fs-8">Just now</span>

													</div>

													<div className="d-flex flex-stack py-4">

														<div className="d-flex align-items-center me-2">

															<span className="w-70px badge badge-light-danger me-4">500 ERR</span>


															<a href="#" className="text-gray-800 text-hover-primary fw-semibold">New customer</a>

														</div>


														<span className="badge badge-light fs-8">2 hrs</span>

													</div>

													<div className="d-flex flex-stack py-4">

														<div className="d-flex align-items-center me-2">

															<span className="w-70px badge badge-light-success me-4">200 OK</span>


															<a href="#" className="text-gray-800 text-hover-primary fw-semibold">Payment process</a>

														</div>


														<span className="badge badge-light fs-8">5 hrs</span>

													</div>

													<div className="d-flex flex-stack py-4">

														<div className="d-flex align-items-center me-2">

															<span className="w-70px badge badge-light-warning me-4">300 WRN</span>


															<a href="#" className="text-gray-800 text-hover-primary fw-semibold">Search query</a>

														</div>


														<span className="badge badge-light fs-8">2 days</span>

													</div>

													<div className="d-flex flex-stack py-4">

														<div className="d-flex align-items-center me-2">

															<span className="w-70px badge badge-light-success me-4">200 OK</span>


															<a href="#" className="text-gray-800 text-hover-primary fw-semibold">API connection</a>

														</div>


														<span className="badge badge-light fs-8">1 week</span>

													</div>

													<div className="d-flex flex-stack py-4">

														<div className="d-flex align-items-center me-2">

															<span className="w-70px badge badge-light-success me-4">200 OK</span>


															<a href="#" className="text-gray-800 text-hover-primary fw-semibold">Database restore</a>

														</div>


														<span className="badge badge-light fs-8">Mar 5</span>

													</div>

													<div className="d-flex flex-stack py-4">

														<div className="d-flex align-items-center me-2">

															<span className="w-70px badge badge-light-warning me-4">300 WRN</span>


															<a href="#" className="text-gray-800 text-hover-primary fw-semibold">System update</a>

														</div>


														<span className="badge badge-light fs-8">May 15</span>

													</div>

													<div className="d-flex flex-stack py-4">

														<div className="d-flex align-items-center me-2">

															<span className="w-70px badge badge-light-warning me-4">300 WRN</span>


															<a href="#" className="text-gray-800 text-hover-primary fw-semibold">Server OS update</a>

														</div>


														<span className="badge badge-light fs-8">Apr 3</span>

													</div>

													<div className="d-flex flex-stack py-4">

														<div className="d-flex align-items-center me-2">

															<span className="w-70px badge badge-light-warning me-4">300 WRN</span>


															<a href="#" className="text-gray-800 text-hover-primary fw-semibold">API rollback</a>

														</div>


														<span className="badge badge-light fs-8">Jun 30</span>

													</div>

													<div className="d-flex flex-stack py-4">

														<div className="d-flex align-items-center me-2">

															<span className="w-70px badge badge-light-danger me-4">500 ERR</span>


															<a href="#" className="text-gray-800 text-hover-primary fw-semibold">Refund process</a>

														</div>


														<span className="badge badge-light fs-8">Jul 10</span>

													</div>

													<div className="d-flex flex-stack py-4">

														<div className="d-flex align-items-center me-2">

															<span className="w-70px badge badge-light-danger me-4">500 ERR</span>


															<a href="#" className="text-gray-800 text-hover-primary fw-semibold">Withdrawal process</a>

														</div>


														<span className="badge badge-light fs-8">Sep 10</span>

													</div>

													<div className="d-flex flex-stack py-4">

														<div className="d-flex align-items-center me-2">

															<span className="w-70px badge badge-light-danger me-4">500 ERR</span>


															<a href="#" className="text-gray-800 text-hover-primary fw-semibold">Mail tasks</a>

														</div>


														<span className="badge badge-light fs-8">Dec 10</span>

													</div>
												</div>


												<div className="py-3 text-center border-top">
													<a href="pages/user-profile/activity.html" className="btn btn-color-gray-600 btn-active-color-primary">View All 
													<i className="ki-outline ki-arrow-right fs-5"></i></a>
												</div>

											</div>

										</div>

									</div>


								</div>


								<div className="app-navbar-item me-3">

									<div className="btn btn-icon btn-icon-gray-600 border border-dashed border-gray-300 w-35px h-35px w-md-40px h-md-40px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
										<i className="ki-outline ki-setting-3 fs-3"></i>
									</div>

									<div className="menu menu-sub menu-sub-dropdown menu-column w-250px w-lg-325px" data-kt-menu="true">

										<div className="d-flex flex-column flex-center bgi-no-repeat rounded-top px-9 py-10" >
                                            {/* style="background-image:url('assets/media/misc/menu-header-bg.jpg')" */}

											<h3 className="text-white fw-semibold mb-3">Quick Links</h3>

											
											<span className="badge bg-primary text-inverse-primary py-2 px-3">25 pending tasks</span>
											
										</div>


										<div className="row g-0">

											<div className="col-6">
												<a href="apps/projects/budget.html" className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-end border-bottom">
													<i className="ki-outline ki-dollar fs-3x text-primary mb-2"></i>
													<span className="fs-5 fw-semibold text-gray-800 mb-0">Accounting</span>
													<span className="fs-7 text-gray-500">eCommerce</span>
												</a>
											</div>


											<div className="col-6">
												<a href="apps/projects/settings.html" className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-bottom">
													<i className="ki-outline ki-sms fs-3x text-primary mb-2"></i>
													<span className="fs-5 fw-semibold text-gray-800 mb-0">Administration</span>
													<span className="fs-7 text-gray-500">Console</span>
												</a>
											</div>


											<div className="col-6">
												<a href="apps/projects/list.html" className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-end">
													<i className="ki-outline ki-abstract-41 fs-3x text-primary mb-2"></i>
													<span className="fs-5 fw-semibold text-gray-800 mb-0">Projects</span>
													<span className="fs-7 text-gray-500">Pending Tasks</span>
												</a>
											</div>


											<div className="col-6">
												<a href="apps/projects/users.html" className="d-flex flex-column flex-center h-100 p-6 bg-hover-light">
													<i className="ki-outline ki-briefcase fs-3x text-primary mb-2"></i>
													<span className="fs-5 fw-semibold text-gray-800 mb-0">Customers</span>
													<span className="fs-7 text-gray-500">Latest cases</span>
												</a>
											</div>

										</div>


										<div className="py-2 text-center border-top">
											<a href="pages/user-profile/activity.html" className="btn btn-color-gray-600 btn-active-color-primary">View All 
											<i className="ki-outline ki-arrow-right fs-5"></i></a>
										</div>

									</div>


								</div>


								<div className="app-navbar-item">
									<a href="#" className="btn btn-flex btn-icon align-self-center fw-bold btn-success w-35px w-md-100 h-35px h-md-40px px-4" data-bs-toggle="modal" data-bs-target="#kt_modal_upgrade_plan">
										<i className="ki-outline ki-crown-2 fs-3"></i>
										<span className="d-none d-md-inline ms-2">Try Premium</span>
									</a>
								</div>

								
								<div className="app-navbar-item d-flex align-items-center d-lg-none ms-1 me-n3">
									<a href="#" className="btn btn-icon btn-color-gray-500 btn-active-color-primary w-35px h-35px" id="kt_app_header_menu_toggle">
										<i className="ki-outline ki-text-align-left fs-1"></i>
									</a>
								</div>
								
							</div>
							
						</div>
						
					</div>
					
				</div>
				


				<div className="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">

					<div className="app-container container-fluid d-flex flex-grow-1">

						<div id="kt_app_sidebar" className="app-sidebar flex-column flex-shrink-0" data-kt-drawer="true" data-kt-drawer-name="app-sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="auto" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle">

							<div className="hover-scroll-overlay-y me-lg-4 mb-5" data-kt-sticky="true" data-kt-sticky-name="app-sidebar-menu-sticky" data-kt-sticky-offset="{default: false, xl: '400px'}" data-kt-sticky-release="#kt_app_stats" data-kt-sticky-width="auto" data-kt-sticky-left="auto" data-kt-sticky-top="100px" data-kt-sticky-animation="false" data-kt-sticky-zindex="95" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_app_header, #kt_app_footer" data-kt-scroll-wrappers="#kt_app_sidebar_nav" data-kt-scroll-offset="0px">
								
                                
								<ul className="nav flex-column w-lg-100" id="kt_app_sidebar_nav">

									<li className="nav-item mb-2">

										<a className="nav-link btn btn-icon btn-active-info btn-color-gray-600" data-bs-toggle="tab" href="#">
											<i className="ki-outline ki-home-2 fs-2"></i>
										</a>

									</li>


									<li className="nav-item mb-2">

										<a className="nav-link btn btn-icon btn-active-info btn-color-gray-600" data-bs-toggle="tab" href="#">
											<i className="ki-outline ki-handcart fs-2"></i>
										</a>

									</li>


									<li className="nav-item mb-2">

										<a className="nav-link btn btn-icon btn-active-info btn-color-gray-600 active" data-bs-toggle="tab" href="#">
											<i className="ki-outline ki-paypal fs-2"></i>
										</a>

									</li>


									<li className="nav-item mb-2">

										<a className="nav-link btn btn-icon btn-active-info btn-color-gray-600" data-bs-toggle="tab" href="#">
											<i className="ki-outline ki-cheque fs-2"></i>
										</a>

									</li>


									<li className="nav-item mb-2">

										<a className="nav-link btn btn-icon btn-active-info btn-color-gray-600" data-bs-toggle="tab" href="#">
											<i className="ki-outline ki-address-book fs-2"></i>
										</a>

									</li>


									<li className="nav-item mb-2">

										<a className="nav-link btn btn-icon btn-active-info btn-color-gray-600" data-bs-toggle="tab" href="#">
											<i className="ki-outline ki-note-2 fs-2"></i>
										</a>

									</li>


									<li className="nav-item mb-2">

										<a className="nav-link btn btn-icon btn-active-info btn-color-gray-600" data-bs-toggle="tab" href="#">
											<i className="ki-outline ki-security-user fs-2"></i>
										</a>

									</li>


									<li className="nav-item mb-2">

										<a className="nav-link btn btn-icon btn-active-info btn-color-gray-600" data-bs-toggle="tab" href="#">
											<i className="ki-outline ki-information fs-2"></i>
										</a>

									</li>

								</ul>

							</div>

						</div>

						
						<div className="app-main flex-column flex-row-fluid" id="kt_app_main">

							<div className="d-flex flex-column flex-column-fluid">

								<div id="kt_app_toolbar" className="app-toolbar pt-7 pt-lg-10">
									
									<div className="app-toolbar-wrapper d-flex flex-stack flex-wrap gap-4 w-100">
										
										<div className="page-title d-flex flex-column justify-content-center gap-1 me-3 ms-1">
											
											<ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7">

												<li className="breadcrumb-item text-gray-700 fw-bold lh-1 mx-n1">
													<a href="index.html" className="text-hover-primary">
														<i className="ki-outline ki-home text-gray-700 fs-6"></i>
													</a>
												</li>

												<li className="breadcrumb-item">
													<i className="ki-outline ki-right fs-7 text-gray-700"></i>
												</li>

												<li className="breadcrumb-item text-gray-700 fw-bold lh-1 mx-n1">Account</li>

												<li className="breadcrumb-item">
													<i className="ki-outline ki-right fs-7 text-gray-700"></i>
												</li>

												<li className="breadcrumb-item text-gray-500 mx-n1">Overview</li>
											</ul>
											

											<h1 className="page-heading d-flex flex-column justify-content-center text-gray-900 fw-bold fs-3 ms-n1">Account Settings</h1>

										</div>
										

										<div className="d-flex align-items-center gap-2 gap-lg-3">
											<a href="#" className="btn btn-flex btn-outline btn-color-gray-700 btn-active-color-primary bg-body h-40px fs-7 fw-bold" data-bs-toggle="modal" data-bs-target="#kt_modal_view_users">Add Member</a>
											<a href="#" className="btn btn-flex btn-primary h-40px fs-7 fw-bold" data-bs-toggle="modal" data-bs-target="#kt_modal_create_campaign">New Campaign</a>
										</div>

									</div>

								</div>


								<div id="kt_app_content" className="app-content">

									<div className="card mb-5 mb-xl-10">
										<div className="card-body pt-9 pb-0">

											<div className="d-flex flex-wrap flex-sm-nowrap">

												<div className="me-7 mb-4">
													<div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
														<img src="assets/media/avatars/300-1.jpg" alt="image" />
														<div className="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-body h-20px w-20px"></div>
													</div>
												</div>
												

												<div className="flex-grow-1">

													<div className="d-flex justify-content-between align-items-start flex-wrap mb-2">

														<div className="d-flex flex-column">

															<div className="d-flex align-items-center mb-2">
																<a href="#" className="text-gray-900 text-hover-primary fs-2 fw-bold me-1">Max Smith</a>
																<a href="#">
																	<i className="ki-outline ki-verify fs-1 text-primary"></i>
																</a>
															</div>


															<div className="d-flex flex-wrap fw-semibold fs-6 mb-4 pe-2">
																<a href="#" className="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2">
																<i className="ki-outline ki-profile-circle fs-4 me-1"></i>Developer</a>
																<a href="#" className="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2">
																<i className="ki-outline ki-geolocation fs-4 me-1"></i>SF, Bay Area</a>
																<a href="#" className="d-flex align-items-center text-gray-500 text-hover-primary mb-2">
																<i className="ki-outline ki-sms fs-4"></i>max@kt.com</a>
															</div>

														</div>


														<div className="d-flex my-4">
															<a href="#" className="btn btn-sm btn-light me-2" id="kt_user_follow_button">
																<i className="ki-outline ki-check fs-3 d-none"></i>

																<span className="indicator-label">Follow</span>


																<span className="indicator-progress">Please wait... 
																<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>

															</a>
															<a href="#" className="btn btn-sm btn-primary me-3" data-bs-toggle="modal" data-bs-target="#kt_modal_offer_a_deal">Hire Me</a>

															<div className="me-0">
																<button className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
																	<i className="ki-solid ki-dots-horizontal fs-2x"></i>
																</button>

																<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3" data-kt-menu="true">

																	<div className="menu-item px-3">
																		<div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Payments</div>
																	</div>


																	<div className="menu-item px-3">
																		<a href="#" className="menu-link px-3">Create Invoice</a>
																	</div>


																	<div className="menu-item px-3">
																		<a href="#" className="menu-link flex-stack px-3">Create Payment 
																		<span className="ms-2" data-bs-toggle="tooltip" title="Specify a target name for future usage and reference">
																			<i className="ki-outline ki-information fs-6"></i>
																		</span></a>
																	</div>


																	<div className="menu-item px-3">
																		<a href="#" className="menu-link px-3">Generate Bill</a>
																	</div>


																	<div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
																		<a href="#" className="menu-link px-3">
																			<span className="menu-title">Subscription</span>
																			<span className="menu-arrow"></span>
																		</a>

																		<div className="menu-sub menu-sub-dropdown w-175px py-4">

																			<div className="menu-item px-3">
																				<a href="#" className="menu-link px-3">Plans</a>
																			</div>


																			<div className="menu-item px-3">
																				<a href="#" className="menu-link px-3">Billing</a>
																			</div>


																			<div className="menu-item px-3">
																				<a href="#" className="menu-link px-3">Statements</a>
																			</div>


																			<div className="separator my-2"></div>


																			<div className="menu-item px-3">
																				<div className="menu-content px-3">

																					<label className="form-check form-switch form-check-custom form-check-solid">

																						<input className="form-check-input w-30px h-20px" type="checkbox" value="1"  name="notifications" />
                                                                                        {/* checked="checked" */}

																						<span className="form-check-label text-muted fs-6">Recuring</span>

																					</label>
																				</div>
																			</div>

																		</div>

																	</div>


																	<div className="menu-item px-3 my-1">
																		<a href="#" className="menu-link px-3">Settings</a>
																	</div>

																</div>

															</div>

														</div>

													</div>


													<div className="d-flex flex-wrap flex-stack">

														<div className="d-flex flex-column flex-grow-1 pe-8">

															<div className="d-flex flex-wrap">

																<div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">

																	<div className="d-flex align-items-center">
																		<i className="ki-outline ki-arrow-up fs-3 text-success me-2"></i>
																		<div className="fs-2 fw-bold" data-kt-countup="true" data-kt-countup-value="4500" data-kt-countup-prefix="$">0</div>
																	</div>


																	<div className="fw-semibold fs-6 text-gray-500">Earnings</div>

																</div>


																<div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">

																	<div className="d-flex align-items-center">
																		<i className="ki-outline ki-arrow-down fs-3 text-danger me-2"></i>
																		<div className="fs-2 fw-bold" data-kt-countup="true" data-kt-countup-value="80">0</div>
																	</div>


																	<div className="fw-semibold fs-6 text-gray-500">Projects</div>

																</div>


																<div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">

																	<div className="d-flex align-items-center">
																		<i className="ki-outline ki-arrow-up fs-3 text-success me-2"></i>
																		<div className="fs-2 fw-bold" data-kt-countup="true" data-kt-countup-value="60" data-kt-countup-prefix="%">0</div>
																	</div>


																	<div className="fw-semibold fs-6 text-gray-500">Success Rate</div>

																</div>

															</div>

														</div>


														<div className="d-flex align-items-center w-200px w-sm-300px flex-column mt-3">
															<div className="d-flex justify-content-between w-100 mt-auto mb-2">
																<span className="fw-semibold fs-6 text-gray-500">Profile Compleation</span>
																<span className="fw-bold fs-6">50%</span>
															</div>
															<div className="h-5px mx-3 w-100 bg-light mb-3">
																<div className="bg-success rounded h-5px" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
															</div>
														</div>

													</div>

												</div>

											</div>


											<ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold">

												<li className="nav-item mt-2">
													<a className="nav-link text-active-primary ms-0 me-10 py-5" href="account/overview.html">Overview</a>
												</li>


												<li className="nav-item mt-2">
													<a className="nav-link text-active-primary ms-0 me-10 py-5 active" href="account/settings.html">Settings</a>
												</li>


												<li className="nav-item mt-2">
													<a className="nav-link text-active-primary ms-0 me-10 py-5" href="account/security.html">Security</a>
												</li>


												<li className="nav-item mt-2">
													<a className="nav-link text-active-primary ms-0 me-10 py-5" href="account/activity.html">Activity</a>
												</li>


												<li className="nav-item mt-2">
													<a className="nav-link text-active-primary ms-0 me-10 py-5" href="account/billing.html">Billing</a>
												</li>


												<li className="nav-item mt-2">
													<a className="nav-link text-active-primary ms-0 me-10 py-5" href="account/statements.html">Statements</a>
												</li>


												<li className="nav-item mt-2">
													<a className="nav-link text-active-primary ms-0 me-10 py-5" href="account/referrals.html">Referrals</a>
												</li>


												<li className="nav-item mt-2">
													<a className="nav-link text-active-primary ms-0 me-10 py-5" href="account/api-keys.html">API Keys</a>
												</li>


												<li className="nav-item mt-2">
													<a className="nav-link text-active-primary ms-0 me-10 py-5" href="account/logs.html">Logs</a>
												</li>

											</ul>

										</div>
									</div>

									{/* start */}
									<div className="card mb-5 mb-xl-10">

										<div className="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_profile_details" aria-expanded="true" aria-controls="kt_account_profile_details">

											<div className="card-title m-0">
												<h3 className="fw-bold m-0">Profile Details</h3>
											</div>
											
										</div>


										<div id="kt_account_settings_profile_details" className="collapse show">

											<form id="kt_account_profile_details_form" className="form">

												<div className="card-body border-top p-9">

													<div className="row mb-6">

														<label className="col-lg-4 col-form-label fw-semibold fs-6">Avatar</label>


														<div className="col-lg-8">

															<div className="image-input image-input-outline" data-kt-image-input="true" >
                                                                {/* style="background-image: url('assets/media/svg/avatars/blank.svg')" */}

																<div className="image-input-wrapper w-125px h-125px" ></div>
                                                                {/* style="background-image: url(assets/media/avatars/300-1.jpg)" */}


																<label className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change avatar">
																	<i className="ki-outline ki-pencil fs-7"></i>

																	<input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
																	<input type="hidden" name="avatar_remove" />

																</label>


																<span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="Cancel avatar">
																	<i className="ki-outline ki-cross fs-2"></i>
																</span>


																<span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="Remove avatar">
																	<i className="ki-outline ki-cross fs-2"></i>
																</span>

															</div>
															
															
															<div className="form-text">Allowed file types: png, jpg, jpeg.</div>
															
														</div>

													</div>


													<div className="row mb-6">

														<label className="col-lg-4 col-form-label required fw-semibold fs-6">Full Name</label>


														<div className="col-lg-8">

															<div className="row">

																<div className="col-lg-6 fv-row">
																	<input type="text" name="fname" className="form-control form-control-lg form-control-solid mb-3 mb-lg-0" placeholder="First name" value="Max" />
																</div>


																<div className="col-lg-6 fv-row">
																	<input type="text" name="lname" className="form-control form-control-lg form-control-solid" placeholder="Last name" value="Smith" />
																</div>

															</div>

														</div>

													</div>


													<div className="row mb-6">

														<label className="col-lg-4 col-form-label required fw-semibold fs-6">Company</label>


														<div className="col-lg-8 fv-row">
															<input type="text" name="company" className="form-control form-control-lg form-control-solid" placeholder="Company name" value="Keenthemes" />
														</div>

													</div>


													<div className="row mb-6">

														<label className="col-lg-4 col-form-label fw-semibold fs-6">
															<span className="required">Contact Phone</span>
															<span className="ms-1" data-bs-toggle="tooltip" title="Phone number must be active">
																<i className="ki-outline ki-information-5 text-gray-500 fs-6"></i>
															</span>
														</label>


														<div className="col-lg-8 fv-row">
															<input type="tel" name="phone" className="form-control form-control-lg form-control-solid" placeholder="Phone number" value="044 3276 454 935" />
														</div>

													</div>


													<div className="row mb-6">

														<label className="col-lg-4 col-form-label fw-semibold fs-6">Company Site</label>


														<div className="col-lg-8 fv-row">
															<input type="text" name="website" className="form-control form-control-lg form-control-solid" placeholder="Company website" value="keenthemes.com" />
														</div>

													</div>


													<div className="row mb-6">

														<label className="col-lg-4 col-form-label fw-semibold fs-6">
															<span className="required">Country</span>
															<span className="ms-1" data-bs-toggle="tooltip" title="Country of origination">
																<i className="ki-outline ki-information-5 text-gray-500 fs-6"></i>
															</span>
														</label>


														<div className="col-lg-8 fv-row">
															<select name="country" aria-label="Select a Country" data-control="select2" data-placeholder="Select a country..." className="form-select form-select-solid form-select-lg fw-semibold">
																<option value="">Select a Country...</option>
																<option data-kt-flag="flags/afghanistan.svg" value="AF">Afghanistan</option>
																<option data-kt-flag="flags/aland-islands.svg" value="AX">Aland Islands</option>
																<option data-kt-flag="flags/albania.svg" value="AL">Albania</option>
																<option data-kt-flag="flags/algeria.svg" value="DZ">Algeria</option>
																<option data-kt-flag="flags/american-samoa.svg" value="AS">American Samoa</option>
																<option data-kt-flag="flags/andorra.svg" value="AD">Andorra</option>
																<option data-kt-flag="flags/angola.svg" value="AO">Angola</option>
																<option data-kt-flag="flags/anguilla.svg" value="AI">Anguilla</option>
																<option data-kt-flag="flags/antigua-and-barbuda.svg" value="AG">Antigua and Barbuda</option>
																<option data-kt-flag="flags/argentina.svg" value="AR">Argentina</option>
																<option data-kt-flag="flags/armenia.svg" value="AM">Armenia</option>
																<option data-kt-flag="flags/aruba.svg" value="AW">Aruba</option>
																<option data-kt-flag="flags/australia.svg" value="AU">Australia</option>
																<option data-kt-flag="flags/austria.svg" value="AT">Austria</option>
																<option data-kt-flag="flags/azerbaijan.svg" value="AZ">Azerbaijan</option>
																<option data-kt-flag="flags/bahamas.svg" value="BS">Bahamas</option>
																<option data-kt-flag="flags/bahrain.svg" value="BH">Bahrain</option>
																<option data-kt-flag="flags/bangladesh.svg" value="BD">Bangladesh</option>
																<option data-kt-flag="flags/barbados.svg" value="BB">Barbados</option>
																<option data-kt-flag="flags/belarus.svg" value="BY">Belarus</option>
																<option data-kt-flag="flags/belgium.svg" value="BE">Belgium</option>
																<option data-kt-flag="flags/belize.svg" value="BZ">Belize</option>
																<option data-kt-flag="flags/benin.svg" value="BJ">Benin</option>
																<option data-kt-flag="flags/bermuda.svg" value="BM">Bermuda</option>
																<option data-kt-flag="flags/bhutan.svg" value="BT">Bhutan</option>
																<option data-kt-flag="flags/bolivia.svg" value="BO">Bolivia, Plurinational State of</option>
																<option data-kt-flag="flags/bonaire.svg" value="BQ">Bonaire, Sint Eustatius and Saba</option>
																<option data-kt-flag="flags/bosnia-and-herzegovina.svg" value="BA">Bosnia and Herzegovina</option>
																<option data-kt-flag="flags/botswana.svg" value="BW">Botswana</option>
																<option data-kt-flag="flags/brazil.svg" value="BR">Brazil</option>
																<option data-kt-flag="flags/british-indian-ocean-territory.svg" value="IO">British Indian Ocean Territory</option>
																<option data-kt-flag="flags/brunei.svg" value="BN">Brunei Darussalam</option>
																<option data-kt-flag="flags/bulgaria.svg" value="BG">Bulgaria</option>
																<option data-kt-flag="flags/burkina-faso.svg" value="BF">Burkina Faso</option>
																<option data-kt-flag="flags/burundi.svg" value="BI">Burundi</option>
																<option data-kt-flag="flags/cambodia.svg" value="KH">Cambodia</option>
																<option data-kt-flag="flags/cameroon.svg" value="CM">Cameroon</option>
																<option data-kt-flag="flags/canada.svg" value="CA">Canada</option>
																<option data-kt-flag="flags/cape-verde.svg" value="CV">Cape Verde</option>
																<option data-kt-flag="flags/cayman-islands.svg" value="KY">Cayman Islands</option>
																<option data-kt-flag="flags/central-african-republic.svg" value="CF">Central African Republic</option>
																<option data-kt-flag="flags/chad.svg" value="TD">Chad</option>
																<option data-kt-flag="flags/chile.svg" value="CL">Chile</option>
																<option data-kt-flag="flags/china.svg" value="CN">China</option>
																<option data-kt-flag="flags/christmas-island.svg" value="CX">Christmas Island</option>
																<option data-kt-flag="flags/cocos-island.svg" value="CC">Cocos (Keeling) Islands</option>
																<option data-kt-flag="flags/colombia.svg" value="CO">Colombia</option>
																<option data-kt-flag="flags/comoros.svg" value="KM">Comoros</option>
																<option data-kt-flag="flags/cook-islands.svg" value="CK">Cook Islands</option>
																<option data-kt-flag="flags/costa-rica.svg" value="CR">Costa Rica</option>
																<option data-kt-flag="flags/ivory-coast.svg" value="CI">Côte d'Ivoire</option>
																<option data-kt-flag="flags/croatia.svg" value="HR">Croatia</option>
																<option data-kt-flag="flags/cuba.svg" value="CU">Cuba</option>
																<option data-kt-flag="flags/curacao.svg" value="CW">Curaçao</option>
																<option data-kt-flag="flags/czech-republic.svg" value="CZ">Czech Republic</option>
																<option data-kt-flag="flags/denmark.svg" value="DK">Denmark</option>
																<option data-kt-flag="flags/djibouti.svg" value="DJ">Djibouti</option>
																<option data-kt-flag="flags/dominica.svg" value="DM">Dominica</option>
																<option data-kt-flag="flags/dominican-republic.svg" value="DO">Dominican Republic</option>
																<option data-kt-flag="flags/ecuador.svg" value="EC">Ecuador</option>
																<option data-kt-flag="flags/egypt.svg" value="EG">Egypt</option>
																<option data-kt-flag="flags/el-salvador.svg" value="SV">El Salvador</option>
																<option data-kt-flag="flags/equatorial-guinea.svg" value="GQ">Equatorial Guinea</option>
																<option data-kt-flag="flags/eritrea.svg" value="ER">Eritrea</option>
																<option data-kt-flag="flags/estonia.svg" value="EE">Estonia</option>
																<option data-kt-flag="flags/ethiopia.svg" value="ET">Ethiopia</option>
																<option data-kt-flag="flags/falkland-islands.svg" value="FK">Falkland Islands (Malvinas)</option>
																<option data-kt-flag="flags/fiji.svg" value="FJ">Fiji</option>
																<option data-kt-flag="flags/finland.svg" value="FI">Finland</option>
																<option data-kt-flag="flags/france.svg" value="FR">France</option>
																<option data-kt-flag="flags/french-polynesia.svg" value="PF">French Polynesia</option>
																<option data-kt-flag="flags/gabon.svg" value="GA">Gabon</option>
																<option data-kt-flag="flags/gambia.svg" value="GM">Gambia</option>
																<option data-kt-flag="flags/georgia.svg" value="GE">Georgia</option>
																<option data-kt-flag="flags/germany.svg" value="DE">Germany</option>
																<option data-kt-flag="flags/ghana.svg" value="GH">Ghana</option>
																<option data-kt-flag="flags/gibraltar.svg" value="GI">Gibraltar</option>
																<option data-kt-flag="flags/greece.svg" value="GR">Greece</option>
																<option data-kt-flag="flags/greenland.svg" value="GL">Greenland</option>
																<option data-kt-flag="flags/grenada.svg" value="GD">Grenada</option>
																<option data-kt-flag="flags/guam.svg" value="GU">Guam</option>
																<option data-kt-flag="flags/guatemala.svg" value="GT">Guatemala</option>
																<option data-kt-flag="flags/guernsey.svg" value="GG">Guernsey</option>
																<option data-kt-flag="flags/guinea.svg" value="GN">Guinea</option>
																<option data-kt-flag="flags/guinea-bissau.svg" value="GW">Guinea-Bissau</option>
																<option data-kt-flag="flags/haiti.svg" value="HT">Haiti</option>
																<option data-kt-flag="flags/vatican-city.svg" value="VA">Holy See (Vatican City State)</option>
																<option data-kt-flag="flags/honduras.svg" value="HN">Honduras</option>
																<option data-kt-flag="flags/hong-kong.svg" value="HK">Hong Kong</option>
																<option data-kt-flag="flags/hungary.svg" value="HU">Hungary</option>
																<option data-kt-flag="flags/iceland.svg" value="IS">Iceland</option>
																<option data-kt-flag="flags/india.svg" value="IN">India</option>
																<option data-kt-flag="flags/indonesia.svg" value="ID">Indonesia</option>
																<option data-kt-flag="flags/iran.svg" value="IR">Iran, Islamic Republic of</option>
																<option data-kt-flag="flags/iraq.svg" value="IQ">Iraq</option>
																<option data-kt-flag="flags/ireland.svg" value="IE">Ireland</option>
																<option data-kt-flag="flags/isle-of-man.svg" value="IM">Isle of Man</option>
																<option data-kt-flag="flags/israel.svg" value="IL">Israel</option>
																<option data-kt-flag="flags/italy.svg" value="IT">Italy</option>
																<option data-kt-flag="flags/jamaica.svg" value="JM">Jamaica</option>
																<option data-kt-flag="flags/japan.svg" value="JP">Japan</option>
																<option data-kt-flag="flags/jersey.svg" value="JE">Jersey</option>
																<option data-kt-flag="flags/jordan.svg" value="JO">Jordan</option>
																<option data-kt-flag="flags/kazakhstan.svg" value="KZ">Kazakhstan</option>
																<option data-kt-flag="flags/kenya.svg" value="KE">Kenya</option>
																<option data-kt-flag="flags/kiribati.svg" value="KI">Kiribati</option>
																<option data-kt-flag="flags/north-korea.svg" value="KP">Korea, Democratic People's Republic of</option>
																<option data-kt-flag="flags/kuwait.svg" value="KW">Kuwait</option>
																<option data-kt-flag="flags/kyrgyzstan.svg" value="KG">Kyrgyzstan</option>
																<option data-kt-flag="flags/laos.svg" value="LA">Lao People's Democratic Republic</option>
																<option data-kt-flag="flags/latvia.svg" value="LV">Latvia</option>
																<option data-kt-flag="flags/lebanon.svg" value="LB">Lebanon</option>
																<option data-kt-flag="flags/lesotho.svg" value="LS">Lesotho</option>
																<option data-kt-flag="flags/liberia.svg" value="LR">Liberia</option>
																<option data-kt-flag="flags/libya.svg" value="LY">Libya</option>
																<option data-kt-flag="flags/liechtenstein.svg" value="LI">Liechtenstein</option>
																<option data-kt-flag="flags/lithuania.svg" value="LT">Lithuania</option>
																<option data-kt-flag="flags/luxembourg.svg" value="LU">Luxembourg</option>
																<option data-kt-flag="flags/macao.svg" value="MO">Macao</option>
																<option data-kt-flag="flags/madagascar.svg" value="MG">Madagascar</option>
																<option data-kt-flag="flags/malawi.svg" value="MW">Malawi</option>
																<option data-kt-flag="flags/malaysia.svg" value="MY">Malaysia</option>
																<option data-kt-flag="flags/maldives.svg" value="MV">Maldives</option>
																<option data-kt-flag="flags/mali.svg" value="ML">Mali</option>
																<option data-kt-flag="flags/malta.svg" value="MT">Malta</option>
																<option data-kt-flag="flags/marshall-island.svg" value="MH">Marshall Islands</option>
																<option data-kt-flag="flags/martinique.svg" value="MQ">Martinique</option>
																<option data-kt-flag="flags/mauritania.svg" value="MR">Mauritania</option>
																<option data-kt-flag="flags/mauritius.svg" value="MU">Mauritius</option>
																<option data-kt-flag="flags/mexico.svg" value="MX">Mexico</option>
																<option data-kt-flag="flags/micronesia.svg" value="FM">Micronesia, Federated States of</option>
																<option data-kt-flag="flags/moldova.svg" value="MD">Moldova, Republic of</option>
																<option data-kt-flag="flags/monaco.svg" value="MC">Monaco</option>
																<option data-kt-flag="flags/mongolia.svg" value="MN">Mongolia</option>
																<option data-kt-flag="flags/montenegro.svg" value="ME">Montenegro</option>
																<option data-kt-flag="flags/montserrat.svg" value="MS">Montserrat</option>
																<option data-kt-flag="flags/morocco.svg" value="MA">Morocco</option>
																<option data-kt-flag="flags/mozambique.svg" value="MZ">Mozambique</option>
																<option data-kt-flag="flags/myanmar.svg" value="MM">Myanmar</option>
																<option data-kt-flag="flags/namibia.svg" value="NA">Namibia</option>
																<option data-kt-flag="flags/nauru.svg" value="NR">Nauru</option>
																<option data-kt-flag="flags/nepal.svg" value="NP">Nepal</option>
																<option data-kt-flag="flags/netherlands.svg" value="NL">Netherlands</option>
																<option data-kt-flag="flags/new-zealand.svg" value="NZ">New Zealand</option>
																<option data-kt-flag="flags/nicaragua.svg" value="NI">Nicaragua</option>
																<option data-kt-flag="flags/niger.svg" value="NE">Niger</option>
																<option data-kt-flag="flags/nigeria.svg" value="NG">Nigeria</option>
																<option data-kt-flag="flags/niue.svg" value="NU">Niue</option>
																<option data-kt-flag="flags/norfolk-island.svg" value="NF">Norfolk Island</option>
																<option data-kt-flag="flags/northern-mariana-islands.svg" value="MP">Northern Mariana Islands</option>
																<option data-kt-flag="flags/norway.svg" value="NO">Norway</option>
																<option data-kt-flag="flags/oman.svg" value="OM">Oman</option>
																<option data-kt-flag="flags/pakistan.svg" value="PK">Pakistan</option>
																<option data-kt-flag="flags/palau.svg" value="PW">Palau</option>
																<option data-kt-flag="flags/palestine.svg" value="PS">Palestinian Territory, Occupied</option>
																<option data-kt-flag="flags/panama.svg" value="PA">Panama</option>
																<option data-kt-flag="flags/papua-new-guinea.svg" value="PG">Papua New Guinea</option>
																<option data-kt-flag="flags/paraguay.svg" value="PY">Paraguay</option>
																<option data-kt-flag="flags/peru.svg" value="PE">Peru</option>
																<option data-kt-flag="flags/philippines.svg" value="PH">Philippines</option>
																<option data-kt-flag="flags/poland.svg" value="PL">Poland</option>
																<option data-kt-flag="flags/portugal.svg" value="PT">Portugal</option>
																<option data-kt-flag="flags/puerto-rico.svg" value="PR">Puerto Rico</option>
																<option data-kt-flag="flags/qatar.svg" value="QA">Qatar</option>
																<option data-kt-flag="flags/romania.svg" value="RO">Romania</option>
																<option data-kt-flag="flags/russia.svg" value="RU">Russian Federation</option>
																<option data-kt-flag="flags/rwanda.svg" value="RW">Rwanda</option>
																<option data-kt-flag="flags/st-barts.svg" value="BL">Saint Barthélemy</option>
																<option data-kt-flag="flags/saint-kitts-and-nevis.svg" value="KN">Saint Kitts and Nevis</option>
																<option data-kt-flag="flags/st-lucia.svg" value="LC">Saint Lucia</option>
																<option data-kt-flag="flags/sint-maarten.svg" value="MF">Saint Martin (French part)</option>
																<option data-kt-flag="flags/st-vincent-and-the-grenadines.svg" value="VC">Saint Vincent and the Grenadines</option>
																<option data-kt-flag="flags/samoa.svg" value="WS">Samoa</option>
																<option data-kt-flag="flags/san-marino.svg" value="SM">San Marino</option>
																<option data-kt-flag="flags/sao-tome-and-prince.svg" value="ST">Sao Tome and Principe</option>
																<option data-kt-flag="flags/saudi-arabia.svg" value="SA">Saudi Arabia</option>
																<option data-kt-flag="flags/senegal.svg" value="SN">Senegal</option>
																<option data-kt-flag="flags/serbia.svg" value="RS">Serbia</option>
																<option data-kt-flag="flags/seychelles.svg" value="SC">Seychelles</option>
																<option data-kt-flag="flags/sierra-leone.svg" value="SL">Sierra Leone</option>
																<option data-kt-flag="flags/singapore.svg" value="SG">Singapore</option>
																<option data-kt-flag="flags/sint-maarten.svg" value="SX">Sint Maarten (Dutch part)</option>
																<option data-kt-flag="flags/slovakia.svg" value="SK">Slovakia</option>
																<option data-kt-flag="flags/slovenia.svg" value="SI">Slovenia</option>
																<option data-kt-flag="flags/solomon-islands.svg" value="SB">Solomon Islands</option>
																<option data-kt-flag="flags/somalia.svg" value="SO">Somalia</option>
																<option data-kt-flag="flags/south-africa.svg" value="ZA">South Africa</option>
																<option data-kt-flag="flags/south-korea.svg" value="KR">South Korea</option>
																<option data-kt-flag="flags/south-sudan.svg" value="SS">South Sudan</option>
																<option data-kt-flag="flags/spain.svg" value="ES">Spain</option>
																<option data-kt-flag="flags/sri-lanka.svg" value="LK">Sri Lanka</option>
																<option data-kt-flag="flags/sudan.svg" value="SD">Sudan</option>
																<option data-kt-flag="flags/suriname.svg" value="SR">Suriname</option>
																<option data-kt-flag="flags/swaziland.svg" value="SZ">Swaziland</option>
																<option data-kt-flag="flags/sweden.svg" value="SE">Sweden</option>
																<option data-kt-flag="flags/switzerland.svg" value="CH">Switzerland</option>
																<option data-kt-flag="flags/syria.svg" value="SY">Syrian Arab Republic</option>
																<option data-kt-flag="flags/taiwan.svg" value="TW">Taiwan, Province of China</option>
																<option data-kt-flag="flags/tajikistan.svg" value="TJ">Tajikistan</option>
																<option data-kt-flag="flags/tanzania.svg" value="TZ">Tanzania, United Republic of</option>
																<option data-kt-flag="flags/thailand.svg" value="TH">Thailand</option>
																<option data-kt-flag="flags/togo.svg" value="TG">Togo</option>
																<option data-kt-flag="flags/tokelau.svg" value="TK">Tokelau</option>
																<option data-kt-flag="flags/tonga.svg" value="TO">Tonga</option>
																<option data-kt-flag="flags/trinidad-and-tobago.svg" value="TT">Trinidad and Tobago</option>
																<option data-kt-flag="flags/tunisia.svg" value="TN">Tunisia</option>
																<option data-kt-flag="flags/turkey.svg" value="TR">Turkey</option>
																<option data-kt-flag="flags/turkmenistan.svg" value="TM">Turkmenistan</option>
																<option data-kt-flag="flags/turks-and-caicos.svg" value="TC">Turks and Caicos Islands</option>
																<option data-kt-flag="flags/tuvalu.svg" value="TV">Tuvalu</option>
																<option data-kt-flag="flags/uganda.svg" value="UG">Uganda</option>
																<option data-kt-flag="flags/ukraine.svg" value="UA">Ukraine</option>
																<option data-kt-flag="flags/united-arab-emirates.svg" value="AE">United Arab Emirates</option>
																<option data-kt-flag="flags/united-kingdom.svg" value="GB">United Kingdom</option>
																<option data-kt-flag="flags/united-states.svg" value="US">United States</option>
																<option data-kt-flag="flags/uruguay.svg" value="UY">Uruguay</option>
																<option data-kt-flag="flags/uzbekistan.svg" value="UZ">Uzbekistan</option>
																<option data-kt-flag="flags/vanuatu.svg" value="VU">Vanuatu</option>
																<option data-kt-flag="flags/venezuela.svg" value="VE">Venezuela, Bolivarian Republic of</option>
																<option data-kt-flag="flags/vietnam.svg" value="VN">Vietnam</option>
																<option data-kt-flag="flags/virgin-islands.svg" value="VI">Virgin Islands</option>
																<option data-kt-flag="flags/yemen.svg" value="YE">Yemen</option>
																<option data-kt-flag="flags/zambia.svg" value="ZM">Zambia</option>
																<option data-kt-flag="flags/zimbabwe.svg" value="ZW">Zimbabwe</option>
															</select>
														</div>

													</div>


													<div className="row mb-6">

														<label className="col-lg-4 col-form-label required fw-semibold fs-6">Language</label>


														<div className="col-lg-8 fv-row">

															<select name="language" aria-label="Select a Language" data-control="select2" data-placeholder="Select a language..." className="form-select form-select-solid form-select-lg">
																<option value="">Select a Language...</option>
																<option data-kt-flag="flags/indonesia.svg" value="id">Bahasa Indonesia - Indonesian</option>
																<option data-kt-flag="flags/malaysia.svg" value="msa">Bahasa Melayu - Malay</option>
																<option data-kt-flag="flags/canada.svg" value="ca">Català - Catalan</option>
																<option data-kt-flag="flags/czech-republic.svg" value="cs">Čeština - Czech</option>
																<option data-kt-flag="flags/netherlands.svg" value="da">Dansk - Danish</option>
																<option data-kt-flag="flags/germany.svg" value="de">Deutsch - German</option>
																<option data-kt-flag="flags/united-kingdom.svg" value="en">English</option>
																<option data-kt-flag="flags/united-kingdom.svg" value="en-gb">English UK - British English</option>
																<option data-kt-flag="flags/spain.svg" value="es">Español - Spanish</option>
																<option data-kt-flag="flags/philippines.svg" value="fil">Filipino</option>
																<option data-kt-flag="flags/france.svg" value="fr">Français - French</option>
																<option data-kt-flag="flags/gabon.svg" value="ga">Gaeilge - Irish (beta)</option>
																<option data-kt-flag="flags/greenland.svg" value="gl">Galego - Galician (beta)</option>
																<option data-kt-flag="flags/croatia.svg" value="hr">Hrvatski - Croatian</option>
																<option data-kt-flag="flags/italy.svg" value="it">Italiano - Italian</option>
																<option data-kt-flag="flags/hungary.svg" value="hu">Magyar - Hungarian</option>
																<option data-kt-flag="flags/netherlands.svg" value="nl">Nederlands - Dutch</option>
																<option data-kt-flag="flags/norway.svg" value="no">Norsk - Norwegian</option>
																<option data-kt-flag="flags/poland.svg" value="pl">Polski - Polish</option>
																<option data-kt-flag="flags/portugal.svg" value="pt">Português - Portuguese</option>
																<option data-kt-flag="flags/romania.svg" value="ro">Română - Romanian</option>
																<option data-kt-flag="flags/slovakia.svg" value="sk">Slovenčina - Slovak</option>
																<option data-kt-flag="flags/finland.svg" value="fi">Suomi - Finnish</option>
																<option data-kt-flag="flags/el-salvador.svg" value="sv">Svenska - Swedish</option>
																<option data-kt-flag="flags/virgin-islands.svg" value="vi">Tiếng Việt - Vietnamese</option>
																<option data-kt-flag="flags/turkey.svg" value="tr">Türkçe - Turkish</option>
																<option data-kt-flag="flags/greece.svg" value="el">Ελληνικά - Greek</option>
																<option data-kt-flag="flags/bulgaria.svg" value="bg">Български език - Bulgarian</option>
																<option data-kt-flag="flags/russia.svg" value="ru">Русский - Russian</option>
																<option data-kt-flag="flags/suriname.svg" value="sr">Српски - Serbian</option>
																<option data-kt-flag="flags/ukraine.svg" value="uk">Українська мова - Ukrainian</option>
																<option data-kt-flag="flags/israel.svg" value="he">עִבְרִית - Hebrew</option>
																<option data-kt-flag="flags/pakistan.svg" value="ur">اردو - Urdu (beta)</option>
																<option data-kt-flag="flags/argentina.svg" value="ar">العربية - Arabic</option>
																<option data-kt-flag="flags/argentina.svg" value="fa">فارسی - Persian</option>
																<option data-kt-flag="flags/mauritania.svg" value="mr">मराठी - Marathi</option>
																<option data-kt-flag="flags/india.svg" value="hi">हिन्दी - Hindi</option>
																<option data-kt-flag="flags/bangladesh.svg" value="bn">বাংলা - Bangla</option>
																<option data-kt-flag="flags/guam.svg" value="gu">ગુજરાતી - Gujarati</option>
																<option data-kt-flag="flags/india.svg" value="ta">தமிழ் - Tamil</option>
																<option data-kt-flag="flags/saint-kitts-and-nevis.svg" value="kn">ಕನ್ನಡ - Kannada</option>
																<option data-kt-flag="flags/thailand.svg" value="th">ภาษาไทย - Thai</option>
																<option data-kt-flag="flags/south-korea.svg" value="ko">한국어 - Korean</option>
																<option data-kt-flag="flags/japan.svg" value="ja">日本語 - Japanese</option>
																<option data-kt-flag="flags/china.svg" value="zh-cn">简体中文 - Simplified Chinese</option>
																<option data-kt-flag="flags/taiwan.svg" value="zh-tw">繁體中文 - Traditional Chinese</option>
															</select>
															
															<div className="form-text">Please select a preferred language, including date, time, and number formatting.</div>
															
														</div>

													</div>


													<div className="row mb-6">

														<label className="col-lg-4 col-form-label required fw-semibold fs-6">Time Zone</label>


														<div className="col-lg-8 fv-row">
															<select name="timezone" aria-label="Select a Timezone" data-control="select2" data-placeholder="Select a timezone.." className="form-select form-select-solid form-select-lg">
																<option value="">Select a Timezone..</option>
																<option data-bs-offset="-39600" value="International Date Line West">(GMT-11:00) International Date Line West</option>
																<option data-bs-offset="-39600" value="Midway Island">(GMT-11:00) Midway Island</option>
																<option data-bs-offset="-39600" value="Samoa">(GMT-11:00) Samoa</option>
																<option data-bs-offset="-36000" value="Hawaii">(GMT-10:00) Hawaii</option>
																<option data-bs-offset="-28800" value="Alaska">(GMT-08:00) Alaska</option>
																<option data-bs-offset="-25200" value="Pacific Time (US & Canada)">(GMT-07:00) Pacific Time (US & Canada)</option>
																<option data-bs-offset="-25200" value="Tijuana">(GMT-07:00) Tijuana</option>
																<option data-bs-offset="-25200" value="Arizona">(GMT-07:00) Arizona</option>
																<option data-bs-offset="-21600" value="Mountain Time (US & Canada)">(GMT-06:00) Mountain Time (US & Canada)</option>
																<option data-bs-offset="-21600" value="Chihuahua">(GMT-06:00) Chihuahua</option>
																<option data-bs-offset="-21600" value="Mazatlan">(GMT-06:00) Mazatlan</option>
																<option data-bs-offset="-21600" value="Saskatchewan">(GMT-06:00) Saskatchewan</option>
																<option data-bs-offset="-21600" value="Central America">(GMT-06:00) Central America</option>
																<option data-bs-offset="-18000" value="Central Time (US & Canada)">(GMT-05:00) Central Time (US & Canada)</option>
																<option data-bs-offset="-18000" value="Guadalajara">(GMT-05:00) Guadalajara</option>
																<option data-bs-offset="-18000" value="Mexico City">(GMT-05:00) Mexico City</option>
																<option data-bs-offset="-18000" value="Monterrey">(GMT-05:00) Monterrey</option>
																<option data-bs-offset="-18000" value="Bogota">(GMT-05:00) Bogota</option>
																<option data-bs-offset="-18000" value="Lima">(GMT-05:00) Lima</option>
																<option data-bs-offset="-18000" value="Quito">(GMT-05:00) Quito</option>
																<option data-bs-offset="-14400" value="Eastern Time (US & Canada)">(GMT-04:00) Eastern Time (US & Canada)</option>
																<option data-bs-offset="-14400" value="Indiana (East)">(GMT-04:00) Indiana (East)</option>
																<option data-bs-offset="-14400" value="Caracas">(GMT-04:00) Caracas</option>
																<option data-bs-offset="-14400" value="La Paz">(GMT-04:00) La Paz</option>
																<option data-bs-offset="-14400" value="Georgetown">(GMT-04:00) Georgetown</option>
																<option data-bs-offset="-10800" value="Atlantic Time (Canada)">(GMT-03:00) Atlantic Time (Canada)</option>
																<option data-bs-offset="-10800" value="Santiago">(GMT-03:00) Santiago</option>
																<option data-bs-offset="-10800" value="Brasilia">(GMT-03:00) Brasilia</option>
																<option data-bs-offset="-10800" value="Buenos Aires">(GMT-03:00) Buenos Aires</option>
																<option data-bs-offset="-9000" value="Newfoundland">(GMT-02:30) Newfoundland</option>
																<option data-bs-offset="-7200" value="Greenland">(GMT-02:00) Greenland</option>
																<option data-bs-offset="-7200" value="Mid-Atlantic">(GMT-02:00) Mid-Atlantic</option>
																<option data-bs-offset="-3600" value="Cape Verde Is.">(GMT-01:00) Cape Verde Is.</option>
																<option data-bs-offset="0" value="Azores">(GMT) Azores</option>
																<option data-bs-offset="0" value="Monrovia">(GMT) Monrovia</option>
																<option data-bs-offset="0" value="UTC">(GMT) UTC</option>
																<option data-bs-offset="3600" value="Dublin">(GMT+01:00) Dublin</option>
																<option data-bs-offset="3600" value="Edinburgh">(GMT+01:00) Edinburgh</option>
																<option data-bs-offset="3600" value="Lisbon">(GMT+01:00) Lisbon</option>
																<option data-bs-offset="3600" value="London">(GMT+01:00) London</option>
																<option data-bs-offset="3600" value="Casablanca">(GMT+01:00) Casablanca</option>
																<option data-bs-offset="3600" value="West Central Africa">(GMT+01:00) West Central Africa</option>
																<option data-bs-offset="7200" value="Belgrade">(GMT+02:00) Belgrade</option>
																<option data-bs-offset="7200" value="Bratislava">(GMT+02:00) Bratislava</option>
																<option data-bs-offset="7200" value="Budapest">(GMT+02:00) Budapest</option>
																<option data-bs-offset="7200" value="Ljubljana">(GMT+02:00) Ljubljana</option>
																<option data-bs-offset="7200" value="Prague">(GMT+02:00) Prague</option>
																<option data-bs-offset="7200" value="Sarajevo">(GMT+02:00) Sarajevo</option>
																<option data-bs-offset="7200" value="Skopje">(GMT+02:00) Skopje</option>
																<option data-bs-offset="7200" value="Warsaw">(GMT+02:00) Warsaw</option>
																<option data-bs-offset="7200" value="Zagreb">(GMT+02:00) Zagreb</option>
																<option data-bs-offset="7200" value="Brussels">(GMT+02:00) Brussels</option>
																<option data-bs-offset="7200" value="Copenhagen">(GMT+02:00) Copenhagen</option>
																<option data-bs-offset="7200" value="Madrid">(GMT+02:00) Madrid</option>
																<option data-bs-offset="7200" value="Paris">(GMT+02:00) Paris</option>
																<option data-bs-offset="7200" value="Amsterdam">(GMT+02:00) Amsterdam</option>
																<option data-bs-offset="7200" value="Berlin">(GMT+02:00) Berlin</option>
																<option data-bs-offset="7200" value="Bern">(GMT+02:00) Bern</option>
																<option data-bs-offset="7200" value="Rome">(GMT+02:00) Rome</option>
																<option data-bs-offset="7200" value="Stockholm">(GMT+02:00) Stockholm</option>
																<option data-bs-offset="7200" value="Vienna">(GMT+02:00) Vienna</option>
																<option data-bs-offset="7200" value="Cairo">(GMT+02:00) Cairo</option>
																<option data-bs-offset="7200" value="Harare">(GMT+02:00) Harare</option>
																<option data-bs-offset="7200" value="Pretoria">(GMT+02:00) Pretoria</option>
																<option data-bs-offset="10800" value="Bucharest">(GMT+03:00) Bucharest</option>
																<option data-bs-offset="10800" value="Helsinki">(GMT+03:00) Helsinki</option>
																<option data-bs-offset="10800" value="Kiev">(GMT+03:00) Kiev</option>
																<option data-bs-offset="10800" value="Kyiv">(GMT+03:00) Kyiv</option>
																<option data-bs-offset="10800" value="Riga">(GMT+03:00) Riga</option>
																<option data-bs-offset="10800" value="Sofia">(GMT+03:00) Sofia</option>
																<option data-bs-offset="10800" value="Tallinn">(GMT+03:00) Tallinn</option>
																<option data-bs-offset="10800" value="Vilnius">(GMT+03:00) Vilnius</option>
																<option data-bs-offset="10800" value="Athens">(GMT+03:00) Athens</option>
																<option data-bs-offset="10800" value="Istanbul">(GMT+03:00) Istanbul</option>
																<option data-bs-offset="10800" value="Minsk">(GMT+03:00) Minsk</option>
																<option data-bs-offset="10800" value="Jerusalem">(GMT+03:00) Jerusalem</option>
																<option data-bs-offset="10800" value="Moscow">(GMT+03:00) Moscow</option>
																<option data-bs-offset="10800" value="St. Petersburg">(GMT+03:00) St. Petersburg</option>
																<option data-bs-offset="10800" value="Volgograd">(GMT+03:00) Volgograd</option>
																<option data-bs-offset="10800" value="Kuwait">(GMT+03:00) Kuwait</option>
																<option data-bs-offset="10800" value="Riyadh">(GMT+03:00) Riyadh</option>
																<option data-bs-offset="10800" value="Nairobi">(GMT+03:00) Nairobi</option>
																<option data-bs-offset="10800" value="Baghdad">(GMT+03:00) Baghdad</option>
																<option data-bs-offset="14400" value="Abu Dhabi">(GMT+04:00) Abu Dhabi</option>
																<option data-bs-offset="14400" value="Muscat">(GMT+04:00) Muscat</option>
																<option data-bs-offset="14400" value="Baku">(GMT+04:00) Baku</option>
																<option data-bs-offset="14400" value="Tbilisi">(GMT+04:00) Tbilisi</option>
																<option data-bs-offset="14400" value="Yerevan">(GMT+04:00) Yerevan</option>
																<option data-bs-offset="16200" value="Tehran">(GMT+04:30) Tehran</option>
																<option data-bs-offset="16200" value="Kabul">(GMT+04:30) Kabul</option>
																<option data-bs-offset="18000" value="Ekaterinburg">(GMT+05:00) Ekaterinburg</option>
																<option data-bs-offset="18000" value="Islamabad">(GMT+05:00) Islamabad</option>
																<option data-bs-offset="18000" value="Karachi">(GMT+05:00) Karachi</option>
																<option data-bs-offset="18000" value="Tashkent">(GMT+05:00) Tashkent</option>
																<option data-bs-offset="19800" value="Chennai">(GMT+05:30) Chennai</option>
																<option data-bs-offset="19800" value="Kolkata">(GMT+05:30) Kolkata</option>
																<option data-bs-offset="19800" value="Mumbai">(GMT+05:30) Mumbai</option>
																<option data-bs-offset="19800" value="New Delhi">(GMT+05:30) New Delhi</option>
																<option data-bs-offset="19800" value="Sri Jayawardenepura">(GMT+05:30) Sri Jayawardenepura</option>
																<option data-bs-offset="20700" value="Kathmandu">(GMT+05:45) Kathmandu</option>
																<option data-bs-offset="21600" value="Astana">(GMT+06:00) Astana</option>
																<option data-bs-offset="21600" value="Dhaka">(GMT+06:00) Dhaka</option>
																<option data-bs-offset="21600" value="Almaty">(GMT+06:00) Almaty</option>
																<option data-bs-offset="21600" value="Urumqi">(GMT+06:00) Urumqi</option>
																<option data-bs-offset="23400" value="Rangoon">(GMT+06:30) Rangoon</option>
																<option data-bs-offset="25200" value="Novosibirsk">(GMT+07:00) Novosibirsk</option>
																<option data-bs-offset="25200" value="Bangkok">(GMT+07:00) Bangkok</option>
																<option data-bs-offset="25200" value="Hanoi">(GMT+07:00) Hanoi</option>
																<option data-bs-offset="25200" value="Jakarta">(GMT+07:00) Jakarta</option>
																<option data-bs-offset="25200" value="Krasnoyarsk">(GMT+07:00) Krasnoyarsk</option>
																<option data-bs-offset="28800" value="Beijing">(GMT+08:00) Beijing</option>
																<option data-bs-offset="28800" value="Chongqing">(GMT+08:00) Chongqing</option>
																<option data-bs-offset="28800" value="Hong Kong">(GMT+08:00) Hong Kong</option>
																<option data-bs-offset="28800" value="Kuala Lumpur">(GMT+08:00) Kuala Lumpur</option>
																<option data-bs-offset="28800" value="Singapore">(GMT+08:00) Singapore</option>
																<option data-bs-offset="28800" value="Taipei">(GMT+08:00) Taipei</option>
																<option data-bs-offset="28800" value="Perth">(GMT+08:00) Perth</option>
																<option data-bs-offset="28800" value="Irkutsk">(GMT+08:00) Irkutsk</option>
																<option data-bs-offset="28800" value="Ulaan Bataar">(GMT+08:00) Ulaan Bataar</option>
																<option data-bs-offset="32400" value="Seoul">(GMT+09:00) Seoul</option>
																<option data-bs-offset="32400" value="Osaka">(GMT+09:00) Osaka</option>
																<option data-bs-offset="32400" value="Sapporo">(GMT+09:00) Sapporo</option>
																<option data-bs-offset="32400" value="Tokyo">(GMT+09:00) Tokyo</option>
																<option data-bs-offset="32400" value="Yakutsk">(GMT+09:00) Yakutsk</option>
																<option data-bs-offset="34200" value="Darwin">(GMT+09:30) Darwin</option>
																<option data-bs-offset="34200" value="Adelaide">(GMT+09:30) Adelaide</option>
																<option data-bs-offset="36000" value="Canberra">(GMT+10:00) Canberra</option>
																<option data-bs-offset="36000" value="Melbourne">(GMT+10:00) Melbourne</option>
																<option data-bs-offset="36000" value="Sydney">(GMT+10:00) Sydney</option>
																<option data-bs-offset="36000" value="Brisbane">(GMT+10:00) Brisbane</option>
																<option data-bs-offset="36000" value="Hobart">(GMT+10:00) Hobart</option>
																<option data-bs-offset="36000" value="Vladivostok">(GMT+10:00) Vladivostok</option>
																<option data-bs-offset="36000" value="Guam">(GMT+10:00) Guam</option>
																<option data-bs-offset="36000" value="Port Moresby">(GMT+10:00) Port Moresby</option>
																<option data-bs-offset="36000" value="Solomon Is.">(GMT+10:00) Solomon Is.</option>
																<option data-bs-offset="39600" value="Magadan">(GMT+11:00) Magadan</option>
																<option data-bs-offset="39600" value="New Caledonia">(GMT+11:00) New Caledonia</option>
																<option data-bs-offset="43200" value="Fiji">(GMT+12:00) Fiji</option>
																<option data-bs-offset="43200" value="Kamchatka">(GMT+12:00) Kamchatka</option>
																<option data-bs-offset="43200" value="Marshall Is.">(GMT+12:00) Marshall Is.</option>
																<option data-bs-offset="43200" value="Auckland">(GMT+12:00) Auckland</option>
																<option data-bs-offset="43200" value="Wellington">(GMT+12:00) Wellington</option>
																<option data-bs-offset="46800" value="Nuku'alofa">(GMT+13:00) Nuku'alofa</option>
															</select>
														</div>

													</div>


													<div className="row mb-6">

														<label className="col-lg-4 col-form-label fw-semibold fs-6">Currency</label>


														<div className="col-lg-8 fv-row">
															<select name="currnecy" aria-label="Select a Currency" data-control="select2" data-placeholder="Select a currency.." className="form-select form-select-solid form-select-lg">
																<option value="">Select a currency..</option>
																<option data-kt-flag="flags/united-states.svg" value="USD">
																<b>USD</b>&nbsp;-&nbsp;USA dollar</option>
																<option data-kt-flag="flags/united-kingdom.svg" value="GBP">
																<b>GBP</b>&nbsp;-&nbsp;British pound</option>
																<option data-kt-flag="flags/australia.svg" value="AUD">
																<b>AUD</b>&nbsp;-&nbsp;Australian dollar</option>
																<option data-kt-flag="flags/japan.svg" value="JPY">
																<b>JPY</b>&nbsp;-&nbsp;Japanese yen</option>
																<option data-kt-flag="flags/sweden.svg" value="SEK">
																<b>SEK</b>&nbsp;-&nbsp;Swedish krona</option>
																<option data-kt-flag="flags/canada.svg" value="CAD">
																<b>CAD</b>&nbsp;-&nbsp;Canadian dollar</option>
																<option data-kt-flag="flags/switzerland.svg" value="CHF">
																<b>CHF</b>&nbsp;-&nbsp;Swiss franc</option>
															</select>
														</div>

													</div>


													<div className="row mb-6">

														<label className="col-lg-4 col-form-label required fw-semibold fs-6">Communication</label>


														<div className="col-lg-8 fv-row">

															<div className="d-flex align-items-center mt-3">

																<label className="form-check form-check-custom form-check-inline form-check-solid me-5">
																	<input className="form-check-input" name="communication[]" type="checkbox" value="1" />
																	<span className="fw-semibold ps-2 fs-6">Email</span>
																</label>


																<label className="form-check form-check-custom form-check-inline form-check-solid">
																	<input className="form-check-input" name="communication[]" type="checkbox" value="2" />
																	<span className="fw-semibold ps-2 fs-6">Phone</span>
																</label>

															</div>

														</div>

													</div>


													<div className="row mb-0">

														<label className="col-lg-4 col-form-label fw-semibold fs-6">Allow Marketing</label>


														<div className="col-lg-8 d-flex align-items-center">
															<div className="form-check form-check-solid form-switch form-check-custom fv-row">
																<input className="form-check-input w-45px h-30px" type="checkbox" id="allowmarketing"  />
                                                                {/* checked="checked" */}
																<label className="form-check-label" for="allowmarketing"></label>
															</div>
														</div>

													</div>

												</div>


												<div className="card-footer d-flex justify-content-end py-6 px-9">
													<button type="reset" className="btn btn-light btn-active-light-primary me-2">Discard</button>
													<button type="submit" className="btn btn-primary" id="kt_account_profile_details_submit">Save Changes</button>
												</div>

											</form>

										</div>

									</div>


									{/* stop profile details */}


                                    {/* start of signin method */}
									<div className="card mb-5 mb-xl-10">

										<div className="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_signin_method">
											<div className="card-title m-0">
												<h3 className="fw-bold m-0">Sign-in Method</h3>
											</div>
										</div>


										<div id="kt_account_settings_signin_method" className="collapse show">

											<div className="card-body border-top p-9">

												<div className="d-flex flex-wrap align-items-center">

													<div id="kt_signin_email">
														<div className="fs-6 fw-bold mb-1">Email Address</div>
														<div className="fw-semibold text-gray-600">support@keenthemes.com</div>
													</div>

													
													<div id="kt_signin_email_edit" className="flex-row-fluid d-none">

														<form id="kt_signin_change_email" className="form" novalidate="novalidate">
															<div className="row mb-6">
																<div className="col-lg-6 mb-4 mb-lg-0">
																	<div className="fv-row mb-0">
																		<label for="emailaddress" className="form-label fs-6 fw-bold mb-3">Enter New Email Address</label>
																		<input type="email" className="form-control form-control-lg form-control-solid" id="emailaddress" placeholder="Email Address" name="emailaddress" value="support@keenthemes.com" />
																	</div>
																</div>
																<div className="col-lg-6">
																	<div className="fv-row mb-0">
																		<label for="confirmemailpassword" className="form-label fs-6 fw-bold mb-3">Confirm Password</label>
																		<input type="password" className="form-control form-control-lg form-control-solid" name="confirmemailpassword" id="confirmemailpassword" />
																	</div>
																</div>
															</div>
															<div className="d-flex">
																<button id="kt_signin_submit" type="button" className="btn btn-primary me-2 px-6">Update Email</button>
																<button id="kt_signin_cancel" type="button" className="btn btn-color-gray-500 btn-active-light-primary px-6">Cancel</button>
															</div>
														</form>

													</div>
													

													<div id="kt_signin_email_button" className="ms-auto">
														<button className="btn btn-light btn-active-light-primary">Change Email</button>
													</div>

												</div>
												
												<div className="separator separator-dashed my-6"></div>
												
												<div className="d-flex flex-wrap align-items-center mb-10">

													<div id="kt_signin_password">
														<div className="fs-6 fw-bold mb-1">Password</div>
														<div className="fw-semibold text-gray-600">************</div>
													</div>


													<div id="kt_signin_password_edit" className="flex-row-fluid d-none">

														<form id="kt_signin_change_password" className="form" novalidate="novalidate">
															<div className="row mb-1">
																<div className="col-lg-4">
																	<div className="fv-row mb-0">
																		<label for="currentpassword" className="form-label fs-6 fw-bold mb-3">Current Password</label>
																		<input type="password" className="form-control form-control-lg form-control-solid" name="currentpassword" id="currentpassword" />
																	</div>
																</div>
																<div className="col-lg-4">
																	<div className="fv-row mb-0">
																		<label for="newpassword" className="form-label fs-6 fw-bold mb-3">New Password</label>
																		<input type="password" className="form-control form-control-lg form-control-solid" name="newpassword" id="newpassword" />
																	</div>
																</div>
																<div className="col-lg-4">
																	<div className="fv-row mb-0">
																		<label for="confirmpassword" className="form-label fs-6 fw-bold mb-3">Confirm New Password</label>
																		<input type="password" className="form-control form-control-lg form-control-solid" name="confirmpassword" id="confirmpassword" />
																	</div>
																</div>
															</div>
															<div className="form-text mb-5">Password must be at least 8 character and contain symbols</div>
															<div className="d-flex">
																<button id="kt_password_submit" type="button" className="btn btn-primary me-2 px-6">Update Password</button>
																<button id="kt_password_cancel" type="button" className="btn btn-color-gray-500 btn-active-light-primary px-6">Cancel</button>
															</div>
														</form>

													</div>


													<div id="kt_signin_password_button" className="ms-auto">
														<button className="btn btn-light btn-active-light-primary">Reset Password</button>
													</div>

												</div>


												<div className="notice d-flex bg-light-primary rounded border-primary border border-dashed p-6">
													
													<i className="ki-outline ki-shield-tick fs-2tx text-primary me-4"></i>
													

													<div className="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">

														<div className="mb-3 mb-md-0 fw-semibold">
															<h4 className="text-gray-900 fw-bold">Secure Your Account</h4>
															<div className="fs-6 text-gray-700 pe-7">Two-factor authentication adds an extra layer of security to your account. To log in, in addition you'll need to provide a 6 digit code</div>
														</div>


														<a href="#" className="btn btn-primary px-6 align-self-center text-nowrap" data-bs-toggle="modal" data-bs-target="#kt_modal_two_factor_authentication">Enable</a>

													</div>

												</div>
												
											</div>

										</div>

									</div>
									{/* stop of the signin method */}

									
									{/* start of the connected account */}
									<div className="card mb-5 mb-xl-10">

										<div className="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_connected_accounts" aria-expanded="true" aria-controls="kt_account_connected_accounts">
											<div className="card-title m-0">
												<h3 className="fw-bold m-0">Connected Accounts</h3>
											</div>
										</div>


										<div id="kt_account_settings_connected_accounts" className="collapse show">

											<div className="card-body border-top p-9">

												<div className="notice d-flex bg-light-primary rounded border-primary border border-dashed mb-9 p-6">
													
													<i className="ki-outline ki-design-1 fs-2tx text-primary me-4"></i>
													

													<div className="d-flex flex-stack flex-grow-1">

														<div className="fw-semibold">
															<div className="fs-6 text-gray-700">Two-factor authentication adds an extra layer of security to your account. To log in, in you'll need to provide a 4 digit amazing code. 
															<a href="#" className="fw-bold">Learn More</a></div>
														</div>

													</div>

												</div>
												

												<div className="py-2">

													<div className="d-flex flex-stack">
														<div className="d-flex">
															<img src="assets/media/svg/brand-logos/google-icon.svg" className="w-30px me-6" alt="" />
															<div className="d-flex flex-column">
																<a href="#" className="fs-5 text-gray-900 text-hover-primary fw-bold">Google</a>
																<div className="fs-6 fw-semibold text-gray-500">Plan properly your workflow</div>
															</div>
														</div>
														<div className="d-flex justify-content-end">
															<div className="form-check form-check-solid form-check-custom form-switch">
																<input className="form-check-input w-45px h-30px" type="checkbox" id="googleswitch" />
                                                                {/* checked="checked"  */}
																<label className="form-check-label" for="googleswitch"></label>
															</div>
														</div>
													</div>
													<div className="separator separator-dashed my-5"></div>

													<div className="d-flex flex-stack">
														<div className="d-flex">
															<img src="assets/media/svg/brand-logos/github.svg" className="w-30px me-6" alt="" />
															<div className="d-flex flex-column">
																<a href="#" className="fs-5 text-gray-900 text-hover-primary fw-bold">Github</a>
																<div className="fs-6 fw-semibold text-gray-500">Keep eye on on your Repositories</div>
															</div>
														</div>
														<div className="d-flex justify-content-end">
															<div className="form-check form-check-solid form-check-custom form-switch">
																<input className="form-check-input w-45px h-30px" type="checkbox" id="githubswitch"  />
                                                                {/* checked="checked" */}
																<label className="form-check-label" for="githubswitch"></label>
															</div>
														</div>
													</div>
													<div className="separator separator-dashed my-5"></div>

													<div className="d-flex flex-stack">
														<div className="d-flex">
															<img src="assets/media/svg/brand-logos/slack-icon.svg" className="w-30px me-6" alt="" />
															<div className="d-flex flex-column">
																<a href="#" className="fs-5 text-gray-900 text-hover-primary fw-bold">Slack</a>
																<div className="fs-6 fw-semibold text-gray-500">Integrate Projects Discussions</div>
															</div>
														</div>
														<div className="d-flex justify-content-end">
															<div className="form-check form-check-solid form-check-custom form-switch">
																<input className="form-check-input w-45px h-30px" type="checkbox" id="slackswitch" />
																<label className="form-check-label" for="slackswitch"></label>
															</div>
														</div>
													</div>
												</div>

											</div>

											
											<div className="card-footer d-flex justify-content-end py-6 px-9">
												<button className="btn btn-light btn-active-light-primary me-2">Discard</button>
												<button className="btn btn-primary">Save Changes</button>
											</div>
											
										</div>

									</div>
									{/* end of the connected account */}


									{/* email preference */}
									<div className="card mb-5 mb-xl-10">

										<div className="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_email_preferences" aria-expanded="true" aria-controls="kt_account_email_preferences">
											<div className="card-title m-0">
												<h3 className="fw-bold m-0">Email Preferences</h3>
											</div>
										</div>


										<div id="kt_account_settings_email_preferences" className="collapse show">

											<form className="form">

												<div className="card-body border-top px-9 py-9">

													<label className="form-check form-check-custom form-check-solid align-items-start">

														<input className="form-check-input me-3" type="checkbox" name="email-preferences[]" value="1" />

														<span className="form-check-label d-flex flex-column align-items-start">
															<span className="fw-bold fs-5 mb-0">Successful Payments</span>
															<span className="text-muted fs-6">Receive a notification for every successful payment.</span>
														</span>

													</label>


													<div className="separator separator-dashed my-6"></div>


													<label className="form-check form-check-custom form-check-solid align-items-start">

														<input className="form-check-input me-3" type="checkbox" name="email-preferences[]"  value="1" />
                                                        {/* checked="checked" */}

														<span className="form-check-label d-flex flex-column align-items-start">
															<span className="fw-bold fs-5 mb-0">Payouts</span>
															<span className="text-muted fs-6">Receive a notification for every initiated payout.</span>
														</span>

													</label>


													<div className="separator separator-dashed my-6"></div>


													<label className="form-check form-check-custom form-check-solid align-items-start">

														<input className="form-check-input me-3" type="checkbox" name="email-preferences[]" value="1" />

														<span className="form-check-label d-flex flex-column align-items-start">
															<span className="fw-bold fs-5 mb-0">Fee Collection</span>
															<span className="text-muted fs-6">Receive a notification each time you collect a fee from sales</span>
														</span>

													</label>


													<div className="separator separator-dashed my-6"></div>


													<label className="form-check form-check-custom form-check-solid align-items-start">

														<input className="form-check-input me-3" type="checkbox" name="email-preferences[]"  value="1" />
                                                        {/* checked="checked" */}

														<span className="form-check-label d-flex flex-column align-items-start">
															<span className="fw-bold fs-5 mb-0">Customer Payment Dispute</span>
															<span className="text-muted fs-6">Receive a notification if a payment is disputed by a customer and for dispute purposes.</span>
														</span>

													</label>


													<div className="separator separator-dashed my-6"></div>


													<label className="form-check form-check-custom form-check-solid align-items-start">

														<input className="form-check-input me-3" type="checkbox" name="email-preferences[]" value="1" />

														<span className="form-check-label d-flex flex-column align-items-start">
															<span className="fw-bold fs-5 mb-0">Refund Alerts</span>
															<span className="text-muted fs-6">Receive a notification if a payment is stated as risk by the Finance Department.</span>
														</span>

													</label>


													<div className="separator separator-dashed my-6"></div>


													<label className="form-check form-check-custom form-check-solid align-items-start">

														<input className="form-check-input me-3" type="checkbox" name="email-preferences[]"  value="1" />
                                                        {/* checked="checked" */}

														<span className="form-check-label d-flex flex-column align-items-start">
															<span className="fw-bold fs-5 mb-0">Invoice Payments</span>
															<span className="text-muted fs-6">Receive a notification if a customer sends an incorrect amount to pay their invoice.</span>
														</span>

													</label>


													<div className="separator separator-dashed my-6"></div>


													<label className="form-check form-check-custom form-check-solid align-items-start">

														<input className="form-check-input me-3" type="checkbox" name="email-preferences[]" value="1" />

														<span className="form-check-label d-flex flex-column align-items-start">
															<span className="fw-bold fs-5 mb-0">Webhook API Endpoints</span>
															<span className="text-muted fs-6">Receive notifications for consistently failing webhook API endpoints.</span>
														</span>

													</label>

												</div>

												
												<div className="card-footer d-flex justify-content-end py-6 px-9">
													<button className="btn btn-light btn-active-light-primary me-2">Discard</button>
													<button className="btn btn-primary px-6">Save Changes</button>
												</div>
												
											</form>

										</div>

									</div>
									{/* end of email preference */}

									{/* start of notification */}
									<div className="card mb-5 mb-xl-10">

										<div className="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_notifications" aria-expanded="true" aria-controls="kt_account_notifications">
											<div className="card-title m-0">
												<h3 className="fw-bold m-0">Notifications</h3>
											</div>
										</div>


										<div id="kt_account_settings_notifications" className="collapse show">

											<form className="form">

												<div className="card-body border-top px-9 pt-3 pb-4">
													
													<div className="table-responsive">
														<table className="table table-row-dashed border-gray-300 align-middle gy-6">
															<tbody className="fs-6 fw-semibold">
																
																<tr>
																	<td className="min-w-250px fs-4 fw-bold">Notifications</td>
																	<td className="w-125px">
																		<div className="form-check form-check-custom form-check-solid">
																			<input className="form-check-input" type="checkbox" value="" id="kt_settings_notification_email"  data-kt-check="true" data-kt-check-target="[data-kt-settings-notification=email]" />
                                                                            {/* checked="checked"checked="checked" */}
																			<label className="form-check-label ps-2" for="kt_settings_notification_email">Email</label>
																		</div>
																	</td>
																	<td className="w-125px">
																		<div className="form-check form-check-custom form-check-solid">
																			<input className="form-check-input" type="checkbox" value="" id="kt_settings_notification_phone"  data-kt-check="true" data-kt-check-target="[data-kt-settings-notification=phone]" />
                                                                            {/* checked="checked" */}
																			<label className="form-check-label ps-2" for="kt_settings_notification_phone">Phone</label>
																		</div>
																	</td>
																</tr>
																
																<tr>
																	<td>Billing Updates</td>
																	<td>
																		<div className="form-check form-check-custom form-check-solid">
																			<input className="form-check-input" type="checkbox" value="1" id="billing1" data-kt-settings-notification="email" />
                                                                            {/*  checked="checked" checked="checked" */}
                                                                            
																			<label className="form-check-label ps-2" for="billing1"></label>
																		</div>
																	</td>
																	<td>
																		<div className="form-check form-check-custom form-check-solid">
																			<input className="form-check-input" type="checkbox" value="" id="billing2"  data-kt-settings-notification="phone" />
                                                                            {/* checked="checked" */}
																			<label className="form-check-label ps-2" for="billing2"></label>
																		</div>
																	</td>
																</tr>


																<tr>
																	<td>New Team Members</td>
																	<td>
																		<div className="form-check form-check-custom form-check-solid">
																			<input className="form-check-input" type="checkbox" value="" id="team1"  data-kt-settings-notification="email" />
                                                                            {/* checked="checked" */}
																			<label className="form-check-label ps-2" for="team1"></label>
																		</div>
																	</td>
																	<td>
																		<div className="form-check form-check-custom form-check-solid">
																			<input className="form-check-input" type="checkbox" value="" id="team2" data-kt-settings-notification="phone" />
																			<label className="form-check-label ps-2" for="team2"></label>
																		</div>
																	</td>
																</tr>


																<tr>
																	<td>Completed Projects</td>
																	<td>
																		<div className="form-check form-check-custom form-check-solid">
																			<input className="form-check-input" type="checkbox" value="" id="project1" data-kt-settings-notification="email" />
																			<label className="form-check-label ps-2" for="project1"></label>
																		</div>
																	</td>
																	<td>
																		<div className="form-check form-check-custom form-check-solid">
																			<input className="form-check-input" type="checkbox" value="" id="project2"  data-kt-settings-notification="phone" />
                                                                            {/* checked="checked" */}
																			<label className="form-check-label ps-2" for="project2"></label>
																		</div>
																	</td>
																</tr>


																<tr>
																	<td className="border-bottom-0">Newsletters</td>
																	<td className="border-bottom-0">
																		<div className="form-check form-check-custom form-check-solid">
																			<input className="form-check-input" type="checkbox" value="" id="newsletter1" data-kt-settings-notification="email" />
																			<label className="form-check-label ps-2" for="newsletter1"></label>
																		</div>
																	</td>
																	<td className="border-bottom-0">
																		<div className="form-check form-check-custom form-check-solid">
																			<input className="form-check-input" type="checkbox" value="" id="newsletter2" data-kt-settings-notification="phone" />
																			<label className="form-check-label ps-2" for="newsletter2"></label>
																		</div>
																	</td>
																</tr>

															</tbody>
														</table>
													</div>

												</div>


												<div className="card-footer d-flex justify-content-end py-6 px-9">
													<button className="btn btn-light btn-active-light-primary me-2">Discard</button>
													<button className="btn btn-primary px-6">Save Changes</button>
												</div>

											</form>

										</div>

									</div>
									{/* end of notification */}

                                   
								   {/* start od deactivvate account */}
									<div className="card">

										<div className="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_deactivate" aria-expanded="true" aria-controls="kt_account_deactivate">
											<div className="card-title m-0">
												<h3 className="fw-bold m-0">Deactivate Account</h3>
											</div>
										</div>


										<div id="kt_account_settings_deactivate" className="collapse show">

											<form id="kt_account_deactivate_form" className="form">

												<div className="card-body border-top p-9">

													<div className="notice d-flex bg-light-warning rounded border-warning border border-dashed mb-9 p-6">

														<i className="ki-outline ki-information fs-2tx text-warning me-4"></i>


														<div className="d-flex flex-stack flex-grow-1">

															<div className="fw-semibold">
																<h4 className="text-gray-900 fw-bold">You Are Deactivating Your Account</h4>
																<div className="fs-6 text-gray-700">For extra security, this requires you to confirm your email or phone number when you reset yousignr password. 
																<br />
																<a className="fw-bold" href="#">Learn more</a></div>
															</div>

														</div>

													</div>


													<div className="form-check form-check-solid fv-row">
														<input name="deactivate" className="form-check-input" type="checkbox" value="" id="deactivate" />
														<label className="form-check-label fw-semibold ps-2 fs-6" for="deactivate">I confirm my account deactivation</label>
													</div>

												</div>


												<div className="card-footer d-flex justify-content-end py-6 px-9">
													<button id="kt_account_deactivate_account_submit" type="submit" className="btn btn-danger fw-semibold">Deactivate Account</button>
												</div>

											</form>

										</div>

									</div>
									{/* end of deactivate account */}

								</div>

							</div>

                            
							{/* staRT OF footer */}
							<div id="kt_app_footer" className="app-footer d-flex flex-column flex-md-row flex-center flex-md-stack py-3">

								<div className="text-gray-900 order-2 order-md-1">
									<span className="text-muted fw-semibold me-1">2024&copy;</span>
									<a href="https://keenthemes.com" target="_blank" className="text-gray-800 text-hover-primary">Keenthemes</a>
								</div>


								<ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
									<li className="menu-item">
										<a href="https://keenthemes.com" target="_blank" className="menu-link px-2">About</a>
									</li>
									<li className="menu-item">
										<a href="https://devs.keenthemes.com" target="_blank" className="menu-link px-2">Support</a>
									</li>
									<li className="menu-item">
										<a href="https://1.envato.market/EA4JP" target="_blank" className="menu-link px-2">Purchase</a>
									</li>
								</ul>

							</div>

							{/* end of footer */}

						</div>

					</div>

				</div>

			</div>

		</div>


		
		<div id="kt_activities" className="bg-body" data-kt-drawer="true" data-kt-drawer-name="activities" data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'300px', 'lg': '900px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_activities_toggle" data-kt-drawer-close="#kt_activities_close">
			<div className="card shadow-none border-0 rounded-0">

				<div className="card-header" id="kt_activities_header">
					<h3 className="card-title fw-bold text-gray-900">Activity Logs</h3>
					<div className="card-toolbar">
						<button type="button" className="btn btn-sm btn-icon btn-active-light-primary me-n5" id="kt_activities_close">
							<i className="ki-outline ki-cross fs-1"></i>
						</button>
					</div>
				</div>
				
				<div className="card-body position-relative" id="kt_activities_body">

					<div id="kt_activities_scroll" className="position-relative scroll-y me-n5 pe-5" data-kt-scroll="true" data-kt-scroll-height="auto" data-kt-scroll-wrappers="#kt_activities_body" data-kt-scroll-dependencies="#kt_activities_header, #kt_activities_footer" data-kt-scroll-offset="5px">
						
						<div className="timeline timeline-border-dashed">
							
							<div className="timeline-item">
								
								<div className="timeline-line"></div>
								
								<div className="timeline-icon">
									<i className="ki-outline ki-message-text-2 fs-2 text-gray-500"></i>
								</div>
								
								<div className="timeline-content mb-10 mt-n1">
									
									<div className="pe-3 mb-5">

										<div className="fs-5 fw-semibold mb-2">There are 2 new tasks for you in “AirPlus Mobile App” project:</div>

										
										<div className="d-flex align-items-center mt-1 fs-6">

											<div className="text-muted me-2 fs-7">Added at 4:23 PM by</div>


											<div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Nina Nilson">
												<img src="assets/media/avatars/300-14.jpg" alt="img" />
											</div>

										</div>
										
									</div>
									
									<div className="overflow-auto pb-5">
										
										<div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5">

											<a href="apps/projects/project.html" className="fs-5 text-gray-900 text-hover-primary fw-semibold w-375px min-w-200px">Meeting with customer</a>


											<div className="min-w-175px pe-2">
												<span className="badge badge-light text-muted">Application Design</span>
											</div>

											
											<div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px pe-2">

												<div className="symbol symbol-circle symbol-25px">
													<img src="assets/media/avatars/300-2.jpg" alt="img" />
												</div>


												<div className="symbol symbol-circle symbol-25px">
													<img src="assets/media/avatars/300-14.jpg" alt="img" />
												</div>


												<div className="symbol symbol-circle symbol-25px">
													<div className="symbol-label fs-8 fw-semibold bg-primary text-inverse-primary">A</div>
												</div>

											</div>
											

											<div className="min-w-125px pe-2">
												<span className="badge badge-light-primary">In Progress</span>
											</div>


											<a href="apps/projects/project.html" className="btn btn-sm btn-light btn-active-light-primary">View</a>

										</div>
										
										<div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-0">

											<a href="apps/projects/project.html" className="fs-5 text-gray-900 text-hover-primary fw-semibold w-375px min-w-200px">Project Delivery Preparation</a>


											<div className="min-w-175px">
												<span className="badge badge-light text-muted">CRM System Development</span>
											</div>

											
											<div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px">

												<div className="symbol symbol-circle symbol-25px">
													<img src="assets/media/avatars/300-20.jpg" alt="img" />
												</div>


												<div className="symbol symbol-circle symbol-25px">
													<div className="symbol-label fs-8 fw-semibold bg-success text-inverse-primary">B</div>
												</div>

											</div>
											

											<div className="min-w-125px">
												<span className="badge badge-light-success">Completed</span>
											</div>


											<a href="apps/projects/project.html" className="btn btn-sm btn-light btn-active-light-primary">View</a>

										</div>
										
									</div>
									
								</div>
								
							</div>
							
							<div className="timeline-item">
								
								<div className="timeline-line"></div>
								
								<div className="timeline-icon me-4">
									<i className="ki-outline ki-flag fs-2 text-gray-500"></i>
								</div>
								
								<div className="timeline-content mb-10 mt-n2">
									
									<div className="overflow-auto pe-3">

										<div className="fs-5 fw-semibold mb-2">Invitation for crafting engaging designs that speak human workshop</div>

										
										<div className="d-flex align-items-center mt-1 fs-6">

											<div className="text-muted me-2 fs-7">Sent at 4:23 PM by</div>


											<div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Alan Nilson">
												<img src="assets/media/avatars/300-1.jpg" alt="img" />
											</div>

										</div>
										
									</div>
									
								</div>
								
							</div>
							
							<div className="timeline-item">
								
								<div className="timeline-line"></div>
								
								<div className="timeline-icon">
									<i className="ki-outline ki-disconnect fs-2 text-gray-500"></i>
								</div>
								
								<div className="timeline-content mb-10 mt-n1">
									
									<div className="mb-5 pe-3">

										<a href="#" className="fs-5 fw-semibold text-gray-800 text-hover-primary mb-2">3 New Incoming Project Files:</a>

										
										<div className="d-flex align-items-center mt-1 fs-6">

											<div className="text-muted me-2 fs-7">Sent at 10:30 PM by</div>


											<div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Jan Hummer">
												<img src="assets/media/avatars/300-23.jpg" alt="img" />
											</div>

										</div>
										
									</div>


									<div className="overflow-auto pb-5">
										<div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">

											<div className="d-flex flex-aligns-center pe-10 pe-lg-20">

												<img alt="" className="w-30px me-3" src="assets/media/svg/files/pdf.svg" />


												<div className="ms-1 fw-semibold">

													<a href="apps/projects/project.html" className="fs-6 text-hover-primary fw-bold">Finance KPI App Guidelines</a>

													<div className="text-gray-500">1.9mb</div>

												</div>

											</div>

											<div className="d-flex flex-aligns-center pe-10 pe-lg-20">

												<img alt="apps/projects/project.html" className="w-30px me-3" src="assets/media/svg/files/doc.svg" />


												<div className="ms-1 fw-semibold">

													<a href="#" className="fs-6 text-hover-primary fw-bold">Client UAT Testing Results</a>

													<div className="text-gray-500">18kb</div>

												</div>

											</div>

											<div className="d-flex flex-aligns-center">

												<img alt="apps/projects/project.html" className="w-30px me-3" src="assets/media/svg/files/css.svg" />


												<div className="ms-1 fw-semibold">

													<a href="#" className="fs-6 text-hover-primary fw-bold">Finance Reports</a>

													<div className="text-gray-500">20mb</div>

												</div>

											</div>
										</div>
									</div>

								</div>

							</div>


							<div className="timeline-item">

								<div className="timeline-line"></div>


								<div className="timeline-icon">
									<i className="ki-outline ki-abstract-26 fs-2 text-gray-500"></i>
								</div>


								<div className="timeline-content mb-10 mt-n1">

									<div className="pe-3 mb-5">

										<div className="fs-5 fw-semibold mb-2">Task 
										<a href="#" className="text-primary fw-bold me-1">#45890</a>merged with 
										<a href="#" className="text-primary fw-bold me-1">#45890</a>in “Ads Pro Admin Dashboard project:</div>


										<div className="d-flex align-items-center mt-1 fs-6">

											<div className="text-muted me-2 fs-7">Initiated at 4:23 PM by</div>


											<div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Nina Nilson">
												<img src="assets/media/avatars/300-14.jpg" alt="img" />
											</div>

										</div>

									</div>

								</div>

							</div>


							<div className="timeline-item">

								<div className="timeline-line"></div>


								<div className="timeline-icon">
									<i className="ki-outline ki-pencil fs-2 text-gray-500"></i>
								</div>


								<div className="timeline-content mb-10 mt-n1">

									<div className="pe-3 mb-5">

										<div className="fs-5 fw-semibold mb-2">3 new application design concepts added:</div>


										<div className="d-flex align-items-center mt-1 fs-6">

											<div className="text-muted me-2 fs-7">Created at 4:23 PM by</div>


											<div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Marcus Dotson">
												<img src="assets/media/avatars/300-2.jpg" alt="img" />
											</div>

										</div>

									</div>


									<div className="overflow-auto pb-5">
										<div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">

											<div className="overlay me-10">

												<div className="overlay-wrapper">
													<img alt="img" className="rounded w-150px" src="assets/media/stock/600x400/img-29.jpg" />
												</div>


												<div className="overlay-layer bg-dark bg-opacity-10 rounded">
													<a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>
												</div>

											</div>

											<div className="overlay me-10">

												<div className="overlay-wrapper">
													<img alt="img" className="rounded w-150px" src="assets/media/stock/600x400/img-31.jpg" />
												</div>


												<div className="overlay-layer bg-dark bg-opacity-10 rounded">
													<a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>
												</div>

											</div>

											<div className="overlay">

												<div className="overlay-wrapper">
													<img alt="img" className="rounded w-150px" src="assets/media/stock/600x400/img-40.jpg" />
												</div>


												<div className="overlay-layer bg-dark bg-opacity-10 rounded">
													<a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>
												</div>

											</div>
										</div>
									</div>

								</div>

							</div>


							<div className="timeline-item">

								<div className="timeline-line"></div>


								<div className="timeline-icon">
									<i className="ki-outline ki-sms fs-2 text-gray-500"></i>
								</div>


								<div className="timeline-content mb-10 mt-n1">

									<div className="pe-3 mb-5">

										<div className="fs-5 fw-semibold mb-2">New case 
										<a href="#" className="text-primary fw-bold me-1">#67890</a>is assigned to you in Multi-platform Database Design project</div>


										<div className="overflow-auto pb-5">

											<div className="d-flex align-items-center mt-1 fs-6">

												<div className="text-muted me-2 fs-7">Added at 4:23 PM by</div>


												<a href="#" className="text-primary fw-bold me-1">Alice Tan</a>

											</div>

										</div>

									</div>

								</div>

							</div>


							<div className="timeline-item">

								<div className="timeline-line"></div>


								<div className="timeline-icon">
									<i className="ki-outline ki-pencil fs-2 text-gray-500"></i>
								</div>


								<div className="timeline-content mb-10 mt-n1">

									<div className="pe-3 mb-5">

										<div className="fs-5 fw-semibold mb-2">You have received a new order:</div>


										<div className="d-flex align-items-center mt-1 fs-6">

											<div className="text-muted me-2 fs-7">Placed at 5:05 AM by</div>


											<div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Robert Rich">
												<img src="assets/media/avatars/300-4.jpg" alt="img" />
											</div>

										</div>

									</div>


									<div className="overflow-auto pb-5">

										<div className="notice d-flex bg-light-primary rounded border-primary border border-dashed min-w-lg-600px flex-shrink-0 p-6">

											<i className="ki-outline ki-devices-2 fs-2tx text-primary me-4"></i>


											<div className="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">

												<div className="mb-3 mb-md-0 fw-semibold">
													<h4 className="text-gray-900 fw-bold">Database Backup Process Completed!</h4>
													<div className="fs-6 text-gray-700 pe-7">Login into Admin Dashboard to make sure the data integrity is OK</div>
												</div>


												<a href="#" className="btn btn-primary px-6 align-self-center text-nowrap">Proceed</a>

											</div>

										</div>

									</div>

								</div>

							</div>


							<div className="timeline-item">

								<div className="timeline-line"></div>


								<div className="timeline-icon">
									<i className="ki-outline ki-basket fs-2 text-gray-500"></i>
								</div>


								<div className="timeline-content mt-n1">

									<div className="pe-3 mb-5">

										<div className="fs-5 fw-semibold mb-2">New order 
										<a href="#" className="text-primary fw-bold me-1">#67890</a>is placed for Workshow Planning & Budget Estimation</div>


										<div className="d-flex align-items-center mt-1 fs-6">

											<div className="text-muted me-2 fs-7">Placed at 4:23 PM by</div>


											<a href="#" className="text-primary fw-bold me-1">Jimmy Bold</a>

										</div>

									</div>

								</div>

							</div>

						</div>

					</div>

				</div>


				<div className="card-footer py-5 text-center" id="kt_activities_footer">
					<a href="pages/user-profile/activity.html" className="btn btn-bg-body text-primary">View All Activities 
					<i className="ki-outline ki-arrow-right fs-3 text-primary"></i></a>
				</div>

			</div>
		</div>


		<div id="kt_drawer_chat" className="bg-body" data-kt-drawer="true" data-kt-drawer-name="chat" data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'300px', 'md': '500px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_drawer_chat_toggle" data-kt-drawer-close="#kt_drawer_chat_close">

			<div className="card w-100 border-0 rounded-0" id="kt_drawer_chat_messenger">

				<div className="card-header pe-5" id="kt_drawer_chat_messenger_header">

					<div className="card-title">

						<div className="d-flex justify-content-center flex-column me-3">
							<a href="#" className="fs-4 fw-bold text-gray-900 text-hover-primary me-1 mb-2 lh-1">Brian Cox</a>

							<div className="mb-0 lh-1">
								<span className="badge badge-success badge-circle w-10px h-10px me-1"></span>
								<span className="fs-7 fw-semibold text-muted">Active</span>
							</div>

						</div>

					</div>


					<div className="card-toolbar">

						<div className="me-0">
							<button className="btn btn-sm btn-icon btn-active-color-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
								<i className="ki-outline ki-dots-square fs-2"></i>
							</button>

							<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3" data-kt-menu="true">

								<div className="menu-item px-3">
									<div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Contacts</div>
								</div>


								<div className="menu-item px-3">
									<a href="#" className="menu-link px-3" data-bs-toggle="modal" data-bs-target="#kt_modal_users_search">Add Contact</a>
								</div>


								<div className="menu-item px-3">
									<a href="#" className="menu-link flex-stack px-3" data-bs-toggle="modal" data-bs-target="#kt_modal_invite_friends">Invite Contacts 
									<span className="ms-2" data-bs-toggle="tooltip" title="Specify a contact email to send an invitation">
										<i className="ki-outline ki-information fs-7"></i>
									</span></a>
								</div>


								<div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
									<a href="#" className="menu-link px-3">
										<span className="menu-title">Groups</span>
										<span className="menu-arrow"></span>
									</a>

									<div className="menu-sub menu-sub-dropdown w-175px py-4">

										<div className="menu-item px-3">
											<a href="#" className="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">Create Group</a>
										</div>


										<div className="menu-item px-3">
											<a href="#" className="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">Invite Members</a>
										</div>


										<div className="menu-item px-3">
											<a href="#" className="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">Settings</a>
										</div>

									</div>

								</div>


								<div className="menu-item px-3 my-1">
									<a href="#" className="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">Settings</a>
								</div>

							</div>

						</div>


						<div className="btn btn-sm btn-icon btn-active-color-primary" id="kt_drawer_chat_close">
							<i className="ki-outline ki-cross-square fs-2"></i>
						</div>

					</div>

				</div>


				<div className="card-body" id="kt_drawer_chat_messenger_body">

					<div className="scroll-y me-n5 pe-5" data-kt-element="messages" data-kt-scroll="true" data-kt-scroll-activate="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_drawer_chat_messenger_header, #kt_drawer_chat_messenger_footer" data-kt-scroll-wrappers="#kt_drawer_chat_messenger_body" data-kt-scroll-offset="0px">
						
						<div className="d-flex justify-content-start mb-10">

							<div className="d-flex flex-column align-items-start">

								<div className="d-flex align-items-center mb-2">

									<div className="symbol symbol-35px symbol-circle">
										<img alt="Pic" src="assets/media/avatars/300-25.jpg" />
									</div>


									<div className="ms-3">
										<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
										<span className="text-muted fs-7 mb-1">2 mins</span>
									</div>

								</div>


								<div className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start" data-kt-element="message-text">How likely are you to recommend our company to your friends and family ?</div>

							</div>

						</div>
						
						<div className="d-flex justify-content-end mb-10">

							<div className="d-flex flex-column align-items-end">

								<div className="d-flex align-items-center mb-2">

									<div className="me-3">
										<span className="text-muted fs-7 mb-1">5 mins</span>
										<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>
									</div>


									<div className="symbol symbol-35px symbol-circle">
										<img alt="Pic" src="assets/media/avatars/300-1.jpg" />
									</div>

								</div>


								<div className="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end" data-kt-element="message-text">Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.</div>

							</div>

						</div>
						
						<div className="d-flex justify-content-start mb-10">

							<div className="d-flex flex-column align-items-start">

								<div className="d-flex align-items-center mb-2">

									<div className="symbol symbol-35px symbol-circle">
										<img alt="Pic" src="assets/media/avatars/300-25.jpg" />
									</div>


									<div className="ms-3">
										<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
										<span className="text-muted fs-7 mb-1">1 Hour</span>
									</div>

								</div>


								<div className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start" data-kt-element="message-text">Ok, Understood!</div>

							</div>

						</div>
						
						<div className="d-flex justify-content-end mb-10">

							<div className="d-flex flex-column align-items-end">

								<div className="d-flex align-items-center mb-2">

									<div className="me-3">
										<span className="text-muted fs-7 mb-1">2 Hours</span>
										<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>
									</div>


									<div className="symbol symbol-35px symbol-circle">
										<img alt="Pic" src="assets/media/avatars/300-1.jpg" />
									</div>

								</div>


								<div className="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end" data-kt-element="message-text">You’ll receive notifications for all issues, pull requests!</div>

							</div>

						</div>
						
						<div className="d-flex justify-content-start mb-10">

							<div className="d-flex flex-column align-items-start">

								<div className="d-flex align-items-center mb-2">

									<div className="symbol symbol-35px symbol-circle">
										<img alt="Pic" src="assets/media/avatars/300-25.jpg" />
									</div>


									<div className="ms-3">
										<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
										<span className="text-muted fs-7 mb-1">3 Hours</span>
									</div>

								</div>


								<div className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start" data-kt-element="message-text">You can unwatch this repository immediately by clicking here: 
								<a href="https://keenthemes.com">Keenthemes.com</a></div>

							</div>

						</div>
						
						<div className="d-flex justify-content-end mb-10">

							<div className="d-flex flex-column align-items-end">

								<div className="d-flex align-items-center mb-2">

									<div className="me-3">
										<span className="text-muted fs-7 mb-1">4 Hours</span>
										<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>
									</div>


									<div className="symbol symbol-35px symbol-circle">
										<img alt="Pic" src="assets/media/avatars/300-1.jpg" />
									</div>

								</div>


								<div className="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end" data-kt-element="message-text">Most purchased Business courses during this sale!</div>

							</div>

						</div>
						
						<div className="d-flex justify-content-start mb-10">

							<div className="d-flex flex-column align-items-start">

								<div className="d-flex align-items-center mb-2">

									<div className="symbol symbol-35px symbol-circle">
										<img alt="Pic" src="assets/media/avatars/300-25.jpg" />
									</div>


									<div className="ms-3">
										<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
										<span className="text-muted fs-7 mb-1">5 Hours</span>
									</div>

								</div>


								<div className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start" data-kt-element="message-text">Company BBQ to celebrate the last quater achievements and goals. Food and drinks provided</div>

							</div>

						</div>
						
						<div className="d-flex justify-content-end mb-10 d-none" data-kt-element="template-out">

							<div className="d-flex flex-column align-items-end">

								<div className="d-flex align-items-center mb-2">

									<div className="me-3">
										<span className="text-muted fs-7 mb-1">Just now</span>
										<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>
									</div>


									<div className="symbol symbol-35px symbol-circle">
										<img alt="Pic" src="assets/media/avatars/300-1.jpg" />
									</div>

								</div>


								<div className="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end" data-kt-element="message-text"></div>

							</div>

						</div>
						
						<div className="d-flex justify-content-start mb-10 d-none" data-kt-element="template-in">

							<div className="d-flex flex-column align-items-start">

								<div className="d-flex align-items-center mb-2">

									<div className="symbol symbol-35px symbol-circle">
										<img alt="Pic" src="assets/media/avatars/300-25.jpg" />
									</div>


									<div className="ms-3">
										<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
										<span className="text-muted fs-7 mb-1">Just now</span>
									</div>

								</div>


								<div className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start" data-kt-element="message-text">Right before vacation season we have the next Big Deal for you.</div>

							</div>

						</div>
						
					</div>
					
				</div>


				<div className="card-footer pt-4" id="kt_drawer_chat_messenger_footer">

					<textarea className="form-control form-control-flush mb-3" rows="1" data-kt-element="input" placeholder="Type a message"></textarea>
					
					<div className="d-flex flex-stack">

						<div className="d-flex align-items-center me-2">
							<button className="btn btn-sm btn-icon btn-active-light-primary me-1" type="button" data-bs-toggle="tooltip" title="Coming soon">
								<i className="ki-outline ki-paper-clip fs-3"></i>
							</button>
							<button className="btn btn-sm btn-icon btn-active-light-primary me-1" type="button" data-bs-toggle="tooltip" title="Coming soon">
								<i className="ki-outline ki-cloud-add fs-3"></i>
							</button>
						</div>

						
						<button className="btn btn-primary" type="button" data-kt-element="send">Send</button>
						
					</div>

				</div>

			</div>
			
		</div>
		

		<div id="kt_shopping_cart" className="bg-body" data-kt-drawer="true" data-kt-drawer-name="cart" data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'300px', 'md': '500px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_drawer_shopping_cart_toggle" data-kt-drawer-close="#kt_drawer_shopping_cart_close">

			<div className="card card-flush w-100 rounded-0">

				<div className="card-header">

					<h3 className="card-title text-gray-900 fw-bold">Shopping Cart</h3>


					<div className="card-toolbar">

						<div className="btn btn-sm btn-icon btn-active-light-primary" id="kt_drawer_shopping_cart_close">
							<i className="ki-outline ki-cross fs-2"></i>
						</div>

					</div>

				</div>


				<div className="card-body hover-scroll-overlay-y h-400px pt-5">

					<div className="d-flex flex-stack">

						<div className="d-flex flex-column me-3">

							<div className="mb-3">
								<a href="apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">Iblender</a>
								<span className="text-gray-500 fw-semibold d-block">The best kitchen gadget in 2022</span>
							</div>


							<div className="d-flex align-items-center">
								<span className="fw-bold text-gray-800 fs-5">$ 350</span>
								<span className="text-muted mx-2">for</span>
								<span className="fw-bold text-gray-800 fs-5 me-3">5</span>
								<a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
									<i className="ki-outline ki-minus fs-4"></i>
								</a>
								<a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
									<i className="ki-outline ki-plus fs-4"></i>
								</a>
							</div>

						</div>

						
						<div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
							<img src="assets/media/stock/600x400/img-1.jpg" alt="" />
						</div>
						
					</div>
					
					<div className="separator separator-dashed my-6"></div>
					

					<div className="d-flex flex-stack">

						<div className="d-flex flex-column me-3">

							<div className="mb-3">
								<a href="apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">SmartCleaner</a>
								<span className="text-gray-500 fw-semibold d-block">Smart tool for cooking</span>
							</div>


							<div className="d-flex align-items-center">
								<span className="fw-bold text-gray-800 fs-5">$ 650</span>
								<span className="text-muted mx-2">for</span>
								<span className="fw-bold text-gray-800 fs-5 me-3">4</span>
								<a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
									<i className="ki-outline ki-minus fs-4"></i>
								</a>
								<a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
									<i className="ki-outline ki-plus fs-4"></i>
								</a>
							</div>

						</div>

						
						<div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
							<img src="assets/media/stock/600x400/img-3.jpg" alt="" />
						</div>
						
					</div>
					
					<div className="separator separator-dashed my-6"></div>
					

					<div className="d-flex flex-stack">

						<div className="d-flex flex-column me-3">

							<div className="mb-3">
								<a href="apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">CameraMaxr</a>
								<span className="text-gray-500 fw-semibold d-block">Professional camera for edge</span>
							</div>


							<div className="d-flex align-items-center">
								<span className="fw-bold text-gray-800 fs-5">$ 150</span>
								<span className="text-muted mx-2">for</span>
								<span className="fw-bold text-gray-800 fs-5 me-3">3</span>
								<a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
									<i className="ki-outline ki-minus fs-4"></i>
								</a>
								<a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
									<i className="ki-outline ki-plus fs-4"></i>
								</a>
							</div>

						</div>

						
						<div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
							<img src="assets/media/stock/600x400/img-8.jpg" alt="" />
						</div>
						
					</div>
					
					<div className="separator separator-dashed my-6"></div>
					
					<div className="d-flex flex-stack">

						<div className="d-flex flex-column me-3">

							<div className="mb-3">
								<a href="apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">$D Printer</a>
								<span className="text-gray-500 fw-semibold d-block">Manfactoring unique objekts</span>
							</div>


							<div className="d-flex align-items-center">
								<span className="fw-bold text-gray-800 fs-5">$ 1450</span>
								<span className="text-muted mx-2">for</span>
								<span className="fw-bold text-gray-800 fs-5 me-3">7</span>
								<a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
									<i className="ki-outline ki-minus fs-4"></i>
								</a>
								<a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
									<i className="ki-outline ki-plus fs-4"></i>
								</a>
							</div>

						</div>

						
						<div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
							<img src="assets/media/stock/600x400/img-26.jpg" alt="" />
						</div>
						
					</div>
					
					<div className="separator separator-dashed my-6"></div>
					

					<div className="d-flex flex-stack">

						<div className="d-flex flex-column me-3">

							<div className="mb-3">
								<a href="apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">MotionWire</a>
								<span className="text-gray-500 fw-semibold d-block">Perfect animation tool</span>
							</div>


							<div className="d-flex align-items-center">
								<span className="fw-bold text-gray-800 fs-5">$ 650</span>
								<span className="text-muted mx-2">for</span>
								<span className="fw-bold text-gray-800 fs-5 me-3">7</span>
								<a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
									<i className="ki-outline ki-minus fs-4"></i>
								</a>
								<a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
									<i className="ki-outline ki-plus fs-4"></i>
								</a>
							</div>

						</div>

						
						<div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
							<img src="assets/media/stock/600x400/img-21.jpg" alt="" />
						</div>
						
					</div>
					
					<div className="separator separator-dashed my-6"></div>
					

					<div className="d-flex flex-stack">

						<div className="d-flex flex-column me-3">

							<div className="mb-3">
								<a href="apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">Samsung</a>
								<span className="text-gray-500 fw-semibold d-block">Profile info,Timeline etc</span>
							</div>


							<div className="d-flex align-items-center">
								<span className="fw-bold text-gray-800 fs-5">$ 720</span>
								<span className="text-muted mx-2">for</span>
								<span className="fw-bold text-gray-800 fs-5 me-3">6</span>
								<a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
									<i className="ki-outline ki-minus fs-4"></i>
								</a>
								<a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
									<i className="ki-outline ki-plus fs-4"></i>
								</a>
							</div>

						</div>

						
						<div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
							<img src="assets/media/stock/600x400/img-34.jpg" alt="" />
						</div>
						
					</div>
					
					<div className="separator separator-dashed my-6"></div>
					

					<div className="d-flex flex-stack">

						<div className="d-flex flex-column me-3">

							<div className="mb-3">
								<a href="apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">$D Printer</a>
								<span className="text-gray-500 fw-semibold d-block">Manfactoring unique objekts</span>
							</div>


							<div className="d-flex align-items-center">
								<span className="fw-bold text-gray-800 fs-5">$ 430</span>
								<span className="text-muted mx-2">for</span>
								<span className="fw-bold text-gray-800 fs-5 me-3">8</span>
								<a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
									<i className="ki-outline ki-minus fs-4"></i>
								</a>
								<a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
									<i className="ki-outline ki-plus fs-4"></i>
								</a>
							</div>

						</div>

						
						<div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
							<img src="assets/media/stock/600x400/img-27.jpg" alt="" />
						</div>
						
					</div>
				</div>


				<div className="card-footer">

					<div className="d-flex flex-stack">
						<span className="fw-bold text-gray-600">Total</span>
						<span className="text-gray-800 fw-bolder fs-5">$ 1840.00</span>
					</div>

					<div className="d-flex flex-stack">
						<span className="fw-bold text-gray-600">Sub total</span>
						<span className="text-primary fw-bolder fs-5">$ 246.35</span>
					</div>

					<div className="d-flex justify-content-end mt-9">
						<a href="#" className="btn btn-primary d-flex justify-content-end">Pleace Order</a>
					</div>

				</div>

			</div>
			
		</div>
		
		<div id="kt_scrolltop" className="scrolltop" data-kt-scrolltop="true">
			<i className="ki-outline ki-arrow-up"></i>
		</div>
		
		<div className="modal fade" id="kt_modal_upgrade_plan" tabindex="-1" aria-hidden="true">
			
			<div className="modal-dialog modal-xl">
				
				<div className="modal-content rounded">
					
					<div className="modal-header justify-content-end border-0 pb-0">

						<div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
							<i className="ki-outline ki-cross fs-1"></i>
						</div>

					</div>
					
					<div className="modal-body pt-0 pb-15 px-5 px-xl-20">

						<div className="mb-13 text-center">
							<h1 className="mb-3">Upgrade a Plan</h1>
							<div className="text-muted fw-semibold fs-5">If you need more info, please check 
							<a href="#" className="link-primary fw-bold">Pricing Guidelines</a>.</div>
						</div>

						
						<div className="d-flex flex-column">
							
							<div className="nav-group nav-group-outline mx-auto" data-kt-buttons="true">
								<button className="btn btn-color-gray-500 btn-active btn-active-secondary px-6 py-3 me-2 active" data-kt-plan="month">Monthly</button>
								<button className="btn btn-color-gray-500 btn-active btn-active-secondary px-6 py-3" data-kt-plan="annual">Annual</button>
							</div>
							

							<div className="row mt-10">

								<div className="col-lg-6 mb-10 mb-lg-0">
									
									<div className="nav flex-column">
										
										<label className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 active mb-6" data-bs-toggle="tab" data-bs-target="#kt_upgrade_plan_startup">

											<div className="d-flex align-items-center me-2">
												
												<div className="form-check form-check-custom form-check-solid form-check-success flex-shrink-0 me-6">
													<input className="form-check-input" type="radio" name="plan"  value="startup" />
                                                    {/* checked="checked" */}
												</div>
												

												<div className="flex-grow-1">
													<div className="d-flex align-items-center fs-2 fw-bold flex-wrap">Startup</div>
													<div className="fw-semibold opacity-75">Best for startups</div>
												</div>

											</div>

											
											<div className="ms-5">
												<span className="mb-2">$</span>
												<span className="fs-3x fw-bold" data-kt-plan-price-month="39" data-kt-plan-price-annual="399">39</span>
												<span className="fs-7 opacity-50">/ 
												<span data-kt-element="period">Mon</span></span>
											</div>
											
										</label>
										
										<label className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 mb-6" data-bs-toggle="tab" data-bs-target="#kt_upgrade_plan_advanced">

											<div className="d-flex align-items-center me-2">
												
												<div className="form-check form-check-custom form-check-solid form-check-success flex-shrink-0 me-6">
													<input className="form-check-input" type="radio" name="plan" value="advanced" />
												</div>
												

												<div className="flex-grow-1">
													<div className="d-flex align-items-center fs-2 fw-bold flex-wrap">Advanced</div>
													<div className="fw-semibold opacity-75">Best for 100+ team size</div>
												</div>

											</div>

											
											<div className="ms-5">
												<span className="mb-2">$</span>
												<span className="fs-3x fw-bold" data-kt-plan-price-month="339" data-kt-plan-price-annual="3399">339</span>
												<span className="fs-7 opacity-50">/ 
												<span data-kt-element="period">Mon</span></span>
											</div>
											
										</label>
										
										<label className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 mb-6" data-bs-toggle="tab" data-bs-target="#kt_upgrade_plan_enterprise">

											<div className="d-flex align-items-center me-2">
												
												<div className="form-check form-check-custom form-check-solid form-check-success flex-shrink-0 me-6">
													<input className="form-check-input" type="radio" name="plan" value="enterprise" />
												</div>
												

												<div className="flex-grow-1">
													<div className="d-flex align-items-center fs-2 fw-bold flex-wrap">Enterprise 
													<span className="badge badge-light-success ms-2 py-2 px-3 fs-7">Popular</span></div>
													<div className="fw-semibold opacity-75">Best value for 1000+ team</div>
												</div>

											</div>

											
											<div className="ms-5">
												<span className="mb-2">$</span>
												<span className="fs-3x fw-bold" data-kt-plan-price-month="999" data-kt-plan-price-annual="9999">999</span>
												<span className="fs-7 opacity-50">/ 
												<span data-kt-element="period">Mon</span></span>
											</div>
											
										</label>
										
										<label className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 mb-6" data-bs-toggle="tab" data-bs-target="#kt_upgrade_plan_custom">

											<div className="d-flex align-items-center me-2">
												
												<div className="form-check form-check-custom form-check-solid form-check-success flex-shrink-0 me-6">
													<input className="form-check-input" type="radio" name="plan" value="custom" />
												</div>
												

												<div className="flex-grow-1">
													<div className="d-flex align-items-center fs-2 fw-bold flex-wrap">Custom</div>
													<div className="fw-semibold opacity-75">Requet a custom license</div>
												</div>

											</div>

											
											<div className="ms-5">
												<a href="#" className="btn btn-sm btn-success">Contact Us</a>
											</div>
											
										</label>
										
									</div>

								</div>


								<div className="col-lg-6">

									<div className="tab-content rounded h-100 bg-light p-10">
										
										<div className="tab-pane fade show active" id="kt_upgrade_plan_startup">

											<div className="pb-5">
												<h2 className="fw-bold text-gray-900">What’s in Startup Plan?</h2>
												<div className="text-muted fw-semibold">Optimal for 10+ team size and new startup</div>
											</div>

											
											<div className="pt-1">

												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Up to 10 Active Users</span>
													<i className="ki-outline ki-check-circle fs-1 text-success"></i>
												</div>

												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Up to 30 Project Integrations</span>
													<i className="ki-outline ki-check-circle fs-1 text-success"></i>
												</div>

												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Analytics Module</span>
													<i className="ki-outline ki-check-circle fs-1 text-success"></i>
												</div>

												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-muted flex-grow-1">Finance Module</span>
													<i className="ki-outline ki-cross-circle fs-1"></i>
												</div>

												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-muted flex-grow-1">Accounting Module</span>
													<i className="ki-outline ki-cross-circle fs-1"></i>
												</div>

												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-muted flex-grow-1">Network Platform</span>
													<i className="ki-outline ki-cross-circle fs-1"></i>
												</div>

												<div className="d-flex align-items-center">
													<span className="fw-semibold fs-5 text-muted flex-grow-1">Unlimited Cloud Space</span>
													<i className="ki-outline ki-cross-circle fs-1"></i>
												</div>
											</div>

										</div>
										
										<div className="tab-pane fade" id="kt_upgrade_plan_advanced">

											<div className="pb-5">
												<h2 className="fw-bold text-gray-900">What’s in Startup Plan?</h2>
												<div className="text-muted fw-semibold">Optimal for 100+ team size and grown company</div>
											</div>

											
											<div className="pt-1">

												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Up to 10 Active Users</span>
													<i className="ki-outline ki-check-circle fs-1 text-success"></i>
												</div>

												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Up to 30 Project Integrations</span>
													<i className="ki-outline ki-check-circle fs-1 text-success"></i>
												</div>

												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Analytics Module</span>
													<i className="ki-outline ki-check-circle fs-1 text-success"></i>
												</div>

												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Finance Module</span>
													<i className="ki-outline ki-check-circle fs-1 text-success"></i>
												</div>

												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Accounting Module</span>
													<i className="ki-outline ki-check-circle fs-1 text-success"></i>
												</div>

												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-muted flex-grow-1">Network Platform</span>
													<i className="ki-outline ki-cross-circle fs-1"></i>
												</div>

												<div className="d-flex align-items-center">
													<span className="fw-semibold fs-5 text-muted flex-grow-1">Unlimited Cloud Space</span>
													<i className="ki-outline ki-cross-circle fs-1"></i>
												</div>
											</div>

										</div>
										
										<div className="tab-pane fade" id="kt_upgrade_plan_enterprise">

											<div className="pb-5">
												<h2 className="fw-bold text-gray-900">What’s in Startup Plan?</h2>
												<div className="text-muted fw-semibold">Optimal for 1000+ team and enterpise</div>
											</div>

											
											<div className="pt-1">

												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Up to 10 Active Users</span>
													<i className="ki-outline ki-check-circle fs-1 text-success"></i>
												</div>

												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Up to 30 Project Integrations</span>
													<i className="ki-outline ki-check-circle fs-1 text-success"></i>
												</div>

												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Analytics Module</span>
													<i className="ki-outline ki-check-circle fs-1 text-success"></i>
												</div>

												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Finance Module</span>
													<i className="ki-outline ki-check-circle fs-1 text-success"></i>
												</div>

												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Accounting Module</span>
													<i className="ki-outline ki-check-circle fs-1 text-success"></i>
												</div>

												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Network Platform</span>
													<i className="ki-outline ki-check-circle fs-1 text-success"></i>
												</div>

												<div className="d-flex align-items-center">
													<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Unlimited Cloud Space</span>
													<i className="ki-outline ki-check-circle fs-1 text-success"></i>
												</div>
											</div>

										</div>
										
										<div className="tab-pane fade" id="kt_upgrade_plan_custom">

											<div className="pb-5">
												<h2 className="fw-bold text-gray-900">What’s in Startup Plan?</h2>
												<div className="text-muted fw-semibold">Optimal for corporations</div>
											</div>

											
											<div className="pt-1">

												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Unlimited Users</span>
													<i className="ki-outline ki-check-circle fs-1 text-success"></i>
												</div>

												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Unlimited Project Integrations</span>
													<i className="ki-outline ki-check-circle fs-1 text-success"></i>
												</div>

												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Analytics Module</span>
													<i className="ki-outline ki-check-circle fs-1 text-success"></i>
												</div>

												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Finance Module</span>
													<i className="ki-outline ki-check-circle fs-1 text-success"></i>
												</div>

												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Accounting Module</span>
													<i className="ki-outline ki-check-circle fs-1 text-success"></i>
												</div>

												<div className="d-flex align-items-center mb-7">
													<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Network Platform</span>
													<i className="ki-outline ki-check-circle fs-1 text-success"></i>
												</div>

												<div className="d-flex align-items-center">
													<span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Unlimited Cloud Space</span>
													<i className="ki-outline ki-check-circle fs-1 text-success"></i>
												</div>
											</div>

										</div>
										
									</div>

								</div>

							</div>

						</div>
						

						<div className="d-flex flex-center flex-row-fluid pt-12">
							<button type="reset" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</button>
							<button type="submit" className="btn btn-primary" id="kt_modal_upgrade_plan_btn">

								<span className="indicator-label">Upgrade Plan</span>


								<span className="indicator-progress">Please wait... 
								<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>

							</button>
						</div>

					</div>
					
				</div>
				
			</div>
			
		</div>
		
		<div className="modal fade" id="kt_modal_view_users" tabindex="-1" aria-hidden="true">
			
			<div className="modal-dialog mw-650px">
				
				<div className="modal-content">
					
					<div className="modal-header pb-0 border-0 justify-content-end">

						<div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
							<i className="ki-outline ki-cross fs-1"></i>
						</div>

					</div>
					
					<div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">

						<div className="text-center mb-13">

							<h1 className="mb-3">Browse Users</h1>


							<div className="text-muted fw-semibold fs-5">If you need more info, please check out our 
							<a href="#" className="link-primary fw-bold">Users Directory</a>.</div>

						</div>

						
						<div className="mb-15">
							
							<div className="mh-375px scroll-y me-n7 pe-7">

								<div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">

									<div className="d-flex align-items-center">

										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/300-6.jpg" />
										</div>


										<div className="ms-6">

											<a href="#" className="d-flex align-items-center fs-5 fw-bold text-gray-900 text-hover-primary">Emma Smith 
											<span className="badge badge-light fs-8 fw-semibold ms-2">Art Director</span></a>

											
											<div className="fw-semibold text-muted">smith@kpmg.com</div>
											
										</div>

									</div>


									<div className="d-flex">
										
										<div className="text-end">
											<div className="fs-5 fw-bold text-gray-900">$23,000</div>
											<div className="fs-7 text-muted">Sales</div>
										</div>
										
									</div>

								</div>


								<div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">

									<div className="d-flex align-items-center">

										<div className="symbol symbol-35px symbol-circle">
											<span className="symbol-label bg-light-danger text-danger fw-semibold">M</span>
										</div>


										<div className="ms-6">

											<a href="#" className="d-flex align-items-center fs-5 fw-bold text-gray-900 text-hover-primary">Melody Macy 
											<span className="badge badge-light fs-8 fw-semibold ms-2">Marketing Analytic</span></a>

											
											<div className="fw-semibold text-muted">melody@altbox.com</div>
											
										</div>

									</div>


									<div className="d-flex">
										
										<div className="text-end">
											<div className="fs-5 fw-bold text-gray-900">$50,500</div>
											<div className="fs-7 text-muted">Sales</div>
										</div>
										
									</div>

								</div>


								<div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">

									<div className="d-flex align-items-center">

										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/300-1.jpg" />
										</div>


										<div className="ms-6">

											<a href="#" className="d-flex align-items-center fs-5 fw-bold text-gray-900 text-hover-primary">Max Smith 
											<span className="badge badge-light fs-8 fw-semibold ms-2">Software Enginer</span></a>

											
											<div className="fw-semibold text-muted">max@kt.com</div>
											
										</div>

									</div>


									<div className="d-flex">
										
										<div className="text-end">
											<div className="fs-5 fw-bold text-gray-900">$75,900</div>
											<div className="fs-7 text-muted">Sales</div>
										</div>
										
									</div>

								</div>


								<div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">

									<div className="d-flex align-items-center">

										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/300-5.jpg" />
										</div>


										<div className="ms-6">

											<a href="#" className="d-flex align-items-center fs-5 fw-bold text-gray-900 text-hover-primary">Sean Bean 
											<span className="badge badge-light fs-8 fw-semibold ms-2">Web Developer</span></a>

											
											<div className="fw-semibold text-muted">sean@dellito.com</div>
											
										</div>

									</div>


									<div className="d-flex">
										
										<div className="text-end">
											<div className="fs-5 fw-bold text-gray-900">$10,500</div>
											<div className="fs-7 text-muted">Sales</div>
										</div>
										
									</div>

								</div>


								<div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">

									<div className="d-flex align-items-center">

										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/300-25.jpg" />
										</div>


										<div className="ms-6">

											<a href="#" className="d-flex align-items-center fs-5 fw-bold text-gray-900 text-hover-primary">Brian Cox 
											<span className="badge badge-light fs-8 fw-semibold ms-2">UI/UX Designer</span></a>

											
											<div className="fw-semibold text-muted">brian@exchange.com</div>
											
										</div>

									</div>


									<div className="d-flex">
										
										<div className="text-end">
											<div className="fs-5 fw-bold text-gray-900">$20,000</div>
											<div className="fs-7 text-muted">Sales</div>
										</div>
										
									</div>

								</div>


								<div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">

									<div className="d-flex align-items-center">

										<div className="symbol symbol-35px symbol-circle">
											<span className="symbol-label bg-light-warning text-warning fw-semibold">C</span>
										</div>


										<div className="ms-6">

											<a href="#" className="d-flex align-items-center fs-5 fw-bold text-gray-900 text-hover-primary">Mikaela Collins 
											<span className="badge badge-light fs-8 fw-semibold ms-2">Head Of Marketing</span></a>

											
											<div className="fw-semibold text-muted">mik@pex.com</div>
											
										</div>

									</div>


									<div className="d-flex">
										
										<div className="text-end">
											<div className="fs-5 fw-bold text-gray-900">$9,300</div>
											<div className="fs-7 text-muted">Sales</div>
										</div>
										
									</div>

								</div>


								<div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">

									<div className="d-flex align-items-center">

										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/300-9.jpg" />
										</div>


										<div className="ms-6">

											<a href="#" className="d-flex align-items-center fs-5 fw-bold text-gray-900 text-hover-primary">Francis Mitcham 
											<span className="badge badge-light fs-8 fw-semibold ms-2">Software Arcitect</span></a>

											
											<div className="fw-semibold text-muted">f.mit@kpmg.com</div>
											
										</div>

									</div>


									<div className="d-flex">
										
										<div className="text-end">
											<div className="fs-5 fw-bold text-gray-900">$15,000</div>
											<div className="fs-7 text-muted">Sales</div>
										</div>
										
									</div>

								</div>


								<div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">

									<div className="d-flex align-items-center">

										<div className="symbol symbol-35px symbol-circle">
											<span className="symbol-label bg-light-danger text-danger fw-semibold">O</span>
										</div>


										<div className="ms-6">

											<a href="#" className="d-flex align-items-center fs-5 fw-bold text-gray-900 text-hover-primary">Olivia Wild 
											<span className="badge badge-light fs-8 fw-semibold ms-2">System Admin</span></a>

											
											<div className="fw-semibold text-muted">olivia@corpmail.com</div>
											
										</div>

									</div>


									<div className="d-flex">
										
										<div className="text-end">
											<div className="fs-5 fw-bold text-gray-900">$23,000</div>
											<div className="fs-7 text-muted">Sales</div>
										</div>
										
									</div>

								</div>


								<div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">

									<div className="d-flex align-items-center">

										<div className="symbol symbol-35px symbol-circle">
											<span className="symbol-label bg-light-primary text-primary fw-semibold">N</span>
										</div>


										<div className="ms-6">

											<a href="#" className="d-flex align-items-center fs-5 fw-bold text-gray-900 text-hover-primary">Neil Owen 
											<span className="badge badge-light fs-8 fw-semibold ms-2">Account Manager</span></a>

											
											<div className="fw-semibold text-muted">owen.neil@gmail.com</div>
											
										</div>

									</div>


									<div className="d-flex">
										
										<div className="text-end">
											<div className="fs-5 fw-bold text-gray-900">$45,800</div>
											<div className="fs-7 text-muted">Sales</div>
										</div>
										
									</div>

								</div>


								<div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">

									<div className="d-flex align-items-center">

										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/300-23.jpg" />
										</div>


										<div className="ms-6">

											<a href="#" className="d-flex align-items-center fs-5 fw-bold text-gray-900 text-hover-primary">Dan Wilson 
											<span className="badge badge-light fs-8 fw-semibold ms-2">Web Desinger</span></a>

											
											<div className="fw-semibold text-muted">dam@consilting.com</div>
											
										</div>

									</div>


									<div className="d-flex">
										
										<div className="text-end">
											<div className="fs-5 fw-bold text-gray-900">$90,500</div>
											<div className="fs-7 text-muted">Sales</div>
										</div>
										
									</div>

								</div>


								<div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">

									<div className="d-flex align-items-center">

										<div className="symbol symbol-35px symbol-circle">
											<span className="symbol-label bg-light-danger text-danger fw-semibold">E</span>
										</div>


										<div className="ms-6">

											<a href="#" className="d-flex align-items-center fs-5 fw-bold text-gray-900 text-hover-primary">Emma Bold 
											<span className="badge badge-light fs-8 fw-semibold ms-2">Corporate Finance</span></a>

											
											<div className="fw-semibold text-muted">emma@intenso.com</div>
											
										</div>

									</div>


									<div className="d-flex">
										
										<div className="text-end">
											<div className="fs-5 fw-bold text-gray-900">$5,000</div>
											<div className="fs-7 text-muted">Sales</div>
										</div>
										
									</div>

								</div>


								<div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">

									<div className="d-flex align-items-center">

										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/300-12.jpg" />
										</div>


										<div className="ms-6">

											<a href="#" className="d-flex align-items-center fs-5 fw-bold text-gray-900 text-hover-primary">Ana Crown 
											<span className="badge badge-light fs-8 fw-semibold ms-2">Customer Relationship</span></a>

											
											<div className="fw-semibold text-muted">ana.cf@limtel.com</div>
											
										</div>

									</div>


									<div className="d-flex">
										
										<div className="text-end">
											<div className="fs-5 fw-bold text-gray-900">$70,000</div>
											<div className="fs-7 text-muted">Sales</div>
										</div>
										
									</div>

								</div>


								<div className="d-flex flex-stack py-5">

									<div className="d-flex align-items-center">

										<div className="symbol symbol-35px symbol-circle">
											<span className="symbol-label bg-light-info text-info fw-semibold">A</span>
										</div>


										<div className="ms-6">

											<a href="#" className="d-flex align-items-center fs-5 fw-bold text-gray-900 text-hover-primary">Robert Doe 
											<span className="badge badge-light fs-8 fw-semibold ms-2">Marketing Executive</span></a>

											
											<div className="fw-semibold text-muted">robert@benko.com</div>
											
										</div>

									</div>


									<div className="d-flex">
										
										<div className="text-end">
											<div className="fs-5 fw-bold text-gray-900">$45,500</div>
											<div className="fs-7 text-muted">Sales</div>
										</div>
										
									</div>

								</div>

							</div>
							
						</div>
						

						<div className="d-flex justify-content-between">

							<div className="fw-semibold">
								<label className="fs-6">Adding Users by Team Members</label>
								<div className="fs-7 text-muted">If you need more info, please check budget planning</div>
							</div>


							<label className="form-check form-switch form-check-custom form-check-solid">
								<input className="form-check-input" type="checkbox" value=""  />
                                {/* checked="checked" */}
								<span className="form-check-label fw-semibold text-muted">Allowed</span>
							</label>
						</div>

					</div>
					
				</div>
				
			</div>
			
		</div>
		
		<div className="modal fade" id="kt_modal_create_campaign" tabindex="-1" aria-hidden="true">
			
			<div className="modal-dialog modal-fullscreen p-9">
				
				<div className="modal-content modal-rounded">
					
					<div className="modal-header py-7 d-flex justify-content-between">
						
						<h2>Create Campaign</h2>
						

						<div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
							<i className="ki-outline ki-cross fs-1"></i>
						</div>

					</div>
					
					<div className="modal-body scroll-y m-5">
						
						<div className="stepper stepper-links d-flex flex-column" id="kt_modal_create_campaign_stepper">
							
							<div className="stepper-nav justify-content-center py-2">
								
								<div className="stepper-item me-5 me-md-15 current" data-kt-stepper-element="nav">
									<h3 className="stepper-title">Campaign Details</h3>
								</div>
								
								<div className="stepper-item me-5 me-md-15" data-kt-stepper-element="nav">
									<h3 className="stepper-title">Creative Uploads</h3>
								</div>
								
								<div className="stepper-item me-5 me-md-15" data-kt-stepper-element="nav">
									<h3 className="stepper-title">Audiences</h3>
								</div>
								
								<div className="stepper-item me-5 me-md-15" data-kt-stepper-element="nav">
									<h3 className="stepper-title">Budget Estimates</h3>
								</div>
								
								<div className="stepper-item" data-kt-stepper-element="nav">
									<h3 className="stepper-title">Completed</h3>
								</div>
								
							</div>


							<form className="mx-auto w-100 mw-600px pt-15 pb-10" novalidate="novalidate" id="kt_modal_create_campaign_stepper_form">
								
								<div className="current" data-kt-stepper-element="content">

									<div className="w-100">

										<div className="pb-10 pb-lg-15">

											<h2 className="fw-bold d-flex align-items-center text-gray-900">Setup Campaign Details 
											<span className="ms-1" data-bs-toggle="tooltip" title="Campaign name will be used as reference within your campaign reports">
												<i className="ki-outline ki-information-5 text-gray-500 fs-6"></i>
											</span></h2>


											<div className="text-muted fw-semibold fs-6">If you need more info, please check out 
											<a href="#" className="link-primary fw-bold">Help Page</a>.</div>

										</div>


										<div className="mb-10 fv-row">

											<label className="required form-label mb-3">Campaign Name</label>


											<input type="text" className="form-control form-control-lg form-control-solid" name="campaign_name" placeholder="" value="" />
										</div>


										<div className="fv-row mb-10">

											<label className="d-block fw-semibold fs-6 mb-5">
												<span className="required">Company Logo</span>
												<span className="ms-1" data-bs-toggle="tooltip" title="E.g. Select a logo to represent the company that's running the campaign.">
													<i className="ki-outline ki-information-5 text-gray-500 fs-6"></i>
												</span>
											</label>

											
											{/* <style>.image-input-placeholder { background-image: url('assets/media/svg/files/blank-image.svg'); } [data-bs-theme="dark"] .image-input-placeholder { background-image: url('assets/media/svg/files/blank-image-dark.svg'); }</style> */}
											

											<div className="image-input image-input-empty image-input-outline image-input-placeholder" data-kt-image-input="true">

												<div className="image-input-wrapper w-125px h-125px"></div>


												<label className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change avatar">
													<i className="ki-outline ki-pencil fs-7"></i>

													<input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
													<input type="hidden" name="avatar_remove" />

												</label>


												<span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="Cancel avatar">
													<i className="ki-outline ki-cross fs-2"></i>
												</span>


												<span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="Remove avatar">
													<i className="ki-outline ki-cross fs-2"></i>
												</span>

											</div>
											
											<div className="form-text">Allowed file types: png, jpg, jpeg.</div>
											
										</div>


										<div className="mb-10">

											<label className="required fw-semibold fs-6 mb-5">Campaign Goal</label>

											
											<div className="d-flex fv-row">
												
												<div className="form-check form-check-custom form-check-solid">

													<input className="form-check-input me-3" name="user_role" type="radio" value="0" id="kt_modal_update_role_option_0"  />
                                                    {/* checked='checked' */}

													<label className="form-check-label" for="kt_modal_update_role_option_0">
														<div className="fw-bold text-gray-800">Get more visitors</div>
														<div className="text-gray-600">Increase impression traffic onto the platform</div>
													</label>

												</div>
												
											</div>
											
											<div className='separator separator-dashed my-5'></div>
											
											<div className="d-flex fv-row">
												
												<div className="form-check form-check-custom form-check-solid">

													<input className="form-check-input me-3" name="user_role" type="radio" value="1" id="kt_modal_update_role_option_1" />

													<label className="form-check-label" for="kt_modal_update_role_option_1">
														<div className="fw-bold text-gray-800">Get more messages on chat</div>
														<div className="text-gray-600">Increase community interaction and communication</div>
													</label>

												</div>
												
											</div>
											
											<div className='separator separator-dashed my-5'></div>
											
											<div className="d-flex fv-row">
												
												<div className="form-check form-check-custom form-check-solid">

													<input className="form-check-input me-3" name="user_role" type="radio" value="2" id="kt_modal_update_role_option_2" />

													<label className="form-check-label" for="kt_modal_update_role_option_2">
														<div className="fw-bold text-gray-800">Get more calls</div>
														<div className="text-gray-600">Boost telecommunication feedback to provide precise and accurate information</div>
													</label>

												</div>
												
											</div>
											
											<div className='separator separator-dashed my-5'></div>
											
											<div className="d-flex fv-row">
												
												<div className="form-check form-check-custom form-check-solid">

													<input className="form-check-input me-3" name="user_role" type="radio" value="3" id="kt_modal_update_role_option_3" />

													<label className="form-check-label" for="kt_modal_update_role_option_3">
														<div className="fw-bold text-gray-800">Get more likes</div>
														<div className="text-gray-600">Increase positive interactivity on social media platforms</div>
													</label>

												</div>
												
											</div>
											
											<div className='separator separator-dashed my-5'></div>
											
											<div className="d-flex fv-row">
												
												<div className="form-check form-check-custom form-check-solid">

													<input className="form-check-input me-3" name="user_role" type="radio" value="4" id="kt_modal_update_role_option_4" />

													<label className="form-check-label" for="kt_modal_update_role_option_4">
														<div className="fw-bold text-gray-800">Lead generation</div>
														<div className="text-gray-600">Collect contact information for potential customers</div>
													</label>

												</div>
												
											</div>
											
										</div>

									</div>

								</div>
								
								<div data-kt-stepper-element="content">

									<div className="w-100">

										<div className="pb-10 pb-lg-12">

											<h1 className="fw-bold text-gray-900">Upload Files</h1>


											<div className="text-muted fw-semibold fs-4">If you need more info, please check 
											<a href="#" className="link-primary">Campaign Guidelines</a></div>

										</div>


										<div className="fv-row mb-10">
											
											<div className="dropzone" id="kt_modal_create_campaign_files_upload">
												
												<div className="dz-message needsclick">

													<i className="ki-outline ki-file-up fs-3hx text-primary"></i>


													<div className="ms-4">
														<h3 className="dfs-3 fw-bold text-gray-900 mb-1">Drop campaign files here or click to upload.</h3>
														<span className="fw-semibold fs-4 text-muted">Upload up to 10 files</span>
													</div>

												</div>
											</div>
											
										</div>


										<div className="mb-10">

											<label className="fs-6 fw-semibold mb-2">Uploaded File</label>
											
											<div className="mh-300px scroll-y me-n7 pe-7">
												
												<div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
													<div className="d-flex align-items-center">

														<div className="symbol symbol-35px">
															<img src="assets/media/svg/files/pdf.svg" alt="icon" />
														</div>


														<div className="ms-6">
															<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Product Specifications</a>
															<div className="fw-semibold text-muted">230kb</div>
														</div>

													</div>

													<div className="min-w-100px">
														<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true" data-placeholder="Edit">
															<option></option>
															<option value="1">Remove</option>
															<option value="2">Modify</option>
															<option value="3">Select</option>
														</select>
													</div>

												</div>
												
												<div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
													<div className="d-flex align-items-center">

														<div className="symbol symbol-35px">
															<img src="assets/media/svg/files/tif.svg" alt="icon" />
														</div>


														<div className="ms-6">
															<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Campaign Creative Poster</a>
															<div className="fw-semibold text-muted">2.4mb</div>
														</div>

													</div>

													<div className="min-w-100px">
														<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true" data-placeholder="Edit">
															<option></option>
															<option value="1">Remove</option>
															<option value="2">Modify</option>
															<option value="3">Select</option>
														</select>
													</div>

												</div>
												
												<div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
													<div className="d-flex align-items-center">

														<div className="symbol symbol-35px">
															<img src="assets/media/svg/files/folder-document.svg" alt="icon" />
														</div>


														<div className="ms-6">
															<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Campaign Landing Page Source</a>
															<div className="fw-semibold text-muted">1.12mb</div>
														</div>

													</div>

													<div className="min-w-100px">
														<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true" data-placeholder="Edit">
															<option></option>
															<option value="1">Remove</option>
															<option value="2">Modify</option>
															<option value="3">Select</option>
														</select>
													</div>

												</div>
												
												<div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
													<div className="d-flex align-items-center">

														<div className="symbol symbol-35px">
															<img src="assets/media/svg/files/css.svg" alt="icon" />
														</div>


														<div className="ms-6">
															<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Landing Page Styling</a>
															<div className="fw-semibold text-muted">85kb</div>
														</div>

													</div>

													<div className="min-w-100px">
														<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true" data-placeholder="Edit">
															<option></option>
															<option value="1">Remove</option>
															<option value="2">Modify</option>
															<option value="3">Select</option>
														</select>
													</div>

												</div>
												
												<div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
													<div className="d-flex align-items-center">

														<div className="symbol symbol-35px">
															<img src="assets/media/svg/files/ai.svg" alt="icon" />
														</div>


														<div className="ms-6">
															<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Design Source Files</a>
															<div className="fw-semibold text-muted">48mb</div>
														</div>

													</div>

													<div className="min-w-100px">
														<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true" data-placeholder="Edit">
															<option></option>
															<option value="1">Remove</option>
															<option value="2">Modify</option>
															<option value="3">Select</option>
														</select>
													</div>

												</div>
												
												<div className="d-flex flex-stack py-4">
													<div className="d-flex align-items-center">

														<div className="symbol symbol-35px">
															<img src="assets/media/svg/files/doc.svg" alt="icon" />
														</div>


														<div className="ms-6">
															<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Campaign Plan Document</a>
															<div className="fw-semibold text-muted">27kb</div>
														</div>

													</div>

													<div className="min-w-100px">
														<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true" data-placeholder="Edit">
															<option></option>
															<option value="1">Remove</option>
															<option value="2">Modify</option>
															<option value="3">Select</option>
														</select>
													</div>

												</div>
												
											</div>
											
										</div>

									</div>

								</div>
								
								<div data-kt-stepper-element="content">

									<div className="w-100">

										<div className="pb-10 pb-lg-12">

											<h1 className="fw-bold text-gray-900">Configure Audiences</h1>


											<div className="text-muted fw-semibold fs-4">If you need more info, please check 
											<a href="#" className="link-primary">Campaign Guidelines</a></div>

										</div>


										<div className="fv-row mb-10">

											<label className="fs-6 fw-semibold mb-2">Gender 
											<span className="ms-1" data-bs-toggle="tooltip" title="Show your ads to either men or women, or select 'All' for both">
												<i className="ki-outline ki-information-5 text-gray-500 fs-6"></i>
											</span></label>
											

											<div className="row g-9" data-kt-buttons="true" data-kt-buttons-target="[data-kt-button='true']">

												<div className="col">

													<label className="btn btn-outline btn-outline-dashed btn-active-light-primary active d-flex text-start p-6" data-kt-button="true">
														
                                                        
														<span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
															<input className="form-check-input" type="radio" name="campaign_gender" value="1"  />
                                                            {/* checked="checked" */}
														</span>
														

														<span className="ms-5">
															<span className="fs-4 fw-bold text-gray-800 d-block">All</span>
														</span>

													</label>

												</div>


												<div className="col">

													<label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6" data-kt-button="true">
														
														<span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
															<input className="form-check-input" type="radio" name="campaign_gender" value="2" />
														</span>
														

														<span className="ms-5">
															<span className="fs-4 fw-bold text-gray-800 d-block">Male</span>
														</span>

													</label>

												</div>


												<div className="col">

													<label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6" data-kt-button="true">
														
														<span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
															<input className="form-check-input" type="radio" name="campaign_gender" value="3" />
														</span>
														

														<span className="ms-5">
															<span className="fs-4 fw-bold text-gray-800 d-block">Female</span>
														</span>

													</label>

												</div>

											</div>

										</div>


										<div className="fv-row mb-10">

											<label className="fs-6 fw-semibold mb-2">Age 
											<span className="ms-1" data-bs-toggle="tooltip" title="Select the minimum and maximum age of the people who will find your ad relevant.">
												<i className="ki-outline ki-information-5 text-gray-500 fs-6"></i>
											</span></label>
											
											<div className="d-flex flex-stack">
												<div id="kt_modal_create_campaign_age_min" className="fs-7 fw-semibold text-muted"></div>
												<div id="kt_modal_create_campaign_age_slider" className="noUi-sm w-100 ms-5 me-8"></div>
												<div id="kt_modal_create_campaign_age_max" className="fs-7 fw-semibold text-muted"></div>
											</div>
											
										</div>


										<div className="fv-row mb-10">

											<label className="fs-6 fw-semibold mb-2">Location 
											<span className="ms-1" data-bs-toggle="tooltip" title="Enter one or more location points for more specific targeting.">
												<i className="ki-outline ki-information-5 text-gray-500 fs-6"></i>
											</span></label>
											
											<input className="form-control d-flex align-items-center" value="" id="kt_modal_create_campaign_location" data-kt-flags-path="assets/media/flags/" />
											
										</div>

									</div>

								</div>
								
								<div data-kt-stepper-element="content">

									<div className="w-100">

										<div className="pb-10 pb-lg-12">

											<h1 className="fw-bold text-gray-900">Budget Estimates</h1>


											<div className="text-muted fw-semibold fs-4">If you need more info, please check 
											<a href="#" className="link-primary">Campaign Guidelines</a></div>

										</div>


										<div className="fv-row mb-10">

											<label className="fs-6 fw-semibold mb-2">Campaign Duration 
											<span className="ms-1" data-bs-toggle="tooltip" title="Choose how long you want your ad to run for">
												<i className="ki-outline ki-information-5 text-gray-500 fs-6"></i>
											</span></label>

											
											<div className="d-flex gap-9 mb-7">
												
												<button type="button" className="btn btn-outline btn-outline-dashed btn-active-light-primary active" id="kt_modal_create_campaign_duration_all">Continuous duration
												<br />
												<span className="fs-7">Your ad will run continuously for a daily budget.</span></button>
												
												<button type="button" className="btn btn-outline btn-outline-dashed btn-active-light-primary btn-outline-default" id="kt_modal_create_campaign_duration_fixed">Fixed duration
												<br />
												<span className="fs-7">Your ad will run on the specified dates only.</span></button>
												
											</div>
											
											<input className="form-control form-control-solid d-none" placeholder="Pick date & time" id="kt_modal_create_campaign_datepicker" />
											
										</div>


										<div className="fv-row mb-10">

											<label className="fs-6 fw-semibold mb-2">Daily Budget 
											<span className="ms-1" data-bs-toggle="tooltip" title="Choose the budget allocated for each day. Higher budget will generate better results">
												<i className="ki-outline ki-information-5 text-gray-500 fs-6"></i>
											</span></label>

											
											<div className="d-flex flex-column text-center">
												<div className="d-flex align-items-start justify-content-center mb-7">
													<span className="fw-bold fs-4 mt-1 me-2">$</span>
													<span className="fw-bold fs-3x" id="kt_modal_create_campaign_budget_label"></span>
													<span className="fw-bold fs-3x">.00</span>
												</div>
												<div id="kt_modal_create_campaign_budget_slider" className="noUi-sm"></div>
											</div>
											
										</div>

									</div>

								</div>
								
								<div data-kt-stepper-element="content">

									<div className="w-100">

										<div className="pb-12 text-center">

											<h1 className="fw-bold text-gray-900">Campaign Created!</h1>


											<div className="fw-semibold text-muted fs-4">You will receive an email with with the summary of your newly created campaign!</div>

										</div>


										<div className="d-flex flex-center pb-20">
											<button id="kt_modal_create_campaign_create_new" type="button" className="btn btn-lg btn-light me-3" data-kt-element="complete-start">Create New Campaign</button>
											<a href="" className="btn btn-lg btn-primary" data-bs-toggle="tooltip" title="Coming Soon">View Campaign</a>
										</div>


										<div className="text-center px-4">
											<img src="assets/media/illustrations/sketchy-1/9.png" alt="" className="mww-100 mh-350px" />
										</div>

									</div>
								</div>
								

								<div className="d-flex flex-stack pt-10">

									<div className="me-2">
										<button type="button" className="btn btn-lg btn-light-primary me-3" data-kt-stepper-action="previous" data-kt-stepper-state="hide-on-last-step">
										<i className="ki-outline ki-arrow-left fs-3 me-1"></i>Back</button>
									</div>


									<div>
										<button type="button" className="btn btn-lg btn-primary" data-kt-stepper-action="submit">
											<span className="indicator-label">Submit 
											<i className="ki-outline ki-arrow-right fs-3 ms-2 me-0"></i></span>
											<span className="indicator-progress">Please wait... 
											<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
										</button>
										<button type="button" className="btn btn-lg btn-primary" data-kt-stepper-action="next">Continue 
										<i className="ki-outline ki-arrow-right fs-3 ms-1 me-0"></i></button>
									</div>

								</div>

							</form>

						</div>
						
					</div>
					
				</div>
			</div>
		</div>
		
		<div className="modal fade" id="kt_modal_offer_a_deal" tabindex="-1" aria-hidden="true">
			
			<div className="modal-dialog modal-dialog-centered mw-1000px">
				
				<div className="modal-content">
					
					<div className="modal-header py-7 d-flex justify-content-between">
						
						<h2>Offer a Deal</h2>
						

						<div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
							<i className="ki-outline ki-cross fs-1"></i>
						</div>

					</div>
					
					<div className="modal-body scroll-y m-5">
						
						<div className="stepper stepper-links d-flex flex-column" id="kt_modal_offer_a_deal_stepper">
							
							<div className="stepper-nav justify-content-center py-2">
								
								<div className="stepper-item me-5 me-md-15 current" data-kt-stepper-element="nav">
									<h3 className="stepper-title">Deal Type</h3>
								</div>
								
								<div className="stepper-item me-5 me-md-15" data-kt-stepper-element="nav">
									<h3 className="stepper-title">Deal Details</h3>
								</div>
								
								<div className="stepper-item me-5 me-md-15" data-kt-stepper-element="nav">
									<h3 className="stepper-title">Finance Settings</h3>
								</div>
								
								<div className="stepper-item" data-kt-stepper-element="nav">
									<h3 className="stepper-title">Completed</h3>
								</div>
								
							</div>


							<form className="mx-auto mw-500px w-100 pt-15 pb-10" novalidate="novalidate" id="kt_modal_offer_a_deal_form">
								
								<div className="current" data-kt-stepper-element="content">

									<div className="w-100">

										<div className="mb-13">

											<h2 className="mb-3">Deal Type</h2>


											<div className="text-muted fw-semibold fs-5">If you need more info, please check out 
											<a href="#" className="link-primary fw-bold">FAQ Page</a>.</div>

										</div>


										<div className="fv-row mb-15" data-kt-buttons="true">

											<label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6 mb-6 active">

												<input className="btn-check" type="radio"  name="offer_type" value="1" />
                                                {/* checked="checked" */}

												<span className="d-flex">

													<i className="ki-outline ki-profile-circle fs-3hx"></i>


													<span className="ms-4">
														<span className="fs-3 fw-bold text-gray-900 mb-2 d-block">Personal Deal</span>
														<span className="fw-semibold fs-4 text-muted">If you need more info, please check it out</span>
													</span>

												</span>

											</label>


											<label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6">

												<input className="btn-check" type="radio" name="offer_type" value="2" />

												<span className="d-flex">

													<i className="ki-outline ki-element-11 fs-3hx"></i>


													<span className="ms-4">
														<span className="fs-3 fw-bold text-gray-900 mb-2 d-block">Corporate Deal</span>
														<span className="fw-semibold fs-4 text-muted">Create corporate account to manage users</span>
													</span>

												</span>

											</label>

										</div>


										<div className="d-flex justify-content-end">
											<button type="button" className="btn btn-lg btn-primary" data-kt-element="type-next">
												<span className="indicator-label">Offer Details</span>
												<span className="indicator-progress">Please wait... 
												<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
											</button>
										</div>

									</div>

								</div>
								

								<div data-kt-stepper-element="content">

									<div className="w-100">

										<div className="mb-13">

											<h2 className="mb-3">Deal Details</h2>


											<div className="text-muted fw-semibold fs-5">If you need more info, please check out 
											<a href="#" className="link-primary fw-bold">FAQ Page</a>.</div>

										</div>


										<div className="fv-row mb-8">

											<label className="required fs-6 fw-semibold mb-2">Customer</label>


											<select className="form-select form-select-solid" data-control="select2" data-placeholder="Select an option" name="details_customer">
												<option></option>
												<option value="1" selected="selected">Keenthemes</option>
												<option value="2">CRM App</option>
											</select>
										</div>


										<div className="fv-row mb-8">

											<label className="required fs-6 fw-semibold mb-2">Deal Title</label>


											<input type="text" className="form-control form-control-solid" placeholder="Enter Deal Title" name="details_title" value="Marketing Campaign" />
										</div>


										<div className="fv-row mb-8">

											<label className="fs-6 fw-semibold mb-2">Deal Description</label>


											<textarea className="form-control form-control-solid" rows="3" placeholder="Enter Deal Description" name="details_description">Experience share market at your fingertips with TICK PRO stock investment mobile trading app</textarea>

										</div>


										<div className="fv-row mb-8">
											<label className="required fs-6 fw-semibold mb-2">Activation Date</label>
											<div className="position-relative d-flex align-items-center">

												<i className="ki-outline ki-calendar-8 fs-2 position-absolute mx-4"></i>

												
												<input className="form-control form-control-solid ps-12" placeholder="Pick date range" name="details_activation_date" />
												
											</div>
										</div>


										<div className="fv-row mb-15">

											<div className="d-flex flex-stack">

												<div className="me-5">
													<label className="required fs-6 fw-semibold">Notifications</label>
													<div className="fs-7 fw-semibold text-muted">Allow Notifications by Phone or Email</div>
												</div>

												
												<div className="d-flex">
													
													<label className="form-check form-check-custom form-check-solid me-10">

														<input className="form-check-input h-20px w-20px" type="checkbox" value="email" name="details_notifications[]" />

														<span className="form-check-label fw-semibold">Email</span>

													</label>
													
													<label className="form-check form-check-custom form-check-solid">

														<input className="form-check-input h-20px w-20px" type="checkbox" value="phone"  name="details_notifications[]" />
                                                        {/* checked="checked" */}

														<span className="form-check-label fw-semibold">Phone</span>

													</label>
													
												</div>
												
											</div>

										</div>


										<div className="d-flex flex-stack">
											<button type="button" className="btn btn-lg btn-light me-3" data-kt-element="details-previous">Deal Type</button>
											<button type="button" className="btn btn-lg btn-primary" data-kt-element="details-next">
												<span className="indicator-label">Financing</span>
												<span className="indicator-progress">Please wait... 
												<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
											</button>
										</div>

									</div>

								</div>

								
								<div data-kt-stepper-element="content">

									<div className="w-100">

										<div className="mb-13">

											<h2 className="mb-3">Finance</h2>


											<div className="text-muted fw-semibold fs-5">If you need more info, please check out 
											<a href="#" className="link-primary fw-bold">FAQ Page</a>.</div>

										</div>


										<div className="fv-row mb-8">

											<label className="d-flex align-items-center fs-6 fw-semibold mb-2">
												<span className="required">Setup Budget</span>
												<span className="lh-1 ms-1" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-html="true" data-bs-content="&lt;div class=&#039;p-4 rounded bg-light&#039;&gt; &lt;div class=&#039;d-flex flex-stack text-muted mb-4&#039;&gt; &lt;i class=&quot;ki-outline ki-bank fs-3 me-3&quot;&gt;&lt;/i&gt; &lt;div class=&#039;fw-bold&#039;&gt;INCBANK **** 1245 STATEMENT&lt;/div&gt; &lt;/div&gt; &lt;div class=&#039;d-flex flex-stack fw-semibold text-gray-600&#039;&gt; &lt;div&gt;Amount&lt;/div&gt; &lt;div&gt;Transaction&lt;/div&gt; &lt;/div&gt; &lt;div class=&#039;separator separator-dashed my-2&#039;&gt;&lt;/div&gt; &lt;div class=&#039;d-flex flex-stack text-gray-900 fw-bold mb-2&#039;&gt; &lt;div&gt;USD345.00&lt;/div&gt; &lt;div&gt;KEENTHEMES*&lt;/div&gt; &lt;/div&gt; &lt;div class=&#039;d-flex flex-stack text-muted mb-2&#039;&gt; &lt;div&gt;USD75.00&lt;/div&gt; &lt;div&gt;Hosting fee&lt;/div&gt; &lt;/div&gt; &lt;div class=&#039;d-flex flex-stack text-muted&#039;&gt; &lt;div&gt;USD3,950.00&lt;/div&gt; &lt;div&gt;Payrol&lt;/div&gt; &lt;/div&gt; &lt;/div&gt;">
													<i className="ki-outline ki-information-5 text-gray-500 fs-6"></i>
												</span>
											</label>

											
											<div className="position-relative w-lg-250px" id="kt_modal_finance_setup" data-kt-dialer="true" data-kt-dialer-min="50" data-kt-dialer-max="50000" data-kt-dialer-step="100" data-kt-dialer-prefix="$" data-kt-dialer-decimals="2">
												
												<button type="button" className="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 start-0" data-kt-dialer-control="decrease">
													<i className="ki-outline ki-minus-circle fs-1"></i>
												</button>
												
												<input type="text" className="form-control form-control-solid border-0 ps-12" data-kt-dialer-control="input" placeholder="Amount" name="finance_setup" readonly="readonly" value="$50" />
												
												<button type="button" className="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 end-0" data-kt-dialer-control="increase">
													<i className="ki-outline ki-plus-circle fs-1"></i>
												</button>
												
											</div>
											
										</div>


										<div className="fv-row mb-8">

											<label className="fs-6 fw-semibold mb-2">Budget Usage</label>


											<div className="row g-9" data-kt-buttons="true" data-kt-buttons-target="[data-kt-button='true']">

												<div className="col-md-6 col-lg-12 col-xxl-6">

													<label className="btn btn-outline btn-outline-dashed btn-active-light-primary active d-flex text-start p-6" data-kt-button="true">
														
														<span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
															<input className="form-check-input" type="radio" name="finance_usage" value="1"  />
                                                            {/* checked="checked" */}
														</span>
														

														<span className="ms-5">
															<span className="fs-4 fw-bold text-gray-800 mb-2 d-block">Precise Usage</span>
															<span className="fw-semibold fs-7 text-gray-600">Withdraw money to your bank account per transaction under $50,000 budget</span>
														</span>

													</label>

												</div>


												<div className="col-md-6 col-lg-12 col-xxl-6">

													<label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6" data-kt-button="true">
														
														<span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
															<input className="form-check-input" type="radio" name="finance_usage" value="2" />
														</span>
														

														<span className="ms-5">
															<span className="fs-4 fw-bold text-gray-800 mb-2 d-block">Extreme Usage</span>
															<span className="fw-semibold fs-7 text-gray-600">Withdraw money to your bank account per transaction under $50,000 budget</span>
														</span>

													</label>

												</div>

											</div>

										</div>


										<div className="fv-row mb-15">

											<div className="d-flex flex-stack">

												<div className="me-5">
													<label className="fs-6 fw-semibold">Allow Changes in Budget</label>
													<div className="fs-7 fw-semibold text-muted">If you need more info, please check budget planning</div>
												</div>


												<label className="form-check form-switch form-check-custom form-check-solid">
													<input className="form-check-input" type="checkbox" value="1" name="finance_allow"  />
                                                    {/* checked="checked" */}
													<span className="form-check-label fw-semibold text-muted">Allowed</span>
												</label>
											</div>

										</div>


										<div className="d-flex flex-stack">
											<button type="button" className="btn btn-lg btn-light me-3" data-kt-element="finance-previous">Project Settings</button>
											<button type="button" className="btn btn-lg btn-primary" data-kt-element="finance-next">
												<span className="indicator-label">Build Team</span>
												<span className="indicator-progress">Please wait... 
												<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
											</button>
										</div>

									</div>

								</div>
								
								<div data-kt-stepper-element="content">

									<div className="w-100">

										<div className="mb-13">

											<h2 className="mb-3">Deal Created!</h2>


											<div className="text-muted fw-semibold fs-5">If you need more info, please check out 
											<a href="#" className="link-primary fw-bold">FAQ Page</a>.</div>

										</div>


										<div className="d-flex flex-center pb-20">
											<button type="button" className="btn btn-lg btn-light me-3" data-kt-element="complete-start">Create New Deal</button>
											<a href="#" className="btn btn-lg btn-primary" data-bs-toggle="tooltip" title="Coming Soon">View Deal</a>
										</div>


										<div className="text-center px-4">
											<img src="assets/media/illustrations/sketchy-1/20.png" alt="" className="mw-100 mh-300px" />
										</div>

									</div>
								</div>
								
							</form>

						</div>
						
					</div>
					
				</div>
			</div>
		</div>
		
		<div className="modal fade" id="kt_modal_two_factor_authentication" tabindex="-1" aria-hidden="true">
			
			<div className="modal-dialog modal-dialog-centered mw-650px">
				
				<div className="modal-content">
					
					<div className="modal-header flex-stack">

						<h2>Choose An Authentication Method</h2>


						<div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
							<i className="ki-outline ki-cross fs-1"></i>
						</div>

					</div>
					
					<div className="modal-body scroll-y pt-10 pb-15 px-lg-17">

						<div data-kt-element="options">

							<p className="text-muted fs-5 fw-semibold mb-10">In addition to your username and password, you’ll have to enter a code (delivered via app or SMS) to log into your account.</p>


							<div className="pb-10">

								<input type="radio" className="btn-check" name="auth_option" value="apps"  id="kt_modal_two_factor_authentication_option_1" />
                                {/* checked="checked" */}
								<label className="btn btn-outline btn-outline-dashed btn-active-light-primary p-7 d-flex align-items-center mb-5" for="kt_modal_two_factor_authentication_option_1">
									<i className="ki-outline ki-setting-2 fs-4x me-4"></i>
									<span className="d-block fw-semibold text-start">
										<span className="text-gray-900 fw-bold d-block fs-3">Authenticator Apps</span>
										<span className="text-muted fw-semibold fs-6">Get codes from an app like Google Authenticator, Microsoft Authenticator, Authy or 1Password.</span>
									</span>
								</label>


								<input type="radio" className="btn-check" name="auth_option" value="sms" id="kt_modal_two_factor_authentication_option_2" />
								<label className="btn btn-outline btn-outline-dashed btn-active-light-primary p-7 d-flex align-items-center" for="kt_modal_two_factor_authentication_option_2">
									<i className="ki-outline ki-message-text-2 fs-4x me-4"></i>
									<span className="d-block fw-semibold text-start">
										<span className="text-gray-900 fw-bold d-block fs-3">SMS</span>
										<span className="text-muted fw-semibold fs-6">We will send a code via SMS if you need to use your backup login method.</span>
									</span>
								</label>

							</div>


							<button className="btn btn-primary w-100" data-kt-element="options-select">Continue</button>

						</div>

						
						<div className="d-none" data-kt-element="apps">

							<h3 className="text-gray-900 fw-bold mb-7">Authenticator Apps</h3>


							<div className="text-gray-500 fw-semibold fs-6 mb-10">Using an authenticator app like 
							<a href="https://support.google.com/accounts/answer/1066447?hl=en" target="_blank">Google Authenticator</a>, 
							<a href="https://www.microsoft.com/en-us/account/authenticator" target="_blank">Microsoft Authenticator</a>, 
							<a href="https://authy.com/download/" target="_blank">Authy</a>, or 
							<a href="https://support.1password.com/one-time-passwords/" target="_blank">1Password</a>, scan the QR code. It will generate a 6 digit code for you to enter below. 
							
							<div className="pt-5 text-center">
								<img src="assets/media/misc/qr.png" alt="" className="mw-150px" />
							</div>
							</div>


							<div className="notice d-flex bg-light-warning rounded border-warning border border-dashed mb-10 p-6">

								<i className="ki-outline ki-information fs-2tx text-warning me-4"></i>


								<div className="d-flex flex-stack flex-grow-1">

									<div className="fw-semibold">
										<div className="fs-6 text-gray-700">If you having trouble using the QR code, select manual entry on your app, and enter your username and the code: 
										<div className="fw-bold text-gray-900 pt-2">KBSS3QDAAFUMCBY63YCKI5WSSVACUMPN</div></div>
									</div>

								</div>

							</div>


							<form data-kt-element="apps-form" className="form" action="#">

								<div className="mb-10 fv-row">
									<input type="text" className="form-control form-control-lg form-control-solid" placeholder="Enter authentication code" name="code" />
								</div>


								<div className="d-flex flex-center">
									<button type="reset" data-kt-element="apps-cancel" className="btn btn-light me-3">Cancel</button>
									<button type="submit" data-kt-element="apps-submit" className="btn btn-primary">
										<span className="indicator-label">Submit</span>
										<span className="indicator-progress">Please wait... 
										<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
									</button>
								</div>

							</form>

						</div>

						
						<div className="d-none" data-kt-element="sms">

							<h3 className="text-gray-900 fw-bold fs-3 mb-5">SMS: Verify Your Mobile Number</h3>


							<div className="text-muted fw-semibold mb-10">Enter your mobile phone number with country code and we will send you a verification code upon request.</div>


							<form data-kt-element="sms-form" className="form" action="#">

								<div className="mb-10 fv-row">
									<input type="text" className="form-control form-control-lg form-control-solid" placeholder="Mobile number with country code..." name="mobile" />
								</div>


								<div className="d-flex flex-center">
									<button type="reset" data-kt-element="sms-cancel" className="btn btn-light me-3">Cancel</button>
									<button type="submit" data-kt-element="sms-submit" className="btn btn-primary">
										<span className="indicator-label">Submit</span>
										<span className="indicator-progress">Please wait... 
										<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
									</button>
								</div>

							</form>

						</div>
						
					</div>
					
				</div>
				
			</div>
			
		</div>
		
		<div className="modal fade" id="kt_modal_users_search" tabindex="-1" aria-hidden="true">
			
			<div className="modal-dialog modal-dialog-centered mw-650px">
				
				<div className="modal-content">
					
					<div className="modal-header pb-0 border-0 justify-content-end">

						<div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
							<i className="ki-outline ki-cross fs-1"></i>
						</div>

					</div>
					
					<div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">

						<div className="text-center mb-13">
							<h1 className="mb-3">Search Users</h1>
							<div className="text-muted fw-semibold fs-5">Invite Collaborators To Your Project</div>
						</div>

						
						<div id="kt_modal_users_search_handler" data-kt-search-keypress="true" data-kt-search-min-length="2" data-kt-search-enter="enter" data-kt-search-layout="inline">

							<form data-kt-search-element="form" className="w-100 position-relative mb-5" autocomplete="off">
								
								<input type="hidden" />
								

								<i className="ki-outline ki-magnifier fs-2 fs-lg-1 text-gray-500 position-absolute top-50 ms-5 translate-middle-y"></i>


								<input type="text" className="form-control form-control-lg form-control-solid px-15" name="search" value="" placeholder="Search by username, full name or email..." data-kt-search-element="input" />
								
								<span className="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5" data-kt-search-element="spinner">
									<span className="spinner-border h-15px w-15px align-middle text-muted"></span>
								</span>
								
								<span className="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 me-5 d-none" data-kt-search-element="clear">
									<i className="ki-outline ki-cross fs-2 fs-lg-1 me-0"></i>
								</span>
								
							</form>


							<div className="py-5">
								
								<div data-kt-search-element="suggestions">

									<h3 className="fw-semibold mb-5">Recently searched:</h3>

									
									<div className="mh-375px scroll-y me-n7 pe-7">

										<a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">

											<div className="symbol symbol-35px symbol-circle me-5">
												<img alt="Pic" src="assets/media/avatars/300-6.jpg" />
											</div>


											<div className="fw-semibold">
												<span className="fs-6 text-gray-800 me-2">Emma Smith</span>
												<span className="badge badge-light">Art Director</span>
											</div>

										</a>


										<a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">

											<div className="symbol symbol-35px symbol-circle me-5">
												<span className="symbol-label bg-light-danger text-danger fw-semibold">M</span>
											</div>


											<div className="fw-semibold">
												<span className="fs-6 text-gray-800 me-2">Melody Macy</span>
												<span className="badge badge-light">Marketing Analytic</span>
											</div>

										</a>


										<a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">

											<div className="symbol symbol-35px symbol-circle me-5">
												<img alt="Pic" src="assets/media/avatars/300-1.jpg" />
											</div>


											<div className="fw-semibold">
												<span className="fs-6 text-gray-800 me-2">Max Smith</span>
												<span className="badge badge-light">Software Enginer</span>
											</div>

										</a>


										<a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">

											<div className="symbol symbol-35px symbol-circle me-5">
												<img alt="Pic" src="assets/media/avatars/300-5.jpg" />
											</div>


											<div className="fw-semibold">
												<span className="fs-6 text-gray-800 me-2">Sean Bean</span>
												<span className="badge badge-light">Web Developer</span>
											</div>

										</a>


										<a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">

											<div className="symbol symbol-35px symbol-circle me-5">
												<img alt="Pic" src="assets/media/avatars/300-25.jpg" />
											</div>


											<div className="fw-semibold">
												<span className="fs-6 text-gray-800 me-2">Brian Cox</span>
												<span className="badge badge-light">UI/UX Designer</span>
											</div>

										</a>

									</div>
									
								</div>
								
								<div data-kt-search-element="results" className="d-none">
									
									<div className="mh-375px scroll-y me-n7 pe-7">

										<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="0">

											<div className="d-flex align-items-center">
												
												<label className="form-check form-check-custom form-check-solid me-5">
													<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='0']" value="0" />
												</label>
												

												<div className="symbol symbol-35px symbol-circle">
													<img alt="Pic" src="assets/media/avatars/300-6.jpg" />
												</div>


												<div className="ms-5">
													<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Smith</a>
													<div className="fw-semibold text-muted">smith@kpmg.com</div>
												</div>

											</div>

											
											<div className="ms-2 w-100px">
												<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
													<option value="1">Guest</option>
													<option value="2" selected="selected">Owner</option>
													<option value="3">Can Edit</option>
												</select>
											</div>
											
										</div>

										
										<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
										

										<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="1">

											<div className="d-flex align-items-center">
												
												<label className="form-check form-check-custom form-check-solid me-5">
													<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='1']" value="1" />
												</label>
												

												<div className="symbol symbol-35px symbol-circle">
													<span className="symbol-label bg-light-danger text-danger fw-semibold">M</span>
												</div>


												<div className="ms-5">
													<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Melody Macy</a>
													<div className="fw-semibold text-muted">melody@altbox.com</div>
												</div>

											</div>

											
											<div className="ms-2 w-100px">
												<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
													<option value="1" selected="selected">Guest</option>
													<option value="2">Owner</option>
													<option value="3">Can Edit</option>
												</select>
											</div>
											
										</div>

										
										<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
										

										<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="2">

											<div className="d-flex align-items-center">
												
												<label className="form-check form-check-custom form-check-solid me-5">
													<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='2']" value="2" />
												</label>
												

												<div className="symbol symbol-35px symbol-circle">
													<img alt="Pic" src="assets/media/avatars/300-1.jpg" />
												</div>


												<div className="ms-5">
													<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Max Smith</a>
													<div className="fw-semibold text-muted">max@kt.com</div>
												</div>

											</div>

											
											<div className="ms-2 w-100px">
												<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
													<option value="1">Guest</option>
													<option value="2">Owner</option>
													<option value="3" selected="selected">Can Edit</option>
												</select>
											</div>
											
										</div>

										
										<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
										

										<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="3">

											<div className="d-flex align-items-center">
												
												<label className="form-check form-check-custom form-check-solid me-5">
													<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='3']" value="3" />
												</label>
												

												<div className="symbol symbol-35px symbol-circle">
													<img alt="Pic" src="assets/media/avatars/300-5.jpg" />
												</div>


												<div className="ms-5">
													<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Sean Bean</a>
													<div className="fw-semibold text-muted">sean@dellito.com</div>
												</div>

											</div>

											
											<div className="ms-2 w-100px">
												<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
													<option value="1">Guest</option>
													<option value="2" selected="selected">Owner</option>
													<option value="3">Can Edit</option>
												</select>
											</div>
											
										</div>

										
										<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
										

										<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="4">

											<div className="d-flex align-items-center">
												
												<label className="form-check form-check-custom form-check-solid me-5">
													<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='4']" value="4" />
												</label>
												
												<div className="symbol symbol-35px symbol-circle">
													<img alt="Pic" src="assets/media/avatars/300-25.jpg" />
												</div>


												<div className="ms-5">
													<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Brian Cox</a>
													<div className="fw-semibold text-muted">brian@exchange.com</div>
												</div>

											</div>

											
											<div className="ms-2 w-100px">
												<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
													<option value="1">Guest</option>
													<option value="2">Owner</option>
													<option value="3" selected="selected">Can Edit</option>
												</select>
											</div>
											
										</div>

										
										<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
										

										<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="5">

											<div className="d-flex align-items-center">
												
												<label className="form-check form-check-custom form-check-solid me-5">
													<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='5']" value="5" />
												</label>
												

												<div className="symbol symbol-35px symbol-circle">
													<span className="symbol-label bg-light-warning text-warning fw-semibold">C</span>
												</div>


												<div className="ms-5">
													<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Mikaela Collins</a>
													<div className="fw-semibold text-muted">mik@pex.com</div>
												</div>

											</div>

											
											<div className="ms-2 w-100px">
												<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
													<option value="1">Guest</option>
													<option value="2" selected="selected">Owner</option>
													<option value="3">Can Edit</option>
												</select>
											</div>
											
										</div>

										
										<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
										

										<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="6">

											<div className="d-flex align-items-center">
												
												<label className="form-check form-check-custom form-check-solid me-5">
													<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='6']" value="6" />
												</label>
												

												<div className="symbol symbol-35px symbol-circle">
													<img alt="Pic" src="assets/media/avatars/300-9.jpg" />
												</div>


												<div className="ms-5">
													<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Francis Mitcham</a>
													<div className="fw-semibold text-muted">f.mit@kpmg.com</div>
												</div>

											</div>

											
											<div className="ms-2 w-100px">
												<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
													<option value="1">Guest</option>
													<option value="2">Owner</option>
													<option value="3" selected="selected">Can Edit</option>
												</select>
											</div>
											
										</div>

										
										<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
										

										<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="7">

											<div className="d-flex align-items-center">
												
												<label className="form-check form-check-custom form-check-solid me-5">
													<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='7']" value="7" />
												</label>
												

												<div className="symbol symbol-35px symbol-circle">
													<span className="symbol-label bg-light-danger text-danger fw-semibold">O</span>
												</div>


												<div className="ms-5">
													<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Olivia Wild</a>
													<div className="fw-semibold text-muted">olivia@corpmail.com</div>
												</div>

											</div>

											
											<div className="ms-2 w-100px">
												<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
													<option value="1">Guest</option>
													<option value="2" selected="selected">Owner</option>
													<option value="3">Can Edit</option>
												</select>
											</div>
											
										</div>

										
										<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
										

										<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="8">

											<div className="d-flex align-items-center">
												
												<label className="form-check form-check-custom form-check-solid me-5">
													<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='8']" value="8" />
												</label>
												

												<div className="symbol symbol-35px symbol-circle">
													<span className="symbol-label bg-light-primary text-primary fw-semibold">N</span>
												</div>


												<div className="ms-5">
													<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Neil Owen</a>
													<div className="fw-semibold text-muted">owen.neil@gmail.com</div>
												</div>

											</div>

											
											<div className="ms-2 w-100px">
												<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
													<option value="1" selected="selected">Guest</option>
													<option value="2">Owner</option>
													<option value="3">Can Edit</option>
												</select>
											</div>
											
										</div>

										
										<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
										

										<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="9">

											<div className="d-flex align-items-center">
												
												<label className="form-check form-check-custom form-check-solid me-5">
													<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='9']" value="9" />
												</label>
												

												<div className="symbol symbol-35px symbol-circle">
													<img alt="Pic" src="assets/media/avatars/300-23.jpg" />
												</div>


												<div className="ms-5">
													<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Dan Wilson</a>
													<div className="fw-semibold text-muted">dam@consilting.com</div>
												</div>

											</div>

											
											<div className="ms-2 w-100px">
												<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
													<option value="1">Guest</option>
													<option value="2">Owner</option>
													<option value="3" selected="selected">Can Edit</option>
												</select>
											</div>
											
										</div>

										
										<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
										

										<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="10">

											<div className="d-flex align-items-center">
												
												<label className="form-check form-check-custom form-check-solid me-5">
													<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='10']" value="10" />
												</label>
												

												<div className="symbol symbol-35px symbol-circle">
													<span className="symbol-label bg-light-danger text-danger fw-semibold">E</span>
												</div>


												<div className="ms-5">
													<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Bold</a>
													<div className="fw-semibold text-muted">emma@intenso.com</div>
												</div>

											</div>

											
											<div className="ms-2 w-100px">
												<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
													<option value="1">Guest</option>
													<option value="2" selected="selected">Owner</option>
													<option value="3">Can Edit</option>
												</select>
											</div>
											
										</div>

										
										<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
										

										<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="11">

											<div className="d-flex align-items-center">
												
												<label className="form-check form-check-custom form-check-solid me-5">
													<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='11']" value="11" />
												</label>
												

												<div className="symbol symbol-35px symbol-circle">
													<img alt="Pic" src="assets/media/avatars/300-12.jpg" />
												</div>


												<div className="ms-5">
													<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ana Crown</a>
													<div className="fw-semibold text-muted">ana.cf@limtel.com</div>
												</div>

											</div>

											
											<div className="ms-2 w-100px">
												<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
													<option value="1" selected="selected">Guest</option>
													<option value="2">Owner</option>
													<option value="3">Can Edit</option>
												</select>
											</div>
											
										</div>

										
										<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
										
										<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="12">

											<div className="d-flex align-items-center">
												
												<label className="form-check form-check-custom form-check-solid me-5">
													<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='12']" value="12" />
												</label>
												

												<div className="symbol symbol-35px symbol-circle">
													<span className="symbol-label bg-light-info text-info fw-semibold">A</span>
												</div>


												<div className="ms-5">
													<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Robert Doe</a>
													<div className="fw-semibold text-muted">robert@benko.com</div>
												</div>

											</div>

											
											<div className="ms-2 w-100px">
												<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
													<option value="1">Guest</option>
													<option value="2">Owner</option>
													<option value="3" selected="selected">Can Edit</option>
												</select>
											</div>
											
										</div>

										
										<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
										

										<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="13">

											<div className="d-flex align-items-center">
												
												<label className="form-check form-check-custom form-check-solid me-5">
													<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='13']" value="13" />
												</label>
												

												<div className="symbol symbol-35px symbol-circle">
													<img alt="Pic" src="assets/media/avatars/300-13.jpg" />
												</div>


												<div className="ms-5">
													<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">John Miller</a>
													<div className="fw-semibold text-muted">miller@mapple.com</div>
												</div>

											</div>

											
											<div className="ms-2 w-100px">
												<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
													<option value="1">Guest</option>
													<option value="2">Owner</option>
													<option value="3" selected="selected">Can Edit</option>
												</select>
											</div>
											
										</div>

										
										<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
										

										<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="14">

											<div className="d-flex align-items-center">
												
												<label className="form-check form-check-custom form-check-solid me-5">
													<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='14']" value="14" />
												</label>
												

												<div className="symbol symbol-35px symbol-circle">
													<span className="symbol-label bg-light-success text-success fw-semibold">L</span>
												</div>


												<div className="ms-5">
													<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Lucy Kunic</a>
													<div className="fw-semibold text-muted">lucy.m@fentech.com</div>
												</div>

											</div>

											
											<div className="ms-2 w-100px">
												<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
													<option value="1">Guest</option>
													<option value="2" selected="selected">Owner</option>
													<option value="3">Can Edit</option>
												</select>
											</div>
											
										</div>

										
										<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
										

										<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="15">

											<div className="d-flex align-items-center">
												
												<label className="form-check form-check-custom form-check-solid me-5">
													<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='15']" value="15" />
												</label>
												

												<div className="symbol symbol-35px symbol-circle">
													<img alt="Pic" src="assets/media/avatars/300-21.jpg" />
												</div>


												<div className="ms-5">
													<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ethan Wilder</a>
													<div className="fw-semibold text-muted">ethan@loop.com.au</div>
												</div>

											</div>

											
											<div className="ms-2 w-100px">
												<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
													<option value="1" selected="selected">Guest</option>
													<option value="2">Owner</option>
													<option value="3">Can Edit</option>
												</select>
											</div>
											
										</div>

										
										<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
										

										<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="16">

											<div className="d-flex align-items-center">
												
												<label className="form-check form-check-custom form-check-solid me-5">
													<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='16']" value="16" />
												</label>
												

												<div className="symbol symbol-35px symbol-circle">
													<span className="symbol-label bg-light-success text-success fw-semibold">L</span>
												</div>


												<div className="ms-5">
													<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Lucy Kunic</a>
													<div className="fw-semibold text-muted">lucy.m@fentech.com</div>
												</div>

											</div>

											
											<div className="ms-2 w-100px">
												<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
													<option value="1">Guest</option>
													<option value="2">Owner</option>
													<option value="3" selected="selected">Can Edit</option>
												</select>
											</div>
											
										</div>

									</div>
									
									<div className="d-flex flex-center mt-15">
										<button type="reset" id="kt_modal_users_search_reset" data-bs-dismiss="modal" className="btn btn-active-light me-3">Cancel</button>
										<button type="submit" id="kt_modal_users_search_submit" className="btn btn-primary">Add Selected Users</button>
									</div>

								</div>
								
								<div data-kt-search-element="empty" className="text-center d-none">
									
									<div className="fw-semibold py-10">
										<div className="text-gray-600 fs-3 mb-2">No users found</div>
										<div className="text-muted fs-6">Try to search by username, full name or email...</div>
									</div>
									

									<div className="text-center px-5">
										<img src="assets/media/illustrations/sketchy-1/1.png" alt="" className="w-100 h-200px h-sm-325px" />
									</div>

								</div>
								
							</div>

						</div>
						
					</div>
					
				</div>
				
			</div>
			
		</div>
		
		<div className="modal fade" id="kt_modal_invite_friends" tabindex="-1" aria-hidden="true">
			
			<div className="modal-dialog mw-650px">
				
				<div className="modal-content">
					
					<div className="modal-header pb-0 border-0 justify-content-end">

						<div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
							<i className="ki-outline ki-cross fs-1"></i>
						</div>

					</div>
					
					<div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">

						<div className="text-center mb-13">

							<h1 className="mb-3">Invite a Friend</h1>


							<div className="text-muted fw-semibold fs-5">If you need more info, please check out 
							<a href="#" className="link-primary fw-bold">FAQ Page</a>.</div>

						</div>

						
						<div className="btn btn-light-primary fw-bold w-100 mb-8">
						<img alt="Logo" src="assets/media/svg/brand-logos/google-icon.svg" className="h-20px me-3" />Invite Gmail Contacts</div>
						
						<div className="separator d-flex flex-center mb-8">
							<span className="text-uppercase bg-body fs-7 fw-semibold text-muted px-3">or</span>
						</div>
						
						<textarea className="form-control form-control-solid mb-8" rows="3" placeholder="Type or paste emails here"></textarea>
						
						<div className="mb-10">

							<div className="fs-6 fw-semibold mb-2">Your Invitations</div>

							
							<div className="mh-300px scroll-y me-n7 pe-7">

								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">

									<div className="d-flex align-items-center">

										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/300-6.jpg" />
										</div>


										<div className="ms-5">
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Smith</a>
											<div className="fw-semibold text-muted">smith@kpmg.com</div>
										</div>

									</div>

									
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
											<option value="1">Guest</option>
											<option value="2" selected="selected">Owner</option>
											<option value="3">Can Edit</option>
										</select>
									</div>
									
								</div>


								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">

									<div className="d-flex align-items-center">

										<div className="symbol symbol-35px symbol-circle">
											<span className="symbol-label bg-light-danger text-danger fw-semibold">M</span>
										</div>


										<div className="ms-5">
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Melody Macy</a>
											<div className="fw-semibold text-muted">melody@altbox.com</div>
										</div>

									</div>

									
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
											<option value="1" selected="selected">Guest</option>
											<option value="2">Owner</option>
											<option value="3">Can Edit</option>
										</select>
									</div>
									
								</div>


								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">

									<div className="d-flex align-items-center">

										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/300-1.jpg" />
										</div>


										<div className="ms-5">
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Max Smith</a>
											<div className="fw-semibold text-muted">max@kt.com</div>
										</div>

									</div>

									
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
											<option value="1">Guest</option>
											<option value="2">Owner</option>
											<option value="3" selected="selected">Can Edit</option>
										</select>
									</div>
									
								</div>


								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">

									<div className="d-flex align-items-center">

										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/300-5.jpg" />
										</div>


										<div className="ms-5">
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Sean Bean</a>
											<div className="fw-semibold text-muted">sean@dellito.com</div>
										</div>

									</div>

									
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
											<option value="1">Guest</option>
											<option value="2" selected="selected">Owner</option>
											<option value="3">Can Edit</option>
										</select>
									</div>
									
								</div>


								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">

									<div className="d-flex align-items-center">

										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/300-25.jpg" />
										</div>


										<div className="ms-5">
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Brian Cox</a>
											<div className="fw-semibold text-muted">brian@exchange.com</div>
										</div>

									</div>

									
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
											<option value="1">Guest</option>
											<option value="2">Owner</option>
											<option value="3" selected="selected">Can Edit</option>
										</select>
									</div>
									
								</div>


								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">

									<div className="d-flex align-items-center">

										<div className="symbol symbol-35px symbol-circle">
											<span className="symbol-label bg-light-warning text-warning fw-semibold">C</span>
										</div>


										<div className="ms-5">
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Mikaela Collins</a>
											<div className="fw-semibold text-muted">mik@pex.com</div>
										</div>

									</div>

									
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
											<option value="1">Guest</option>
											<option value="2" selected="selected">Owner</option>
											<option value="3">Can Edit</option>
										</select>
									</div>
									
								</div>


								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">

									<div className="d-flex align-items-center">

										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/300-9.jpg" />
										</div>


										<div className="ms-5">
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Francis Mitcham</a>
											<div className="fw-semibold text-muted">f.mit@kpmg.com</div>
										</div>

									</div>

									
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
											<option value="1">Guest</option>
											<option value="2">Owner</option>
											<option value="3" selected="selected">Can Edit</option>
										</select>
									</div>
									
								</div>


								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">

									<div className="d-flex align-items-center">

										<div className="symbol symbol-35px symbol-circle">
											<span className="symbol-label bg-light-danger text-danger fw-semibold">O</span>
										</div>


										<div className="ms-5">
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Olivia Wild</a>
											<div className="fw-semibold text-muted">olivia@corpmail.com</div>
										</div>

									</div>

									
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
											<option value="1">Guest</option>
											<option value="2" selected="selected">Owner</option>
											<option value="3">Can Edit</option>
										</select>
									</div>
									
								</div>


								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">

									<div className="d-flex align-items-center">

										<div className="symbol symbol-35px symbol-circle">
											<span className="symbol-label bg-light-primary text-primary fw-semibold">N</span>
										</div>


										<div className="ms-5">
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Neil Owen</a>
											<div className="fw-semibold text-muted">owen.neil@gmail.com</div>
										</div>

									</div>

									
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
											<option value="1" selected="selected">Guest</option>
											<option value="2">Owner</option>
											<option value="3">Can Edit</option>
										</select>
									</div>
									
								</div>


								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">

									<div className="d-flex align-items-center">

										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/300-23.jpg" />
										</div>


										<div className="ms-5">
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Dan Wilson</a>
											<div className="fw-semibold text-muted">dam@consilting.com</div>
										</div>

									</div>

									
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
											<option value="1">Guest</option>
											<option value="2">Owner</option>
											<option value="3" selected="selected">Can Edit</option>
										</select>
									</div>
									
								</div>


								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">

									<div className="d-flex align-items-center">

										<div className="symbol symbol-35px symbol-circle">
											<span className="symbol-label bg-light-danger text-danger fw-semibold">E</span>
										</div>


										<div className="ms-5">
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Bold</a>
											<div className="fw-semibold text-muted">emma@intenso.com</div>
										</div>

									</div>

									
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
											<option value="1">Guest</option>
											<option value="2" selected="selected">Owner</option>
											<option value="3">Can Edit</option>
										</select>
									</div>
									
								</div>


								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">

									<div className="d-flex align-items-center">

										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/300-12.jpg" />
										</div>


										<div className="ms-5">
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ana Crown</a>
											<div className="fw-semibold text-muted">ana.cf@limtel.com</div>
										</div>

									</div>

									
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
											<option value="1" selected="selected">Guest</option>
											<option value="2">Owner</option>
											<option value="3">Can Edit</option>
										</select>
									</div>
									
								</div>


								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">

									<div className="d-flex align-items-center">

										<div className="symbol symbol-35px symbol-circle">
											<span className="symbol-label bg-light-info text-info fw-semibold">A</span>
										</div>


										<div className="ms-5">
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Robert Doe</a>
											<div className="fw-semibold text-muted">robert@benko.com</div>
										</div>

									</div>

									
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
											<option value="1">Guest</option>
											<option value="2">Owner</option>
											<option value="3" selected="selected">Can Edit</option>
										</select>
									</div>
									
								</div>


								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">

									<div className="d-flex align-items-center">

										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/300-13.jpg" />
										</div>


										<div className="ms-5">
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">John Miller</a>
											<div className="fw-semibold text-muted">miller@mapple.com</div>
										</div>

									</div>

									
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
											<option value="1">Guest</option>
											<option value="2">Owner</option>
											<option value="3" selected="selected">Can Edit</option>
										</select>
									</div>
									
								</div>


								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">

									<div className="d-flex align-items-center">

										<div className="symbol symbol-35px symbol-circle">
											<span className="symbol-label bg-light-success text-success fw-semibold">L</span>
										</div>


										<div className="ms-5">
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Lucy Kunic</a>
											<div className="fw-semibold text-muted">lucy.m@fentech.com</div>
										</div>

									</div>

									
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
											<option value="1">Guest</option>
											<option value="2" selected="selected">Owner</option>
											<option value="3">Can Edit</option>
										</select>
									</div>
									
								</div>


								<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">

									<div className="d-flex align-items-center">

										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/300-21.jpg" />
										</div>


										<div className="ms-5">
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ethan Wilder</a>
											<div className="fw-semibold text-muted">ethan@loop.com.au</div>
										</div>

									</div>

									
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
											<option value="1" selected="selected">Guest</option>
											<option value="2">Owner</option>
											<option value="3">Can Edit</option>
										</select>
									</div>
									
								</div>


								<div className="d-flex flex-stack py-4">

									<div className="d-flex align-items-center">

										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/300-13.jpg" />
										</div>


										<div className="ms-5">
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">John Miller</a>
											<div className="fw-semibold text-muted">miller@mapple.com</div>
										</div>

									</div>

									
									<div className="ms-2 w-100px">
										<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
											<option value="1">Guest</option>
											<option value="2">Owner</option>
											<option value="3" selected="selected">Can Edit</option>
										</select>
									</div>
									
								</div>

							</div>
							
						</div>
						

						<div className="d-flex flex-stack">

							<div className="me-5 fw-semibold">
								<label className="fs-6">Adding Users by Team Members</label>
								<div className="fs-7 text-muted">If you need more info, please check budget planning</div>
							</div>


							<label className="form-check form-switch form-check-custom form-check-solid">
								<input className="form-check-input" type="checkbox" value="1"  />
                                {/* checked="checked" */}
								<span className="form-check-label fw-semibold text-muted">Allowed</span>
							</label>
						</div>

					</div>
					
				</div>
				
			</div>
			
		</div>
		
    </div>
  )
}

export default PrivacyAndSecurityy;