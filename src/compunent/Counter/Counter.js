import React from 'react';
import "./Counter.css"
const Counter = (props) => {
    const {taskTime} = props;
    let totatTime = 0;
  for (const array of taskTime) {
     totatTime = totatTime + array.time; 
  }
    return (
        <div>
             <div></div>
                <div></div>
                <h3>Exercise Details</h3>
                <div className="detail-container">
                    <h5>Exercise time:</h5>
                    <p>{totatTime}</p>
                </div>

                <div className="detail-container">
                    <h5>Break time:</h5>
                    <p>0</p>
                </div>
        </div>
    );
};

export default Counter;