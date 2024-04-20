export const bankTransferReducer = (state, action) => {
    switch (action.type) {
      case "BANKNAME":
        return { ...state, bankName: action.payload }
      case "ACCOUNTNUM":
        return { ...state, accountNum: action.payload }
      case "AMOUNT":
        return { ...state, amount: action.payload }
      case "NARRATION":
        return { ...state, narration: action.payload }
      case "UPDATE_BANK_NAME":
        return {...state, accountName: action.payload}
    }
  };