import React, { useState } from 'react'
export { addDoc, collection,doc, setDoc } from "@firebase/firestore"
import {addDoc, collection, doc,setDoc} from '@firebase/firestore'
import { storage } from '../../Firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import {v4} from 'uuid'
import { firestore } from "../../Firebase"
// import { firestore } from "./Firebase"
// import {getDocs, collection} from '@firebase/firestore'



export const Addcategory = () => {
    const [img, setimg] = useState(null)
    const [urL, seturl] = useState(null)
    const [category, setcategory] = useState('')
    const [order, setorder] = useState('')
    const [status, setstatus] = useState('active')
    const upload = async (e)=>{
    
        // if(img == null)
        // return;
        // storage.ref(`images/${img.name}`.put(img))
        // .on("state_changed", alert('success'), alert, ()=>{
        //     storage.ref(`images`).child(img.name).getDownloadURL()
        //     .then((url)=>{
        //         seturl(url)
        //         console.log(url)
        //     })
        // })
        
        const imgref = ref(storage,`images/${img + v4()}`);
        uploadBytes(imgref, img).then(()=>{
            alert('image upload')
            getDownloadURL(imgref).then((url)=>{
                seturl(url)
                console.log(url)
              // if you want to add id manually then use setDoc
              // add documnet add id manually
                     setDoc(doc(firestore, "Mehandi", category), {

                      Category: category,
                      order : order,
                      status : status,
                      img : url  
                       
                    })
                    console.log("Document written with ID: ", category);
            })
        })
}


  return (
    <div>
        <img src='Vector (1).svg' data-bs-toggle="modal"  data-bs-target="#exampleModal"/>
        {/* <!-- Modal --> */}

        <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
        <div className="modal-dialog w-100">
        <div className="modal-content">
        {/* <!-- <div className="modal-header">
        </div> --> */}
        <div className="modal-body">
        {/* <!-- form --> */}
        <form>
            <div className="mb-3 "/>
            <div className="row">
                <div className="col-10">
                    <label  className="form-label left  black">Category</label>
                    <input type="text"  onChange={(e)=>{setcategory(e.target.value)}} className="form-control " placeholder="Category name" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>

                <div className="col-2">
                    <label  className="form-label black">order</label>
                    <input type="number" max='1000000' min='0' onChange={(e)=>{setorder(e.target.value)}} placeholder="01" className="form-control" id="exampleInputPassword1"/>
                </div>
                <input type="hidden"  onChange={(e)=>{console.log(  setstatus(e.target.value))}} className="form-control" value={status} placeholder="status" />
            </div>
        
            <div className="mb-3">
                
            <label htmlFor="exampleInputfile" className="form-label left mt-4 black">Upload file</label>
            <div className="p-5 w-100" style={{display: "flex", flexDirection: "column", border: "2px #cdc7c7  dashed"}}>
                <label htmlFor="file">
                    <h1> <input type="file" id='file' onChange={(e)=>{setimg(e.target.files[0])}} style={{display:'none'}}/>  <img src='Vector (9).svg'/> </h1>
                    </label>
            <span className="text-light-emphasis black" > drage and drop file  </span>
            <a href="" className="text-decoration-none" style={{display: "flex", justifyContent: "center", color: "#704E0D"}} ><span className="text-light-emphasis  ">Or &nbsp;</span> Browse</a>
            </div>
            </div>
        </form>
        {/* <!-- from --> */}
        </div>
        <div className="modal-footer">
        <button type="button" className="btn btn-sm btn-primary "  onClick={upload} style={{background: "#BB8C30", border: "1px solid #BB8C30", width: "173px"}} >Save </button>
        <button type="button" className="btn btn-sm btn-secondary black" style={{background: "transparent", border: "1px solid #BB8C30", width: "173px"}} data-bs-dismiss="modal">Close</button>
        </div>
        </div>
        </div>
        </div>    
        </div>
    </div>
  )
}
