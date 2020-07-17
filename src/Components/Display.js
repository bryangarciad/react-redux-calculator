import React, { Fragment } from "react";
import {connect} from "react-redux"
import './Display.css'
import KeyBoard from './KeyBoard'
import CalcHistory from "./CalcHistory";


function Display(props){
    return(
        <Fragment>
            <section className="Wrapper">
                <div className="CalcContainer" >
                    <div className="displayContainer">
                        <h1 style={{textAlign:'center', height: '10px', fontSize:'1em', margin: '0px'}}>{props.res}</h1>
                    </div>
                    <div className="keyboardContainer">
                        <KeyBoard></KeyBoard>
                    </div>
                </div>
                <aside className="hisContainer">
                    {/* <h3>{props.his}</h3>   */}
                    <CalcHistory></CalcHistory>                  
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