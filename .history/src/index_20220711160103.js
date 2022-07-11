//  import React from 'react';
//  import ReactDOM from 'react-dom/client';
// import App from './Component/App';




// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
// <App />
//   </React.StrictMode>
// );

// const Car = (props) => {
//     return (
//       <div> I am a {props.brand}</div>
//     )
//   }
//   function Garage() {
//     const carName = "Ford";
//     return (
//       <>
//           <h1>Who lives in my garage?</h1>
//           <Car brand={ carName } />
//       </>
//     );
//   }
  
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(<Garage />);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './Component/App';

// ReactDOM.render(<App/>,document.getElementById('root'))

//jsx
// import react from 'react';
// import ReactDOM from 'react-dom/client';
// const myelement=<h1>Helo world</h1>;
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(myelement);
// import React from 'react';
//  import ReactDOM from 'react-dom/client';

// const myelement=React.createElement(
//     'h1',
//     {},
//     'Hello'
// );
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(myelement);

// const myelement = (
//     <ul>
//       <li>Apples</li>
//       <li>Bananas</li>
//       <li>Cherries</li>
//     </ul>
//   );

// const myElement = <h1 className="myclass">Hello World</h1>;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);
// const x = 5;
// let text = "Goodbye";
// if (x < 10) {
//   text = "Hello";
// }
// const myElement = <h1 >{text}</h1>;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);

//  import React from 'react';
//  import ReactDOM from 'react-dom/client';

// class Car extends React.Component {
//     constructor(){
//         super();
//         this.state={color:"red"};
//     }
//   render() {
//     return <h2>Hi, I am a Car! {this.state.color}</h2>;
//   }
// }

// ReactDOM.render(<Car />, document.getElementById('root'));
//props
// class Car extends React.Component{
//     render(){
//       return <h2> I am {this.props.color}</h2>
//     }
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
//  root.render(<Car  color="green"/>);

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// class Car extends React.Component {
//     constructor(props){
//         super(props);
     
//     }
//   render() {
//     return <h2>Hi, I am a Car! {this.props.model}</h2>;
//   }
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(<Car  model="Mustang"/>);


// import React from 'react';
// import ReactDOM from 'react-dom/client';

// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       brand: "Ford",
//       model: "Mustang",
//       color: "red",
//       year: 1964
//     };
//   }
//   render() {
//     return (
//       <div>
//         <h1>My {this.state.brand}</h1>
//         <p>
//           It is a {this.state.color}
//           {this.state.model}
//           from {this.state.year}.
//         </p>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Car />, document.getElementById('root'));



// import React from 'react';
// import ReactDOM from 'react-dom/client';

// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       brand: "Ford",
//       model: "Mustang",
//       color: "red",
//       year: 1964
//     };
//   }
//   changeColor = () => {
//     this.setState({color: "blue"});
//   }
//   changeModel=()=>{
//     this.setState({model:"tyota"});
//   }
//   render() {
//     return (
//       <div>
//         <h1>My {this.state.brand}</h1>
//         <p>
//           It is a {this.state.color}
   
//           from {this.state.year}.
//         </p>
//         <p>
//         {this.state.model}</p>
//         <button
//           type="button"
//           onClick={this.changeColor}
//         >Change color</button>
//         <button type="button" onClick={this.changeModel}>Change Model</button>
//       </div>
//     );
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car />);


// class Header extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={favouritCoor:"red"};
//     }
//     render(){
//         return(
//             <h1>My favourit color is {this.state.favouritCoor}</h1>
//         );
//     }
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header />);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// class Header extends React.Component {
//     render() {
//       return (
//         <h1>This is the content of the Header component</h1>
//       );
//     }
//   }
  
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(<Header />);
// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoritecolor: "red"};
//   }
//   static getDerivedStateFromProps(props, state) {
//     return {favoritecolor: props.favcol };
//   }
//   render() {
//     return (
//       <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//     );
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header favcol="yellow"/>);


// import React from 'react';
// import ReactDOM from 'react-dom/client';

// class Header extends React.Component {
//   render() {
//     return (
//       <h1>This is the content of the Header component</h1>
//     );
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header />);



//Componend DidMount()

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// class Header extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {favoritecolor: "red"};
//     }
//     componentDidMount() {
//       setTimeout(() => {
//         this.setState({favoritecolor: "yellow"})
//       }, 1000)
//     }
// render() {
//     return (
//       <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//     );
//   }

// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header />);


//updating()
//getDerviedStateFromProps()
// import React from 'react';
// import ReactDOM from 'react-dom/client';

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoritecolor: "red"};
//   }
//   static getDerivedStateFromProps(props, state) {
//     return {favoritecolor: props.favcol };
//   }
//   changeColor = () => {
//     this.setState({favoritecolor: "blue"});
//   }
//   render() {
//     return (
//       <div>
//       <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//       <button type="button" onClick={this.changeColor}>Change color</button>
//       </div>
//     );
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header favcol="yellow" />);


// import React from 'react';
// import ReactDOM from 'react-dom/client';

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoritecolor: "red"};
//   }
//   shouldComponentUpdate() {
//     return true;
//   }
//   changeColor = () => {
//     this.setState({favoritecolor: "blue"});
//   }
//   render() {
//     return (
//       <div>
//       <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//       <button type="button" onClick={this.changeColor}>Change color</button>
//       </div>
//     );
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header />);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// function Car(props){
//     return <h2>{props.brand.model}</h2>
// }
// function Garage(){
//     const carinfo={name:"Ford",model:"Mustang"};
//     return(
//         <div>
//         <h1>who lives in my Garage?</h1>
//         <Car brand={carinfo} />
//         </div>
//     )
// }


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage />);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// function Car(props){
//     return <h2>{props.brand}</h2>
// }
// function Garage(){
//     const carinfo="Fod";
//     return(
//         <div>
//         <h1>who lives in my Garage?</h1>
//         <Car brand={carinfo} />
//         </div>
//     )
// }


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage />);


