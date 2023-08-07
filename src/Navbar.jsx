import React, { useState } from 'react'
import './App.css'
import { Link } from "react-router-dom";





const Navbar = () => {

    const [activeTab, setActiveTab] = useState('Dashboard')

    return (
  
        <header className="sticky-lg-top" style={{background:"#BB8C30"}}>

        <div className="d-flex justify-content-between ">
          <div className="">
          <img src="Logo.svg" alt=""   style={{width :"100%"}} />
          </div>
         
         <div>
          <ul className="nav mt-4 " >
            <Link className='Link' to={'Dashboard'}  onClick={()=> setActiveTab('Dashboard')}>
              <div className="nav-link  d-flex " style={activeTab === 'Dashboard' ? activeStyles : null} 
             > <img src="dashboard.svg"  className='m-1' alt="" />  DashBoard </div>
            </Link>
            <Link className='Link' to={'Category'}  onClick={()=> setActiveTab('Category')}>
              <div className="nav-link d-flex"   style={activeTab === 'Category' ? activeStyles : null}> 
               <img src="category.svg" className='m-1' alt="" />  categories</div>
            </Link>

           
          </ul>
         </div>
  
         <div></div>
         </div>
       
      
      </header>

     
    )
}

export default Navbar




const activeStyles = {
    borderBottom: '5px solid #fff'
}