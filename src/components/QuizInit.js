import React from "react";
import { TweenMax, Linear } from "gsap";

const QuizInit = ({ startQuiz }) => {
  const initQuiz = () => {
    TweenMax.to(".quiz-init", 0.1, { display: "none" });
    TweenMax.to(".quiz-container", 0, { visibility: "visible", delay: 0.3 });
    startQuiz();
  };
  const handleClick = () => {
    TweenMax.to(".quiz-init", 0.5, {
      left: -10000,
      ease: Linear.easeOut,
      onComplete: initQuiz
    });
  };

  return (
    <div className="quiz-init">
      <h2>End the Debate!</h2>
      <p>
        At loggerheads over celebrity life status? Want to settle the arguments
        for good? We’ve gathered information on some of today's most influential
        celebrities so you don't have to. Test your celebrity knowledge now!
      </p>
      <button onClick={handleClick}>Start Quiz!</button>
    </div>
  );
};

export default QuizInit;
