import "./Home/Home.css"
import React, { useEffect, useState } from 'react';
import Practise from "./Practise/Practise";
import Counter from "./Counter/Counter";

const Home = () => {
    const [carts,setcart] = useState([]);
    const [taskTime,setTaskTime] = useState([])
    useEffect(()=>{
        fetch('fake.json')
        .then(res => res.json())
        .then(data => setcart(data))
    },[])
    const counter= (array)=>{
        const newAray = [...taskTime,array];
        setTaskTime(newAray);

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
               <Counter taskTime={taskTime}></Counter>
            </div>
        </div>
    );
};

export default Home;