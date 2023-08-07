import React from 'react'
import { Link } from 'react-router-dom'

export const Side = (props) => {
  return (
    
   
    
     <div>
      <div className='side' style={{backgroundImage:'rgb(187, 140, 48)', position:'relative', borderRadius:'10px'}}>
      <nav id="sidebarMenu" className="">
                  <div className="position-sticky pt-2  sidebar-sticky">
                    {/* <!-- card --> */}
                    <div className="" style={{textAlign: "center"}}>
                        <img src="admin.png" className="rounded-circle" style={{width:"42%"}} />
                        <div className=" mt-3 " style={{color:'#704E0D'}}>
                            <p  className="admin">Admin <br />
                           <h5>Clair Josnsons</h5> </p>
                         
                        </div>
                      </div>
                      <div className="border ">
        
                      </div>
                    
                     
            
                   
                <div className='container'>
                <ul className="nav flex-column  mb-2 mt-4">
                      <li className="nav-item d-flex gap-2 ">
                       
                         
                         <div className='mt-2'> <img src="Vector (3).svg" alt="" /></div>  
                         <div><Link style={{color:'white', textDecoration:'none'}}>123 street,
                         <p> 221 place swat</p></Link></div>
                       
                      </li>
                      <li className="nav-item mt-1 d-flex gap-2">
                       
                          <div> <img src="Vector (4).svg" alt="" /> </div>
                          <div> <Link style={{color:'white', textDecoration:'none'}}>example@gmail.com</Link></div>
                       
                      </li>
                      <li className="nav-item mt-3 d-flex gap-2">
                        
                         <div><img src="Vector (5).svg" alt="" /> </div>
                          <div> <Link style={{color:'white', textDecoration:'none'}}>031234567</Link></div>
                       
                      </li>
                      
                   
        
        </ul>
                </div>

                  </div>
                </nav>




        <div  style={{position:'absolute', bottom:'0', height:'20vh', background:'rgb(112, 78, 13)', width:'100%',borderRadius:'0px 0px 10px 10px'}}>
          <div className='container' style={{position:'absolute', bottom:'40px'}}>
          <ul className='nav flex-column'>
          
                <li className="mb-3"  >
                  <span  className="align-text-bottom color"></span>
                  <img src="Vector (6).svg" alt="" />  <Link style={{color:'white', textDecoration:'none'}}>setting</Link> 
                </li>
              
              <li className="">
              
                  <span data-feather="file-text" className="align-text-bottom"></span>
                  <img src="logout.svg" alt="" />    <Link style={{color:'white', textDecoration:'none'}}> Log out</Link>
              
              </li>
            </ul>
          </div>
        </div>

      </div>
     </div>
  
  
  )
}
