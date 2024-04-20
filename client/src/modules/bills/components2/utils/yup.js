import * as Yup from 'yup'
/** */
export const formSchema = Yup.object({
    phone_number: Yup.number().typeError('Must be numeric').required('Phone number is required'),
    amount: Yup.number().typeError('Must be numeric')
        .integer('Must be numeric').min(100, 'Min of NGN 100').required('Amount is required'),
    product: Yup.string().required('Select a product')
});

export const initialValues = {
    phone_number: '',
    amount: '',
    product: {}
};

/** */


/** */
export const formSchemaMobileData = Yup.object({
    phone_number: Yup.number().typeError('Must be numeric').required('Phone number is required'),
    plan: Yup.string().required("must select a plan"),
    product: Yup.string().required('Select a product')
});

export const initialValuesMobileData = {
    phone_number: '',
    plan: {},
    product: {}
};
/** */

/** */
export const formSchemaCable = Yup.object({
    phone_number: Yup.string().required('Phone number is required'),
    plan: Yup.string().required('Select a plan'),
    smartCard: Yup.number().typeError("Must be numeric").required("Enter a valid card number"),
    product: Yup.string().required('Select a product')
});

export const initialValuesCable = {
    phone_number: '',
    plan: {},
    product: {},
    smartCard: ''
};
/** */


/** */
/** */
/** */