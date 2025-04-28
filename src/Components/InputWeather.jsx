import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";

function InputWeather({ setCity }) {
  const [value, setValue] = useState("");
  
  const handleCity = (e) => {
    setValue(e.target.value.trimStart().toLowerCase())
  };

  const sendCity = () => {
    setCity(value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendCity();
    }
  };

  return (
    <div className="border-[rgba(255,255,255,0.22)] flex justify-between text-2xl rounded-lg p-1 text-white border-2 w-full max-w-sm">
      <div className="flex items-center flex-1">
        <div className="p-2 text-2xl">
          <FaLocationDot />
        </div>
        <input
          type="text"
          className="w-full font-medium focus:outline-none focus:border-none focus:ring-0 placeholder-white placeholder-opacity-100"
          placeholder="Enter Your Location"
          onChange={(e) => handleCity(e)}
          onKeyDown={(e) => handleKeyPress(e)}
        />
      </div>
      <button onClick={sendCity} className="cursor-pointer p-2 hover:text-gray-300">
        <FaMagnifyingGlass />
      </button>
    </div>
  );
}

export default InputWeather;
