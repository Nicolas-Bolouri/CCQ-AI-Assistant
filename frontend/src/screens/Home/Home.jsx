import React, { useState } from "react";
import "./Home.css";
import { SquareLoader } from "react-spinners";
import translations from "../../assets/translations";

const Home = ({ language, toggleCurrentLanguage }) => {
  const [generalQuestion, setGeneralQuestion] = useState("");
  const [specificQuestion, setSpecificQuestion] = useState("");
  const [generalAnswer, setGeneralAnswer] = useState("");
  const [specificAnswer, setSpecificAnswer] = useState("");
  const [generalIsLoading, setGeneralIsLoading] = useState(false);
  const [specificIsLoading, setSpecificIsLoading] = useState(false);

  const postQuestion = async (question, endpoint) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_KEY}${endpoint}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: question,
          language: language,
        }),
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  };

  const handleGeneralSubmit = async () => {
    setGeneralIsLoading(true);
    try {
      const data = await postQuestion(generalQuestion, "general");
      setGeneralAnswer(data);
    } catch (error) {
      setGeneralAnswer("Error retrieving the answer. Please try again later.");
      console.error(
        "There was an error with the general question submission:",
        error
      );
    }
    setGeneralIsLoading(false);
  };

  const handleSpecificSubmit = async () => {
    setSpecificIsLoading(true);
    try {
      const data = await postQuestion(specificQuestion, "general");
      console.log(data);
      setSpecificAnswer(data);
    } catch (error) {
      setSpecificAnswer("Error retrieving the answer. Please try again later.");
      console.error(
        "There was an error with the specific question submission:",
        error
      );
    }
    setSpecificIsLoading(false);
  };

  return (
    <div className="home-screen">
      <div className="title-section">
        <h1>{translations[language].title}</h1>
        <p>{translations[language].description}</p>
      </div>
      <div className="language-toggle">
        <button onClick={toggleCurrentLanguage}>
          {translations[language].switchTo}
        </button>
        <p>{translations[language].currentLanguage}</p>
      </div>
      <div className="text-area-section">
        <div className="text-area-container">
          <h2>{translations[language].generalQuestions}</h2>
          <textarea
            placeholder={translations[language].askGeneralQuestion}
            value={generalQuestion}
            onChange={(e) => setGeneralQuestion(e.target.value)}
          />

          {generalIsLoading ? (
            <>
              <SquareLoader color="#007bff" />
              <p>Answer coming in soon...</p>
            </>
          ) : (
            <>
              <button onClick={handleGeneralSubmit}>
                {translations[language].submit}
              </button>{" "}
              <p>{generalAnswer}</p>
            </>
          )}
        </div>

        <div className="text-area-container">
          <h2>{translations[language].specificQuestions}</h2>
          <textarea
            placeholder={translations[language].askSpecificQuestion}
            value={specificQuestion}
            onChange={(e) => setSpecificQuestion(e.target.value)}
          />

          {specificIsLoading ? (
            <>
              <SquareLoader color="#007bff" />
              <p>Answer coming in soon...</p>
            </>
          ) : (
            <>
              <button onClick={handleSpecificSubmit}>
                {translations[language].submit}
              </button>
              <p>{specificAnswer}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
