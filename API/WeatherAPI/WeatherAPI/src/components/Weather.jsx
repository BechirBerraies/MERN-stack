import React, { useState } from 'react'
import axios from 'axios'



function Weather(props) {


    const [Weather, setWeather] = useState({});

    let APiKey = "e2d6c5f8a7f1d054f2ec0882aa47a399"
    const SearchWeather = (e) =>
    {
      e.preventDefault();
      console.log("This is my axios sent "+"https://api.openweathermap.org/data/2.5/weather?lat=" + props.lat + "&lon=" +props.lon +"&appid=" +APiKey);
      axios.get("https://api.openweathermap.org/data/2.5/weather?lat=" + props.lat + "&lon=" + props.lon +"&appid=" +APiKey )
      .then(response => {
        console.log("Weather RESPONSE",response)
      setWeather(response.data)
      })
      .catch(error=>console.log(error),
    )
    };



    if (Object.keys(Weather).length === 0 && Weather.constructor === Object) {
      return (
          <div>
              <h2>Weather Component</h2>
              <h2>Longitude From weather : {props.lon}</h2>
              <h2>Latitude : {props.lat}</h2>
              <form onSubmit={SearchWeather}>
                  <input type="submit" value="Search" />
              </form>
              <h2>Loading...</h2>
          </div>
      );
  } else {
      return (
          <div>
              <h2>Weather Component</h2>
              <h2>Longitude From weather : {props.lon}</h2>
              <h2>Latitude : {props.lat}</h2>
              <form onSubmit={SearchWeather}>
                  <input type="submit" value="Search" />
              </form>
              <h2>Feels like: {Weather.main.feels_like}</h2>
              <h2>Temperature: {Weather.main.temp}</h2>
              {/* <button onClick={sendSoapDegree}>Convert to Degree </button> */}
          </div>
      );
}





  }



  export default Weather