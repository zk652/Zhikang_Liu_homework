import { useState } from "react";

const questionBank = [
  {
    id: 1,
    question: "What is the capital of France?",
    choices: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    id: 2,
    question: "How many colors are there in a rainbow?",
    choices: [5, 7, 9, 6],
    answer: 7,
  },
  {
    id: 3,
    question: "Which planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    id: 4,
    question: "What is the main gas found in the air we breathe?",
    choices: ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"],
    answer: "Nitrogen",
  },
  {
    id: 5,
    question: "What year did the Titanic sink?",
    choices: [1912, 1905, 1898, 1923],
    answer: 1912,
  },
];

export default function QuizApp() {
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(1);
  const [selectedChoice, setSelectedChoice] = useState<string | number>("");

  const [score, setScore] = useState<number>(0);
  const [finished, setFinished] = useState<boolean>(false);

  const currentQuestion = questionBank[currentQuestionNumber - 1];

  const handleSelect = (choice: string | number) => {
    setSelectedChoice(choice);
  };

  const handleNext = () => {
    if (selectedChoice === currentQuestion.answer) setScore((prev) => prev + 1);

    if (currentQuestionNumber < questionBank.length)
      setCurrentQuestionNumber((prev) => prev + 1);
    else setFinished(true);

    setSelectedChoice("");
  };

  return (
    <div>
      {currentQuestion && (
        <div>
          <h3>
            {currentQuestion.id}. {currentQuestion.question}
          </h3>
          {currentQuestion.choices.map((choice, index) => {
            return (
              <label key={index}>
                <input
                  type="radio"
                  checked={selectedChoice === choice}
                  onChange={() => handleSelect(choice)}
                  disabled={finished}
                />
                {choice}
              </label>
            );
          })}
          <br />
          <br />
          <button onClick={handleNext} disabled={selectedChoice === ""}>
            {currentQuestion.id === questionBank.length ? "Submit" : "Next"}
          </button>
        </div>
      )}
      {finished && (
        <p>
          Quiz Complete! Your scored {score} out of {questionBank.length}!
        </p>
      )}
    </div>
  );
}
