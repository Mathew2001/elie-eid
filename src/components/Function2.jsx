import React, { useState } from 'react'
import BackButton from './BackButton';
function Function2() {
  const [c, setC] = useState('');
  const [o, setO] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let res = ((c-o) /o) * 100;
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
              <label>C:</label>
              <input type="number" className="form-control" name="c" placeholder="0" value={c} onChange={(e) => setC(e.target.value)} />
            </div>
            <div className="mb-3">
              <label>O:</label>
              <input type="number" className="form-control" name="o" placeholder="0" value={o} onChange={(e) => setO(e.target.value)} />
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