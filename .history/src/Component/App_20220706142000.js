import React from 'react'
// function App(props) {

//   return (
//     <div className="App">
//     <h1>Hello {props.brand}</h1>
//     </div>
//   );

// }



// export default App;




const Car = (props) => {
  return (
    <div> I am a {props.barand}</div>
  )
}
function Garage(){
    const carName="Ford";
    return()(
       <div>
       <Car brand={car} />
       </div>
    
       
    )
   
}

export default Car