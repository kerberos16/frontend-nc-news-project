import React from 'react'
import { Link } from 'react-router-dom'
import './error.css'

const Error = () => {
  return (
    <div className='error-page'>
      This page does not exist, please go back.
      <br/>
      <br/>
        <div className='redirect-container'>
            <Link className="redirect-link" to="/">
                <p> Home &#8250;&#8250;&#8250;</p>
            </Link>
        </div>
    </div>
  )
}

export default Error
