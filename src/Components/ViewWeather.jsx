import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clear from "../images/clear.png";
import clouds from "../images/clouds.png";
import drizzle from "../images/drizzle.png";
import errorImage from "../images/error.png";
import mist from "../images/mist.png";
import rain from "../images/rain.png";
import snow from "../images/snow.png";
import wind from "../images/wind.png";
import humidity from "../images/humidity.png";

function ViewWeather({ weatherData, error }) {
  const [img, setImg] = useState({ name: "", alt: "" });

  useEffect(() => {
    if (!weatherData) return;

    switch (weatherData.weather[0].main) {
      case "Clear":
        setImg({ name: clear, alt: "Sun" });
        break;
      case "Clouds":
        setImg({ name: clouds, alt: "Few Clouds" });
        break;
      case "Drizzle":
        setImg({ name: drizzle, alt: "Drizzle" });
        break;
      case "Rain":
      case "Thunderstorm":
        setImg({ name: rain, alt: "Rain" });
        break;
      case "Snow":
        setImg({ name: snow, alt: "Snow" });
        break;
      case "Mist":
      case "Smoke":
      case "Haze":
      case "Dust":
      case "Fog":
      case "Sand":
      case "Ash":
      case "Squall":
      case "Tornado":
        setImg({ name: mist, alt: "Mist" });
        break;
      default:
        console.log("Descrição do clima não reconhecida.");
    }
  }, [weatherData]);

  return (
    <div>
      <AnimatePresence mode="wait">
        {weatherData && (
          <motion.div
            key="weather"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center"
          >
            <div>
              <img src={img.name} alt={img.alt} />
            </div>
            <div className="flex">
              <div className="text-5xl text-white font-bold">
                {Math.round(weatherData.main.temp - 273.15)}
              </div>
              <div className="font-bold text-white text-3xl">ºC</div>
            </div>
            <div className="text-4xl text-white font-semibold mt-1">
              {weatherData.weather[0].description.charAt(0).toUpperCase() + weatherData.weather[0].description.slice(1)}
            </div>
            <div className="flex justify-between mt-14 w-[360px] mb-6">
              <div className="flex items-center gap-2 text-white font-semibold text-lg">
                <div className="w-[55px]">
                  <img src={humidity} alt="Humidity" />
                </div>
                <div className="flex flex-col">
                  <span>{`${weatherData.main.humidity}%`}</span>
                  <span>Humidity</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-white font-semibold text-lg">
                <div className="w-[55px]">
                  <img src={wind} alt="Humidity" />
                </div>
                <div className="flex flex-col">
                  <span>{`${Math.round(weatherData.wind.speed)}Km/h`}</span>
                  <span>Wind Speed</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        {error && (
          <motion.div
            key="error"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="w-82 mt-11 text-white font-semibold flex flex-col items-center justify-center gap-3 text-2xl"
          >
            <img src={errorImage} alt="error image" />
            <p>Error! Location not found!</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ViewWeather;
