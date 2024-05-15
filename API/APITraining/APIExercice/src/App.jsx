import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';


function App() {
  const [count, setCount] = useState(0);
  const [Language, setLanguage] = useState({});



  const SearchLanguage = (e) => {
    e.preventDefault();
    console.log("This is my axios sent " + "https://ws.detectlanguage.com/0.2/languages");
    axios.get("https://ws.detectlanguage.com/0.2/languages")
      .then(response => {
        console.log("Language RESPONSE", response)
        setLanguage(response.data)
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h1>Hello, Vite!</h1>
      <button onClick={SearchLanguage}>Search Language</button>
    </div>
  );
}

export default App;