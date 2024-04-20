import { useState } from 'react';
import { Formik } from "formik"
import ReactSelect from "react-select"
import { FormControl, FormGroup, FormLabel, Button } from "react-bootstrap"
//import useProducts from "../../../hooks/useProducts";
import useProducts from '../../../../hooks/useProducts'
import * as Yup from 'yup'
//import useNumberInput from '../../../../../hooks/useNumberInput';
import useMockPlans from "../../../../hooks/useMockPlans";
import {initialValuesCable, formSchemaCable} from '../../../utils/yup'




export const Cable = () => {

    const { fetchPlans } = useMockPlans();
    const { productOptions } = useProducts('cable');
    const [dataPlans, setDataPlans] = useState([]);
    console.log(productOptions);


    const handleFinalFormSubmission = async (values) => {
        try{
         console.log(values)
        }
        catch(err){
            console.log(err.message)
        }
    };
    
    return (
        <div className='p-12'>
            <Formik
                initialValues={initialValuesCable}
                validationSchema={formSchemaCable}
                validateOnChange={true}
                onSubmit={handleFinalFormSubmission}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    setFieldValue,
                    isValid
                }) => (
                    <form action='' onSubmit={handleSubmit} method='POST'>
                        <FormGroup className="mb-8">
                            <FormLabel className='fs-5 text-gray-500'>Product</FormLabel>
                            <ReactSelect
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
                                    // Fetch data plans
                                    let _plans = fetchPlans({
                                        service: 'cable',
                                        product: option.value
                                    })
                                    console.log(_plans);
                                    setDataPlans(_plans.status === 'true' && _plans.response == 200 ? _plans.details.categories.map(p => ({
                                        label: p.name,
                                        value: p.code,
                                        amount: p.amount
                                    })) : []);
                                    // handleChange()
                                }}
                                options={productOptions}
                            />
                            {touched.product && errors.product ? <FormControl.Feedback className=''>{errors.product}</FormControl.Feedback> : ''}
                        </FormGroup>

                        <FormGroup className="mb-8">
                            <FormLabel className='fs-5 text-gray-500'>Cable Plan</FormLabel>
                            <ReactSelect name='plan'
                                className='react-select-styled position-relative'
                                classNamePrefix='react-select'
                                value={values.plan.value}
                                onChange={option => {
                                    setFieldValue('plan', option.value)
                                    console.log(option.value)
                                }}
                                onBlur={handleBlur}
                                options={dataPlans}
                                isInvalid={touched.plan && errors.plan}
                            />
                            {touched.plan && errors.plan ? <FormControl.Feedback type='invalid' className=''>{errors.plan}</FormControl.Feedback> : ''}
                        </FormGroup>
                        {console.log(values)}
                        <FormGroup className="mb-8">
                            <FormLabel className='fs-5 text-gray-500'>Smart Card Number</FormLabel>
                            <FormControl type='text'
                                name='smartCard' size="lg"
                                className='py-3'
                                value={values.smartCard}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.smartCard && errors.smartCard}
                            />
                            {touched.smartCard && errors.smartCard ? <FormControl.Feedback type='invalid' className=''>{errors.smartCard}</FormControl.Feedback> : ''}
                        </FormGroup>

                        <FormGroup className="mb-8">
                            <FormLabel className='fs-5 text-gray-500'>Phone Number</FormLabel>
                            <FormControl type='text'
                                name='phone_number' size="lg"
                                className='py-3'
                                value={values.phone_number}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.phone_number && errors.phone_number}
                            />
                            {touched.phone_number && errors.phone_number ? <FormControl.Feedback type='invalid' className=''>{errors.phone_number}</FormControl.Feedback> : ''}
                        </FormGroup>

                        <div className='flex-end d-flex'>
                            <Button type='submit' size='lg' className='px-16 py-5 text-uppercase fw-bold' disabled={(values.smartCard == false) || isSubmitting}>Subscribe Television</Button>
                        </div>
                    </form>
                )}

            </Formik>
        </div>

    )
}