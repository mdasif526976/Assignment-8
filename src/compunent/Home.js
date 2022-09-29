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
    return (
        <div className="home-container">
            <div className="practise-container">
                <h1>Start your Practise!!!</h1>
                <div className="practise-iteam">
                {
                  carts.map(practises => <Practise key={practises.id} task={practises}></Practise>)
                }
                </div>
            </div>
            <div className="practise-time">
                <h1> im from practide-time</h1>
            </div>
        </div>
    );
};

export default Home;