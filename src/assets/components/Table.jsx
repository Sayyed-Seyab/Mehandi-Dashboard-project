import React from 'react'

export const Table = (props) => {
  return (
    
           
                 
                 
                
    <tbody style={{background:'white'}} className='' >
    <tr style={{height:'116px'}} >
    
      <td className="col-md-3 col-lg-1 col-xl-2" scope="">
      <div className='d-flex gap-2'>
      <div className='roundBtnMargn'><input className="form-check-input  rounded-circle" type="checkbox"   />
      </div>

      <div style={{width:'100px'}}>
        <img  style={{width:'100%', borderRadius:'10px'}} onClick={()=>{props.getsubdata(props.id)}} src={props.img} />
        </div>

       <div style={{marginTop:'2.5rem', width:'8.5rem'}}>
         <p className="text-decoration-none  textcolor " >
           {props.category}</p>
           </div>
      </div>
        
      </td>
     
      <td className='col-md-3 col-lg-2'><p className='textcolor mt-4'>{props.order}</p></td>
     
      <td className='col-md-3 col-lg-2 caTstatus'> <button className="btn caTstatus btn-sm  btn-primary text-light " style={{letterSpacing:'2px',borderRadius: "16px",border: "1px solid #BB8C30",background: "#BB8C30", marginLeft:'10px'}}>{props.status}</button></td>
      
      <td className='col-md-1 col-lg-1'> 
      <div className='d-flex gap-2' style={{marginLeft:'1.5rem'}}>
      <div><img src='Vector (7).svg' onClick={()=> props.remove(props.id,props.img)}/></div>
      <div><img  src="Vector (8).svg"    data-bs-toggle="modal"  data-bs-target="#exampleModal"/></div>
      </div>
      </td>
      
    </tr>
   
   
  </tbody>
                 
                 
                
                
             
    
  )
}
