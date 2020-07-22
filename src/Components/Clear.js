import React from 'react'
import './Clear.css'
import {connect} from "react-redux"
import {ClearData} from '../Actions/actionIndex'

const ClearBtn = (props) => {

    return(
        <button className="FixedButton" onClick={props.Clear}>CE</button>
    )
}

const mapDispatchToProps = (dispatch)=>{
    return{
        Clear: () => dispatch(ClearData())
    }
}

export default  connect(null, mapDispatchToProps)(ClearBtn)