import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
    const [state, updstate] = useState(false)
    
  return (
    <div className='' style={{position:'fixed'}}>
      <div className=" side-bar  Side-bar back " style={{height:'82vh'}}>
                <nav id="sidebarMenu" className="">
                  <div className="position-sticky pt-3 container sidebar-sticky">
                    {/* <!-- card --> */}
                    <div className="" style={{textAlign: "center"}}>
                        <img src="download (2).jpg" className="rounded-circle" style={{width:"50%"}} alt="..."/>
                        <div className=" mt-4">
                            <p className="card-text">Admin</p>
                          <h5 className="card-title">Name</h5>
                        </div>
                      </div>
                      <div className="border mt-5">
        
                      </div>
                    <ul className="nav mt-5 " />
                     
            
                   
                    <ul className="nav flex-column  mb-2 mt-4">
                      <li className="nav-item">
                       
                          <span data-feather="file-text" className="align-text-bottom   " ></span>
                          <img src="Vector (3).svg" alt="" />  <Link style={{color:'white', textDecoration:'none'}}>123 street,
                         <div> 221 place swat</div></Link>
                       
                      </li>
                      <li className="nav-item mt-3">
                       
                          <span data-feather="file-text" className="align-text-bottom color"></span>
                          <img src="Vector (4).svg" alt="" />   <Link style={{color:'white', textDecoration:'none'}}>example@gmail.com</Link>
                       
                      </li>
                      <li className="nav-item mt-3">
                        
                          <span data-feather="file-text" className="align-text-bottom   color"></span>
                          <img src="Vector (5).svg" alt="" />  <Link style={{color:'white', textDecoration:'none'}}>031234567</Link>
                       
                      </li>
                      
                   
        
        </ul>
                  </div>
                </nav>
                <div className=" mt-5 container" style={{position:'absolute', bottom: '10px'}} >
            <ul className='nav flex-column'>
          
                <li className=""  >
                  <span  className="align-text-bottom color"></span>
                  <img src="Vector (6).svg" alt="" />  <Link style={{color:'white', textDecoration:'none'}}>setting</Link> 
                </li>
              
              <li className="">
              
                  <span data-feather="file-text" className="align-text-bottom"></span>
                  <img src="Arrow 1.svg" alt="" />    <Link style={{color:'white', textDecoration:'none'}}> Log out</Link>
              
              </li>
            </ul>
        </div>
            </div>

      
          {/* <div className="side-bar ">
            <div className=" side-bar sticky-lg-top  Side-bar " >
                <nav id="sidebarMenu" className="">
                  <div className="position-sticky  pt-3 sidebar-sticky">
                   
                    <div className="" style={{textAlign: "center"}}>
                        <img src="img.jpg" className="rounded-circle" style={{width:"50%"}} />
                        <div className=" mt-4">
                            <p className="card-text">Admin</p>
                          <h5 className="card-title">Name</h5>
                        </div>
                      </div>
                      <div className="border mt-5">
        
                      </div>
                    <ul className="nav mt-5 " />
                     

                    <ul className="nav flex-column mb-2">
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span data-feather="file-text" className="align-text-bottom" ></span>
                          <img src="Vector (3).svg" alt="" />  123 street,
                         <div> 221 place swat</div>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span data-feather="file-text" className="align-text-bottom color"></span>
                          <img src="Vector (4).svg" alt="" />    example@gmail.com
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span data-feather="file-text" className="align-text-bottom   color"></span>
                          <img src="Vector (5).svg" alt="" />  031234567
                        </a>
                      </li>
                      
                    </ul>
                    <div className="container sliderfooter " >
            <div className="nav-item mt-5">
                <a className="nav-link" >
                  <span data-feather="file-text" className="align-text-bottom color"></span>
                  <img src="Vector (6).svg" alt="" />    setting
                </a>
              </div>
              <div className="nav-item">
                <a className="nav-link" >
                  <span data-feather="file-text" className="align-text-bottom   color"></span>
                 <img src="Arrow 1.svg" alt="" />     Log out
                </a>
              </div>
        </div>
                  </div>
                 
                </nav>
              
            </div>
        </div> */}
        </div>
   
  )
}
