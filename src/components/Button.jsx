import React from "react";
import "./Button.css"

export default props => {
    let classs = "button "
    classs += props.operation ? "operation" : ""
    classs += props.double ? "double" : ""
    classs += props.triple ? "triple" : ""

    return (
        <button 
            onClick={() => props.click && props.click(props.label)}
            className={classs}>
            {props.label}
        </button>
    )
}