import React, { useContext, useState, useEffect, useMemo } from 'react';
import Header from '../dashboard/components/header';
import MobileSidebar from '../dashboard/components/mobileSidebar';
import { MobileContext } from '../contexts/mobileViewContext';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { __services as services } from '../config/dataConfig';
import { API, Utils } from '../components/utils';
import { EmptyList } from '../components/widgets/EmptyList';
import LoadingSpinner from '../components/loadingSpinner';
import Table from './tables';
import './style/styles.scss';

function Transactions() {
    const { open } = useContext(MobileContext);
    const [activeService, setActiveService] = useState(null);
    const [fetchLoading, setFetchLoading] = useState(false);
    const [transactions, setTransactions] = useState(null);
    const [spinner, setSpinner] = useState(true);


  setTimeout(() => {
     setSpinner(false)
  }, 2000);

    const list_transaction = (filter = {}) => {
        let url = '',
            service = activeService.value.toLowerCase(),
            method = [
                'reversals', 'airtime', 'mobile-data', 'withdrawals',
                'internet', 'cable', 'disco', 'bank-transfer'
            ].indexOf(service) >= 0 ? 'POST' : 'GET';

        switch (service) {
            case 'statement': url = 'private/1.4/wallet/statement'; break;
            case 'reversals': url = 'live/1.0/get/reversals'; break;
            case 'withdrawals': url = 'live/1.0/bank-settlement/list'; break;
            case 'airtime': url = 'live/1.0/bills/airtime/purchase/list'; break;
            case 'airtime-pin': url = 'live/1.3/bills/airtime-pin/purchase/list'; break
            case 'mobile-data': url = 'live/1.0/bills/data/plans/purchase/list'; break;
            case 'betting': url = 'live/1.4/bills/betting/account/payment/list'; break;
            case 'internet': url = 'live/1.0/bills/internet/plans/purchase/list'; break;
            case 'cable': url = 'live/1.0/bills/cable/plans/purchase/list'; break;
            case 'disco': url = 'live/1.0/bills/disco/purchase/list'; break;
            case 'bank-transfer': url = 'live/1.0/payout/bank-transfer/list'; break;
            case 'redbiller-transfer': url = 'private/1.4/wallet/transfer/list'; break;
            // case 'wallet-transfer': url = '1.0/payout/bank-transfer/list'; break;
        };
        console.log(activeService);

        if (url.length > 0) {
            setFetchLoading(true);
            let request = (method === 'POST' ? API.post(url) : API.get(url));
            request.then(resp => {
                setFetchLoading(false)
                console.log(resp);
                if (resp.status && resp.status === 'true') setTransactions(resp.details)
            })

        } else {
            Utils.toast({
                type: 'error',
                title: 'Select service',
                text: `Invalid service selection: ${activeService?.label}`,
            })
        }
    }
    useEffect(() => {
        setActiveService(services[0]?.services[0]);
        console.log(activeService);
        console.log(services)
        if (activeService){
            list_transaction();
        } 
    }, [])


    const active_service = useMemo(() => activeService, [activeService]);

    console.log(active_service)




    return (
        <>
        {spinner && <LoadingSpinner/>}
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

                                            <Container>
                                                <Card className="card-custom card-px-0">
                                                    <div className="card-header px-10 py-5">
                                                        <div className='pt-4'>
                                                            <h2 className="card-title fs-1 fw-bold text-gray-900">Transactions</h2>
                                                            <p className='lead fs-6 text-gray-800'>View all transactions on your account.</p>
                                                        </div>
                                                        <div className="card-toolbar">
                                                            <Button variant='default' type="button" size='sm' className="btn-icon btn-light">
                                                                <i className='la la-filter'></i>
                                                            </Button>
                                                        </div>
                                                    </div>
                                                    <div className="card-body p-0 d-flex">
                                                        <div className='border-end w-100 mw-275px sticky-top z-index-2 flex-column-fluid'>
                                                            <ul className="menu menu-column menu-active-bg menu-hover-bg menu-title-gray-700 menu-icon-gray-500 fw-bold">
                                                                {services.map((sc, i) => {
                                                                    return <React.Fragment key={i}>
                                                                        <li className='menu-item'>
                                                                            <div className='menu-content pb-2 px-8 pt-8'>
                                                                                <span className='menu-section text-muted text-uppercase fs-sm fw-bold'>{sc.label}</span>
                                                                            </div>
                                                                        </li>
                                                                        <li className='menu-item'>
                                                                            {sc.services.map((s, j) => {
                                                                                return <Link
                                                                                    key={s.value}
                                                                                    className={
                                                                                        'menu-link py-4 px-5' + (j < sc.services.length && ' border-top border-light') + (activeService?.value === s.value && ' active')
                                                                                    } onClick={e => {
                                                                                        e.preventDefault();
                                                                                        setActiveService(s);
                                                                                        list_transaction();
                                                                                    }}>
                                                                                    <span className='menu-icon'>
                                                                                        <i className={'fs-2 ' + s.icon}></i>
                                                                                    </span>
                                                                                    <span className='menu-title'>{s.label}</span>
                                                                                    <em className='menu-arrow'></em>
                                                                                </Link>
                                                                            })}
                                                                        </li>
                                                                        {i < services.length && <div className="separator border-gray-200 "></div>}
                                                                    </React.Fragment>
                                                                })}
                                                            </ul>
                                                        </div>
                                                        <div className='flex-grow-1 min-w-10px'>
                                                            {fetchLoading ? <div className='min-h-500px py-16 d-flex'>
                                                                <div className='d-flex align-items-center flex-column m-auto'>
                                                                    <i className='spinner spinner-border w-60px h-60px text-gray-700 mb-5 border-4'></i>
                                                                    <span>Fetching Transactions...</span>
                                                                </div>
                                                            </div> : (transactions && transactions.length > 0 ? activeService && <Table service={activeService} transactions={transactions} /> : <EmptyList />)}
                                                        </div>
                                                    </div>
                                                </Card>
                                            </Container>




                                            {/* <Bills /> */}
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

export default Transactions;