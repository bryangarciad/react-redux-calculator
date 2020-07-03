import React, { Fragment } from "react";
import {connect} from "react-redux"

function Display(props){
    return(
        <Fragment>
        <h2>{props.history}</h2>
        <h1>{props.res}</h1>
        </Fragment>
    )
}

const mapStateToProps =  state => {
    return{
        res: state.Result,
        history: state.history
    }
}

export default connect(mapStateToProps)(Display);