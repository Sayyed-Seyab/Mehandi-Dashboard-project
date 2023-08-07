import React, { useState } from 'react'
import { useEffect } from 'react'
export { addDoc, collection, doc, deleteDoc,} from "@firebase/firestore"
import { firestore, storage } from "./Firebase"
import {getDocs, collection, doc, deleteDoc,getDoc} from '@firebase/firestore'
import { Categoryhead } from './assets/components/Categoryhead'
import { Table } from './assets/components/Table'
import { useNavigate } from 'react-router-dom'
import { deleteObject } from 'firebase/storage'
import { ref} from 'firebase/storage'




const Category = ({sendrequest}) => {
  const navigate = useNavigate()
 
    const [data, setdata] = useState([])
   
   const getdata = async ()=>{
    const querySnapshot = await getDocs(collection(firestore, "Mehandi"));
    const newData = querySnapshot.docs
            .map((docs) => ({...docs.data(), id:docs.id }));
        setdata(newData);                
        // console.log(data, newData);
   }

   
        const getsubdata = async (id)=>{
          console.log(id)
      const docRef = doc(firestore, "Mehandi" , id);
      const docSnap = await getDoc(docRef); 
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        const obj ={
          category : docSnap.data().Category,
          id : id
        }
        sendrequest(obj)
        
        navigate('/Designs')
      // window.location = 'Designs'
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
        
      } 
   
    // const querySnapshot = await getDocs(collection(firestore, "Mehandi",id,'Designs'));
    // console.log(querySnapshot.empty);
    // const newData = querySnapshot.docs
//     .map((docs) => ({...docs.data(), id:docs.id }));
// setsubcollection(newData);  
// window.location = 'Designs'
          
                     
        
   }
   
   
  
   useEffect(()=>{
   getdata()
  }, [])
  

 


        const remove = async (id,url)=>{
          console.log(id)
          console.log(url)
          const imgref = ref(storage, `${url}`)
          deleteObject(imgref).then(()=>{
            const docref =  doc(firestore,'Mehandi', id)
             deleteDoc(docref);
            alert('document is deleted')
            alert('image is deleted successfully')
          })
      
        }
   
   
    return (
          <div style={{ position:'relative'}}>
                      <div className='' >
                      <Categoryhead />
                      </div>
                      <div className='' style={{ width: '97%'}} >
                        <table className="table sticky-lg-top ">
                <thead  className='rounded-top' style={{background: "#BB8C30"}} >
                  <tr className=''>
                   
                    
                    <th  style={{borderTopLeftRadius:"10px",}} className="col-md-4 col-lg-4 font "  > <input className="form-check-input  rounded-circle bg-transparent" type="checkbox" style={{marginRight:'4rem', marginLeft:'0.6rem'}} /> category<img className='ms-1' src='option.svg'></img></th>
                 
                 <th className="col-md-3 col-lg-3 font"><div >Order<img className='ms-1' src='option.svg'></img></div></th>
                
                
               
                 <th className="col-md-3 col-lg-3 font" >Status<img className='ms-1' src='option.svg'></img></th>
                 
                 
                 <th style={{borderTopRightRadius:"10px"}} className="col-md-1 col-lg-1" >
                   <div className="dropdown">
                     <a className="btn text-white " href="#" role="button" id="dropdownMenuLink"
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
               <div className='catTab' style={{width:'100%', overflow: "auto", position:'absolute'}}>
               {data.map((item)=>{
                return(
                 <Table key={item.id} id={item.id} category={item.Category} order={item.order} status={item.status} img={item.img} getsubdata={getsubdata} remove={remove} />
                 )
                  })}
               </div>
                 
               

                
              </table>
            
                    </div>
                       </div>
                    
    )
}

export default Category