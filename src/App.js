import { Fragment, useState } from 'react';
import Card from './Component/CalculatorDesign/Card';
import classes from './App.module.css';
import DisplayComp from './Component/CalculatorDesign/DisplayComp';
import MainButtonComp from './Component/MainButtonComp';

let str = '';

function App() {
  const [currNumberStr, SetCurrNumberStr] = useState(``);

  function getBtnValuesToDisplay(btnValue) {
    try {
      if (btnValue === '=') {
        SetCurrNumberStr(eval(currNumberStr));
      } else if (btnValue === 'C') {
        str = '';
        SetCurrNumberStr('');
      } else if (btnValue === '<-') {
        str = str.substring(0, str.length - 1);
        SetCurrNumberStr(str);
      }
      else {
        str += btnValue === 'X' ? btnValue = '*' : btnValue;
        SetCurrNumberStr(str);
      }
    } catch (error) {
      alert("Some error occurred. Please verify the input and try again.");
    }

  }



  return (
    <Fragment>
      <section className={classes.mainCalSection}>
        <h1>A Calculator</h1>
        <DisplayComp result={currNumberStr === ''? '0': currNumberStr} />
        <Card className={classes.cardMain}>
          <MainButtonComp getBtnValuesToDisplay={getBtnValuesToDisplay} />
        </Card>
      </section>
    </Fragment>
  );
}

export default App;
