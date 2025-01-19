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

  const tip = (bill * ((percentage1 + percentage2)/2/100));

  return(
    <div>
      <BillInput bill={bill} setBill={setBill} />
      <SelectPercentages percentage1={percentage1} setPercentage1={setPercentage1}>How did you like the services?</SelectPercentages>
      <SelectPercentages percentage2={percentage2} setPercentage2={setPercentage2}>How did your friend like the service?</SelectPercentages>
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

function BillInput(bill, setBill){
  return(
    <div>
      <label>
        How much was the bill?
      </label>
      <input type="text" placeholder="Bill value" value={bill} onChange={(e) => setBill(+e.target.value)}/>
    </div>
  )
}

function SelectPercentages({children}){
  SelectPercentages.propTypes = {
    children: PropTypes.array
  }
  return(
  <>
  <label>{children}</label>
  <select name="" id="">
  <option value="0"> </option>
  <option value="5"> </option>
  <option value="10"> </option>
  <option value="20"> </option>
  </select>

  </>
)
}

function Output(bill, tip){
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
