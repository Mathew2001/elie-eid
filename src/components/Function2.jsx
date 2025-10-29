import React, { useState } from 'react'
import BackButton from './BackButton';
function Function2() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let res = (num2 - num1) /num1;
    setResult(res);
    console.log(res);
  };
  return (
    <div className="container mt-4">
      <div className="row justify-content-start">
        <div className="col-12 col-md-8 col-lg-6 ">
          <BackButton />
          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Number 1:</label>
              <input type="number" className="form-control" name="num1" placeholder="0" value={num1} onChange={(e) => setNum1(e.target.value)} />
            </div>
            <div className="mb-3">
              <label>Number 2:</label>
              <input type="number" className="form-control" name="num2" placeholder="0" value={num2} onChange={(e) => setNum2(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">Calculate</button>
          </form>
        </div>
      </div>
      {result !== null && (
        <div>
          <h3>Result: {result +'%'}</h3>
        </div>
      )}
    </div>
  )
}

export default Function2