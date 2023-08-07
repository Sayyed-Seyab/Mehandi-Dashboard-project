import React from 'react'

export const DashboardTable = (props) => {
  // console.log(props.design)
  // console.log(props.id)


//   const getDesignCount = (id) => {
// const count = props.design.filter((des) => {
//   return des.category === id
  
// })
// return count.length
//   }
// console.log(props.count)

  return (
    <tbody style={{background:'white'}} className='' >
    <tr style={{height:'116px'}} >
    
      <td className="col-md-4 col-lg-4 col-xl-4" scope="">
      <div className='d-flex gap-2'>
      <div className='roundBtnMargn'><input className="form-check-input  rounded-circle" type="checkbox"   />
      </div>

      <div style={{width:'100px'}}>
        <img  style={{width:'100%', borderRadius:'10px'}}  src={props.img} />
        </div>

       <div style={{marginTop:'2.5rem', width:'11rem'}}>
         <p className="text-decoration-none textcolor " style={{marginRight:'3rem'}} >
           {props.category}</p>
           </div>
      </div>
        
      </td>
     
      <td className='col-md-3 col-lg-3'><p className='textcolor mt-4'>{props.order}</p></td>
     
      <td className='col-md-3 col-lg-3 caTstatus  textcolor'>{props.count}</td>
      <td className='col-md-2 col-lg-2 caTstatus  textcolor'>{props.url}</td>
      
      
      
    </tr>
   
   
  </tbody>
  )
}
