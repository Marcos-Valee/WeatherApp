import { useState, useEffect } from "react";
import InputWeather from "./inputWeather";
import ViewWeather from "./ViewWeather";


function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null)

  const apiKey = "8f2464657fba7ee405a1fc097b70157f";
  async function getWeather() {
    try {
      setError(null)
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      setWeather(json)
    } catch (error) {
      setWeather("")
      setError(error.message);
    }
  }

  useEffect(() => {
    if(city.trim() !== ""){
      getWeather();
    }
  }, [city]);

  return (
    <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-[30px] border-[rgba(255,255,255,0.22)] border-2 flex flex-col items-center rounded-lg p-4">
      <InputWeather setCity={setCity} />
      <ViewWeather weatherData={weather} error={error}/>
    </div>
  );
}

export default WeatherApp;
