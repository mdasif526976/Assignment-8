import React, { useState } from 'react';
import Break from '../Break/Break';
import "./Counter.css"
const Counter = (props) => {
    const {taskTime} = props;
    let totatTime = 0;
  for (const array of taskTime) {
     totatTime = totatTime + array.time; 
  }
  const [value,setValue] = useState(0);
  const handler10 = ()=>{
    setValue(10)
  }
  const handler20 = ()=>{
    setValue(20)
  }
  const handler30 = ()=>{
    setValue(30)
  }
  const handler40 = ()=>{
    setValue(40)
  }
    return (
        <div>
             <div className='user'>
               <h5> User Name:Md Asif <br></br>Location:Brahmanbaraia</h5>
               {/* <h5>Location:Brahmanbaraia</h5> */}
             </div>
               <Break btn1={handler10} btn2={handler20} btn3={handler30} btn4={handler40}></Break>
                <h3>Exercise Details</h3>
                <div className="detail-container">
                    <h5>Exercise time:</h5>
                    <p>{totatTime}</p>
                </div>

                <div className="detail-container">
                    <h5>Break time:</h5>
                    <p>{value}</p>
                </div>
        </div>
    );
};

export default Counter;