import React, { useState } from "react";
import { Link } from "react-router-dom";

const QuizAsilbek = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const quizQuestions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      correctAnswer: "Paris",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png"
    },
    {
      question: "What is the capital of Germany?",
      options: ["Paris", "London", "Berlin", "Rome"],
      correctAnswer: "Berlin",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png"
    },
    {
      question: "What is the capital of England?",
      options: ["Paris", "London", "Berlin", "Rome"],
      correctAnswer: "London",
      image: "https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.svg"
    },
    {
      question: "What is the capital of Italy?",
      options: ["Paris", "London", "Berlin", "Rome"],
      correctAnswer: "Rome",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg"
    },
    {
      question: "What is the capital of Uzbekistan?",
      options: ["Tashkent", "London", "Berlin", "Rome"],
      correctAnswer: "Tashkent",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1280px-Flag_of_Uzbekistan.svg.png"
    },
    {
      question: "What is the capital of USA?",
      options: ["Paris", "London", "Berlin", "Washington"],
      correctAnswer: "Washington",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg"
    },
    {
      question: "What is the capital of Russia?",
      options: ["Paris", "Moscow", "Berlin", "Rome"],
      correctAnswer: "Moscow",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg"
    },
    {
      question: "What is the capital of Turkey?",
      options: ["Paris", "London", "Ankara", "Rome"],
      correctAnswer: "Ankara",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/1200px-Flag_of_Turkey.svg.png"
    },
    {
      question: "What is the capital of Korea?",
      options: ["Seoul", "London", "Berlin", "Rome"],
      correctAnswer: "Seoul",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/1200px-Flag_of_South_Korea.svg.png"
    },
    {
      question: "What is the capital of Mongolia?",
      options: ["Paris", "Ulaanbaatar", "Berlin", "Rome"],
      correctAnswer: "Ulaanbaatar",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Mongolia.svg/1200px-Flag_of_Mongolia.svg.png"
    },
  ];

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setAnswers([...answers, selectedAnswer]);
    setCurrentQuestion(currentQuestion + 1);
  };


  return (
    <div className="max-w-xl mx-auto">
      {currentQuestion < quizQuestions.length ? (
        <div>
          <p className="text-xl">{score}/10</p>
          <h2 className="text-2xl font-bold mb-4">
            {quizQuestions[currentQuestion].question}
          </h2>

          <div className="mb-4">
            <img
              src={quizQuestions[currentQuestion].image}
              alt="Question"
              className="w-full max-w-[580px] h-[300px]"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center flex-col m-20">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Quiz Completed!
          </h2>
          <p className="text-3xl text-center">You have completed the quiz.</p>
          <p className="text-3xl text-center">Congratulations</p>
          <p className="text-green-500 text-center text-2xl mt-3">Your Score: {score}/10</p>
        </div>
      )}
    </div>
  );
};

export default QuizAsilbek;
