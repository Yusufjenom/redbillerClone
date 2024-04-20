

export const voucherReducer = (state, action) => {
    switch (action.type) {
        case "PRODUCT":
            return { ...state, product: action.payload }
        case "QUANTITY":
            return { ...state, quantity: action.payload }
        case "AMOUNT":
            return { ...state, amount: action.payload }
        case "EMPTY_FORM":
            return {...state, product:"", quantity:"", amount:""}
        default:
            throw new Error("invvalid input details")
    }
};


export const electricityReducer = (state, action) => {
    switch (action.type) {
        case "PRODUCT":
            return { ...state, product: action.payload }
        case "METER_NUM":
            return { ...state, meter_number: action.payload }
        case "METER_TYPE":
            return { ...state, meter_type: action.payload }
        default:
            throw new Error("invalid input")
    }
};