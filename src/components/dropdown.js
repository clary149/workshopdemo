import './dropdown.css';

function Dropdown(props) {

  const options = props.option.map(x => (<option>{x}</option>));

  return (
    <select>
        {options}
    </select>
  );
}

export default Dropdown;