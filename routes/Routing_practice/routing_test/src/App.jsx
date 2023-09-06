import React from "react";
import { useParams } from "react-router";
import {
  Link,
  Routes,
  Route
} from "react-router-dom";
    

const Home = (props) => {
  return (
    <h1>Welcome</h1>
  );
}
const Number = (props) => {
  const { number } = useParams();
  return (

    <h1>Welcome : {number}</h1>
  );
}
const Word = (props) => {
  const { word, color,color2 } = useParams();
  return (

    <h2>Welcome : <h1 style={{color:color, backgroundColor:color2, width:1450 , height:100}}>{word}</h1>
    
    </h2>
  );
}

    
function App() {
  return (
    <div>
      <p>


      </p>
      <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/:number" element={<Number />}/>
        <Route path="/:word/:color/:color2" element={<Word />}/>

      </Routes>
    </div>
  );
}
    
export default App;