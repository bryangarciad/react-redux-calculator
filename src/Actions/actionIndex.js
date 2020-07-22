export const doCalc = (Value) => {
    return{
        type: "DO_CALC",
        payload: Value
    }
}

export const updateOperator = operator => {
    return{
        type: "UPDATE_OPERATOR",
        payload: operator
    }
}

export const ClearData  = () =>{
    return{
        type: "CLEAR"
    }
}

