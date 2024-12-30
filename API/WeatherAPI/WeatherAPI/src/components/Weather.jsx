import React, { useState , useEffect} from 'react';
import axios from 'axios';

function Weather(props) {
    const [weather, setWeather] = useState({});
    const [data, setData] = useState(null);

    const apiKey = "e2d6c5f8a7f1d054f2ec0882aa47a399";

    const searchWeather = (e) => {
        e.preventDefault();
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lon}&appid=${apiKey}`)
            .then(response => {
                console.log("Weather RESPONSE", response);
                setWeather(response.data);
            })
            .catch(error => console.log(error));
    };

    const convertTemperature = async () => {
        try {
            
            const response = await axios.post("http://localhost:8000/graphql", {
                query: `
                    query ConvertTemperature($kelvin : Float!) {
                        temperature(kelvin : $kelvin )
                    }
                `,
                
                variables: {
                    kelvin : weather.main.temp // Assuming weather.main.temp contains the temperature in Fahrenheit
                }
                
            });
            setData(response.data.data.temperature);
            console.log("GraphQL Query:", response.config.data); // Logging the GraphQL query
            console.log("Converted Temperature:", response.data.data.temperature); // Logging the converted temperature
        } catch (error) {
            console.error('Error making GraphQL request:', error);
        }
    };

    useEffect(() => {
        if (weather.main && weather.main.temp) {
            convertTemperature();
        }
    }, [weather]);

    return (
        <div>
            {/* <h2>Weather Component</h2> */}
            <h2>Longitude From weather : {props.lon}</h2>
            <h2>Latitude : {props.lat}</h2>
            <form onSubmit={searchWeather}>
                <input type="submit" value="Get the weather" />
            </form>
            {Object.keys(weather).length === 0 && weather.constructor === Object ? (
                <h2>Loading...</h2>
            ) : (
                <div>
                    <h2>Feels like: {weather.main.feels_like}</h2>
                    <h2>Temperature: {weather.main.temp}</h2>

                    <h2>Converted temperature : {data} Celsius</h2>
                </div>
            )}
        </div>
    );
}

export default Weather;