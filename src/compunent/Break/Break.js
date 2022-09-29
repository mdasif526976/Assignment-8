import React from 'react';
import"./Break.css"
const Break = (props) => {
    const {btn1,btn2,btn3,btn4}= props;
    return (
        <div>
            <h3>Add a Break</h3>
             <div className='btn-container'>
                <button onClick={btn1}>10M</button>
                <button onClick={btn2}>20M</button>
                <button onClick={btn3}>30M</button>
                <button onClick={btn4}>40M</button>
             </div>
        </div>
    );
};

export default Break;