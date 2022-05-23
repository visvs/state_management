import logo from './logo.svg';
import './App.css';
import {ClassState} from './ClassState.js'
import {UseState} from './UseState.js'

function App() {
  return (
    <div className="App">
      <UseState name="UseState"/>
      <ClassState name="ClassState" />
    </div>
  );
}

export default App;
