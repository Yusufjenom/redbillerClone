import { Button } from 'react-bootstrap';
import Select from 'react-select'
import { useReducer, useEffect } from 'react';
import {bankTransferReducer} from '../../utils/reducer';



export const BankTransfer = () => {
  
  const [state, dispatch] = useReducer(bankTransferReducer, {
    accountNum: "",
    bankName: "",
    amount: "",
    narration: "",
    accountName:""
  });

  useEffect(() => {
    if (state.accountNum && state.bankName) {
      console.log(`fetching data... ${state.accountNum}, ${state.bankName}`)
      dispatch({type:"UPDATE_BANK_NAME", payload:"Yusuf"})
    }
    console.log(state)
    console.log(state?.accountName)
  }, [state.accountName])

  const handleFormSubmission = async () => {
    try {
      console.log(payload, "working")
      console.log(state)
    }
    catch (err) {
      console.log(err.message)
    }
  }

  return (
    <div className='p-8 p-md-16'>
      <h4 className='fs-1 mb-4 text-gray-900'>Bank transfer</h4>
      <form onSubmit={handleFormSubmission}>
        <div className='form-group mb-5'>
          <span>Bank Name</span>
          <Select
            className='react-select-styled react-select-lg'
            onChange={(e) => dispatch({ type: "BANKNAME", payload: e.value })}
            classNamePrefix='react-select'
            placeholder='Select bank'
            options={[
              { value: 'option 1', label: 'GTB' },
              { value: 'option 2', label: 'Zenith Bank' },
              { value: 'option 3', label: 'Access Bank' },
              { value: 'option 4', label: 'FCMB' },
              { value: 'option 5', label: 'UBA' },
              { value: 'option 5', label: 'ECO Bank' },
            ]}
          />
        </div>

        <div className='row'>
          <label className='col flex-grow-1 form-group mb-5'>
            <span className='form-label'>Account Number</span>
            <input type="number" name='account_number' className="form-control form-control-lg"
              onChange={(e) => dispatch({ type: "ACCOUNTNUM", payload: e.target.value })}
            />
          </label>
          <label className='col mw-200px form-group mb-5'>
            <span className='form-label'>Amount</span>
            <input type="number" name='account_number' className="form-control form-control-lg"
              onChange={(e) => dispatch({ type: "AMOUNT", payload: e.target.value })}
            />
            
                <p style={{ fontFamily: "cursive", color: "red" }}>{ state.accountName}</p>
            

          </label>
        </div>
        
        <label className='form-group mb-5 w-100'>
          <span className='form-label'>Narration</span>
          <input type="text" name='narration' className="form-control form-control-lg"
            onChange={(e) => dispatch({ type: "NARRATION", payload: e.target.value })}
          />
        </label>
        <div className='d-flex'>
          <Button className='ms-auto'>Proceed</Button>
        </div>
      </form>
    </div>
  )
}