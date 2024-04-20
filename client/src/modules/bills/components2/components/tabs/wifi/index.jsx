import { useState } from 'react';
import { Formik } from "formik"
import ReactSelect from "react-select"
import { FormControl, FormGroup, FormLabel, Button } from "react-bootstrap"
import useProducts from "../../../../hooks/useProducts";
import * as Yup from 'yup'
//import useNumberInput from '../../../../../hooks/useNumberInput';
import useMockPlans from "../../../../hooks/useMockPlans";


const initialValues = {
    plan: {},
    product: {},
    device_number: ''
};

const formSchema = Yup.object({
    device_number: Yup.string().required('Device number is required'),
    plan: Yup.string().required('Select an internet plan'),
    product: Yup.string().required('Select a product')
});

export const Internet = () => {
    const { fetchPlans } = useMockPlans();
    const { productOptions } = useProducts('wifi_internet');
    const [dataPlans, setDataPlans] = useState([]);
    console.log(productOptions);
    //console.log(dataPlans)
    

   const handleFinalFormSubmission = (values) => {
     console.log(values)
   };


    return (
        <div className='p-12'>
            <Formik
                initialValues={initialValues}
                validationSchema={formSchema}
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
                            <FormLabel className='fs-5 text-gray-500'>Internet Service Provider</FormLabel>
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
                                // value={values.product}
                                onChange={option => {
                                    setFieldValue('product', option)
                                    // Fetch data plans
                                    let _plans = fetchPlans({
                                        service: 'wifi',
                                        product: option.value
                                    })
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
                            <FormLabel className='fs-5 text-gray-500'>Device Number</FormLabel>
                            <FormControl type='number'
                                name='device_number' size="lg"
                                className='py-3'
                                value={values.device_number}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.device_number && errors.device_number}
                            />
                            {touched.device_number && errors.device_number ? <FormControl.Feedback type='invalid' className=''>{errors.device_number}</FormControl.Feedback> : ''}
                        </FormGroup>
                        <FormGroup className="mb-8">
                            <FormLabel className='fs-5 text-gray-500'>Internet Plan</FormLabel>
                            <ReactSelect name='plan'
                                className='react-select-styled position-relative'
                                classNamePrefix='react-select'
                                 value={values.plan.value}
                                onChange={option => {
                                    setFieldValue('plan', option.value)
                                    console.log(option.value)
                                    // handleChange()
                                }}
                                onBlur={handleBlur}
                                options={dataPlans}
                                isInvalid={touched.plan && errors.plan}
                            />
                            {touched.plan && errors.plan ? <FormControl.Feedback type='invalid' className=''>{errors.plan}</FormControl.Feedback> : ''}
                        </FormGroup>

                        <div className='flex-end d-flex'>
                            <Button type='submit' size='lg' className='px-16 py-5 text-uppercase fw-bold' disabled={(values.device_number == false || values.plan == false || values.product == false) || isSubmitting}>Subscribe Television</Button>
                        </div>
                    </form>
                )}

            </Formik>
        </div>

    )
}