import React from 'react'
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className="navbar d-flex justify-content-start gap-2">
      <Link to="/function1" className="btn btn-primary">Function 1</Link>
      <Link to="/function2" className="btn btn-primary">Function 2</Link>
    </div>
  )
}

export default Home