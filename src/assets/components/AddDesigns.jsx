
import React, { useState } from 'react'
export { addDoc, collection, doc, deleteDoc, } from "@firebase/firestore"
import {getDocs, collection, doc, deleteDoc,getDoc, setDoc} from '@firebase/firestore'
import { firestore, storage, } from '../../Firebase'
import { v4 } from 'uuid'
import {ref,getDownloadURL, uploadBytes } from 'firebase/storage'



export const AddDesigns = (props) => {
  const [design, setdesign] = useState('')
  const [id, setid] = useState(props.response.id)
  const [order, setorder] = useState('')
  const [status, setstatus] = useState('active')
  const [link, setlink] = useState('')
  const [img, setimg] = useState(null)
  const [url, seturl] = useState(null)
  const [Category, setcategory] = useState(props.response.category)
  const upload = async()=>{
    // const linkref = ref(storage, `videos/${link + v4()}`)
    // uploadBytes(linkref, link).then(()=>{
    //   alert('video link upload')
    //   getDownloadURL(linkref, link).then((link)=>{
    //     console.log(link)
    //   })
    // })
    console.log(id)
    // try{
      const imgref = ref(storage,`files/${img + v4()}`);
        uploadBytes(imgref, img).then(()=>{
            alert('image upload')
            getDownloadURL(imgref).then((url)=>{
                seturl(url)
                console.log(url)
                 setDoc(doc(firestore,'Mehandi', id,'Designs', design),{
            Design : design,
            order: order,
            status : status,
            category : Category,
            img : url,
            Link : link
          })
            
                    console.log("Document written with ID: ", Category, link);
            })
        })
         
        
    // }catch(error){
    //   console.log('error')
    // }

  }
  
   




  return (
   <div className=''>

{/* // <!-- Modal --> */}

             
<img src='Vector (1).svg'  data-bs-toggle="modal"  data-bs-target="#exampleModal"/>    
                     
<div className="modal  fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
    <div className="modal-dialog w-100">
    <div className="modal-content">
        {/* <!-- <div className="modal-header">
        </div> --> */}
        <div className="modal-body ">
        {/* <!-- form --> */}
        <form>
            <div className="mb-3 ">
             <div className="row">
                <div className="col-10">
                    <label htmlFor="exampleInputEmail1" className="form-label mb-0 black">Design</label>
                    <input type="text"  onChange={(e)=>{setdesign(e.target.value)}} className="form-control" placeholder="Design name" id="exampleInputEmail1" />
                    <input type='hidden' onChange={(e)=>{setid(e.target.value)}} value={id}  />
                    <input type='hidden' onChange={(e)=>{setcategory(e.target.value)}} value={Category}/>
                    <input type="hidden"  onChange={(e)=>{console.log(setstatus(e.target.value))}} className="form-control" value={status} placeholder="status" />
                   
                </div>
                <div className="col-2">
                    <label htmlFor="exampleInputEmail1" className="form-label black">order</label>
                    <input onChange={(e)=>{setorder(e.target.value)}} type="number" max='100000' min='0'  placeholder="01" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="col-10"></div>
                <label htmlFor="exampleInputEmail1" className="form-label mb-0 black">Video <span className="text-light-emphasis">(Optional)</span></label>
                    <div className="input-group flex-nowrap">
                       
                        <span className="input-group-text" id="addon-wrapping"><i className="fa-solid fa-link"></i></span>
                        <input type="link" onChange={(e)=>{setlink(e.target.value)}} className="form-control " placeholder="https//Www.Youtube.Com/Watch?V" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                      </div>
                </div>
             </div>
           
             <div className="mb-3">
                
                <label htmlFor="exampleInputfile" className="form-label left mt-4 black">Upload file</label>
                <div className="p-5 w-100" style={{display: "flex", flexDirection: "column", textAlign:'center', border: "2px #cdc7c7  dashed"}}>
                    <label htmlFor="file">
                        <h1> <input type="file" id='file' onChange={(e)=>{setimg(e.target.files[0])}}  style={{display:'none'}}/>  <img src='Vector (9).svg'/> </h1>
                        </label>
                <span className="text-light-emphasis black" > drage and drop file  </span>
                <a href="" className="text-decoration-none" style={{display: "flex", justifyContent: "center", color: "#704E0D"}} ><span className="text-light-emphasis  ">Or &nbsp;</span> Browse</a>
                </div>
                </div>
          </form>
          {/* <!-- from --> */}
        </div>
        <div className="modal-footer">
          <button type="button" onClick={upload} className="btn btn-sm btn-primary " style={{background: "#BB8C30", border: "1px solid #BB8C30", width: "173px" }}>Save </button>
        <button type="button" className="btn btn-sm btn-secondary text-light-emphasis black " style={{background: "transparent", border: "1px solid #BB8C30", width: "173px"}} data-bs-dismiss="modal">Close</button>
        </div>
    </div>
    </div>
</div>    
</div>

   </div>
  )
}
