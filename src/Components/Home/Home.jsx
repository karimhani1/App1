import React, { useEffect } from 'react'
import avatarImg from '../../assets/avataaars.svg'
export default function Home() {

  useEffect(()=>{
    document.title ="home"
  })
  
  return (
   <>
   <div className='home d-flex justify-content-center align-items-center text-white'>
    <div className='text-center'>
    <img className='avatar' src={avatarImg} alt="avataaars image"/>

    <div className='text-center pt-4'>
        <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>start Framework</h2>
        <div className='d-flex align-items-center justify-content-center mb-3'>
            <div className='line me-3'></div>
            <i className='fa-solid fa-star'></i>
            <div className='line ms-3'></div>
        </div>
        <div>Graphic Artist - Web Designer - Illustrator</div>
    </div>


    </div>
   </div>
   

   </>
  )
}
