import React, { useState } from 'react'
import axios from 'axios'



function Weather(props) {


    const [Weather, setWeather] = useState({});

    let APiKey = "e2d6c5f8a7f1d054f2ec0882aa47a399"
    const SearchWeather = () =>
    {
    e.preventDefault();
      console.log("https://api.openweathermap.org/data/2.5/weather?lat=" + props.lat + "&lon=" +props.lon +"&appid=" +APiKey);
      axios.get("https://api.openweathermap.org/data/2.5/weather?lat=" + props.lat + "&lon=" +props.lon +"&appid=" +APiKey )
      .then(response => {
        console.log("Weather RESPONSE",response)
      setWeather(response.data)
      })
      .catch(error=>console.log(error))
    };
  






    return (
      <div>
        <h2>Weather Component</h2>
        <h2>Longitude : {props.lon}</h2>
        <h2>Latitude : {props.lat}</h2>
        <h2>feeels like : {Weather.feels_like} </h2>
        <h2>Temperatur : {Weather.temp} </h2>



      </div>
    );
  }



  export default Weather