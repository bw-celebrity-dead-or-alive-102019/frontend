import React from "react";

const QuizLink = ({ history }) => {
  const quizme = () => {
    history.push("/quizme");
  };

  return (
    <p className="quizlink" onClick={quizme}>
      Quiz
    </p>
  );
};

export default QuizLink;
