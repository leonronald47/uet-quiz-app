import React, { useEffect, useState } from "react";
import data from "./data.js";

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageArr, setPageArr] = useState([]);
  const [questions, setQuestions] = useState(data);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [isShowAnswer, setIsShowAnswer] = useState(false);

  const handleClickPage = (e) => {
    if (e.target.innerText === "All") {
      setCurrentPage(0);
      setQuestions(data);
      setCurrentQuestion(0);
      setShowScore(false);
      setScore(0);
    } else {
      let page = Number(e.target.innerText);
      setCurrentPage(page);
      setQuestions(data.slice(10 * page - 10, 10 * page));
      setCurrentQuestion(0);
      setShowScore(false);
      setScore(0);
    }
  };

  useEffect(() => {
    const page = Math.ceil(data.length / 10);

    let temp = [];

    for (let i = 1; i <= page; i++) {
      temp.push(i);
      console.log(pageArr.length);
    }
    setPageArr(temp);
    setQuestions(data.slice(10 * currentPage - 10, 10 * currentPage));
  }, []);
  const handleAnswerOptionClick = (e, isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (!isShowAnswer) setIsShowAnswer(true);
    setTimeout(() => {
      setIsShowAnswer(false);
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    }, 1000);
  };
  return (
    <>
      <div className="page-wrapper">
        <button onClick={handleClickPage}>All</button>
        {pageArr.map((page) => (
          <button className="page-btn" onClick={handleClickPage}>
            {page}
          </button>
        ))}
      </div>
      <div className="app">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <div>Page {currentPage}</div>
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => {
                if (answerOption.isCorrect) {
                }
                return (
                  <button
                    style={
                      isShowAnswer && answerOption.isCorrect
                        ? { backgroundColor: "green" }
                        : {}
                    }
                    onClick={(e) =>
                      handleAnswerOptionClick(e, answerOption.isCorrect)
                    }
                  >
                    {answerOption.answerText}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
}
