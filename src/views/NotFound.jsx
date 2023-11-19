import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <h5>Fel sida </h5>
        <Link to='/' className='btn-them'>Go back <i className='fa-solid fa-arrow-up-right'></i></Link>
    </div>
  )
}

export default NotFound