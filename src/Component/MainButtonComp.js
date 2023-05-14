import React from 'react'
import CalcButton from './CalcButton.js'
import classes from '../App.module.css';

export default function MainButtonComp(props) {
  const getBtnContentInMainButtonComp = (content) => {
    props.getBtnValuesToDisplay(content);
  };

  return (
    <section className={`${classes.btnSectionMain}`}>
      <CalcButton buttonClassName={classes.extraClassBtn} buttonContent={1} getBtnContentProp={getBtnContentInMainButtonComp} />
      <CalcButton buttonClassName={classes.extraClassBtn} buttonContent={2} getBtnContentProp={getBtnContentInMainButtonComp} />
      <CalcButton buttonClassName={classes.extraClassBtn} buttonContent={3} getBtnContentProp={getBtnContentInMainButtonComp} />
      <CalcButton buttonClassName={classes.extraClassBtn} buttonContent={4} getBtnContentProp={getBtnContentInMainButtonComp} />
      <CalcButton buttonClassName={classes.extraClassBtn} buttonContent={5} getBtnContentProp={getBtnContentInMainButtonComp} />
      <CalcButton buttonClassName={classes.extraClassBtn} buttonContent={6} getBtnContentProp={getBtnContentInMainButtonComp} />
      <CalcButton buttonClassName={classes.extraClassBtn} buttonContent={7} getBtnContentProp={getBtnContentInMainButtonComp} />
      <CalcButton buttonClassName={classes.extraClassBtn} buttonContent={8} getBtnContentProp={getBtnContentInMainButtonComp} />
      <CalcButton buttonClassName={classes.extraClassBtn} buttonContent={9} getBtnContentProp={getBtnContentInMainButtonComp} />
      <CalcButton buttonClassName={classes.extraClassBtn} buttonContent={0} getBtnContentProp={getBtnContentInMainButtonComp} />
      <CalcButton buttonClassName={classes.extraClassBtn} buttonContent={'X'} getBtnContentProp={getBtnContentInMainButtonComp} />
      <CalcButton buttonClassName={classes.extraClassBtn} buttonContent={'+'} getBtnContentProp={getBtnContentInMainButtonComp} />
      <CalcButton buttonClassName={classes.extraClassBtn} buttonContent={'-'} getBtnContentProp={getBtnContentInMainButtonComp} />
      <CalcButton buttonClassName={classes.extraClassBtn} buttonContent={'/'} getBtnContentProp={getBtnContentInMainButtonComp} />
      <CalcButton buttonClassName={classes.extraClassBtn} buttonContent={'<-'} getBtnContentProp={getBtnContentInMainButtonComp} />
      <CalcButton buttonClassName={classes.extraClassBtn} buttonContent={'('} getBtnContentProp={getBtnContentInMainButtonComp} />
      <CalcButton buttonClassName={classes.extraClassBtn} buttonContent={')'} getBtnContentProp={getBtnContentInMainButtonComp} />
      <CalcButton buttonClassName={classes.extraClassBtn} buttonContent={'='} getBtnContentProp={getBtnContentInMainButtonComp} />
      <CalcButton buttonClassName={classes.extraClassBtn} buttonContent={'.'} getBtnContentProp={getBtnContentInMainButtonComp} />
      <CalcButton buttonClassName={classes.extraClassBtn} buttonContent={'C'} getBtnContentProp={getBtnContentInMainButtonComp} />
    </section>
  )
}
