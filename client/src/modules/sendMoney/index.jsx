import React, { useState, useEffect, useContext } from 'react';
import Header from '../dashboard/components/header';
import Footer from '../dashboard/components/footer';
import { NavLink, Link, useParams } from 'react-router-dom'
import './styles.css';
import { BankTransfer, P2PTransfer, WalletTransfer } from './components/tabs';
import MobileSidebar from '../dashboard/components/mobileSidebar';
import { MobileContext } from '../contexts/mobileViewContext';

const _services = [
    {
        icon: 'la la-send',
        label: 'Bank Transfer',
        value: 'bank',
        description: 'Send money directly to any bank.',
        component: <BankTransfer />
    },
    {
        icon: 'la la-send',
        label: 'Redbiller Transfer',
        value: 'jban',
        description: 'Send money to other Redbiller user.',
        component: <P2PTransfer />
    },
    {
        icon: 'la la-send',
        label: 'Wallet Transfer',
        value: 'wallet',
        description: 'Move money to your other wallets.',
        component: <WalletTransfer />
    }
];

function SendMonney() {
    const [activeTab, setActiveTab] = useState(null)
    const { service } = useParams();
    const { open } = useContext(MobileContext)

    useEffect(() => {
        if (service && _services.reduce((arr, s) => [...arr, s.value], []).indexOf(service) >= 0) setActiveTab(service)
        else setActiveTab(_services[0])
    }, [activeTab, service]);


    return (
        <>
            <div data-kt-app-header-fixed="true" data-kt-app-header-fixed-mobile="true"
                data-kt-app-sidebar-enabled="true" data-kt-app-sidebar-fixed="true" data-kt-app-sidebar-push-toolbar="true"
                data-kt-app-sidebar-push-footer="true" className="app-default">

                <div className="d-flex flex-column flex-root app-root bg-gray-100" >
                    <div className="app-page flex-column flex-column-fluid">
                        <Header />
                        <div className="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
                            {
                                open && (
                                    <MobileSidebar />
                                )
                            }
                            <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
                                <div className="d-flex flex-column flex-column-fluid">
                                    <div className="app-content flex-column-fluid">
                                        <div className="app-container container-fluid">



                                            <div className='mw-900px mx-auto my-16'>
                                                <div className="card card-stretched">
                                                    <div className="card-header pt-7 pb-5 border-bottom">
                                                        <h3 className="card-title align-items-start flex-column">
                                                            <span
                                                                className="card-label fw-bold text-gray-800">Send Money
                                                            </span>
                                                            <span
                                                                className="text-gray-500 mt-1 fw-semibold fs-6">Send money via any of the available channels</span></h3>
                                                        <div className="card-toolbar">
                                                            <Link to="/transactions/"
                                                                className="btn btn-sm btn-light"
                                                            >See Transactions</Link>
                                                        </div>
                                                    </div>
                                                    <div className="card-body d-flex p-0">
                                                        <div className='mw-300px w-50 border-end py-10'>
                                                            <ul
                                                                className="nav flex-column position-relative mx-0 tab--links">
                                                                {_services.map(s => {
                                                                    return <li key={s.value} className="nav-item mx-0 px-0">
                                                                        <NavLink
                                                                            to={"/send-money/" + s.value}
                                                                            replace
                                                                            className={({ isActive }) => {
                                                                                const linkClasses = "nav-link d-flex justify-content-between  px-8 py-5".split(' ');
                                                                                linkClasses.push((isActive ? 'bg-light active' : 'bg-hover-light'));
                                                                                return linkClasses.join(" ");
                                                                            }}
                                                                        >
                                                                            <div className='d-flex flex-shrink-0 h-60px w-60px border bg-light rounded-circle me-3'>
                                                                                <em className={'h1 text-dark-500 m-auto ' + s.icon}></em>
                                                                            </div>
                                                                            <div className='flex-grow-1'>
                                                                                <strong className="d-flex nav-text text-gray-800 fw-bold fs-4">{s.label}</strong>
                                                                                <span className="text-muted">{s.description}</span>
                                                                            </div>

                                                                        </NavLink>
                                                                    </li>
                                                                })}
                                                            </ul>
                                                        </div>
                                                        <div className="col tab-content bg-light minh-500px">
                                                            {_services.map(s => {
                                                                return <div key={s.value} className={"tab-pane fade" + (activeTab == s.value  ? ' show active' : '') }>
                                                                    {console.log(activeTab)}
                                                                    {s.component}
                                                                </div>
                                                            })}
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                                                {/* "tab-pane fade" + (activeTab == s.value  ? ' show active' : '' */}


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

export default SendMonney;


