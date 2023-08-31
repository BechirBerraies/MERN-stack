import './App.css';
import PersonalComponent from './components/personalComponent';

function App() {
  const msg = "Hello from App.js"
  const number = 24
  const Animals = ["leopard","giraffe","zebra","elephant","monkey","lion"];
  const person = {username:"sergio",favFood:"mloukhia"}
  const people = [
    {username:"John",age:"41",favFood:"Pizza"},
    {username:"Alex",age:"35",favFood:"Couscous"}];
  return (
    <fieldset className="App">
      <legend>App.js</legend>
      <h2>Message from App.js : {msg}</h2>
      {Animals.map((x,y) => <h4 key={y}>Animal : {x}</h4>)}
      <h4>{JSON.stringify(person)}</h4>
      <hr/>
      <PersonalComponent people = {people}/>
    </fieldset>
  );
}

export default App;