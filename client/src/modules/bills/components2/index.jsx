import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Nav, Tab } from "react-bootstrap";
import {useServices} from '../hooks/useServices';



const Bills = () => {
  const { billServices } = useServices();
  const controller = new AbortController();

  const [_billServices, setBillServices] = useState([])
  const [activeTab, setActiveTab] = useState(null)

  const { service } = useParams();

  useEffect(() => {
    if (billServices) {
      setBillServices(billServices);
      if (_billServices) {
        let _active = _billServices[0];
        _billServices.forEach(e => {
          if (e.value === service) {
            _active = e
          }
        });
        setActiveTab(_active)
      }
      // console.log(service);
       console.log(billServices);
      // console.log(activeTab)
    }

    return () => {
      controller.abort();
    }
  }, [ service, (billServices && billServices !== null)])

  return (

    <div className='mw-800px mx-auto my-16'>
      <Card className=''>
        <div className='card-header flex-column pb-0 px-0'>
          <div className='border-bottom px-10 pt-8 pb-5 d-flex justify-content-between'>
            <div className='py-5'>
              <Card.Title className='fw-bold text-gray-800 fs-1'>Bill Payments</Card.Title>
              <Card.Text className='text-gray-500 mt-1 fw-semibold fs-6'>Make all of you bill payments</Card.Text>
            </div>
            <div className="card-toolbar">
              <Link to="/transactions/"
                className="btn btn-sm btn-light"
              >See Transactions</Link>
            </div>
          </div>
          <Card.Body className='p-0 d-flex min-h-500px'>
            <Tab.Container defaultActiveKey={activeTab ? activeTab.value : 'airtime'}>
              <div className='border-end w-100 mw-275px z-index-2 flex-column-fluid py-2'>
                <Nav className='menu menu-column menu-active-bg menu-title-dark menu-hover-bg fs-5 fw-bold' defaultActiveKey={activeTab ? activeTab.value : ''}>
                  {_billServices.map((t, i) => {
                    if (t.value === 'airtime-pin') return
                    return <Nav.Item as='li' className='menu-item' key={t.value}>
                      <Nav.Link eventKey={t.value}
                        className={'menu-link text-nowrap px-5 py-4'}>
                        <span className='menu-icon me-3 border w-40px h-40px rouded-circle bg-light rounded'>
                          <i className={'fs-2x ' + t.icon}></i>
                        </span>
                        <div className='flex-grow-1 lh-sm'>
                          <span className='menu-title'>{t.label}</span>
                          <small className='fs-xs text-muted fw-normal'>{t.description}</small>
                        </div>
                        <em className='menu-arrow'></em>
                      </Nav.Link>
                    </Nav.Item>
                  })}
                </Nav>
              </div>
              <Tab.Content className='p-5 flex-column-fluid'>
                {_billServices.map(t => {
                  return <Tab.Pane key={t.value} eventKey={t.value}>
                    {t.component}
                  </Tab.Pane>
                })}
              </Tab.Content>
            </Tab.Container>

          </Card.Body>
        </div>
      </Card>
    </div >

  )
}

export default Bills