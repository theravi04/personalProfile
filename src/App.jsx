import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Import Sun and Moon icons
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";

function App() {
  const [darkMode, setDarkMode] = useState(true); // State to toggle dark/light mode

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? "bg-black text-white" : "bg-white text-black"} flex flex-col md:flex-row h-screen w-full font-['Inconsolata']`}>
      {/* Theme Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className="absolute top-2 right-6 p-2 rounded-full bg-gray-300 dark:bg-gray-700 transition-colors duration-300"
      >
        {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-500" />}
      </button>

      {/* Left Sidebar */}
      <div className="w-full md:w-1/2 md:fixed h-full">
        <LeftSidebar />
      </div>
      
      {/* Right Sidebar */}
      <div className="w-full md:w-1/2 ml-0 md:ml-[50%] overflow-y-auto p-6">
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
