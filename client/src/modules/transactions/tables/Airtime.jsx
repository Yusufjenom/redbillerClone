import { Button } from "react-bootstrap";
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
            <td>{row.sn}</td>
            <td>{row.account_name}</td>
            <td>
                <span>{row.bank_name}</span>
                <span>{row.account_number}</span>
            </td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>{row.date}</td>
            <td>
                <StatusLabel status={row?.status} />
                {row.status && row?.status.toLowerCase() === 'pending' && <Button type='button' variant='' className='text-primary btn-sm py-1'>Reconcile</Button>}
            </td>
            <td className='w-100px px-2'>
                <div className="btn-toolbar flex-nowrap">
                    <CopyButton className='btn-sm py-1 me-3' text={row.reference} />
                    <Button type='button' variant='' className='btn-icon btn-sm py-1' onClick={showDetails} >
                        <i className='ki-outline fs-3 ki-information-2'></i>
                    </Button>
                </div>
            </td>
        </tr>
    )

}

export const Table = ({ transactions }) => {
    return (<>
        <TableHeader />
        <tbody>
            {transactions.map((r, index) => {
                return <TableRow key={index} row={{ ...r, sn: index }} />
            })}
        </tbody>

    </>)
}