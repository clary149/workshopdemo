//Imports!
import Dropdown from './components/dropdown';
import './App.css';

function App() {
  // Any js goes here

  return (
    // This is our HTML
    // There can only be one outer component in HTMl
    // I've added a bunch of inline CSS to this div element
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px'}}>
      
      {/* Here I'm using my custom component. I've imported it above. 
      I also created a custom attribute for this component called option. */}
      <Dropdown option={["cat", "dog"]}/>

    </div>
  );
}

// In React, you have to specify exports
export default App;
