import React,{useReducer,useState} from 'react'
import "./App.css"
function App() {
  const formReducer=(state,event)=>{ 
    return{
        ...state,
        [event.name]:event.value
    }
  }
    const [formData,setFormData]=useReducer(formReducer,{})
    const [submiting,setsubmiting]=useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();
        setsubmiting(true);

        setTimeout(()=>{
            setsubmiting(false)
        },1000);
    }

const handleChange=(e)=>{
    setFormData({
        name:e.target.name,
        value:e.target.value,
    });
}
  return(
    <div className="wrapper">
      <h1>How About Them Apples</h1>
      
      <form onSubmit={handleSubmit}>
      <fieldset>
         <label>
           <p>Name</p>
           <input name="name"  onChange={handleChange}/>
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