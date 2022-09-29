import React from 'react';
import"./practise.css"
const Practise = (props) => {
    // console.log(props)
 const {age,time,titite,img} =props.task;
    return (
        <div>
            <div className='cart'>
            <img src={img} alt=''/>
            <h4>{titite}</h4>
            <p>Age:{age}</p>
            <p>Time:{time}</p>
            <button className='btn'>Add Task</button>
            </div>
            
        </div>
    );
};

export default Practise;