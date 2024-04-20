import React from 'react';
import { FormControl, FormLabel, FormGroup, Button } from 'react-bootstrap';
import Select from "react-select"
import { __bills_providers } from '../../../../../config/dataConfig';
import { Formik, Form, Field } from 'formik';
import useNumberInput from '../../../../../hooks/useNumberInput';
import {initialValues, formSchema} from '../../../../utils/yup';







const _network_options = __bills_providers.airtime.map(p => {
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
});


const VTU = () => {
    const { checkAmountInput, formatNumber } = useNumberInput();
    const purchase_airtime = (e) => {
        e.preventDefault();
    }


    const handleFormFinalSubmission = async (values) => {
        try {
            console.log(values)
        }
        catch (err) {
            console.log(err.message)
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={formSchema}
            validateOnChange={true}
            onSubmit={handleFormFinalSubmission}>
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                setFieldValue
            }) => (
                <form action="" className='w-100' onSubmit={handleSubmit}>

                    <FormGroup className="mb-8">
                        <FormLabel className='fs-5 text-gray-500'>Network</FormLabel>
                        <Select
                            className='react-select-styled position-relative'
                            classNamePrefix='react-select'
                            styles={{
                                control: base => ({
                                    ...base,
                                    height: 52
                                })
                            }}
                            isSearchable={false}
                            placeholder='Select a product'
                            name='product'
                            value={values.product.value}
                            onChange={option => {
                                setFieldValue('product', option.value)
                            }}
                            //onChange={handleCh}
                            options={_network_options}
                            onBlur={handleBlur}
                        />
                        {touched.product && errors.product ? <FormControl.Feedback className=''>{errors.product}</FormControl.Feedback> : ''}
                    </FormGroup>
                    <FormGroup className="mb-8">
                        <FormLabel className='fs-5 text-gray-500'>Phone Number</FormLabel>
                        <FormControl type='text'
                            name='phone_number' size="lg"
                            className='py-3' value={values.phone_number}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            //  onInput={e => checkAmountInput(e.target)}
                            isInvalid={touched.phone_number && errors.phone_number}
                        />
                        {touched.phone_number && errors.phone_number ? <FormControl.Feedback type='invalid' className=''>{errors.phone_number}</FormControl.Feedback> : ''}
                    </FormGroup>
                    <FormGroup className="mb-8">
                        <FormLabel className='fs-5 text-gray-500'>Amount</FormLabel>
                        <FormControl type='text' inputMode='numeric' name='amount' size="lg" className='py-3 ff-mono' value={values.amount}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={touched.amount && errors.amount}
                        // onInput={e => checkAmountInput(e.target)}
                        />
                        {touched.amount && errors.amount ? <FormControl.Feedback type='invalid' className=''>{errors.amount}</FormControl.Feedback> : ''}
                    </FormGroup>

                    <div className='flex-end d-flex'>
                        <Button type='submit' size='lg' className='px-16 py-5 text-uppercase fw-bold' disabled={isSubmitting}>Buy Airtime</Button>
                    </div>
                </form>
            )}
        </Formik>

    )
}

export default VTU;


