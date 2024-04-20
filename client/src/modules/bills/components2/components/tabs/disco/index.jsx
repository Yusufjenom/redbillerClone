import React, { useState, useReducer, useEffect } from 'react';
import { FormControl, FormLabel, FormGroup, Button, FormCheck } from 'react-bootstrap';
import ReactSelect from "react-select"
import { __bills_providers } from '../../../../config/dataConfig';
import useNumberInput from '../../../../hooks/useNumberInput';
import useProducts from '../../../../hooks/useProducts';
import { electricityReducer } from '../../../utils/reducerFn';

export const Disco = () => {
    const { productOptions } = useProducts('disco');
    const [meterDetails, setMeterDetails] = useState(null)
    const [values, setValues] = useState(null)
    const { checkAmountInput } = useNumberInput();
    const [state, dispatch] = useReducer(electricityReducer, {
        product: "",
        meter_number: "",
        meter_type: ""
    })
    console.log(state)
    const process_purchase = (e) => {
        e.preventDefault();
    }
    const verify_meter_number = () => {
        if (state?.meter_type && state?.product && state?.meter_number) {
            setMeterDetails({
                "product": "EKO",
                "customer_name": "JOHN DOE",
                "customer_address": "TEST ADDRESS",
                "meter_no": "0000000000",
                "meter_type": "PREPAID"
            });
        }
    }
    const handleChange = e => {
        if (e && e.target) {
            let _name = e.target.name;
            setValues((old) => ({
                ...old,
                [_name]: e.target.value
            }))
            if (_name === 'meter_type' || _name == 'product') verify_meter_number();
        }
        console.log(values);
        setTimeout(() => {
            console.log(values);
        }, 5000);
    }
    const handleBlur = e => {
        let _name = e.target.name;
        if (_name === 'meter_number') verify_meter_number();
    }
    useEffect(() => {
        if (state.meter_number && state.meter_type && state.product) {
            verify_meter_number();
        }
    }, [state?.meter_number])

    return (
        <div className='px-12 py-4'>
            <form action="" className='w-100' onSubmit={process_purchase}>
                <div className='mb-8 border-bottom'>
                    <div className='d-flex mb-5'>
                        <div className='flex-column-fluid d-flex justify-content-around flex-column mw-70px me-8'>
                            <h5 className='mb-4 form-label text-gray-900'>Meter Type</h5>
                            <label className="m-0">
                                <input type="radio"
                                    name="meter_type"
                                    value="prepaid"
                                    className="btn-check"
                                    onChange={(e) => dispatch({ type: "METER_TYPE", payload: e.target.value })}
                                    checked={state?.meter_type === 'prepaid'}
                                />
                                <div className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex mb-0 px-0">
                                    <div className='mx-auto mt-auto d-flex flex-column'>
                                        <i className="ki-outline ki-setting-2 fs-1 mb-2"></i>
                                        <span className="text-gray-500 fw-semibold d-block fs-base">Prepaid</span>
                                    </div>
                                </div>
                            </label>
                            <div className='my-2'></div>
                            <label className="m-0" >
                                <input type="radio"
                                    name="meter_type"
                                    value="postpaid"
                                    className="btn-check"
                                    onChange={(e) => dispatch({ type: "METER_TYPE", payload: e.target.value })}
                                    checked={state?.meter_type === 'postpaid'}
                                />
                                <div className=" btn btn-outline btn-outline-dashed btn-active-light-primary d-flex mb-0 px-0">
                                    <div className='mx-auto mt-auto d-flex flex-column'>
                                        <i className="ki-outline ki-message-text-2 fs-1 mb-2"></i>
                                        <span className="text-gray-500 fw-semibold d-block fs-base">Postpaid</span>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div className='flex-column-fluid'>
                            <FormGroup className="mb-8">
                                <FormLabel className='fs-5 text-gray-500'>Meter Provider</FormLabel>
                                <ReactSelect
                                    className='react-select-styled position-relative'
                                    classNamePrefix='react-select'
                                    styles={{
                                        control: base => ({
                                            ...base,
                                            height: 52
                                        })
                                    }}
                                    // isSearchable={false}
                                    placeholder='Select a product'
                                    name='product'
                                    onChange={(e) => dispatch({ type: "PRODUCT", payload: e.value })}
                                    options={productOptions}
                                />
                            </FormGroup>
                            <FormGroup className="">
                                <FormLabel className='fs-5 text-gray-500'>Meter Number</FormLabel>
                                <FormControl
                                    name='meter_number'
                                    type='number'
                                    size="lg"
                                    onChange={(e) => dispatch({ type: "METER_NUM", payload: e.target.value })}
                                    className='py-3'
                                    onBlur={handleBlur}
                                />
                            </FormGroup>
                        </div>
                    </div>
                    {meterDetails && <div className='bg-light p-3'>
                        <h4>{meterDetails.customer_name}</h4>
                        <p className='m-0'>{meterDetails.customer_address}</p>
                    </div>}
                </div>
                <div className='d-flex gap-8'>
                    <FormGroup className="mb-8 flex-grow-1">
                        <FormLabel className='fs-5 text-gray-500'>Phone Number</FormLabel>
                        <FormControl
                            name='phone_number'
                            type='number'
                            size="lg"
                            value={values?.phone_number}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='py-3'
                        />
                    </FormGroup>
                    <FormGroup className="mb-8 mw-150px">
                        <FormLabel className='fs-5 text-gray-500'>Amount</FormLabel>
                        <FormControl
                            name='amount'
                            type='number'
                            size="lg"
                            className='py-3 ff-mono'
                            inputMode='numeric'
                            value={values?.amount}
                            onChange={handleChange}
                            onInput={e => checkAmountInput(e.target)}
                        />
                    </FormGroup>
                </div>
                <div className='flex-end d-flex'>
                    <Button type='submit' size='lg' className='px-16 py-5 text-uppercase fw-bold'>Buy Token</Button>
                </div>
            </form>
        </div>

    )
};