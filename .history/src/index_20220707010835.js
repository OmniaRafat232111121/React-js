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
import React from 'react';
import ReactDOM from 'react-dom/client';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.sate={favColor:"red"}
    }
}
static getDerivedStateFromProps(){
    return{}
}