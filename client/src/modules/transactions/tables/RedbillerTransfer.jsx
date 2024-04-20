
import { Button } from "react-bootstrap"
import { CopyButton, copy_to_clipboard } from "../../components/widgets/CopyToClipboard";
import {StatusLabel} from "../../components/widgets/StatusLabel";
import { showDetails } from "../components/modal/index";
const TableHeader = () => {
    return <thead className='fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200'>
        <tr>
            <th>#</th>
            <th>Account Name</th>
            <th>Bank</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
            <th></th>
        </tr>
    </thead>
}
const TableRow = ({ row }) => {
    return (
        <tr>
            <td>{row.sn++}</td>
            <td>{row.account_name}</td>
            <td>
                <span>{row.bank_name}</span>
                <span>{row.account_number}</span>
            </td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
                <div className='d-flex align-items-center mb-2'>
                    <span className='bullet bullet-dot p-1 bg-warning me-3'></span>
                    <span className='fw-bold'>Pending</span>
                </div>
                <Button type='button' variant='' className='text-primary btn-sm py-1'>Reconcile</Button>
            </td>
        </tr>
    )

}

export const Table = ({ transactions }) => {
    return (<>
        <TableHeader />
        {transactions.map((r, index) => {
            return <TableRow key={index} row={{ ...r, sn: index }} />
        })}
    </>)
}