import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export default function Navbar() {
  return (
  <>
   <nav className='navbar navbar-expand-lg fixed-top py-4'>
    <div className='container'>
      <Link className='navbar-brand text-white text-uppercase fw-bolder fs-2' to="">Start Framework</Link>
      <button _ngcontent-dlw-c20 type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className='navbar-toggler collapsed'>
        <span className='navbar-toggler-icon'></span>
        </button>
        <div id='navbarSupportedContent' className='navbar-collapse collapse'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item me-3'>
              <NavLink className='nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2  rounded-3' to="about">about</NavLink>
            </li>

            <li className='nav-item me-3'>
              <NavLink className='nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 rounded-3' to="portofolio">portfolio</NavLink>
            </li>

            <li className='nav-item me-3'>
              <NavLink className='nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 rounded-3' to="contact">contact</NavLink>
            </li>
          </ul>
        </div>
    </div>
   </nav>
 
  </>
  )
}
