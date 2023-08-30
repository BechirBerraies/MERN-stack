import logo from './logo.svg';
import './App.css';
import FirstClassComponent from './components/FirstClassComponent';
import SomeClassComponents from './components/SomeClass';
import PersonComponent from './components/PersonComponent';


function App() {
  console.log("hello console");
  const msg = "first Variable"
  let number = 25
  const animals = ["dog","cat"]
  const user = {username : "bechir", age:23 , Favfood: "pizza"}
  const people =[{username:"Jhon",age:33,Favfood:"Idk"},{username:"Alex",age:33,Favfood:"Pizza"},{username:"Sarah",age:31,Favfood:"Pasta"}]
  return (
    <fieldset>
      <legend>*** APP JS ***</legend>
    <div>
      <h1>Here is the First div</h1>
      </div>
    <div className="App">
        <h1>hello World</h1>
        <ol>
          <h5>Message : {msg}</h5>
          <h5>Number : {number}</h5>
          <ul>
          {animals.map((animal,index) => <li key={index}> {index}---{animal}</li>)}
          </ul>
          <h1>{JSON.stringify(user)}</h1>
          <h1>{user.username}</h1>
          <h1>{user.age}</h1>
          <h1>{user.Favfood}</h1>
        </ol>
        <fieldset>
        <legend>*** SECOND JS ***</legend>
        <FirstClassComponent number={number} bechir={user}/>
        </fieldset>

        <SomeClassComponents animals = {animals} />
        <br />
    </div>

    </fieldset>
  );
}

export default App;
