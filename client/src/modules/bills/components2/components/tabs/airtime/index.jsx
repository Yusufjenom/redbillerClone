import { FormControl, FormGroup, FormLabel, Nav, Tab, TabContainer } from "react-bootstrap"
import ReactSelect from "react-select"
import { __bills_providers } from "../../../../config/dataConfig";
import Voucher from "./voucher";
import VTU from "./vtu";
export const Airtime = () => {
    // const {}
    return (<div className='p-8'>
        {/* <h4>Airtime</h4>
        <p>Send airtime</p> */}
        <TabContainer defaultActiveKey={'airtime-vtu'} onSelect={e => {
            // Reset form on tab change
            document.querySelector(`#service_tabpane_${e}`).querySelector('form').reset();
        }}
            generateChildId={(evtKey, type) => {
                return `service_${type}_${evtKey}`
            }}>
            <Nav as='ul' className='nav-tabs nav-line-tabs nav-line-tabs-2x fw-bold nav-justified mx-n13'>
                <Nav.Item as="li">
                    <Nav.Link eventKey="airtime-vtu" className='m-0'>VTU Airtime</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="airtime-pin" className='m-0'>Airtime PIN</Nav.Link>
                </Nav.Item>
            </Nav>
            <Tab.Content className='py-16'>
                <Tab.Pane eventKey='airtime-vtu'>
                    <VTU />
                </Tab.Pane>
                <Tab.Pane eventKey='airtime-pin'>
                    <Voucher />
                </Tab.Pane>
            </Tab.Content>
        </TabContainer>

    </div>)
}