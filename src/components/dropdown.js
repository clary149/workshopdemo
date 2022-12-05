// Gotta import the CSS
import './dropdown.css';

// Replace the component's name here or React will be mad
function Dropdown(props) {

  // Here I'm using a js map function to create the option component 
  // for each entry in the array passed through props
  const options = props.option.map(x => (<option>{x}</option>));

  return (
    // This is my HTML
    <select>
        {/* We use curly brackets in React to use our js vars in the HTML */}
        {options}
    </select>
  );
}

// React likes exports
export default Dropdown;