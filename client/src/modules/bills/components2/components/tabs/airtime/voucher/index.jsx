import React, { useReducer, useState } from 'react'
import { FormControl, FormLabel, FormGroup, Button } from 'react-bootstrap';
import ReactSelect from "react-select"
import { __bills_providers } from '../../../../../config/dataConfig';
import { Utils } from '../../../../utils/utils';
import { voucherReducer } from '../../../../utils/reducerFn';



const Voucher = () => {
    
    const [state, dispatch] = useReducer(voucherReducer, {
        product: "",
        quantity: "",
        amount: ""
    });

    

    const valid_amounts = [100, 200, 500, 1000]

    const handleSubmitForm = async (e) => {
        e.preventDefault()
        console.log(state)

    }

    return (
        <form onSubmit={(e) => handleSubmitForm(e)} className='w-100'>
            <FormGroup className="mb-8">
                <FormLabel className='fs-5 text-gray-500'>Network</FormLabel>
                <ReactSelect
                    className='react-select-styled position-relative'
                    styles={{
                        control: base => ({
                            ...base,
                            height: 52
                        })
                    }}
                    classNamePrefix='react-select'
                    isSearchable={false}
                    placeholder='Select a product'
                    onChange={(e) => dispatch({ type: "PRODUCT", payload: e.value })}
                    options={__bills_providers.airtime.map(p => {
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

                    })}></ReactSelect>
            </FormGroup>
            <div className='row'>
                <FormGroup className="col-6 mb-8">
                    <FormLabel className='fs-5 text-gray-500'>Quantity</FormLabel>
                    <FormControl type='text' inputMode='numeric' name='quantity' size="lg" className='py-3 ff-mono'
                        onChange={(e) => dispatch({ type: "QUANTITY", payload: e.target.value })}
                    />
                </FormGroup>
                <FormGroup className="col-6 mb-8">
                    <FormLabel className='fs-5 text-gray-500'>Amount</FormLabel>
                    <ReactSelect name='amount'
                        className='react-select-styled position-relative'
                        classNamePrefix='react-select'
                        isSearchable={false}
                        placeholder='Select quantity'
                        onChange={(e) => dispatch({ type: "AMOUNT", payload: e.value })}
                        options={valid_amounts.map(amt => ({
                            label: <strong className='ff-alt'>NGN <span className='ff-mono'>{Utils.fNumber(amt)}</span></strong>,
                            value: amt
                        }))}>

                    </ReactSelect>
                </FormGroup>
            </div>
            <div className='flex-end d-flex'>
                <Button type='submit' size='lg' className='signin-btn px-16 py-5 text-uppercase fw-bold'>
                    Buy Airtime
                </Button>
            </div>
        </form>
    )
}

export default Voucher;



