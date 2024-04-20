import ReactSelect from "react-select"
import { FormControl, FormGroup, FormLabel, Button } from "react-bootstrap"

import useNumberInput from '../../../../hooks/useNumberInput';
import providers from './providers.json';
export const Betting = () => {
    const { checkAmountInput } = useNumberInput();
    return (
        <div className='p-12'>
            <form action='' onSubmit={e => {
                e.preventDefault();
            }} method='POST'>
                <FormGroup className="mb-8 mt-5">
                    <FormLabel className='fs-5 text-gray-500'>Provider</FormLabel>
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
                        options={providers.map(p => {
                            let name = p.product.replace(/\_/, ' ');
                            return {
                                value: p.product,
                                label: (
                                    <div className='label align-items-center d-flex'>
                                        <div className={'symbol symbol-30px symbol-circle border me-3'}>
                                            <img
                                                src={p.logo}
                                                alt={name}
                                                onError={({ currentTarget }) => {
                                                    currentTarget.onerror = null;
                                                    currentTarget.src = '/assets/media/logo.png';
                                                }} />
                                        </div>
                                        <span className='fs-5'>{name.toUpperCase()}</span>
                                    </div>
                                )
                            }
                        })}
                    />
                </FormGroup>
                <div className='d-flex gap-8'>
                    <FormGroup className="flex-grow-1 mb-8">
                        <FormLabel className='fs-5 text-gray-500'>Account ID</FormLabel>
                        <FormControl
                            type='text'
                            name='account_id'
                            size="lg"
                            className='py-4'
                        />

                    </FormGroup>
                    <FormGroup className="mb-8 mw-175px">
                        <FormLabel className='fs-5 text-gray-500'>Amount</FormLabel>
                        <FormControl
                            type='text'
                            inputMode='numeric'
                            name='amount'
                            size="lg"
                            className='py-4 ff-mono'
                            onInput={e => checkAmountInput(e.target)}
                        />

                    </FormGroup>
                </div>

                <div className='flex-end d-flex'>
                    <Button type='submit' size='lg' className='px-16 py-5 text-uppercase fw-bold'>Fund Wallet</Button>
                </div>
            </form>
        </div>
    )
}