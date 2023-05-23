import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {

    const truck='What to learn1 fssgfd xdffffffffffffffffffffff'
    const truckNew='What to learn222'

    const tasks1 = [
        { id: 1, title: "HTML&CSS", isDone: true }, //0
        { id: 2, title: "JS", isDone: true }, //1
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "ReactJS4444444", isDone: false },
       ]
    const tasks2 = [
        { id: 1, title: "Hello world", isDone: true },
        { id: 2, title: "I am Happy", isDone: false },
        { id: 3, title: "Yo", isDone: false }
    ]



    return (
        <div className="App">
            <Todolist truck={truck} truck2={100200} tasks={tasks1}/>
            <Todolist truck={truckNew}  truck3={true} tasks={tasks2} />
        </div>

    );
}

export default App;
