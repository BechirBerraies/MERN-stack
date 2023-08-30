
import './App.css';
import MyNewComponent from './components/PersonCard';

const people = 
[{firstname:"Bechir" , lastname:"Berraies" , age:23 , hairColor:"Brown"},
{firstname: "Jhon", lastname:"Doe" , age:33 , hairColor: "Brown"},
{firstname:"Zizou" , lastname:"TheZiz" , age:27 , hairColor:"NoHair"}]


function App() {
  return (
    <div className="App">
      <MyNewComponent people={people} />
    </div>
  );
}

export default App;
