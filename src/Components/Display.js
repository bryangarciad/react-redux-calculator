import React, { Fragment } from "react";
import {connect} from "react-redux"
import './Display.css'
import KeyBoard from './KeyBoard'

function Display(props){
    return(
        <Fragment>
            <section className="Wrapper">
                <div className="CalcContainer" >
                    <div className="displayContainer">
                        <text style={{textAlign:'center', height: '10px', fontSize:'1em', margin: '0px',whiteSpace: "pre-wrap"}}>{props.res}</text>
                    </div>
                    <div className="keyboardContainer">
                        <KeyBoard></KeyBoard>
                    </div>
                </div>
                <aside className="hisContainer">
                    <h3>{props.his}</h3>                    
                </aside> 
            </section>   
        </Fragment>
    )
}

const mapStateToProps =  state => {
    return{
        res: state.Result,
        previusResult: state.previusResult,
        his: state.history
    }
}

export default connect(mapStateToProps)(Display);