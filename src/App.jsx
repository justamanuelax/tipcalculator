import PropTypes from "prop-types";
import {useState } from "react";
function App() {
  
  return (
    <div>
      <TipCalculator/>
    </div>
  )
}


function TipCalculator(){
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  function HandleReset(){
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  const tip = Math.round((bill * ((percentage1 + percentage2) / 2 / 100)) * 100) / 100;

  return(
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentages percentage={percentage1} setPercentage={setPercentage1}>How did you like the services?</SelectPercentages>
      <br />
      <SelectPercentages percentage={percentage2} setPercentage={setPercentage2}>How did your friend like the service?</SelectPercentages>
      {bill > 0 && (
        <>
        {" "}
        <Output bill={bill} tip={tip}/>
        <Reset onReset={HandleReset}/>
        </>

      )}
    </div>
  )

}

function BillInput({bill, onSetBill}){
  BillInput.propTypes ={
    bill: PropTypes.string,
    onSetBill: PropTypes.string
  }
  return(
    <div>
      <label>
        How much was the bill?
      </label>
      <input type="text" placeholder="Bill value" value={bill} onChange={e => onSetBill(Number(e.target.value))}/>
    </div>
  )
}

function SelectPercentages({children, percentage, setPercentage}){
  SelectPercentages.propTypes = {
    children: PropTypes.string,
    percentage: PropTypes.number,
    setPercentage: PropTypes.number
  }
  return(
  <>
  <label>{children}</label>
  <select value={percentage} onChange={(e) => setPercentage(+(e.target.value))}>
  <option value="0">Not Good (0%) </option>
  <option value="5">Okay (5%) </option>
  <option value="10">Really Good (10%) </option>
  <option value="20">Absolutely Amazing (20%)</option>
  </select>

  </>
)
}

function Output({bill, tip}){
  Output.propTypes = {
    bill: PropTypes.string, 
    tip: PropTypes.number
  }
  return(
    <>
    <h3>You pay ${bill + tip} (${bill} + ${tip} tip)</h3>
    </>
    
  )

}

function Reset({onReset}){
Reset.propTypes = {
  onReset: PropTypes.func
}
  return(
    <>
        <button onClick={onReset}>Reset</button>
    </>
  )
}

export default App
