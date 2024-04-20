
import React, { useContext, useEffect, useState } from 'react';
// import { AppContext } from '../../../context/AppContext';
import {
    Airtime,
    Betting,
    Cable,
    Disco,
    Internet,
    MobileData
} from "../components2/components/tabs";

//import { __services as services } from '../../../config';
import { __services as services } from '../config/dataConfig'

export const useServices = () => {
    // const { services } = useContext(AppContext)
    const [billServices, setBillServices] = useState(null);
     console.log(Airtime)
    const _services_extras = {
        'airtime': {
            description: 'Buy VTU or Voucher airtime',
            component: <Airtime />
        },
        'mobile-data': {
            description: 'Buy mobile data',
            component: <MobileData />
        },
        'wifi-internet': {
            description: 'Purchase a WiFi data plans',
            component: <Internet />
        },
        'betting': {
            description: 'Fund betting wallet',
            component: <Betting />
        },
        'cable': {
            description: 'Pay for TV subscriptions',
            component: <Cable />
        },
        'disco': {
            description: 'Purchase electricity token',
            component: <Disco />
        }
    }

    useEffect(() => {
        const filter_services = () => {
            return services.filter(s => s.id === 'bills')[0].services.reduce((arr, s) => {
                return [...arr, {
                    ...s,
                    ...(_services_extras[s.value] ? _services_extras[s.value] : {})
                }]
            }, [])
        }
        let ser = filter_services();
        setBillServices(ser)
    }, []);

    return { billServices }
}