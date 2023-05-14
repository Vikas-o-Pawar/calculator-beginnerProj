import React from 'react';
import classes from './CalcButton.module.css';
export default function CalcButton(props) {
    function getBtnContent() {
        props.getBtnContentProp(props.buttonContent);
    }

    return (
        <button className={`${classes.calcButtonBasic} ${props.buttonClassName}`} onClick={getBtnContent}>{props.buttonContent}</button>
    )
}
