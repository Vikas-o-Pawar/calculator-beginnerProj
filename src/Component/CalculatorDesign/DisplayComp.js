import React from 'react'
import classes from './Display.module.css';

export default function Display(props) {
  return (
    <div className={classes.displayMainDiv}>
      <input className={classes.resultDisplay}  type="text" value={props.result} disabled={true} />
    </div>
  )
}
