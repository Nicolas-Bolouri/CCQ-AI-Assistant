import React from "react";
import Home from "./screens/Home/Home";

const App = () => {
  const LANGUAGE_STORAGE_KEY = "language";
  let currentLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (!currentLanguage) {
    currentLanguage = "en";
    localStorage.setItem(LANGUAGE_STORAGE_KEY, "en");
  }

  const toggleCurrentLanguage = () => {
    currentLanguage = currentLanguage === "en" ? "fr" : "en";
    localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLanguage);
    window.location.reload();
  };

  return (
    <Home
      language={currentLanguage}
      toggleCurrentLanguage={toggleCurrentLanguage}
    />
  );
};

export default App;
