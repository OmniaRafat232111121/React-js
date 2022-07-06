import React from 'react'
function App(props) {
  return (
    <div className="App">
    <h1>Hello {props.color}</h1>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car color="red"/>);

export default App;


