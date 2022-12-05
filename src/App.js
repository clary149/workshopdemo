import Dropdown from './components/dropdown';
import './App.css';

function App() {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px'}}>
      <Dropdown option={["cat", "dog"]}/>
    </div>
  );
}

export default App;
