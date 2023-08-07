import React from 'react'
import { Addcategory } from './Addcategory'


export const Categoryhead = () => {
  return (
    <div>
               <div className=" row gap-3 mb-3 container caThead" >
                  <div className="d-flex rounded p-3 box justify-content-center" style={{ }}>
                  <div className="d-flex flex-column justify-content-center"> <img src='Vector.svg'/>
                  <p className="text-light text-center mt-1" style={{cursor:'pointer'}}>Categories</p>
                </div>
              </div>

                <div className="d-flex p-3 rounded box justify-content-center" style={{ }}>
                  <div className="text-light text-center d-flex flex-column justify-content-center ">  
                  <span className='' style={{cursor:'pointer'}} ><Addcategory />
                   <p className='mt-3'> Add new</p></span>
                 </div>
               </div>


               <div className="d-flex p-3 rounded box justify-content-center" style={{ }}>
                <div className="text-light text-center d-flex flex-column justify-content-center ">   <img src='Vector (2).svg'/>
                <p className='mt-3' style={{cursor:'pointer'}} >Search</p>
               </div>
             </div>
        </div>
    </div>




  )
}
