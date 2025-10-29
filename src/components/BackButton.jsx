import React from 'react'
import { Link } from 'react-router-dom'

const BackButton = () => {
  return (
    <div>
      <Link to='/' className="btn btn-secondary">
        Back to Home
      </Link>
    </div>
  )
}

export default BackButton