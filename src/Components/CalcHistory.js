import React from 'react'
import {connect} from "react-redux"

function CalcHistory(props){
    const hisArray = props.his.split("*");
    const listItems = hisArray.map((hisArray)=>
        <li key= {hisArray}>{hisArray}</li>
    );
    return(
        <ul style={{listStyle: 'none', padding:"5px", margin: "0px"}}>
            {listItems}
        </ul>
    )
}

const mapStateToProps =  state => {
    return{
        res: state.Result,
        previusResult: state.previusResult,
        his: state.history
    }
}

export default connect(mapStateToProps)(CalcHistory);