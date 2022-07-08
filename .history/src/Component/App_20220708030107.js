import React from 'react'
import "./App.css"
function App() {
    const handleSubmit=(e)=>{}
  return(
    <div className="wrapper">
      <h1>How About Them Apples</h1>
      <form>
      <fieldset>
         <label>
           <p>Name</p>
           <input name="name" />
         </label>
       </fieldset>
       <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;