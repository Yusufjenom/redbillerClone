import { useContext } from "react";
import { Button } from "react-bootstrap";
import { Utils } from "../../components/utils";
import { CopyButton, copy_to_clipboard } from "../../components/widgets/CopyToClipboard";
import {StatusLabel} from "../../components/widgets/StatusLabel";
import { AppContext } from "../context/AppContext";
import { showDetails } from "../components/modal/index";

const TableHeader = () => {
    return <thead className='fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200'>
        <tr >
            <th>#</th>
            <th>Account</th>
            {/* <th>Bank</th> */}
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
            <th></th>
        </tr>
    </thead>
}
const TableRow = ({ row }) => {

    let _amount = row.amount ? row.amount : 0,
        _charge = row.charge ? row.charge : 0,
        _date = Utils.fDate(row.date).trim(),
        _time = Utils.fDateTime(row.date).slice(-8).trim();

    return (
        <tr>
            <td>{row.sn}</td>
            <td>
                <div className="d-flex align-items-center">
                    <div className='symbol symbol-40px border p-1 symbol-circle me-2'>
                        <img src={row.bank_logo} alt={row.bank_name} />
                    </div>
                    <div className='flex-column d-flex text-nowrap min-w-10px'>
                        <span className='text-dark fw-bold text-truncate'>{row.account_name}</span>
                        <small className='text-gray-500 fs-xs'>{row.account_no}</small>
                        <small className='text-gray-500 fs-xs'>{row.bank_name}</small>
                    </div>
                </div>


            </td>
            <td>
                <div className='flex-column d-flex text-nowrap'>
                    <span className='text-dark fw-bold'>{Utils.fMoney(_amount, 'NGN')}</span>
                    {_charge > 0 && <small className='text-muted fs-xs' title='Charge'>{Utils.fMoney(_charge, 'NGN')}</small>}
                </div>
            </td>
            <td>
                <div className='flex-column d-flex text-nowrap'>
                    <span className='text-dark'>{_date}</span>
                    <small className='text-muted fs-xs'>{_time}</small>
                </div>
            </td>
            <td>
                <StatusLabel status={row?.status} />
                {row.status && row?.status.toLowerCase() === 'pending' && <Button type='button' variant='' className='text-primary btn-sm py-1'>Reconcile</Button>}
            </td>
            <td className='w-100px px-2'>
                <div className="btn-toolbar flex-nowrap">
                    <CopyButton className='btn-sm py-1 me-3' text={row.reference} />
                    <Button type='button' variant='default' className='btn-icon btn-trigger btn-sm py-1' onClick={showDetails} >
                        <i className='ki-outline fs-3 ki-information-2'></i>
                    </Button>
                </div>
            </td>
        </tr>
    )

}

export const Table = ({ transactions }) => {
    const { bank_logos } = useContext(AppContext);
    console.log(bank_logos);
    return (<>
        <TableHeader />
        <tbody>
            {transactions.map((r, index) => {
                r.bank_logo = bank_logos && bank_logos[r.bank_code] ? bank_logos[r.bank_code].bank_logo : '';
                return <TableRow key={index} row={{ ...r, sn: (index + 1) }} />
            })}
        </tbody>
    </>)
}