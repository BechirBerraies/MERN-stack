import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/Component';
import FunctionalComponent from './components/FunctionalComponene';

function App() {
  const favNumber = 8
  const user = {username:"Alex",age:22,favFood: "pizza"}
  return (
    <fieldset className="App">
      <legend>App.js</legend>
      
      <ClassComponent favNumber={favNumber} alex={user}/>
      <hr />
      <FunctionalComponent favNumber={favNumber} alex={user}/>
    </fieldset>
  );
}

export default App;
