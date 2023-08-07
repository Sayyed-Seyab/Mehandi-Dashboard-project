import React, { useState } from 'react'
import { useEffect } from 'react'
import { firestore } from './Firebase'
import {getDocs,  doc, deleteDoc,getDoc, collectionGroup, collection, count} from '@firebase/firestore'
import { DashboardTable } from './assets/components/DashboardTable'




const Dashboard = () => {
 

  const [all, setall] = useState([])
  const [design, setdesign] = useState([])
   
 
  

  

  const getDesignsFromCatCollection = async () => {
    let tempCat = [];
    let tempDesigns = [];
    let des = []
  
    const cateSnapshot = await getDocs(collection(firestore, "Mehandi"));
    
    return Promise.all(
      cateSnapshot.docs.map(async (catDoc) => {
     
        const designSnap = await  getDocs(collection(firestore, "Mehandi", catDoc.id, "Designs"));
        designSnap.forEach((designDoc) => {
          tempDesigns.push({
            ...designDoc.data(),
            id: designDoc.id
          })
        return  setdesign(tempDesigns)
          // console.log(tempDesigns)
        })
        
       return ({
                ...catDoc.data(),
                Designs: tempDesigns, 
              })
            
         
      })
      
      
     
    );
    
    
  };
  


  

  
   
//    const newData = querySnapshot.docs
//    .map((docs) => ({...docs.data(), id:docs.id }));
// setdata(newData);  here data is not assign to useState because the variable assign to useState is mapping agian and again , so it will return empty array
  //  const data = []//then take array and assign all map values to it then set to useState
  //  querySnapshot.docs.map((doc)=> {
  //   const id = doc.id
  //   console.log(id)
    // const designSnapshot = await getDocs(collection(firestore, 'Mehandi',id,'Designs'))
//     designSnapshot.map((doc)=>{
// data.push({...doc.data(), id:doc.id })
//     })
    // designSnapshot.push({...doc.data(), id:doc.id})
    // data.push({...doc.data(), id:doc.id })
   
   
    
  
  const count = (id)=>{
     const count = design.filter((des) => {
      return des.category === id
    })
    // console.log(count)
    return count.length
  }

  const urlcount = (id)=> {
    const a = design.map((des) => {
      return des.Link
    })
    console.log(a.length)
    
    return a.length
  }
   
 
 
  
// console.log(all.length);
// console.log(design)

  useEffect(()=>{
    getDesignsFromCatCollection()
    .then((result) =>{ 
      
      // console.log(result)
      setall(result)
    })
  }, [])
 
// console.log(all)
// all.map((d)=>{
//   console.log(d.Designs[0].Design)
// })
  // const getDesignCount = (id) => {
  //   // console.log(id)
  
  //  const count =  design.filter((des)=>{
  //   return des.category 
  //  })
  //  return count.length
  //     }

  
    return (
        <>
      
       
            <div style={{ position:'relative'}}>
            <div>
            <img src="average.svg" className='mb-4' alt="" style={{width:'100%'}} />
            </div>
               
                    
              <div className='' >
                        <table className="table sticky-lg-top  ">
                <thead  className='rounded-top' style={{background: "#BB8C30",}} >
                  <tr>
                 
                    <th style={{borderTopLeftRadius:"10px"}} className="col-3"><div className='' style={{marginLeft:'4rem'}}>category<img className='ms-1' src='option.svg'></img></div></th>
                   
                    <th className="col-3"><div style={{marginLeft:'3rem'}}>Orders</div></th>
                   
                    <th className="col-3"><div style={{marginLeft:'2.5rem'}}>Images</div></th>
                    <th className="col-3"><div style={{marginLeft:'2.5rem'}}>Videos</div></th>
                    <th style={{borderTopRightRadius:"10px"}} className="">
                      {/* <div className="dropdown">
                        <a className="btn text-white" href="#" role="button" id="dropdownMenuLink"
                            data-bs-toggle="dropdown" aria-expanded="false">
                                    ...
                        </a>
                  
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><a className="dropdown-item" href="">Activate</a></li>
                            <li><a className="dropdown-item" href="">Decactivate</a></li>
                            <li><a className="dropdown-item" href="">delete  <i className="fa-solid fa-trash-can"></i></a></li>
                        </ul>
                    </div> */}
                    </th>
                  </tr>
                </thead>
               <div className='dashtab' style={{width:'100%', overflow: "auto", position:'absolute'}}>
               { 
               all.map((item) => {
                
                return(
                  
                  <DashboardTable   id={item.id} url={urlcount()} count={count(item.Category)} category={item.Category} order={item.order} img={item.img}  />
                )
               })}
               </div>
                 
               

                
              </table>
            
                    </div>
                </div>
           
           

        </>
    )
}

export default Dashboard