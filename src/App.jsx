import React, { useState } from 'react';
import './App.css'
import { Route, Routes, Link } from "react-router-dom";
import Navbar from './Navbar';
import Dashboard from './Dashboard'
import Category from './Category'
import { Designs } from './Designs';
import { Side } from './assets/components/Side';






function App() {
  const [response, sendrequest] = useState({})

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIndexChange = (index) => {
    setCurrentIndex(index);
  };
  // const [inputVisibility, setInputVisibility] = useState(Array(5).fill(false));

  // const handleButtonClick = (index) => {
  //   const updatedVisibility = [...inputVisibility];
  //   updatedVisibility[index] = !updatedVisibility[index];
  //   setInputVisibility(updatedVisibility);
  // };

  return (
    <>
 


  <div>
    {Array.from(Array(5).keys()).map((index) => (
      <button
        key={index}
        onClick={() => handleIndexChange(index)}
      >
        {index}
      </button>
    ))}
    {Array.from(Array(1).keys()).map((index) => (
      <div
        key={index}
        style={{ display: currentIndex === index ? 'block' : 'none' }}
      >
       <input placeholder='hhh'/>
      </div>
    ))}
  </div>







      {/* <div className="App" >
        
        <Navbar/>

        
        <div className='container mt-4' >
        <div className='row   ' style={{padding: ''}}>
          
        <div className='col-lg-3 col-xl-3 col-md-2'  >
        <Side/>
           </div>
       
       
          
       <div className='col-lg-9 col-xl-9 col-md-8'>
       <Routes>
          <Route index path='dashboard' element={<Dashboard />} />
          <Route   path='category' element={<Category sendrequest={sendrequest} />} />
         <Route path='Designs' element={<Designs response={response}/>}/>
          
        </Routes>
       </div>
        </div>
       </div>

          
        </div> */}


{/* <div>
      {Array.from(Array(9).keys()).map((index) => (
        <div key={index}>
          <button onClick={() => handleButtonClick(index)}>
            Button {index}
          </button>
          {inputVisibility[index] && (
            <>
              <input type="text" placeholder="Input 1" />
              <input type="text" placeholder="Input 2" />
            </>
          )}
        </div>
      ))}
    </div> */}


{/* In this example, we're maintaining an array called divVisibility in the component's state. This array has the same length as the number of div elements we want to show/hide (in this case, 5). Each element in the divVisibility array corresponds to the visibility state of a specific div element.

The handleIndexClick function is called when a button is clicked, and it toggles the visibility state of the corresponding div. It does this by creating a copy of the divVisibility array using the spread operator, updating the value at the specified index to its opposite state, and then setting the updated array as the new state using setDivVisibility.

In the JSX code, we map over the array of indices to render the buttons and div elements. The style prop of each div is conditionally set based on the visibility state in the divVisibility array. If the value is true, the display property is set to block, showing the div. Otherwise, if the value is false, the display property is set to none, hiding the div.

By clicking on the buttons, you can toggle the visibility of the respective div elements.

Feel free to adapt this example to fit your specific use case by modifying the number of elements or adjusting the content and styling of the div elements. */}







      
    </>
  )
}

export default App

