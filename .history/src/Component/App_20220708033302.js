import React,{useReducer,useState} from 'react'
import "./App.css"
function App() {
    const reducer=(state,action)=>{
        return{
            ...state
        }
    }
    const [submiting,setsubmiting]=useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();
        setsubmiting(true);

        setTimeout(()=>{
            setsubmiting(false)
        },1000);
    }
  return(
    <div className="wrapper">
      <h1>How About Them Apples</h1>
      {submiting&&
    <div>Submiting Form...</div>}
      <form onSubmit={handleSubmit}>
      <fieldset>
         <label>
           <p>Name</p>
           <input name="name" />
         </label>
       </fieldset>
       <button  type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;

//if ou will send data to externl service like web animationPlayState: 
/*
to simulate an Api setTimeOut then Handle handleSubmit

*/