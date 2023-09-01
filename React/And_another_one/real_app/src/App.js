import Mything from './components/Mything';
import './App.css';

const people =[
  {name:"Bechir",age:25,Food:"Pizza"},
  {name:"Iyad",age:27,Food:"Slata"},
  {name:"Ali",age:27,Food:"Soubia"},
  {name:"Fatma",age:27,Food:"3ejja Skalope"}

];

function App() {
  return (
    <div className="App">
      <h1>{JSON.stringify(people)}</h1>
      <Mything people={people}/>
    </div>
  );
}

export default App;
