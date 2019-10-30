import React, { useEffect } from "react";
import Nav from "./Nav";
import QuizCard from "./QuizCard";
import QuizInit from "./QuizInit";

const Quiz = ({ state, history, getCelebs, startQuiz, captureResponse }) => {
  useEffect(() => {
    if (!state.celebrities) getCelebs();
  }, [getCelebs, state.celebrities]);

  const parseCelebs = (arr, count) => {
    var shuffled = arr.slice(0),
      i = arr.length,
      min = i - count,
      temp,
      index;
    while (i-- > min) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
    }
    return shuffled.slice(min);
  };

  return (
    <div>
      <Nav history={history} />
      <QuizInit startQuiz={startQuiz} />
      <div className="quiz-container">
        {state.celebrities &&
          parseCelebs(state.celebrities, 5).map(celeb => (
            <QuizCard
              key={celeb.id}
              name={celeb.name}
              info={celeb.info}
              imageURL={celeb.image_url}
              isDead={celeb.isDead}
              captureResponse={captureResponse}
            />
          ))}
      </div>
    </div>
  );
};

export default Quiz;
