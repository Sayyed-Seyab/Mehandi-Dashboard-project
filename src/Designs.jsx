import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { firestore } from "./Firebase"
import { Designhead } from './assets/components/Designhead'
import { DesignTable } from './assets/components/DesignTable'
import {getDocs, collection, doc, deleteDoc,} from '@firebase/firestore'



export const Designs = ({response}) => {
//  console.log(response)
  const [subcollection, setsubcollection] = useState([])
  const getsubdata = async ()=>{
    // alert('category page',id)
    const querySnapshot = await getDocs(collection(firestore, "Mehandi",response.id,'Designs'));
    console.log(querySnapshot.empty);
      const newData = querySnapshot.docs
              .map((docs) => ({...docs.data(), id:docs.id }));
          setsubcollection(newData); 
    // const newData = querySnapshot.docs    
        console.log(subcollection);
   }
   useEffect(()=>{
    getsubdata();
  }, [])

  const remove = async(id)=>{
    console.log(id)
    const docref = doc(firestore, 'Mehandi', response.id,'Designs', id)
     await deleteDoc(docref)
    console.log('document is deleted')


  }

  return (
    <div  style={{ position:'relative'}} >
      {/* style={{height: "600px", overflow: "auto"}}  */}
    
            <Designhead response={response}/>
          
            <div className='' style={{ width: '97%'}} >
                        <table className="table sticky-lg-top">
                <thead  style={{background: "#BB8C30"}} >
                  <tr className=''>
                   
                    <th style={{borderTopLeftRadius:"10px"}}  className="col-md-2 col-lg-2 font" > <input className="form-check-input  rounded-circle" type="checkbox" style={{marginRight:'3rem', marginLeft:'0.6rem', background:'transparent'}} /> Design<img className='ms-1' src='option.svg'></img></th>
                    {/* <th className="col-md-2 col-lg-2">D</th> */}
                    <th className="col-md-1 col-lg-1 font">order<img className='ms-1' src='option.svg'></img></th>
                    <th  className="col-md-1 col-lg-1 font">Category<img className='ms-1' src='option.svg'></img></th>
                   
                  
                    <th className="col-md-2 col-lg-1 font" >Status<img className='ms-1' src='option.svg'></img></th>
                    
                    
                    <th style={{borderTopRightRadius:"10px"}} className="col-md-1 col-lg-1" >
                      <div className="dropdown d-flex justify-content-center" style={{}}>
                        <a className="btn text-white" href="#" role="button" id="dropdownMenuLink"
                            data-bs-toggle="dropdown" aria-expanded="false">
                                    ...
                        </a>
                  
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><a className="dropdown-item" href="">Activate</a></li>
                            <li><a className="dropdown-item" href="">Decactivate</a></li>
                            <li><a className="dropdown-item" href="">delete  <i className="fa-solid fa-trash-can"></i></a></li>
                        </ul>
                    </div>
                    </th>
                  </tr>
                </thead>
               <div className='destab' style={{width:'100%', overflow: "auto", position:'absolute'}}>
               {subcollection.map((design)=>{
                 return(
                  <DesignTable id={design.id} img={design.img} category={design.category} DesignName={design.Design} order={design.order} status={design.status} Link={design.Link} remove={remove}/>
                 )
                })}
               </div>
                 
               

                
              </table>
            
                    </div>
            </div>
            
  )
}
