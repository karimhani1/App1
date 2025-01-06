import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'


export default function layout() {
  return (
    <>
    <Navbar  />
    
<div className='for-outlet'>
   
    <Outlet  />
     
</div>
 
     <Footer  />
     
     </>
  )

}
