import { useState, useEffect } from "react";
import { __bills_providers } from "../config/dataConfig";
const useProducts = (service_id) => {
    const [productOptions, setProductOptions] = useState([]);
    useEffect(() => {
        const product_select_options = service_id && __bills_providers[service_id] ? __bills_providers[service_id].map(p => {
            let item = {
                value: p.value,
                label: (
                    <div className='label align-items-center d-flex'>
                        <div className={'symbol symbol-30px symbol-circle border me-3'}>
                            <img src={p.image} alt={p.label} className={(p.value === 'airtel' ? ' p-1' : '')} />
                        </div>
                        <span className='fs-5'>{p.label.toUpperCase()}</span>
                    </div>
                )
            }
            return item;
        }) : [];
        setProductOptions(product_select_options)
    }, [service_id])

    return {
        productOptions
    }
}

export default useProducts