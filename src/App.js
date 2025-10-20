import React, { useState, useEffect } from 'react';

function App() {
  const [formData, setFormData] = useState({
    x: '',
    y: '',
    c: '',
    dollar: '',
    // pointValue: '',
    // dailyOvernightFundingBuy: '',
    // amount: ''
  });
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null);
  const [resultShekel, setResultShekel] = useState(null);
  const [tax, setTax] = useState(null);
  const [resultBeforeTax, setResultBeforeTax] = useState(null);
  const [resultBeforeTaxShekel, setResultBeforeTaxShekel] = useState(null);
  const [resultOverNightFunding, setResultOverNightFunding] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.x || isNaN(formData.x)) {
      tempErrors.x = 'X must be a valid number';
    }
    if (!formData.y || isNaN(formData.y)) {
      tempErrors.y = 'Y must be a valid number';
    } else if (Number(formData.y) === 0) {
      tempErrors.y = 'Y cannot be zero';
    }
    if (!formData.c || isNaN(formData.c)) {
      tempErrors.c = 'C must be a valid number';
    }
    if (!formData.dollar || isNaN(formData.dollar) || Number(formData.dollar) <= 0) {
      tempErrors.dollar = 'Dollar must be a valid number';
    }
    // if (!formData.pointValue || isNaN(formData.pointValue)) {
    //   tempErrors.pointValue = 'Point Value must be a valid number';
    // }
    // if (!formData.dailyOvernightFundingBuy || isNaN(formData.dailyOvernightFundingBuy)) {
    //   tempErrors.dailyOvernightFundingBuy = 'Daily Overnight Funding Buy must be a valid number';
    // }
    // if (!formData.amount || isNaN(formData.amount) || Number(formData.amount) <= 0) {
    //   tempErrors.amount = 'Amount must be a valid number';
    // }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleCalculate();
      setFormData({
        x: '',
        y: '',
        c: '',
        dollar: '',
        pointValue: '',
        dailyOvernightFundingBuy: '',
      });
      console.log('Form is valid:', formData);
    }
  };

  const handleCalculate = () => {
    const l = 100;
    const p =(formData.x - formData.y) * ((formData.c * l) / formData.y) 
    console.log(p);
    setTax(p * 0.25);
    setResultBeforeTax(p/formData.dollar);
    setResultBeforeTaxShekel(p);
    if (p >= 0) {
        setResult(p * 0.75 / formData.dollar);
        setResultShekel(p * 0.75);
    } else {
      setResult(p * 1.25 / formData.dollar);
      setResultShekel(p * 1.25);
    }
  };

  // const handleOverNightFunding = () => {
  //   const l = 100;
  //   return formData.y * formData.pointValue * formData.dailyOvernightFundingBuy * formData.amount / 100;
  // };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>X:
            <input
              type="number"
              name="x"
              placeholder="0"
              value={formData.x}
              onChange={handleChange}
            />
          </label>
          {errors.x && <span style={{color: 'red'}}>{errors.x}</span>}
        </div>
        <div>
          <label>Y:
            <input
              type="number"
              name="y"
              placeholder="0"
              value={formData.y}
              onChange={handleChange}
            />
          </label>
          {errors.y && <span style={{color: 'red'}}>{errors.y}</span>}
        </div>
        <div>
          <label>C:
            <input
              type="number"
              name="c"
              placeholder="0"
              value={formData.c}
              onChange={handleChange}
            />
          </label>
          {errors.c && <span style={{color: 'red'}}>{errors.c}</span>}
        </div>
        <div>
          <label>Dollar:
            <input
              type="number"
              name="dollar"
              placeholder="0"
              value={formData.dollar}
              onChange={handleChange}
            />
          </label>
          {errors.dollar && <span style={{color: 'red'}}>{errors.dollar}</span>}
        </div>
        {/* <div>
          <label>Point Value:
            <input
              type="number"
              name="pointValue"
              placeholder="0"
              value={formData.pointValue}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>Daily Overnight Funding Buy:
            <input
              type="number"
              name="dailyOvernightFundingBuy"
              placeholder="0"
              value={formData.dailyOvernightFundingBuy}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>Amount:
            <input
              type="number"
              name="amount"
              placeholder="0"
              value={formData.amount}
              onChange={handleChange}
            />
          </label>
        </div> */}
        <button type="submit">Calculate</button>
      </form>
      {result !== null && resultShekel !== null  && tax !== null && (
        <>
        <div>
        <h1>The Tax in Shekel: {tax}</h1>
        <h1>after Tax:</h1>
        <h2>in Dollar:</h2>
        <p>P: {result}</p>
        <h2>in Shekel: </h2>
        <p>P: {resultShekel }</p>
        <h1>before Tax: </h1>
        <h2>in Dollar:</h2>
        <p>P: {resultBeforeTax}</p>
        <h2>in Shekel: </h2>
        <p>P: {resultBeforeTaxShekel }</p> 
        </div>
        </>
      )}
    </div>
  );  
}

export default App;
