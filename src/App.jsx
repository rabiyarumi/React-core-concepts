import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ToDo from "./todo";
import Actor from "./Actor";
import Singer from "./Singer";

function App() {
  const actors = ["Priyanka", "Dipika", "Kajal", "Priti", "Aswariya"];

  const singers = [
    { name: "Arijit", age: 45 },
    { name: "Niki", age: 40 },
    { name: "Ariyana", age: 32 },
    { name: "Jenney", age: 27 },
  ];
  return (
    <>
      <div className="card">
        {singers.map((singer) => (
          <Singer singer={singer}></Singer>
        ))}

        <Actor name={"Dipika"}></Actor>
        {actors.map((actor) => (
          <Actor name={actor}></Actor>
        ))}
        {/* <ToDo task="learn react" isDone={false}></ToDo>
        <ToDo task=" core concepts" isDone={true}></ToDo>
        <ToDo task="Try JSX" isDone={false}></ToDo> */}
        {/* <Device name="Laptop" price="255000"></Device>
        <Device name="Mobail" price="50000"></Device>
        <Device name="Watch" price="2500"></Device>
        <Person></Person>
        <Student name="Tanvir" grade="7th" score="78"></Student>
        <Student name="Tanha" grade="9th"></Student>
        <Student name="Jarin" score="90"></Student>
        <Developer></Developer> */}
      </div>
    </>
  );
}

function Device(props) {
  // console.log(props);
  return (
    <div className="box">
      <h2>This device: {props.name}</h2>
      <h3> Price: {props.price}</h3>
    </div>
  );
}

function Person() {
  const age = 22;
  const salary = "Less than 5000";
  return (
    <div className="box">
      <h3>
        I am a Lazy {age} years old Lady with {salary} salary
      </h3>
    </div>
  );
}

function Student({ name, grade = 1, score = 0 }) {
  console.log(name, grade, score);
  return (
    <div className="box">
      <h3>He is a student</h3>
      <p>name: {name}</p>
      <p>grade: {grade}</p>
      <p>score: {score}</p>
    </div>
  );
}

function Developer() {
  const deoloperStyle = {
    margin: "10px",
    padding: "10",
    border: "2px solid aquamarine",
    borderRadius: "20px",
    color: "aqua",
  };
  return (
    <div style={deoloperStyle}>
      <h3>Hey I am Devoloper</h3>
      <p>Codding</p>
      <p>Debugging</p>
      <p>Sleep</p>
    </div>
  );
}

export default App;
