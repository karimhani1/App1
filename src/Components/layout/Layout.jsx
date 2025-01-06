import React from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
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
