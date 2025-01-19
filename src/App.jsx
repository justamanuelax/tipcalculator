import PropTypes from "prop-types";
import { useState } from "react";

function App() {
  // The main App component acts as the entry point for rendering the TipCalculator component.
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  // State variables to manage the bill amount and the tip percentages.
  const [bill, setBill] = useState(""); // Stores the bill amount entered by the user.
  const [percentage1, setPercentage1] = useState(0); // Stores the first percentage (user's opinion).
  const [percentage2, setPercentage2] = useState(0); // Stores the second percentage (friend's opinion).

  // Function to reset all inputs to their initial state.
  function HandleReset() {
    setBill(""); // Resets the bill amount to an empty string.
    setPercentage1(0); // Resets the first percentage to 0.
    setPercentage2(0); // Resets the second percentage to 0.
  }

  // Calculates the tip based on the average of the two percentages.
  const tip = Math.round((bill * ((percentage1 + percentage2) / 2 / 100)) * 100) / 100;

  return (
    <div>
      {/* Component to input the bill amount */}
      <BillInput bill={bill} onSetBill={setBill} />

      {/* Dropdown to select the first percentage */}
      <SelectPercentages percentage={percentage1} setPercentage={setPercentage1}>
        How did you like the services?
      </SelectPercentages>

      <br />

      {/* Dropdown to select the second percentage */}
      <SelectPercentages percentage={percentage2} setPercentage={setPercentage2}>
        How did your friend like the service?
      </SelectPercentages>

      {bill > 0 && (
        // Output and reset button are only displayed if the bill amount is greater than 0.
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={HandleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  // Component for entering the bill amount.
  BillInput.propTypes = {
    bill: PropTypes.string, // The current bill amount as a string.
    onSetBill: PropTypes.func, // Callback function to update the bill amount.
  };

  return (
    <div>
      <label>How much was the bill?</label>
      {/* Input field for the bill amount. Updates the state on change. */}
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))} // Converts the input to a number.
      />
    </div>
  );
}

function SelectPercentages({ children, percentage, setPercentage }) {
  // Dropdown component for selecting tip percentages.
  SelectPercentages.propTypes = {
    children: PropTypes.string, // Label text for the dropdown.
    percentage: PropTypes.number, // Current selected percentage.
    setPercentage: PropTypes.func, // Callback function to update the selected percentage.
  };

  return (
    <>
      <label>{children}</label>
      {/* Dropdown menu for percentage selection. */}
      <select value={percentage} onChange={(e) => setPercentage(+e.target.value)}>
        <option value="0">Not Good (0%)</option>
        <option value="5">Okay (5%)</option>
        <option value="10">Really Good (10%)</option>
        <option value="20">Absolutely Amazing (20%)</option>
      </select>
    </>
  );
}

function Output({ bill, tip }) {
  // Component to display the calculated total amount and tip.
  Output.propTypes = {
    bill: PropTypes.number, // The bill amount.
    tip: PropTypes.number, // The calculated tip.
  };

  return (
    <>
      <h3>
        You pay ${bill + tip} (${bill} + ${tip} tip)
      </h3>
    </>
  );
}

function Reset({ onReset }) {
  // Component for the reset button.
  Reset.propTypes = {
    onReset: PropTypes.func, // Callback function to reset all inputs.
  };

  return (
    <>
      <button onClick={onReset}>Reset</button>
    </>
  );
}

export default App;
