import React, { useState } from 'react'
import { AddDesigns } from './AddDesigns'


export const Designhead = (props) => {
  


// console.log(props.category);


  return (
    <div>

           <div className="d-flex w-100 gap-3 mb-3 deshead" >
  
                <div className="d-flex rounded box p-3 justify-content-center" style={{background: "#704E0D"}}>
                    <div className="d-flex flex-column justify-content-center"> 
                    <span className="text-light text-center " style={{cursor:'pointer'}}>
                    <img src='Vector.svg'/>
                      <p  className="text-light text-center mt-2">{props.response.category}</p></span>
                  </div>
                </div>

                <div className="d-flex p-3 rounded box justify-content-center" style={{ background: "#704E0D"}}>
                  <div className="text-light d-flex flex-column justify-content-center">  
                  <span style={{cursor:'pointer'}} >
                    <AddDesigns response={props.response} />
                  
                   <p className=' text-center  mt-3'> Add new</p></span>
                 </div>
               </div>


               <div className="d-flex p-3 rounded box justify-content-center" style={{ background: "#704E0D"}}>
                <div className="text-light text-center d-flex flex-column justify-content-center">  
                 <img src='Vector (2).svg'/>
                <p className='mt-3' style={{cursor:'pointer'}} >Search</p>
               </div>
             </div>
        </div>
    </div>




     
  )
}
