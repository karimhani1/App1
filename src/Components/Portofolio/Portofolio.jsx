import React from 'react'
import { useEffect } from 'react'

export default function Portofolio() {

  useEffect(()=>{
    document.title ="portfolio"
  })

  return (
    <>
      <div className='mb-4'>
        <div className='pt-4'>
          <div className='text-center pt-4 title'>
            <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>portfolio component</h2>
            <div className='d-flex align-items-center justify-content-center mb-3'>

              <div className='bord me-3'></div>
              <i className='fa-solid fa-star'></i>
              <div className='bord ms-3'></div>
            </div>
          </div>

          <div className='container'>
            <div className="row g-5">
              <div className='col-lg-4 col-md-6'>
                <div className='rounded-3 overflow-hidden position-relative'>
                  <img className='w-100 rounded-3' src="./src/assets/poert1.png" alt="poert1" />
                <div className='layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center'>
                  <i className='text-white fa-solid fa-plus fa-6x'></i>
                </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='rounded-3 overflow-hidden position-relative'>
                  <img className='w-100 rounded-3' src="./src/assets/port2.png" alt="poert2" />
                <div className='layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center'>
                  <i className='text-white fa-solid fa-plus fa-6x'></i>
                </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='rounded-3 overflow-hidden position-relative'>
                  <img className='w-100 rounded-3' src="./src/assets/port3.png" alt="poert3" />
                <div className='layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center'>
                  <i className='text-white fa-solid fa-plus fa-6x'></i>
                </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='rounded-3 overflow-hidden position-relative'>
                  <img className='w-100 rounded-3' src="./src/assets/poert1.png" alt="poert4" />
                <div className='layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center'>
                  <i className='text-white fa-solid fa-plus fa-6x'></i>
                </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='rounded-3 overflow-hidden position-relative'>
                  <img className='w-100 rounded-3' src="./src/assets/port2.png" alt="poert5" />
                <div className='layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center'>
                  <i className='text-white fa-solid fa-plus fa-6x'></i>
                </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='rounded-3 overflow-hidden position-relative'>
                  <img className='w-100 rounded-3' src="./src/assets/port3.png" alt="poert6" />
                <div className='layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center'>
                  <i className='text-white fa-solid fa-plus fa-6x'></i>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}
