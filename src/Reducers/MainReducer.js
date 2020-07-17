
const initialState = {
    Result: "",
    operator: "noSet",
    previusResult: 0,
    history: ""
}

const MainReducer = (state = initialState, action) => {
    switch(action.type){
        case "DO_CALC":
            if(state.Result !== state.previusResult && state.operator !== "="){
                return{
                    ...state,
                    Result: state.Result + action.payload,
                    history:  state.history + action.payload 
                }
            }
            else{
                return{
                    ...state,
                    Result: action.payload,
                    history:  state.history + action.payload 
                }
            }
            
        case "UPDATE_OPERATOR":
            if(state.previusResult !== 0){
                switch(state.operator){
                    case "+":
                        if(action.payload !== "="){
                            return{
                                ...state,
                                operator: action.payload,
                                previusResult: +state.Result + +state.previusResult,
                                Result: +state.Result + +state.previusResult,
                                history: state.history + " = " + +(+state.Result + +state.previusResult) + '*' + +(+state.Result + +state.previusResult) +" "+ action.payload + " " 
                            }
                        }
                        else{
                            return{
                                ...state,
                                operator: action.payload,
                                previusResult: +state.Result + +state.previusResult,
                                Result: +state.Result + +state.previusResult,
                                history: state.history + " = " + +(+state.Result + +state.previusResult) + '*'  + +(+state.Result + +state.previusResult)

                            }
                        }
                    case "-":
                        return{
                            ...state,
                            operator: action.payload,
                            previusResult:  +state.previusResult - +state.Result,
                            Result: +state.previusResult - +state.Result,
                            history: state.history + " = " + +(+state.previusResult - +state.Result) + "*" + +(+state.previusResult - +state.Result) +action.payload+ " " 
                        }
                    case "=":
                        return{
                            ...state,
                            operator: action.payload,
                            history:state.history + action.payload
                        }
                    default:
                        return state
                }
            }
            else{
                return{
                    ...state,
                    operator: action.payload,
                    previusResult: state.Result,
                    Result: "",
                    history: state.history + action.payload
                }
            }
        default:
            return state
    }
}
export default MainReducer