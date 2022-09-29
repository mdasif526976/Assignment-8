import "./Home/Home.css"
import React, { useEffect, useState } from 'react';
import Practise from "./Practise/Practise";

const Home = () => {
    const [carts,setcart] = useState([]);
    useEffect(()=>{
        fetch('fake.json')
        .then(res => res.json())
        .then(data => setcart(data))
    },[])
    const counter= (cart)=>{
     console.log(cart);
    }
    return (
        <div className="home-container">
            <div className="practise-container">
                <h1>Start your Practise!!!</h1>
                <div className="practise-iteam">
                {
                  carts.map(practises => <Practise handler={counter} key={practises.id} task={practises}></Practise>)
                }
                </div>
            </div>
            <div className="practise-time">
                <div></div>
                <div></div>
                <h3>Exercise Details</h3>
                <div className="detail-container">
                    <h5>Exercise time:</h5>
                    <p>0</p>
                </div>

                <div className="detail-container">
                    <h5>Break time:</h5>
                    <p>0</p>
                </div>
            </div>
        </div>
    );
};

export default Home;