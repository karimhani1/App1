import React from 'react'
import { useEffect } from 'react'

export default function Contact() {
     useEffect(()=>{
        document.title ="contact"
      })
  return (
 <>
 <div className='mb-4'>
<div className='pt-3 container'>
  <div className='text-center pt-4'>
<h2 className='title text-uppercase mb-3 fs-1 fw-bolder'>conatct section</h2>
<div className='d-flex align-items-center justify-content-center mb-3'>

<div className='bord me-3'></div>
<i className='fa-solid fa-star'></i>
<div className='bord ms-3'></div>
</div>
  </div>

  <form className='w-50 p-3 mx-auto mt-5'>
<input className='form-control border-0 border-bottom py-4' type="text" placeholder='userName' />
<input className='form-control border-0 border-bottom py-4' type="text" placeholder='userAge' />
<input className='form-control border-0 border-bottom py-4' type="text" placeholder='userEmail' />
<input className='form-control border-0 border-bottom py-4' type="text" placeholder='userPassword' />
 <button className='btn mt-4 text-white'>send Message</button> 
  </form>

</div>
 </div>
 </>
  )
}
