import React, { useContext, useEffect, useRef } from 'react'
import logo from "../../../../assets/media/logos/redbillerLogo.jpg";
import Navbar from './navbar';
import { Link } from 'react-router-dom';
import { MobileContext } from '../../../contexts/mobileViewContext';
import NavDropDown from './dropdown';

<i class="bi bi-x-diamond"></i>
export default function Header() {
	const { isMobile, open, handleToggle, setOpen } = useContext(MobileContext);

	const bodyRef = useRef();

	useEffect(() => {
		const handler = (e) => {
			if (!bodyRef.current.contains(e.target)) {
				setOpen(false)
			}
		};
		document.body.addEventListener('click', handler);

		return () => {
			document.body.removeEventListener('click', handler);
		}
	}, []);


	return (
		<div id="kt_app_header" className="app-header" style={{ position: "sticky" }}>
			{/* data-kt-sticky="true" data-kt-sticky-activate="{default: false, lg: true}" data-kt-sticky-name="app-header-sticky" data-kt-sticky-offset="{default: false, lg: '300px'}" */}

			<div className="app-container container-fluid d-flex align-items-stretch justify-content-between" id="kt_app_header_container">

				<div className="d-flex align-items-center justify-content-between flex-row-fluid" id="kt_app_header_wrapper">

					<div className="app-header-logo d-flex align-items-center">

						<div className="btn btn-icon btn-color-gray-500 btn-active-color-primary w-35px h-35px ms-n3 me-2 d-flex d-lg-none" id="kt_app_sidebar_mobile_toggle">
							<i ref={bodyRef} onClick={handleToggle} className={open === false ? "ki-outline ki-abstract-14 fs-1" : "bi bi-x-diamondbi bi-x-diamond fs-1"}></i>
						</div>

						<a href="" className="me-5 me-lg-9">
							<Link to="/">
								<img alt="Logo" src={logo} className="h-75px h-sm-70px" />
							</Link>
						</a>

					</div>

					<Navbar />
					<div className="app-navbar flex-shrink-0">
						<div className="app-navbar-item me-3" id="kt_header_user_menu_toggle" style={{ display: "flex", flexDirection: "column" }}>
							<div className="fw-bold fs-3 text-gray-900">Akinkunmi</div>
							<div className="fw-semibold text-gray-500">Welcome to Redbiller</div>
						</div>


						<div className="app-navbar-item me-3" id="kt_header_user_menu_toggle">
							<div className="btn btn-icon btn-icon-gray-600 border border-dashed border-gray-300 w-35px h-35px w-md-40px h-md-40px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
								<Link to="/profile"><i className="ki-outline ki-user fs-3"></i></Link>
							</div>
							<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px" data-kt-menu="true">
								<div className="menu-item px-3">
									<div className="menu-content d-flex align-items-center px-3">
										<div className="symbol symbol-50px me-5">
											<img alt="Logo" src="../../assets/media/avatars/300-5.jpg" />
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
													<input className="form-check-input w-30px h-20px" type="checkbox" value="1" defaultChecked name="notifications" />
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
											</span></span>
									</a>

									<div className="menu-sub menu-sub-dropdown w-175px py-4">

										<div className="menu-item px-3">
											<a href="account/settings.html" className="menu-link d-flex px-5 active">
												<span className="symbol symbol-20px me-4">

												</span>English</a>
										</div>


										<div className="menu-item px-3">
											<a href="account/settings.html" className="menu-link d-flex px-5">
												<span className="symbol symbol-20px me-4">

												</span>Spanish</a>
										</div>


										<div className="menu-item px-3">
											<a href="account/settings.html" className="menu-link d-flex px-5">
												<span className="symbol symbol-20px me-4">

												</span>German</a>
										</div>


										<div className="menu-item px-3">
											<a href="account/settings.html" className="menu-link d-flex px-5">
												<span className="symbol symbol-20px me-4">

												</span>Japanese</a>
										</div>


										<div className="menu-item px-3">
											<a href="account/settings.html" className="menu-link d-flex px-5">
												<span className="symbol symbol-20px me-4">

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



						{/* third icon */}
						{/* <div className="app-navbar-item me-3">

							<div className="btn btn-icon btn-icon-gray-600 border border-dashed border-gray-300 w-35px h-35px w-md-40px h-md-40px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" data-kt-menu-offset="12,0">
								<i className="ki-outline ki-setting-3 fs-3"></i>

								<NavDropDown/>

							</div>


						</div> */}


					</div>

				</div>

			</div>

		</div>
	)
}