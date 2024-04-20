
import React, { createContext, useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../context/AppContext';
import {
    Airtime,
    AirtimePIN,
    Betting,
    Cable,
    Disco,
    Internet,
    MobileData
} from "../components/tabs";

export const BillsContext = createContext();

export const BillsContextProvider = ({ children }) => {
    const { services } = useContext(AppContext)
    const [billServices, setBillServices] = useState(null);
    const _services_components = {
        'airtime': <Airtime />,
        'airtime-pin': <AirtimePIN />,
        'mobile-data': <MobileData />,
        'wifi-internet': <Internet />,
        'betting': <Betting />,
        'cable': <Cable />,
        'disco': <Disco />
    }

    useEffect(() => {
        const filter_services = () => {
            return services.filter(s => s.id === 'bills')[0].services.reduce((arr, s) => [...arr, { ...s, component: _services_components[s.value] }], [])
        }
        let ser = filter_services();
        setBillServices(ser)
    }, [])

    return (
        <BillsContext.Provider value={{ billServices }}>{children}</BillsContext.Provider>
    )
}
export const useBillsContext = () => {
    return useContext(BillsContext);
}