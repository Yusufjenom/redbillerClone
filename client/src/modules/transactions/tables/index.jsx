// Records
import { Table as ReversalsTable } from './Reversals';
import { Table as StatementTable } from "./Statement";
import { Table as WithdrawalsTable } from "./Withdrawals";
// Payouts
import { Table as BankTransferTable } from "./BankTransfer";
import { Table as RedbillerTransferTable } from "./RedbillerTransfer";
import { Table as WalletTransferTable } from "./WalletTransfer";
// Bills
import { Table as AirtimeTable } from "./Airtime";
import { Table as AirtimePINTable } from "./AirtimePIN";
import { Table as BettingTable } from './Betting';
import { Table as CableTable } from "./Cable";
import { Table as DiscoTable } from "./Disco";
import { Table as InternetTable } from "./Internet";
import { Table as MobileDataTable } from './MobileData';
import { showDetails } from "../components/modal/index";

const Table = ({ service, transactions }) => {
    return (
        <div className='table-responsive'>
            <table className="table table-hover table-striped gy-7 gs-7 transaction-table">
                {
                    {
                        'bank-transfer': <BankTransferTable transactions={transactions} />,
                        'redbiller-transfer': <RedbillerTransferTable transactions={transactions} />,
                        'wallet-transfer': <WalletTransferTable transactions={transactions} />,
                        // Bills
                        'airtime': <AirtimeTable transactions={transactions} />,
                        'airtime-pin': <AirtimePINTable transactions={transactions} />,
                        'betting': <BettingTable transactions={transactions} />,
                        'cable': <CableTable transactions={transactions} />,
                        'disco': <DiscoTable transactions={transactions} />,
                        'internet': <InternetTable transactions={transactions} />,
                        'mobile-data': <MobileDataTable transactions={transactions} />,
                        // Records
                        'reversals': <ReversalsTable transactions={transactions} />,
                        'statement': <StatementTable transactions={transactions} />,
                        'withdrawals': <WithdrawalsTable transactions={transactions} />,
                    }[service.value]
                }
            </table>
        </div>
    )
}
export default Table;