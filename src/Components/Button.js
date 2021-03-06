import React from "react";
import {connect} from "react-redux"
import {doCalc, updateOperator} from '../Actions/actionIndex'
import './Button.css'

function CalcButton(props){
    return(
    <button className="button" onClick={props.operator === "noSet" ? props.doCalc : props.updateOperator}>{props.Value}</button>
    )
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return{
        doCalc: () => dispatch(doCalc(ownProps.Value)),
        updateOperator: () => dispatch(updateOperator(ownProps.operator))
    }
}

export default connect(null, mapDispatchToProps)(CalcButton);