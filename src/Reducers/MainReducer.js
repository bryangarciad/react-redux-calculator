const initialState = {
    Result: "",
    operator: "noSet",
    previusResult: 0,
    history: ""
}

const MainReducer = (state = initialState, action) => {
    switch(action.type){
        case "DO_CALC":
            return{
                ...state,
                Result: state.Result + action.payload,
                history: state.Result + action.payload
                        
            }
        case "UPDATE_OPERATOR":
            if(state.previusResult === 0){
                return{
                    ...state,
                    operator: action.payload,
                    previusResult: state.Result,
                    Result: "",
                    history: state.history + action.payload

                }
            }
            else{
                switch(state.operator){
                    case "plus":
                        return{
                            ...state,
                            Result: "",
                            previusResult: +state.Result + +state.previusResult,
                            operator: "plus",
                            history: state.history + state.Result + "+" + state.previusResult
                        }
                        case "minus":
                            return{
                                ...state,
                                Result: "",
                                previusResult: +state.Result - +state.previusResult,
                                operator: "minus",
                                history: state.history + state.Result + "+" + state.previusResult
                            }
                }
            }
        default:
            return state
    }
}

export default MainReducer