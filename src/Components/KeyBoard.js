import React, { Fragment } from 'react'
import CalcButton from './Button'


function KeyBoard(props){
    return(
        <Fragment>
            <CalcButton operator={"noSet"} Value={"7"}></CalcButton>
            <CalcButton operator={"noSet"} Value={"8"}></CalcButton>
            <CalcButton operator={"noSet"} Value={"9"}></CalcButton>
            <CalcButton operator={"%"} Value={"%"}></CalcButton>
            <CalcButton operator={"noSet"} Value={"4"}></CalcButton>
            <CalcButton operator={"noSet"} Value={"5"}></CalcButton>
            <CalcButton operator={"noSet"} Value={"6"}></CalcButton>
            <CalcButton operator={"*"} Value={"*"}></CalcButton>
            <CalcButton operator={"noSet"} Value={"1"}></CalcButton>
            <CalcButton operator={"noSet"} Value={"2"}></CalcButton>
            <CalcButton operator={"noSet"} Value={"3"}></CalcButton>
            <CalcButton operator={"-"} Value={"-"}></CalcButton>
            <CalcButton operator={"noSet"} Value={"0"}></CalcButton>
            <CalcButton operator={"noSet"} Value={"."}></CalcButton>
            <CalcButton  operator={"="} Value={"="}></CalcButton>
            <CalcButton operator={"+"} Value={"+"}></CalcButton>

        </Fragment>
    )
}

export default KeyBoard
