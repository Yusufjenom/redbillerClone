import {createBrowserRouter} from 'react-router-dom';
import Dashboard from './modules/dashboard';
import DashboardError from './modules/dashboard/error';
import NotFoundError from './modules/error';
import SignIn from './modules/auth/components/signInn';
import PrivacyError from './modules/privacy&security/error';
import PrivacyAndSecurity from './modules/privacy&security';
import PrivacyAndSecurityy from './modules/privacy&security/components/settings';
import SendMonney from './modules/sendMoney';
import SendMoneyError from './modules/sendMoney/error';
import BillsComponent from './modules/bills';
import BillsError from './modules/bills/error';
import StatusPage from './modules/statusPage';
import Collections from './modules/collections';
import Transactions from './modules/transactions';
import Test2 from './modules/test2';
import Test from './modules/test';
import Test4 from './modules/test4';


export const router = createBrowserRouter([
    {
        path:"/",
        element:<Dashboard/>,
        errorElement: <DashboardError/>
    },
    {
      path:"/signin",
      element:<SignIn/>
    },
    {
        path:"/profile",
        element:<PrivacyAndSecurity/>,
        errorElement:<PrivacyError/>
    },
    {
        path:"/privacy",
        element:<PrivacyAndSecurityy/>
    },
    {
        path:"/send-money/:service?",
        element:<SendMonney/>,
        errorElement:<SendMoneyError/>
    },
    {
       path:"/bills?",
       element:<BillsComponent/>,
       errorElement:<BillsError/>
    },
    {
       path:"/status",
       element:<StatusPage/>
    },
    {
       path:"/collections",
       element:<Collections/>
    },
    {
       path:"/transactions/:types?",
       element:<Transactions/>
    },
    {
       path:"/test",
       element:<Test/>
    },
    {
       path:"/test2",
       element:<Test2/>
    },
    {
       path:"/test4",
       element:<Test4/>
    },
    {
        path:"*",
        element:<NotFoundError/>

    },
    
]);