// import React,{useState} from 'react';
// import ReactDOM from 'react-dom/client';

// function Football() {
//   const shoot = () => {
//     alert("Great Shot!");
//   }

//   return (
//     <button onClick={shoot}>Take the shot!</button>
//   );
// }
// function Football(){
//     const shoot =(a,b)=>{
//         alert(b.type);
//     }
//     return (
//      <button onClick={(e)=>shoot("Goal",e)}>Take a shoot</button>
//     )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Football />);

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// function MissedGoal() {
// 	return <h1>MISSED!</h1>;
// }

// function MadeGoal() {
// 	return <h1>GOAL!</h1>;
// }

// function Goal(props) {
//   const isGoal = props.isGoal;
//   if (isGoal) {
//     return <MadeGoal/>;
//   }
//   return <MissedGoal/>;
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Goal isGoal={false} />);
// import React from 'react';
// import ReactDOM from 'react-dom/client';

// function Garage(props) {
//   const cars = props.cars;
//   return (
//     <div>
//       <h1>Garage</h1>
//       {cars.length > 0 &&
//         <h2>
//           You have {cars.length} cars in your garage.
//         </h2>
//       }
//     </div>
//   );
// }

// const cars = ['Ford', 'BMW', 'Audi','lfkfk'];
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage cars={cars} />);


// function Car(props){
//     return <li>i am  {props.brand}</li>
// }
// function Garage(){
// const cars=[
//     {id: 1, brand: 'Ford'},
//     {id: 2, brand: 'BMW'},
//     {id: 3, brand: 'Audi'}
// ];

// return(
//     <div>
//     <h1>who live sin my Garage?</h1>
//     <ul>
//     {cars.map((car)=><Car key={car.id} brand={car.brand} />)}
//     </ul>
//     </div>
// );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage />);


// const clickHandler=(e)=>{
//     //click logic Here
// }
// <input onClick={clickHandler} />
// {myList.map(item=><div key={item.id}>Hello</div>)}
//{React.Children.toArray(myList.map(item=><div>Hello?</div>)}
// {return user.isAdmin && <AdminComponent />}
// const props={user,followers,posts};
// <Profile {...props} />
//Hooks=>Function Component
// import PropTypes from 'prop-types'
// const Greeting=({name})=>{
// return(
//     <h1>Helo {name}</h1>
// )
// }
// Greeting.PropTypes={
//     name:PropTypes.string
// }


//form
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// function MyForm(){
//     return(
//         <form>
//         <label>Enter your name:
//         <input type="text" />
//         </label>
//         </form>
//     );
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);


// import React,{ useState } from "react";

// function MyForm(){
//     const [textarea,setTextarea]=useState('The Good Value is Good Practisce ykfk');
// const handleChange=(e)=>{
//     setTextarea(e.target.value);
// }


// return (
//     <form>
//       <textarea value={textarea} onChange={handleChange} />
//     </form>
//   )
// }
// function MyForm(){
// const [myCar,setMyCar]=useState("");
// const handleChange=(e)=>{
//     setMyCar(e.target.value)

// }
// return(
//     <form>
//     <select value={myCar} onChange={handleChange}>
//     <option value="Ford" selected>Ford</option>
//     <option value="Volvo">Volvo</option>
//     <option value="Fiat">Fiat</option>
//     </select>
//     </form>
// )

// }

// function MyForm(){
//     const [textarea,setTextarea]=useState("The content of textarea goes in the value attribut ");
//      const[name,setName]=useState("");
// const handleChange=(e)=>{
//     setTextarea(e.target.value);
// }
// const handleSubmit=(e)=>{
//     e.preventDefault();
//     alert(`The name s entered By ${name}`)
    
// }
// return(
// <form onSubmit={handleSubmit}>

// <textarea value={textarea} onChange={handleChange} />
// <br></br>
// <br></br>
// <label> Enter Your Name:
// <input  type="text value={name}" onChange={(e)=>setName(e.target.value)}/>
// </label>
// <input type="submit" />
// </form>

// );
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);

// import ReactDom from "react-dom"
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Blogs } from "./Blogs";


// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//        <Route path="blogs" element={<Blogs/>}/>
     
//       </Routes>
//     </BrowserRouter>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);


// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";

// function FavoriteColor() {
//   const [color, setColor] = useState("red");

//   return (
//     <div>
//       <h1>My favorite color is {color}!</h1>
//       <button
//         type="button"
//         onClick={(e)=>setColor("Blue")}
//       >Blue</button>
//     </div>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<FavoriteColor />);


// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// function FavoriteColor() {
//   const [color, setColor] = useState("red");

//   return <h1>My favorite color is {color}!</h1>
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<FavoriteColor />);


// Result Size: 683 x 507

// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// function Car() {
//   const [car, setCar] = useState({
//     brand: "Ford",
//     model: "Mustang",
//     year: "1964",
//     color: "red"
//   });
  
//   const updateColor = () => {
//     setCar(previousState => {
//       return { ...previousState, color: "blue" }
//     });
//   }

//   return (
//     <>
//       <h1>My {car.brand}</h1>
//       <p>
//         It is a {car.color} {car.model} from {car.year}.
//       </p>
//       <button
//         type="button"
//         onClick={updateColor}
//       >Blue</button>
//     </>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car />);


//useEffect 

//useEffect=>accept sideEffect:Time,fetching Data,upgrading Data
//useeffect(<function>,<Depency/>) <Depency i soptional/>


import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
function TImer(){
    const [count,setCount]=useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setCount((count))
        })
    })
}